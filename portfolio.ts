import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  WhatImDoingType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Manoj G",
  title: "Hi all, I'm Manoj G",
  description:
    "I'm a passionate Software Engineer and Full Stack Developer who enjoys turning ideas into practical, scalable software solutions. I build modern web applications and backend systems with React.js, Python, and FastAPI, while exploring AI and real-time technologies to solve challenging problems.",
  resumeLink: "https://drive.google.com/file/d/104ndmPolWvVumoRIFl8nVSDgsaAwGQ6w/view?usp=drive_link",
};

export const openSource = {
  githubUserName: "Manoj5621",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "manojgopal5621@gmail.com",
  phone: "91+ 8147290508",
  linkedin: "https://www.linkedin.com/in/manoj-g-89a26230b/",
  github: "https://github.com/Manoj5621",
  instagram: "https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive and scalable web applications "),
        emoji("⚡ Developing scalable backend services and REST APIs with Python & FastAPI"),
        emoji("⚡ Containerizing applications and improving deployment workflows with Docker"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "East Point College of Higher Education",
    university: "Bengaluru North University",
    subHeader: "Master of Computer Applications (MCA)",
    duration: "December 2023 - December 2025",
    desc: "",
    grade: "7.5 CGPA",
    descBullets: [],
  },
  {
    schoolName: "NDRK First Grade College, Hassan",
    university: "University of Mysore",
    subHeader: "Bachelor of Computer Applications (BCA)",
    duration: "July 2020 - September 2023",
    desc: "",
    grade: "7.0 CGPA",
    descBullets: [],
  },
];
export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Excerpt Technologies Pvt Ltd, Bangalore ",
    companyLogo: "/img/icons/common/EXCERPTLOGO.jpg",
    date: "AUG 2025 - OCT 2025",
    desc: "Contributed to full-stack application development by building and enhancing backend features and REST APIs using Python and FastAPI. Worked with MongoDB for data management, while supporting application monitoring, debugging, and performance improvements across multiple modules. Automated deployment workflows using Docker and Bash scripting to improve reliability and reduce manual deployment effort.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Python Developer Intern",
    company: "Infotact Solutions, Bangalore",
    companyLogo: "/img/icons/common/infotact_solutions_logo.jpg",
    date: "MARCH 2025 - MAY 2025",
    desc: "Developed Python applications with a focus on clean, maintainable code using object-oriented programming and data structures. Worked on debugging, testing, performance optimization, and automation of recurring development tasks while following software development best practices.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "CampusBuzz AI",
    subtitle: "AI-Powered Student Clubs & Event Platform",
    desc: "A full-stack platform that brings student clubs, events, and campus activities into one place, with AI-powered event recommendations and chatbot assistance.",
    techStack: [
      "React.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "LangChain",
      "RAG",
    ],
    image: "/img/icons/common/1.png",
    github: "YOUR_GITHUB_URL",
    link: "YOUR_LIVE_URL",
  },

  {
    name: "Gen AI Virtual Try-On",
    subtitle: "AI-Powered Virtual Fashion Experience",
    desc: "A Generative AI-powered virtual try-on application that creates realistic outfit previews from person and clothing images.",
    techStack: [
      "Python",
      "FastAPI",
      "Google Gemini",
      "Generative AI",
    ],
    image: "/img/icons/common/7.jpg",
    github: "https://github.com/Manoj5621/Fashion_virtual",
    link: "YOUR_LIVE_URL",
  },

  {
    name: "Driver Drowsiness Detection System",
    subtitle: "Real-Time Driver Safety & Fatigue Detection",
    desc: "A computer vision system that analyzes eye movement and facial features to detect signs of driver fatigue and trigger real-time alerts.",
    techStack: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Keras",
    ],
    image: "/img/icons/common/5.png",
    github: "YOUR_GITHUB_URL",
    link: "YOUR_LIVE_URL",
  },

  {
    name: "Real-Time Object Detection System",
    subtitle: "Real-Time Computer Vision & Object Recognition",
    desc: "A computer vision application that detects and classifies multiple objects from images and live video using YOLOv8.",
    techStack: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "NumPy",
    ],
    features: [
      "Real-time object detection",
      "Object classification",
      "Live video processing",
      "Visual detection overlays",
    ],
    image: "/img/icons/common/6.png",
    github: "YOUR_GITHUB_URL",
    link: "YOUR_LIVE_URL",
  },
  {
    name: "Cyber Threat Intelligence Dashboard",
    subtitle: "Real-Time Cybersecurity Threat Analysis",
    desc: "A real-time cybersecurity dashboard designed to analyze threat indicators and alerts using machine learning, helping visualize threat activity and support data-driven security decisions.",
    techStack: [
      "React",
      "FastAPI",
      "Python",
      "Machine Learning",
    ],
    image: "/img/icons/common/2.png",
    github: "YOUR_GITHUB_URL",
    link: "YOUR_LIVE_URL",
  },

  {
    name: "AI Trip Planner",
    subtitle: "AI-Powered Personalized Travel Planning",
    desc: "An intelligent travel planning application that generates personalized itineraries based on user preferences, budget, and trip duration.",
    techStack: [
      "Python",
      "FastAPI",
      "AI/ML",
      "APIs",
    ],
    features: [
      "Personalized itineraries",
      "Destination recommendations",
      "Budget-based planning",
      "AI-generated travel plans",
    ],
    image: "/img/icons/common/3.png",
    github: "YOUR_GITHUB_URL",
    link: "YOUR_LIVE_URL",
  },

  {
    name: "AI Coffee Shop Assistant",
    subtitle: "AI-Powered Customer & Order Assistant",
    desc: "An AI-powered virtual assistant that uses natural language interaction to help customers discover products and receive personalized recommendations.",
    techStack: [
      "Python",
      "FastAPI",
      "NLP",
      "AI Chatbot",
      "MongoDB",
    ],
    image: "/img/icons/common/4.png",
    github: "YOUR_GITHUB_URL",
    link: "YOUR_LIVE_URL",
  },
];

