import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Manoj G",
  title: "Hi all, I'm Manoj G",
  description:
    "I'm a passionate Software Engineer and Full Stack Developer who enjoys turning ideas into practical, scalable software solutions. I build modern web applications and backend systems with React.js, Python, and FastAPI, while exploring AI and real-time technologies to solve challenging problems.",
};

export const openSource = {
  githubUserName: "Manoj5621",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:hanzla.tauqeer123@gmail.com",
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

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
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
