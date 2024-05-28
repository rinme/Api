import { Client, GatewayIntentBits } from "discord.js";
import { app } from "./route";
require("dotenv").config();

export const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.once("ready", () => {
  console.log("🦊 Discord is ready!");
});

client.login(process.env.DTOKEN);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
