module.exports = {
    name: "deposit",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:
    {title:
    Successfully deposited FrameCoin to your bank ✅
    }
    
    {description:
    Deposit FrameCoin
    
    Status: Completed ✅
    User: <@$authorID>
    Total FrameCoin: $get[amount]
    }
    
    {field:Wallet:
    $getGlobalUserVar[wallet] FrameCoin
    :true}
    
    {field:Bank:
    $getGlobalUserVar[bank] FrameCoin
    }
    
    {color:$getVar[colorgreen]}{timestamp}
    }]

    $setGlobalUserVar[wallet;$get[deposit]]
    $setGlobalUserVar[bank;$get[withdraw]]
    
    $let[deposit;$math[$getGlobalUserVar[wallet] - $get[amount]]]
    $let[withdraw;$math[$getGlobalUserVar[bank] + $get[amount]]]
    
    $cooldown[2m;{newEmbed:
    {title:
    Try again later ⏳
    }

    {description:
    Please wait %time% to use this command again
    }

    {color:$getVar[color]}{timestamp}
    }

    {interaction}

    ]

    $onlyIf[$getGlobalUserVar[wallet]>=$get[amount];{newEmbed:
    {title:Failed ❌}
    {description:You doesn't have enough money to deposit to your bank}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]

    $let[amount;$slashOption[amount]]
  `,
};
