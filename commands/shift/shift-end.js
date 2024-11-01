module.exports = {
    name: "shift-end",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
    {newEmbed:{title:Shift Ended ✅}
    {description:
    **User:** <@$authorID>
    **Start:** <t:$truncate[$divide[$get[start];1000]]:f>
    **End:** <t:$truncate[$divide[$getGlobalUserVar[shiftEnd;$authorID];1000]]:f>
    **Duration:** $humanizeMS[$get[shiftDuration]]

    *thank you, keep the fire! 🔥*
    }
    {color:$getVar[color]}
    {timestamp}}
    ]

    $setGlobalUserVar[totalShift;$sum[$getGlobalUserVar[totalShift;$authorID];$get[shiftDuration]];$authorID]
    $setGlobalUserVar[shiftStart;0;$authorID]
    $setGlobalUserVar[shiftEnd;$dateStamp;$authorID]
    $setGlobalUserVar[isShift;false;$authorID]

    $let[shiftDuration;$sub[$dateStamp;$get[start]]]
    $let[start;$getGlobalUserVar[shiftStart;$authorID]]
    
    $onlyIf[$getGlobalUserVar[isShift;$authorID]==true;{newEmbed:
    {title:Error ❌}
    {description:You are not on a shift}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]
  `,
};
