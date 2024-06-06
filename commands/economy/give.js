module.exports = {
    name: "give",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:
    {title:Sent $abbreviate[$get[amount];1] FrameCoin 📩
    }

    {description:
    Give FrameCoin
    
    Status: Completed ✅
    Amount: $get[amount] FrameCoin
    From: <@$authorID>
    To: <@$get[target]>
    }

    {color:$getVar[colorgreen]}{timestamp}}
    ]

    $setGlobalUserVar[wallet;$math[$getGlobalUserVar[wallet]-$get[amount]];$authorID]

    $setGlobalUserVar[wallet;$math[$getGlobalUserVar[wallet;$get[target]]+$get[amount]];$get[target]]
    
    $onlyIf[$getGlobalUserVar[wallet]>=$get[amount];{newEmbed:
    {title:Failed ❌}
    {description:You don't have enough FrameCoin in your wallet}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]
    
    $onlyIf[$get[target]!=$authorID;{newEmbed:
    {title:Failed ❌}
    {description:You can't give to yourself}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]

    $onlyIf[$isBot[$get[target]]==false;{newEmbed:
    {title:Failed ❌}
    {description:You can't give to a bot}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]
    
    $let[amount;$slashOption[amount]]
    $let[target;$slashOption[user]]
  `,
};