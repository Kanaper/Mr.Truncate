import Client from "./classes/Client";

const client = new Client();
client.start(Bun.env.TOKEN!);

client.on('ready', () => {
  console.log('Bot is ready');
});
