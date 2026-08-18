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

import Work1 from './assets/prj-1.jpeg';
import Work2 from './assets/prj-2.gif';
import Work3 from './assets/prj-3.png';
import Work4 from './assets/prj-4.gif';
import Work5 from './assets/prj-5.webp';
import Work6 from './assets/prj6.gif';
import Work7 from './assets/project-finintel.png';
import Work8 from './assets/project-healthbot.png';
import Work9 from './assets/project-schemadrift.png';

import Theme1 from './assets/theme-clay.png';
import Theme2 from './assets/theme-ink.png';
import Theme3 from './assets/theme-stone.png';
import Theme4 from './assets/theme-sage.png';
import Theme5 from './assets/theme-slate.png';
import Theme6 from './assets/theme-ochre.png';

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
        name: 'Projects',
        icon: <FaFolderOpen className='nav__icon'/>,
        path: '/portfolio',
    },

    {
        id: 4,
        name: 'Builds',
        icon: <FaCode className='nav__icon'/>,
        path: '/builds',
    },

    {
        id: 5,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon'/>,
        path: '/contact',
    },
];

export const recentBuilds = [
    {
        id: 1,
        img: Work7,
        title: 'CapitalMirror — Automated SMB Financial Health & M&A Analytics Dashboard',
        tagline: 'Credit score, but for your business.',
        desc: 'Paste or upload a P&L. Get a health score, AI insights, and live assumption sliders, in under 60 seconds. A rapid-prototype full-stack analytics platform built to solve the core data friction point in SMB M&A: the trust and validation gap in raw seller financials. Normalizes unstructured, messy financial inputs into reliable, institutional-grade valuation insights for prospective buyers.',
        stack: ['Python', 'FastAPI', 'React 19', 'TypeScript', 'Claude Sonnet', 'Recharts', 'Vercel'],
        live: 'https://biz-health-dashboard.vercel.app/',
    },
    {
        id: 2,
        img: Work8,
        title: 'AI Health Advisory Agent',
        tagline: 'Conversational wellness guidance, powered by RAG.',
        desc: 'Built and deployed an AI health advisory agent that answers general wellness questions through conversational vector search. Architected an end-to-end RAG pipeline with LangChain and a Chroma vector database, serving Gemma via a FastAPI backend, then containerized and deployed it live with Docker.',
        stack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Gemma', 'Docker'],
        live: 'https://health-advisor-bot.onrender.com/',
    },
    {
        id: 3,
        img: Work9,
        title: 'Schema-Drift Auto-Healing Pipeline',
        tagline: 'An agent that patches its own config.',
        desc: 'Agentic pipeline that validates vendor CSV schemas against a rule-based config and escalates unresolved column drift to Gemini for structured mapping. Deterministic checks gate every LLM call; on high confidence the system self-heals its own config so the same drift never triggers an LLM call again, and on low confidence it quarantines the file for human review instead of risking a silent bad write.',
        stack: ['Python', 'LangChain', 'Pydantic', 'Gemini 2.5 Flash', 'pandas'],
        live: 'https://github.com/sakshiwadaskar/schema-drift-poc',
    },
    {
        id: 4,
        img: Work1,
        title: 'EcoEngage Portal',
        tagline: 'Community engagement for climate action.',
        desc: 'An end-to-end web application designed to inspire climate action and foster community engagement around sustainability. Led development of secure, high-performance RESTful APIs using Node.js and Express.js, implementing OAuth 2.0 for secure user authentication and JWT for scalable, stateless session management. Integrated MongoDB for resilient data storage, enabling efficient management of user profiles and environmental data.',
        stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'OAuth 2.0', 'JWT'],
        live: 'https://eco-engage-web-application.vercel.app/',
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
        description: '+16578672189',
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
        year: 'February 2026 - Present',
        title: 'Full Stack AI Engineer<span>Saayam For All, Washington, DC (Remote)</span>',
        desc: 'Architected a multi-agent AI routing system using BART classification to orchestrate OpenAI and Gemini LLM calls via function calling, reducing query latency by 85%. Built an LLM evaluation framework benchmarking 630+ tokens/second throughput, applying prompt engineering to optimize agentic AI quality and reliability in production.',
    },
    {
        id: 2,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'January 2025 - December 2025',
        title: 'Software Engineer<span>Annaly Capital Management, New York, NY, USA</span>',
        desc: 'Refactored 18+ Flask microservices with OAuth 2.0/JWT standardization via API Gateway and centralized ELK Stack logging, cutting system debugging time by 35%. Built an on-prem document AI pipeline using OCR (ocrmypdf), LangChain, and a vision-model fallback to extract structured trade data from PDF deal confirmations, achieving 99%+ field accuracy with 65% less manual entry. Architected a distributed, event-driven system for repo collateral margin calculations and mREIT trade processing using idempotent Kafka consumers, sustaining 99.99% uptime under high-volume production load. Reduced API latency by 40% for 3TB+ trade pricing datasets via PostgreSQL indexing and Redis caching.',
    },
    {
        id: 3,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'April 2022 - August 2023',
        title: 'Software Engineer<span>Thoughtworks, Pune, MH, India</span>',
        desc: 'Designed serverless microservices on AWS Lambda for inventory management and ETL data-compaction flows, cutting infrastructure costs by 25% via event-driven architecture. Led technical discovery sessions with clients to translate stakeholder requirements into functional designs, increasing SDLC velocity.',
    },
    {
        id: 4,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'April 2021 - April 2022',
        title: 'Graduate Software Engineer<span>Thoughtworks, Pune, MH, India</span>',
        desc: 'Accelerated React/TypeScript bundle performance via code splitting and memoization, cutting load times by 55% for 50K+ global users. Enhanced e-commerce UI responsiveness by implementing windowed rendering with react-window and optimizing GraphQL data-fetching, reducing client-side latency by 32% across high-traffic product pages.',
    },

    {
        id: 5,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: '2020',
        title: 'Degree: Master of Science in Information Systems <span> Northeastern University, Boston, MA, USA </span>',
        desc: 'Coursework: Application Engineering and Development, Data Management and Database Design, Web Design and User Experience Engineering, Data Science Engineering Methods, Program Structures and Algorithms.\n',
    },

    {
        id: 6,
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
        title: 'HTML5',
        percentage: '98',
    },

    {
        id: 2,
        title: 'Javascript',
        percentage: '89',
    },

    {
        id: 3,
        title: 'CSS3',
        percentage: '70',
    },

    {
        id: 4,
        title: 'TypeScript',
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
    {
        id: 14,
        title: 'GraphQL',
        percentage: '65',
    },
    {
        id: 15,
        title: 'Vue',
        percentage: '65',
    },
    {
        id: 16,
        title: 'Azure Cloud',
        percentage: '65',
    },
    {
        id: 17,
        title: 'AWS RDS',
        percentage: '65',
    },
    {
        id: 18,
        title: 'AWS S3',
        percentage: '65',
    },
    {
        id: 19,
        title: 'AWS EC2',
        percentage: '65',
    },
    {
        id: 20,
        title: 'AWS Lambda',
        percentage: '65',
    },
    {
        id: 21,
        title: 'C/C++',
        percentage: '65',
    },

];

