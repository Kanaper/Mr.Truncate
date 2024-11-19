import { SlashCommandBuilder } from "discord.js";
import Command from "../classes/Command";


export default new Command(new SlashCommandBuilder().setName("trunc").setDescription("Choose a number between 1 and 100 and i will trunc this amount of messages for you !"),
 (slash) => {-

    slash.reply(`Truncating messages...`);
    
})