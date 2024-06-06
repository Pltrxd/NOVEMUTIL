module.exports = {
    name: "withdraw",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:
    {title:
    Successfully withdrawed FrameCoin to your wallet ✅
    }
    
    {description:
    Withdraw FrameCoin
    
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
    
    $let[deposit;$math[$getGlobalUserVar[wallet] + $get[amount]]]
    $let[withdraw;$math[$getGlobalUserVar[bank] - $get[amount]]]
    
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

    $onlyIf[$getGlobalUserVar[bank]>=$get[amount];{newEmbed:
    {title:Failed ❌}
    {description:You doesn't have enough money to withdraw to your wallet}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]

    $let[amount;$slashOption[amount]]
  `,
};
