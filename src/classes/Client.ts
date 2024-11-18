import {Collection, Client as DiscordClient,IntentsBitField} from 'discord.js';
import type Command from './Command';
import { readdirSync } from 'node:fs';

export default class Client extends DiscordClient {

    public commands: Collection<string,Command>; 

    public constructor(){
        super({intents:[IntentsBitField.Flags.Guilds]})
        
        this.commands = new Collection();
    }

    public start(token: string){
        this.login(token);
        this.once("ready", () => {
            const files = readdirSync("src/commands");
            files.forEach((file) => {
                const command: Command = require(`../commands/${file}`).default;
                this.commands.set(command.data.name,command);
            })
            this.application?.commands.set(this.commands.map((c) => c.data))
        });
    }

}