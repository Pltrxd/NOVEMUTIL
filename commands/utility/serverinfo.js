module.exports = {
    name: "serverinfo",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:{title:Server Information 📊}           {description:
    Name: $guildName
    ID: $guildID
    Created at: $creationDate[$guildID]
    Owner: <@$guildOwnerID>
    }
    {field:Members:
    Total#COLON# $membersCount
    Humans#COLON# $membersCount[$guildID;all;false]
    Bots#COLON# $guildBotCount
    :true}
    
    {field:Channels:
    Total#COLON# $channelCount[$guildID]
    Text#COLON# $channelCount[$guildID;Text]
    Voice#COLON# $channelCount[$guildID;Voice]
    :true}

    {field:Boost:
    Level#COLON# $guildBoostLevel
    Count#COLON# $guildBoostCount
    :true}
    
    {thumbnail:$guildIcon}
    {field:Role List:$guildRoles:false}
    {color:$getVar[color]}}]
  `,
};
