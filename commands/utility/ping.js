module.exports = {
    name: "ping",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:{title:Pong! 🏓}{description:Latelancy: $pingMS}{color:$getVar[color]}}]
  `,
};
