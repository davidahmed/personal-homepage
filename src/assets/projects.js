export var Projects;
import { IoT } from './resources/projects/iot.js'
import { Authentication } from './resources/projects/authentication.js'
import { AIRU } from './resources/projects/ai.js'
import { Bitcoin } from './resources/projects/bitcoin.js'
import { MassScan } from './resources/projects/mass-scan.js'

Projects = [
	{
		title: 'Authentication without Authentication',
		tags: ['Cyber-Sec', 'AI', 'HCI'],
		slug: 'authentication',
		imageLink: require('../assets/img/authentication.jpg'),
		imageCredits: 'Pixabay',
		date: 'Jan-2019, Jan-2020',
		content: Authentication
	},
	{
		title: 'AI for the Rest of Us',
		tags: ['AI'],
		slug: 'ai-book',
		imageCredits: 'Pixabay',
		imageLink: require('../assets/img/ai.jpg'),
		date: 'March-September 2019',
		content: AIRU
	},
	{
		title: 'Coloring the Bitcoin Network',
		tags: ['Blockchain', 'ML'],
		slug: 'bitcoin',
		imageLink: require('../assets/img/hay-stack.jpg'),
		date: 'March-April 2018',
		imageCredits: '@malwina-zalewska-187025',
		content: Bitcoin
	},
	{
		title: 'IoT Testbed for Penetration Testing of Smart Cities',
		tags: ['IoT', 'Cyber-Sec'],
		slug: 'iot-testbed',
		imageCredits: 'konstantin-stupak@pexels',
		imageLink: require('../assets/img/smart-city.jpg'),
		date: 'May-August 2016',
		content: IoT
	},
	{
		title: 'Mapping the Internet',
		tags: ['Cyber-Sec'],
		slug: 'mapping-internet',
		imageLink: require('../assets/img/mass-scan.jpg'),
		imageCredits: 'pexels.com/@cookie-cutter',
		date: 'March 2016',
		content: MassScan
	}
]