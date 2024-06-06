module.exports = {
    name: "work",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[{newEmbed:
    {title:
    Work 💼
    }
    
    {description:
    You work as a $randomText[teacher;engineer;doctor;nurse;police officer;firefighter;accountant;software developer;mechanic;electrician;plumber;carpenter;chef;waiter;bartender;cashier;customer service representative;salesperson;marketing manager;graphic designer;photographer;writer;journalist;editor;lawyer;paralegal;real estate agent;architect;civil engineer;dentist;pharmacist;veterinarian;pilot;flight attendant;bus driver;taxi driver;truck driver;warehouse worker;construction worker;welder;machinist;factory worker;scientist;researcher;laboratory technician;phlebotomist;social worker;therapist;psychologist;psychiatrist;personal trainer;fitness instructor;nutritionist;dietitian;hairdresser;barber;nail technician;beautician;fashion designer;interior designer;event planner;wedding planner;project manager;product manager;business analyst;financial analyst;investment banker;stockbroker;consultant;IT specialist;network administrator;systems analyst;data analyst;data scientist;biologist;chemist;physicist;environmental scientist;geologist;meteorologist;astronomer;teacher assistant;principal;school counselor;college professor;librarian;archivist;museum curator;tour guide;travel agent;hotel manager;housekeeper;janitor;security guard;personal assistant;executive assistant;office manager;receptionist;translator;interpreter;speech therapist;occupational therapist;physical therapist;massage therapist;chiropractor;optometrist;radiologist;anesthesiologist;surgical technician;emergency medical technician;paramedic;fire inspector;building inspector;urban planner;cartographer;surveyor;statistician;actuary;economist;sociologist;anthropologist;historian;archaeologist;political scientist;public relations specialist;advertising manager;art director;copywriter;web developer;mobile app developer;game developer;database administrator;cloud engineer;devops engineer;cybersecurity specialist;UX/UI designer;content creator;influencer;social media manager;podcaster;YouTuber;blogger;e-commerce manager;logistics manager;supply chain manager;procurement specialist;purchasing manager;quality assurance analyst;quality control inspector;food scientist;agricultural engineer;landscape architect;forester;horticulturist;agronomist;marine biologist;wildlife biologist;zookeeper;animal trainer;pet groomer;farmer;rancher;fisherman;miner;oil rig worker;driller;roustabout;wind turbine technician;solar panel installer;electric vehicle technician;robotics engineer;AI specialist;machine learning engineer;blockchain developer;quantitative analyst;cryptographer;ethical hacker;forensic scientist;crime scene investigator;detective;coroner;court reporter;judge;magistrate;public defender;prosecutor;diplomat;foreign service officer;intelligence analyst;CIA agent;FBI agent;NSA analyst;military officer;soldier;sailor;airman;marine;coast guard officer;beggar] and get paid $get[paid] FrameCoin
    }
    
    {color:$getVar[color]}}]

$setGlobalUserVar[wallet;$get[addFrameCoin]]

$let[addFrameCoin;$math[$get[paid] + $getGlobalUserVar[wallet]]]
$let[paid;$random[0;1000]]

$cooldown[20s;{newEmbed:
{title:
Try again later ⏳
}

{description:
Please wait %time% to use this command again
}

{color:$getVar[color]}
}

{interaction}

]
  `,
};