export const whatImDoing: WhatImDoingType[] = [
  {
    title: "Full-Stack Development",
    icon: "/img/icons/common/software_development.png",
    description:
      "Building modern, responsive web applications and scalable backend services using React.js, Python, FastAPI, and REST APIs.",
  },
  {
    title: "AI & Machine Learning",
    icon: "/img/icons/common/ai.png",
    description:
      "Developing practical AI-powered solutions and intelligent applications using machine learning and modern AI technologies.",
  },
  {
    title: "Computer Vision",
    icon: "/img/icons/common/deep_learning.png",
    description:
      "Building real-time computer vision solutions for image and video processing using OpenCV, TensorFlow, and YOLOv8.",
  },
  {
    title: "Backend & API Development",
    icon: "/img/icons/common/sap.png",
    description:
      "Designing reliable backend services and REST APIs with Python and FastAPI, with experience working with MongoDB and MySQL.",
  },
  {
    title: "Web Application Development",
    icon: "/img/icons/common/web.png",
    description:
      "Creating clean and responsive user interfaces with React.js, JavaScript, HTML5, and CSS3.",
  },
  {
    title: "Cloud & Deployment",
    icon: "/img/icons/common/linux.png",
    description:
      "Working with Git, Docker, Bash, and deployment workflows to build reliable and maintainable applications.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Manoj G",
  description: greetings.description,
  author: "Manoj G",
  image: "",  //image of a person or a logo of a company
  url: "",    // deployed website url
  keywords: [
    "Manoj",
    "Manoj G",
    "@Manoj5621",
    "Manoj G Portfolio",
    "Portfolio",
    "Manoj Portfolio ",
    "Manoj G Portfolio",
  ],
};
