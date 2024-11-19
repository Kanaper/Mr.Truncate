import { Events } from "discord.js";
import Client from "./classes/Client";

const client = new Client();
client.start(Bun.env.TOKEN!);

client.on('ready', () => {
  console.log('Bot is ready');
});

client.on(Events.InteractionCreate, interaction => {
  if (!interaction.isChatInputCommand()) return;
  client.commands.get(interaction.commandName)?.exec(interaction);
});
