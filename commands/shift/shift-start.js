module.exports = {
    name: "shift-start",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
    {newEmbed:{title:Shift Started ✅}
    {description:
    **User:** <@$authorID>
    **Start:** <t:$truncate[$divide[$getGlobalUserVar[shiftStart;$authorID];1000]]:f>

    *have a good day 😊*
    }
    {color:$getVar[color]}
    {timestamp}}
    ]

    $setGlobalUserVar[shiftStart;$dateStamp;$authorID]
    $setGlobalUserVar[isShift;true;$authorID]
    
    $onlyIf[$getGlobalUserVar[isShift;$authorID]==false;{newEmbed:
    {title:Error ❌}
    {description:You already on a shift}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]
  `,
};
