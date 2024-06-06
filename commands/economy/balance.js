module.exports = {
    name: "balance",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:
    {title:
    $username[$get[option]]'s Balance 💵
    }
    
    {description:
    Total FrameCoin: $get[total]
    }
    
    {field:Wallet:
    $getGlobalUserVar[wallet;$get[option]] FrameCoin
    :true}
    
    {field:Bank:
    $getGlobalUserVar[bank;$get[option]] FrameCoin
    }
    
    {color:$getVar[color]}{timestamp}
    }]
$let[total;$math[$getGlobalUserVar[wallet;$get[option]]+$getGlobalUserVar[bank;$get[option]]]]
$let[option;$replaceText[$replaceText[$checkCondition[$slashOption[user]==];true;$authorID];false;$slashOption[user]]]
  `,
};
