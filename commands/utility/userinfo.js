module.exports = {
    name: "userinfo",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:{title:User Information 📊}           {description:
    <@$get[option]>
    
    Display name: $userDisplayName[$get[option]]
    Username: $username[$get[option]]
    ID: $get[option]
    Status: $userStatus[$guildID;$get[option]]
    Platform: $userPlatform[$get[option]]
    Total Roles: $userRolesCount[$get[option]]
    User is bot?: $isBot[$get[option]]
    Boosting this server?: $isBoosting[$get[option]]
    } 
    {field:Joined:
    $parseDate[$memberJoinDate[$get[option]];$guildID]
    :true}
    
    {field:Registered:
    $creationDate[$get[option]]
    :true}

    {field:Roles:
    $userRoles[$get[option]]
    :false}
    
    {field:Permission:
    $userPerms[$get[option];, ;$guildID]
    :false}
    
    {thumbnail:$userAvatar[$get[option]]}
    {color:$getVar[color]}{timestamp}}]
    
$let[option;$replaceText[$replaceText[$checkCondition[$slashOption[user]==];true;$authorID];false;$slashOption[user]]]
  `,
};
