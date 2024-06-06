module.exports = {
    name: "help",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:{title:Help 🧰}{description:Framework is a powerful discord bot for every needs for your server.}
    {field:Utility:
    /help - View list of all available commands
    /ping - Return bot latelancy
    /serverinfo - Get detailed information about the server
    /userinfo - Get detailed information about an user
    :false}
    {field:Economy:
    /balance - Get an user balance
    /work - Earn some FrameCoin by working as random job
    /give - Give your FrameCoin to another user
    /deposit - Deposit your FrameCoin from wallet to bank
    /withdraw - Withdraw your FrameCoin from bank to wallet
    :false}
    {color:$getVar[color]}{timestamp}
    }]
  `,
};
