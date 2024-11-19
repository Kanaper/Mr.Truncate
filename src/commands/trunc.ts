import {
  PermissionFlagsBits,
  SlashCommandBuilder,
  TextChannel,
} from "discord.js";
import Command from "../classes/Command";

export default new Command(
  new SlashCommandBuilder()
    .setName("trunc")
    .setDescription(
      "Choose a number between 1 and 100 and i will trunc this amount of messages for you !"
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("Amount of messages to trunc")
        .setRequired(true)
    ) as SlashCommandBuilder,
  async (slash) => {
    try {
      const amount = slash.options.getInteger("amount", true);
      await (slash.channel as TextChannel).bulkDelete(amount);
      await slash.reply({
        content: `Truncating ${amount} messages...`,
        ephemeral: true,
      });
    } catch (error) {
      slash.reply({
        content:
          "Message truncation failed ! Messages must be younger than 14 days !",
        ephemeral: true,
      });
    }
  }
);
