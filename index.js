const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: process.env["TOKEN"],
  prefix: "f!",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildPresences", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "0350619aef072c3905558ff3f821d531",
  },
});

client.variables({
  color: "#FF4646",
  colorgreen: "#50C878",
  wallet: 0,
  bank: 0
});

client.status({
  name: "$guildCount Servers 🧰",
  type: "WATCHING",
  time: 12,
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands");
