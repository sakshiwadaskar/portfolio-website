import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from 'react-icons/fa';
import {FiFileText, FiUser, FiExternalLink} from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon'/>,
        path: '/',
    },

    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon'/>,
        path: '/about',
    },

    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav__icon'/>,
        path: '/portfolio',
    },

    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon'/>,
        path: '/contact',
    },
];

export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Sakshi',
    },

    {
        id: 2,
        title: 'Last Name : ',
        description: 'Wadaskar',
    },
    {
        id: 6,
        title: 'Address : ',
        description: 'Boston, MA, USA',
    },

    {
        id: 7,
        title: 'Phone : ',
        description: '+18578004265',
    },

    {
        id: 8,
        title: 'Email : ',
        description: 'wadaskar.s@northeastern.edu',
    },
];

export const stats = [
    {
        id: 1,
        no: '3',
        title: 'Years of <br /> Experience',
    },

    {
        id: 2,
        no: '10+',
        title: 'Completed <br /> Projects',
    },

    {
        id: 3,
        no: '35+',
        title: 'Acquired <br /> Skills',
    },
    {
        id: 4,
        no: '1+',
        title: 'Awards <br /> Won',
    },
];

export const resume = [
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'April 2022  - August 2023',
        title: 'Senior Software Engineer-<span>Thoughtworks, Pune, MH, India</span>',
        desc: 'Tech Stack: Java, WebSocket, AWS Lambda, EC2, RDS, Elasticsearch',
    },

    {
        id: 2,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'April 2021 - April 2022',
        title: 'Software Engineer-<span>Thoughtworks, Pune, MH, India </span>',
        desc: 'Tech Stack: Webpack, React.js, Python Flask, Redis, JUnit, Mockito, Jenkins, Docker, Angular.js',
    },

    {
        id: 3,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'November 2020 - March 2021',
        title: 'Graduate Software Engineer-<span>Viprush Technologies, Nagpur, India</span>',
        desc: 'Tech Stack: TensorFlow, NLP (Natural Language Processing), Computer Vision techniques, SQL',
    },

    {
        id: 4,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2020',
        title: 'Degree: Master of Science in Information Systems <span> Northeastern University, Boston, MA, USA </span>',
        desc: 'Coursework: Application Engineering and Development, Data Management and Database Design, Web Design and User Experience Engineering, Data Science Engineering Methods, Program Structures and Algorithms.\n',
    },

    {
        id: 5,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2012',
        title: 'Degree: Bachelor of Technology in Electronics <span> Savitribai Phule Pune University, Pune, MH, India </span>',
        desc: 'Coursework: Object Oriented Programming, Data Structures and Algorithms, Computer Architecture, Computer Networks, Machine Learning, Artificial Intelligence, Pattern Recognition, Database Design and Management Systems.',
    },
];

export const skills = [
    {
        id: 1,
        title: 'Html',
        percentage: '98',
    },

    {
        id: 2,
        title: 'Javascript',
        percentage: '89',
    },

    {
        id: 3,
        title: 'Css',
        percentage: '70',
    },

    {
        id: 4,
        title: 'Typescript',
        percentage: '66',
    },

    {
        id: 5,
        title: 'Java',
        percentage: '95',
    },


    {
        id: 6,
        title: 'Python',
        percentage: '50',
    },

    {
        id: 7,
        title: 'Angular',
        percentage: '35',
    },

    {
        id: 8,
        title: 'React',
        percentage: '65',
    },

    {
        id: 9,
        title: 'Material UI',
        percentage: '70',
    },
    {
        id: 10,
        title: 'Bootstrap',
        percentage: '45',
    },
    {
        id: 11,
        title: 'Tailwind CSS',
        percentage: '45',
    },
    {
        id: 12,
        title: 'MongoDB',
        percentage: '75',
    },
    {
        id: 13,
        title: 'Node.js',
        percentage: '90',
    },
    {
        id: 14,
        title: 'Express.js',
        percentage: '90',
    },
    {
        id: 15,
        title: 'Spring Boot',
        percentage: '25',
    },
    {
        id: 13,
        title: 'SQL',
        percentage: '85',
    },
];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: 'Eco Engage Portal',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Boosted climate awareness via social networking',
            },
            {
                icon: <FiUser/>,
                title: 'Date :  ',
                desc: 'Jan 2024 to May 2024',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'React JS, TypeScript, MongoDB, Node JS',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'https://ecoengage.netlify.app',
            },
        ],
    },

    {
        id: 2,
        img: Work2,
        title: 'Interactive Travel Planner',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Designed application for destination discovery, itinerary planning, and collaboration.',
            },
            {
                icon: <FiUser/>,
                title: 'Date : ',
                desc: 'Jan 2023 to Sep 2024',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'React.js, TypeScript, MongoDB, Express.js, jQuery, Mapbox API.',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 3,
        img: Work3,
        title: 'Segmentation & Recommender',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Accurate customer segmentation and targeted marketing from 3M grocery orders analysis.',
            },
            {
                icon: <FiUser/>,
                title: 'Date : ',
                desc: 'Jan 2024 to May 2024',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: '/CustomerSegmentation',
            },
        ],
    },

    {
        id: 4,
        img: Work4,
        title: 'Enterprise Ecosystem',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'A System, for seamless real-time data exchange among hotel chains, suppliers, booking platforms, and hospitality training institutes.',
            },
            {
                icon: <FiUser/>,
                title: 'Date : ',
                desc: 'Sep 2023 to Dec 2023',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Java, Java Swing, JDBC, SQL(AZURE)',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 5,
        img: Work5,
        title: 'NoteHub',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'an MVC-based note-taking app with CRUD operations and search by date and keyword.',
            },
            {
                icon: <FiUser/>,
                title: 'Date : ',
                desc: 'Jan 2024 to May 2024',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'HTML/SCSS, JavaScript, MongoDB, Node.js, Express JS, MongoDB',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 6,
        img: Work6,
        title: 'Digital Education Platform',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Built versatile digital education platform for streamlined learning experience both students and professors.',
            },
            {
                icon: <FiUser/>,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Java Swing, JDBC, SQL',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Preview : ',
                desc: 'www.dibble.com',
            },
        ],
    },
];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(252, 35%, 51%)',
    },

    {
        id: 2,
        img: Theme2,
        color: 'hsl(4, 93%, 54%)',
    },

    {
        id: 3,
        img: Theme3,
        color: 'hsl(271, 76%, 53%)',
    },

    {
        id: 4,
        img: Theme4,
        color: 'hsl(225, 73%, 57%)',
    },

    {
        id: 5,
        img: Theme5,
        color: 'hsl(43, 74%, 49%)',
    },

    {
        id: 6,
        img: Theme6,
        color: 'hsl(339, 81%, 66%)',
    },

    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)',
    },

    {
        id: 8,
        img: Theme8,
        color: 'hsl(19, 96%, 52%)',
    },

    {
        id: 9,
        img: Theme9,
        color: 'hsl(88, 65%, 43%)',
    },

    {
        id: 10,
        img: Theme10,
        color: 'hsl(42, 100%, 50%)',
    },
];
