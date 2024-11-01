module.exports = {
    name: "dm",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
    {newEmbed:{title:Message Sent ✅}
    {description:
    **User:** <@$get[target]>
    **Message:** $get[msg]
    }
    {color:$getVar[color]}
    {timestamp}}
    ]
    
    $sendDm[
    {newEmbed:{title:Message 📩}
    {description:
    $get[msg]
    
    Sent from $guildName[$guildID]
    }
    {color:$getVar[color]}
    {timestamp}}
    ;$get[target];false]

    $onlyIf[$isBot[$get[target]]==false;{newEmbed:
    {title:Failed ❌}
    {description:You can't give to a bot}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]
    
    $onlyForIDs[$clientOwnerIds;976476518186381332;
    {newEmbed:
    {title:Failed ❌}
    {description:You doesn't have access for this command}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]

    $let[target;$slashOption[user]]
    $let[msg;$slashOption[message]]
  `,
};