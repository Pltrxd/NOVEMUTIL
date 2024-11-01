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
{image:https://media.discordapp.net/attachments/1247554095099678762/1248244095491510353/FrameworkBanner.png?ex=6662f567&is=6661a3e7&hm=61819380ac6af901ac4cf4dcd3b55f9c795be51f328e128fb548600bf7e31431&=&format=webp&quality=lossless&width=917&height=323}
{thumbnail:https://media.discordapp.net/attachments/1247554095099678762/1248244096133369928/FrameworkLogoBG.png?ex=6662f567&is=6661a3e7&hm=3b96c3b969cd7380e0ee340bf6ac78285a90b13cb6d44623fc329722ce7f1e83&=&format=webp&quality=lossless&width=656&height=656}
{footer:Framework $getVar[version]}
    {color:$getVar[color]}{timestamp}
    }]
  `,
};
