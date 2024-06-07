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
          experience: 2016,
          progress: 80,
        },
        {
          name: "NoSQL(Mongo, Couchbase)",
          experience: 2017,
          progress: 70,
        },
        {
          name: "Cloud database(Firebase)",
          experience: 2018,
          progress: 80,
        },
      ],
    },
    {
      type: "backends",
      subSkills: [
        {
          name: "Node",
          experience: 2017,
          progress: 90,
        },
        {
          name: "Python",
          experience: 2018,
          progress: 60,
        },
        {
          name: "PHP",
          experience: 2015,
          progress: 70,
        },
      ],
    },
    {
      type: "frontends",
      subSkills: [
        {
          name: "Vanilla Javascript",
          experience: 2015,
          progress: 50,
        },
        {
          name: "React/Redux",
          experience: 2018,
          progress: 90,
        },
        {
          name: "Angular/AngularJS",
          experience: 2017,
          progress: 50,
        },
      ],
    },
  ],
  resume: [
    {
      key: "education",
      name: "Education",
      contents: [
        {
          entity: {
            name: "University of Rwanda - College of Science and Technology",
            address: "Kigali, Rwanda",
          },
          role: "Bachelor of Computer Science",
          startDate: "2012-09-03",
          endDate: "2016-07-29",
          responsibilities: [
            "Introduction to Computer Science: A foundational course that provides an overview of computer science principles, basic programming concepts, and problem-solving techniques.",
            "Data Structures and Algorithms: Covered the study of organizing and managing data efficiently, along with algorithms for solving computational problems. Explored arrays, linked lists, stacks, queues, trees, graphs, sorting algorithms, searching algorithms, and algorithm analysis.",
            "Programming Languages: Explored different programming languages, their syntax, semantics, and features. Covered languages like C, Java, Python, or others, and also included concepts such as data types, control structures, functions, object-oriented programming, and more.",
            "Computer Architecture: Focused on the design and organization of computer systems, including topics like CPU architecture, memory hierarchy, input/output systems, and digital logic.",
            "Operating Systems: Covered the fundamental concepts of operating systems, including process management, memory management, file systems, concurrency, and synchronization.",
            "Databases: Covered the principles and techniques used in managing and querying databases. These included relational database management systems (RDBMS), SQL, database design, normalization, indexing, and transactions.",
            "Networks and Network Security: Explored the basics of computer networks, network protocols, data transmission, network architecture, network security, and cryptography.",
            "Software Engineering: Focused on software development methodologies, software design principles, software testing, software project management, and software quality assurance.",
            "Artificial Intelligence and Machine Learning: Introduced the concepts of artificial intelligence, machine learning, and data mining. Covered topics like machine learning algorithms, neural networks, natural language processing, and computer vision.",
            "Theory of Computation: Covered the theoretical foundations of computer science, including formal languages, automata theory, computability, and complexity theory.",
          ],
        },
      ],
    },
    {
      key: "experience",
      name: "Professional Experience",
      contents: [
        {
          slug: "gitstart",
          entity: {
            name: "GitStart",
            address: "San Francisco, CA",
          },
          role: "Software Engineer",
          startDate: "2021-10-15",
          endDate: null,
          responsibilities: [
            "Contributed to different open-source projects like Sourcegraph, Supabase, and others.",
          ],
        },
        {
          entity: {
            name: "Pesachoice LLC",
            address: "Kigali, Rwanda",
          },
          role: "Lead Software Engineer",
          startDate: "2021-11-15",
          endDate: null,
          responsibilities: [
            "Lead a team of junior and mid-level software engineers to build and deliver great software products.",
            "Mentor and coach software developers to increase their performance, skill, and experience.",
            "Provide technological guidance and oversee engineering projects.",
            "Manage software development lifecycle using Agile methodologies.",
            "Perform code reviews, analysis, translating user stories, and technical design of products.",
          ],
        },
        {
          entity: {
            name: "Andela",
            address: "Kigali, Rwanda",
          },
          role: "Associate Software Engineer",
          startDate: "2019-04-01",
          endDate: "2020-04-03",
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
