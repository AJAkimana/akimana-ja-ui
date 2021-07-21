export const socials = [
	{ name: 'github', link: 'https://github.com/AJAkimana' },
	{ name: 'gitlab', link: 'https://gitlab.com/AJAkimana' },
	{ name: 'twitter', link: 'https://twitter.com/AJAkimana' },
	{
		name: 'stack-overflow',
		link: 'https://stackoverflow.com/users/7079061/akimana-ajoully-jean-damour'
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/in/jean-d-amour-akimanizanye-8553a167/'
	}
];

const thisYear = new Date().getFullYear();
export const navs = [
	{
		name: 'About',
		link: '#about',
		cssClass: 'user'
	},
	{
		name: 'Skills',
		link: '#skills',
		cssClass: 'server'
	},
	{
		name: 'Resume',
		link: '#resume',
		cssClass: 'file-blank'
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
		name: 'Contact',
		link: '#contact',
		cssClass: 'envelope'
	}
];
export const skills = [
	{
		type: 'dbs',
		subSkills: [
			{
				name: 'SQL(MySQL, PostgreSQL)',
				experience: thisYear - 2016,
				progress: 80
			},
			{
				name: 'NoSQL(Mongo, Couchbase)',
				experience: thisYear - 2017,
				progress: 70
			},
			{
				name: 'Cloud database(Firebase)',
				experience: thisYear - 2018,
				progress: 80
			}
		]
	},
	{
		type: 'backends',
		subSkills: [
			{
				name: 'Node',
				experience: thisYear - 2017,
				progress: 90
			},
			{
				name: 'Python',
				experience: thisYear - 2018,
				progress: 60
			},
			{
				name: 'PHP',
				experience: thisYear - 2015,
				progress: 70
			}
		]
	},
	{
		type: 'frontends',
		subSkills: [
			{
				name: 'Vanilla Javascript',
				experience: thisYear - 2015,
				progress: 50
			},
			{
				name: 'React/Redux',
				experience: thisYear - 2018,
				progress: 90
			},
			{
				name: 'Angular/AngularJS',
				experience: thisYear - 2017,
				progress: 50
			}
		]
	}
];
