module.exports = {
    name: "total-shift",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
    {newEmbed:{title:Total Shift 💼}
    {description:
    **User:** <@$get[target]>
    **Duration:** $humanizeMS[$getGlobalUserVar[totalShift;$get[target]]]
    }
    {color:$getVar[color]}
    {timestamp}}
    ]

    $let[target;$slashOption[user]]
  `,
};