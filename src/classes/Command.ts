import { ChatInputCommandInteraction, SlashCommandBuilder} from "discord.js";

export default class Command{

    public constructor(public data: SlashCommandBuilder, public exec: (interaction: ChatInputCommandInteraction) => any){
        
    }
}