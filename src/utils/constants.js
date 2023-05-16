export const socials = [
  { name: "github", link: "https://github.com/AJAkimana" },
  { name: "gitlab", link: "https://gitlab.com/AJAkimana" },
  { name: "twitter", link: "https://twitter.com/AJAkimana" },
  {
    name: "stack-overflow",
    link: "https://stackoverflow.com/users/7079061/akimana-ajoully-jean-damour",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/jean-d-amour-akimanizanye-8553a167/",
  },
];

const thisYear = new Date().getFullYear();
export const navs = [
  {
    name: "About",
    link: "#about",
    cssClass: "user",
  },
  {
    name: "Skills",
    link: "#skills",
    cssClass: "server",
  },
  {
    name: "Resume",
    link: "#resume",
    cssClass: "file-blank",
  },
  // {
  //   name: 'Portfolio',
  //   link: '#portfolio',
  //   cssClass: 'book-content',
  // },
  // {
  //   name: 'Services',
  //   link: '#services',
  //   cssClass: 'server',
  // },
  {
    name: "Contact",
    link: "#contact",
    cssClass: "envelope",
  },
];
export const skills = [
  {
    type: "dbs",
    subSkills: [
      {
        name: "SQL(MySQL, PostgreSQL)",
        experience: thisYear - 2016,
        progress: 80,
      },
      {
        name: "NoSQL(Mongo, Couchbase)",
        experience: thisYear - 2017,
        progress: 70,
      },
      {
        name: "Cloud database(Firebase)",
        experience: thisYear - 2018,
        progress: 80,
      },
    ],
  },
  {
    type: "backends",
    subSkills: [
      {
        name: "Node",
        experience: thisYear - 2017,
        progress: 90,
      },
      {
        name: "Python",
        experience: thisYear - 2018,
        progress: 60,
      },
      {
        name: "PHP",
        experience: thisYear - 2015,
        progress: 70,
      },
    ],
  },
  {
    type: "frontends",
    subSkills: [
      {
        name: "Vanilla Javascript",
        experience: thisYear - 2015,
        progress: 50,
      },
      {
        name: "React/Redux",
        experience: thisYear - 2018,
        progress: 90,
      },
      {
        name: "Angular/AngularJS",
        experience: thisYear - 2017,
        progress: 50,
      },
    ],
  },
];

export const data = {
  profile: {
    firstName: "Jean d Amour",
    lastName: "AKIMANIZANYE",
    website: "www.akimanaja.com",
    phoneNumber: "+250 783 543 016",
    city: "Kigali, Rwanda",
    address: "Kigali, KN 107 St",
    degree: "Bachelor",
    email: "akimanaja17@gmail.com",
    availability: "Available",
  },
  skills: [
    {
      type: "dbs",
      subSkills: [
        {
          name: "SQL(MySQL, PostgreSQL)",
          experience: thisYear - 2016,
          progress: 80,
        },
        {
          name: "NoSQL(Mongo, Couchbase)",
          experience: thisYear - 2017,
          progress: 70,
        },
        {
          name: "Cloud database(Firebase)",
          experience: thisYear - 2018,
          progress: 80,
        },
      ],
    },
    {
      type: "backends",
      subSkills: [
        {
          name: "Node",
          experience: thisYear - 2017,
          progress: 90,
        },
        {
          name: "Python",
          experience: thisYear - 2018,
          progress: 60,
        },
        {
          name: "PHP",
          experience: thisYear - 2015,
          progress: 70,
        },
      ],
    },
    {
      type: "frontends",
      subSkills: [
        {
          name: "Vanilla Javascript",
          experience: thisYear - 2015,
          progress: 50,
        },
        {
          name: "React/Redux",
          experience: thisYear - 2018,
          progress: 90,
        },
        {
          name: "Angular/AngularJS",
          experience: thisYear - 2017,
          progress: 50,
        },
      ],
    },
  ],
  resume: [
    {
      name: "Education",
      contents: [
        {
          entity: {
            name: "University of Rwanda - College of Science and Technology",
            address: "Kigali, Rwanda",
          },
          role: "Bachelor of Computer Science",
          startDate: "03-09-2012",
          endDate: "29-07-2016",
          responsibilities: [
            "Built, tested and deployed scalable, highly available and modular software products.",
            "Collaborated with other developers to identify and alleviate number of bugs and errors in software.",
            "Wrote code on eShuri platform using Node/Express.",
          ],
        },
      ],
    },
    {
      name: "Professional Experience",
      contents: [
        {
          entity: {
            name: "Data Systems Ltd",
            address: "Kigali, Rwanda",
          },
          role: "Software developer",
          startDate: "01-08-2016",
          endDate: "26-05-2018",
          responsibilities: [
            "Built, tested and deployed scalable, highly available and modular software products.",
            "Collaborated with other developers to identify and alleviate number of bugs and errors in software.",
            "Wrote code on eShuri platform using Node/Express.",
          ],
        },
        {
          entity: {
            name: "Andela",
            address: "Kigali, Rwanda",
          },
          role: "Associate Software Engineer",
          startDate: "01-04-2019",
          endDate: "03-04-2020",
          responsibilities: [
            "Collaborated with cross-functional development team members to analyze potential system solutions based on evolving client requirements",
            "Tested troubleshooting methods, devised innovative solutions, and documented resolutions for inclusion in knowledge base for support team use.",
            "Collaborated with developers and product owners to stay current on product features and intended functionality.",
          ],
        },
      ],
    },
  ],
};
