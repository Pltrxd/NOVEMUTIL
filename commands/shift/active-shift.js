module.exports = {
    name: "active-shift",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
    {newEmbed:{title:Active Shift 📚}
    {description:
    $globalUsersWithVarValue[isShift;true;username;, ;main]
    }
    {color:$getVar[color]}
    {timestamp}}
    ]
  `,
};