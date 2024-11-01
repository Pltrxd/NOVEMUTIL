module.exports = {
    name: "reset-shift-all",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
        {newEmbed:{title:Shift Reset ✅}
        {description:
        **User:** ALL
        }
        {color:$getVar[color]}
        {timestamp}}
    ]

    $resetGlobalUserVar[totalShift]

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