export const portfolio = [
    {
        id: 1,
        img: Work7,
        title: 'Automated Financial Intelligence & Valuation Platform',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Business health dashboard that analyzes P&L statements (CSV, PDF, text) in under 60 seconds. Claude Sonnet extracts structured metrics, generates a weighted health score (0-100) against industry benchmarks, and surfaces interactive scenario sliders for real-time assumption modeling.',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Python, React.js, FastAPI, Claude SDK, RAG',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Live : ',
                desc: 'https://biz-health-dashboard.vercel.app/',
                link: 'https://biz-health-dashboard.vercel.app/',
            },
        ],
    },

    {
        id: 2,
        img: Work8,
        title: 'AI Health Advisory Agent',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'AI health advisory agent answering personalized wellness queries via conversational vector search. RAG pipeline built with LangChain and a vector database, served via FastAPI.',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Python, FastAPI, LangChain, Vector DB, Gemma',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Live : ',
                desc: 'https://health-advisor-bot.onrender.com/',
                link: 'https://health-advisor-bot.onrender.com/',
            },
        ],
    },

    {
        id: 3,
        img: Work9,
        title: 'Schema-Drift Auto-Healing Pipeline',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Agentic pipeline that validates vendor CSV schemas against a rule-based config and escalates unresolved column drift to Gemini for structured mapping, self-healing the config on high confidence or quarantining the file for human review on low confidence.',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Python, LangChain, Pydantic, Gemini 2.5 Flash, pandas',
            },
            {
                icon: <FiExternalLink/>,
                title: 'GitHub',
                link: 'https://github.com/sakshiwadaskar/schema-drift-poc',
            },
        ],
    },

    {
        id: 4,
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
                desc: 'https://eco-engage-web-application.vercel.app/',
                link: 'https://eco-engage-web-application.vercel.app/',
            },
        ],
    },

    {
        id: 5,
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
            // {
            //     icon: <FiExternalLink/>,
            //     title: 'Preview : ',
            //     desc: 'www.dribble.com',
            // },
        ],
    },

    {
        id: 6,
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
                title: 'GitHub',
                link: 'https://github.com/sakshiwadaskar/CustomerSegmentationRecommender',
            },
        ],
    },

    {
        id: 7,
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
                title: 'GitHub',
                link: 'https://github.com/sakshiwadaskar/EnterpriseEcosystem',
            },
        ],
    },

    {
        id: 8,
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
                title: 'GitHub',
                link: 'https://github.com/sakshiwadaskar/NoteHub'
            },
        ],
    },

    {
        id: 9,
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
                title: 'Date : ',
                desc: 'Sep 2023 to Dec 2023',
            },
            {
                icon: <FaCode/>,
                title: 'Language : ',
                desc: 'Java Swing, JDBC, SQL',
            },
            {
                icon: <FiExternalLink/>,
                title: 'GitHub',
                link: 'https://github.com/sakshiwadaskar/DigitalEducationPlatform'
            },
        ],
    },

];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(15, 45%, 45%)',
    },

    {
        id: 2,
        img: Theme2,
        color: 'hsl(20, 10%, 18%)',
    },

    {
        id: 3,
        img: Theme3,
        color: 'hsl(30, 8%, 55%)',
    },

    {
        id: 4,
        img: Theme4,
        color: 'hsl(100, 12%, 40%)',
    },

    {
        id: 5,
        img: Theme5,
        color: 'hsl(210, 14%, 42%)',
    },

    {
        id: 6,
        img: Theme6,
        color: 'hsl(38, 45%, 48%)',
    },
];
