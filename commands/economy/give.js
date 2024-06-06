module.exports = {
    name: "give",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:
    {title:Accept send? 📩
    }

    {description:
    Status: Pending ⏳
    Amount: $get[amount] FrameCoin
    From: <@$authorID>
    To: <@$get[target]>
    }

    {color:$getVar[color]}}
    {actionRow:
    {button:Accept:success:accept:false:📩}                      {button:Cancel:danger:cancel:false:❎}}
    ]

    $onlyIf[$getGlobalUserVar[wallet]>=$get[amount];{newEmbed:
    {title:Failed ❌}
    {description:You don't have enough FrameCoin in your wallet}
    {color:$getVar[color]}
    }
    {interaction}
    ]
    
    $onlyIf[$get[target]!=$authorID;{newEmbed:
    {title:Failed ❌}
    {description:You can't give to yourself}
    {color:$getVar[color]}
    }
    {interaction}
    ]

    $onlyIf[$isBot[$get[target]]==false;{newEmbed:
    {title:Failed ❌}
    {description:You can't give to a bot}
    {color:$getVar[color]}
    }
    {interaction}
    ]
    
    $let[amount;$slashOption[amount]]
    $let[target;$slashOption[user]]
  `,
}, {
    name: "accept",
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:
    {title:Sent 📩
    }

    {description:
    Status: Completed ✅
    Amount: $get[amount] FrameCoin
    From: <@$authorID>
    To: <@$get[target]>
    }

    {color:$getVar[color]}}
    {actionRow:
    {button:Accept:success:accept:true:📩}                        {button:Cancel:danger:cancel:true:❎}}
    ]
    
    $onlyIf[$getGlobalUserVar[wallet]>=$get[amount];{newEmbed:
    {title:Failed ❌}
    {description:You don't have enough FrameCoin in your wallet}
    {color:$getVar[color]}
    }
    {interaction}
    ]
    `
};