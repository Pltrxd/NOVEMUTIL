const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: process.env["TOKEN"],
  prefix: "nn!",
  intents: [
    "MessageContent",
    "Guilds",
    "GuildMessages",
    "GuildMembers",
    "GuildPresences",
    "GuildVoiceStates",
  ],
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
  version: "1.0.0",
  color: "#0000FF",
  colorgreen: "#50C878",
  shiftStart: 0,
  shiftEnd: 0,
  totalShift: 0,
  isShift: false,
  foreachuserdata: "",
  wallet: 0,
  bank: 0,
  activeShift: [],
});

client.status({
  name: "Novem",
  type: "WATCHING",
  time: 12,
});

client.functionManager.createFunction({
    name: "$globalUsersWithVarValue",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [variable, checkValue, returnType = "username", seperator = ", ", table = d.client.db.tables[0]] = data.inside.splits;
        if (!d.client.variableManager.has(variable, table)) return d.aoiError.fnError(d, "custom", {}, `Variable "${variable}" Not Found`);
        const result = [];
        let db = await d.client.db.all(table, (data) => {
            return data.key.startsWith(variable.addBrackets() + "_") && data.key.split("_").length === 2;
        });
        for (const lbdata of db) {
            if (lbdata.value != checkValue) continue;
            const key = lbdata.key.split("_")[1];
            let user = await d.util.getUser(d, key);
            if (!user) continue;
            switch (returnType) {
                case "username":
                    user = user.username;
                    break;
                case "displayName":
                    user = user?.displayName;
                    break;
                case "tag":
                    user = user?.tag;
                    break;
                case "id":
                    user = user.id;
                    break;
                case "mention":
                    user = user;
                    break;
                default:
                    return d.aoiError.fnError(
                        d,
                        "custom",
                        {
                            inside: data.inside
                        },
                        `Invalid ReturnType Provided In`
                    );
            }
            result.push(user);
        }
        data.result = result.join(seperator);
        return {
            code: d.util.setCode(data)
        };
    }
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands");
