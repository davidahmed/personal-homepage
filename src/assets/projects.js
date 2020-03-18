export var Projects;
import { IoT } from './resources/projects/iot.js'

Projects = [
	{
		title: 'Authentication without Authentication',
		tags: ['Cyber-Sec', 'AI', 'HCI'],
		slug: 'authentication',
		imageLink: require('../assets/img/authentication.jpg'),
		imageCredits: 'konstantin-stupak@pexels',
		date: 'Jan-2019, Jan-2020'
	},
	{
		title: 'AI for the Rest of Us',
		tags: ['AI'],
		slug: 'ai-book',
		imageLink: require('../assets/img/ai.jpg'),
		date: 'March-September 2019'
	},
	{
		title: 'Coloring the Bitcoin Network',
		tags: ['Blockchain', 'ML'],
		slug: 'bitcoin',
		imageLink: require('../assets/img/hay-stack.jpg'),
		date: 'March-April 2018',
	},
	{
		title: 'IoT Testbed for Penetration Testing of Smart Cities',
		tags: ['IoT', 'Cyber-Sec'],
		slug: 'iot-testbed',
		imageLink: require('../assets/img/smart-city.jpg'),
		date: 'May-August 2016',
		content: IoT
	},
	{
		title: 'Mapping the Internet',
		tags: ['Cyber-Sec'],
		slug: 'mapping-internet',
		imageLink: require('../assets/img/mass-scan.jpg'),
		date: 'March 2016',
	}
]