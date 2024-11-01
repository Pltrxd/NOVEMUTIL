module.exports = {
    name: "notice",
    $if: "old",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[
        {newEmbed:{title:Notice Sent ✅}
        {description:
        **User:** <@$get[target]>
        **Notice:** $get[msg]
        }
        {color:$getVar[color]}
        {timestamp}}
        ]

    $sendDm[
        {newEmbed:{title:Message 📩}
        {description:
$if[1==2]
Novem
$elseif[$slashOption[notice]==inactivity]
$texttrim[
**Inactivity Notice**

Dear Novem staff member,

I hope this message finds you well. We have noticed that you have been inactive on the Discord server for a long time and wanted to reach out to check in.

**Importance of Active Participation:**
Active participation on the server is crucial for effective communication and collaboration within the team. Your contributions and presence are highly valued, and your absence has been felt.

**Possible Concerns:**
We understand that there might be personal or professional reasons for your inactivity. If there is anything we can assist with or if you are facing any challenges, please let us know.

**Next Steps:**
- Please update us on your current situation and let us know if you plan to return to active participation soon.
- If you have a specific reason for your inactivity, please request a leave of absence in [LOA Request](https://discord.com/channels/1224728682208166020/1261995567274524714).
- Note that you have been assigned the inactivity role due to your absence.

**Impact on Projects and Tasks:**
If your inactivity continues, it may affect ongoing projects and tasks that require your input. We need to ensure that all team members are aligned and that work progresses smoothly.

**Deadline for Response:**
We request you to get active and participate in server activities and get more active and fulfill your quota.

We value your presence on the team and hope to resolve this matter positively. Your cooperation and timely response are appreciated.

Best regards,

Team Novem]
$endelseif
$elseif[$slashOption[notice]==termination]
$texttrim[
Dear Novem Employee,

Subject: Termination of Employment

We regret to inform you that, effective immediately, your employment with Novem is terminated.

We understand that this may come as a disappointment to you. Still, please be aware that this decision was made after careful consideration and in the best interests of the company.

We wish you the best in your future endeavors.

Please keep this matter confidential.

Sincerely,
Novem HR]
$endelseif
$elseif[$slashOption[notice]==partner]
$texttrim[
Dear server owner,

Subject: Partnership Notice

We are excited to announce that, effective immediately, Novem has entered into a partnership with your server. 

We believe this collaboration will bring significant benefits to both parties and enhance our mutual goals. Our team is looking forward to working closely with you to achieve shared success.

Thank you for your cooperation and support.

Sincerely,
Team Novem]
$endelseif
$elseif[$slashOption[notice]==staffacceptance]
$texttrim[
**Novem Tech**
Application Results

Hello there,

We are thrilled to share the exciting news that your application to join our esteemed team at Novem Tech has been successful! On behalf of our entire staff, we extend a heartfelt welcome and invite you to embark on this journey with us as a valued member of our dedicated team.

Please take the next steps to join our [Staff server](https://discord.gg/tXVTktRW6z) and [Roblox group](https://www.roblox.com/groups/33991372/Aadhis-Studio#!/about) and we will guide you through the onboarding process to ensure a seamless transition into your new role.
Information about channels and more

**Guides**
- [Staff rules](https://discord.com/channels/1190587163700625508/1258469192206651503)
- [ Staff information](https://discord.com/channels/1190587163700625508/1262799012986359950)
- [Staff Guidelines](https://discord.com/channels/1190587163700625508/1233461779825168535)
.................................

**General**
- [Staff chat](https://discord.com/channels/1190587163700625508/1233444464589017129)
- [Staff Bot CMDS](https://discord.com/channels/1190587163700625508/1233444534411858012)
- [Auto Mod](https://discord.com/channels/1190587163700625508/1233525157814079571)
- [Staff Announcement]( https://discord.com/channels/1190587163700625508/1233444391377436792)
.................................

**Logging**
- [Partnerships](https://discord.com/channels/1224728682208166020/1254411470498824325)
- [Ads Logging](https://discord.com/channels/1224728682208166020/1254411739802505257)
- [Tickets Logging](https://discord.com/channels/1224728682208166020/1254411615143460905)
- [Customer Logging](https://discord.com/channels/1224728682208166020/1254411354958332004)

**Other**
- [Request Leave Of Absence](https://discord.com/channels/1224728682208166020/1261995567274524714)
- [Leave Of Absence](https://discord.com/channels/1224728682208166020/1255381050939670660)
- [Pay Request](https://discord.com/channels/1224728682208166020/1258115767644454983)

If your accepted into the team as engineer please post your details as well as post your porfolio in [developer details](https://discord.com/channels/1224728682208166020/1257688233152876646) 

If your an associate please ping thr training instructor in staff chat. 
**Regards**

Team Novem]
$endelseif
$elseif[$slashOption[notice]==staffrejection]
$texttrim[
Novem Tech
Application Results

Hello there,

Thank you for your interest in joining our esteemed team at Novem Tech. After careful consideration, we regret to inform you that your application has not been successful at this time. We appreciate the effort you put into your application and encourage you to apply again in the future.

If you have any questions or would like feedback on your application, please feel free to reach out to us.

Regards,

Team Novem]
$endelseif
$endif

        Sent from $guildName[$guildID]
        }
        {color:$getVar[color]}
        {timestamp}}
        ;$get[target];false
    ]

    $onlyIf[$isBot[$get[target]]==false;{newEmbed:
    {title:Failed ❌}
    {description:You can't give to a bot}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]

    $onlyForIDs[$clientOwnerIds;976476518186381332;
    {newEmbed:
    {title:Failed ❌}
    {description:You doesn't have access for this command}
    {color:$getVar[color]}{timestamp}
    }
    {interaction}
    ]

    $let[target;$slashOption[user]]
    $let[msg;$slashOption[notice]]
  `,
};