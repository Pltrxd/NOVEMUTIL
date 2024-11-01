module.exports = {
    name: "reset-shift",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
        {newEmbed:{title:Shift Reset ✅}
        {description:
        **User:** <@$get[target]>
        }
        {color:$getVar[color]}
        {timestamp}}
    ]

    $setGlobalUserVar[totalShift;0;$get[target]]

    $onlyIf[$get[target]!=$authorID;{newEmbed:
    {title:Failed ❌}
    {description:You can't give to yourself}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]

    $let[target;$slashOption[user]]

    $onlyForIDs[$clientOwnerIds;976476518186381332;
    {newEmbed:
    {title:Failed ❌}
    {description:You doesn't have access for this command}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]
  `,
};