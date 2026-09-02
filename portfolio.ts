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
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/file/d/104ndmPolWvVumoRIFl8nVSDgsaAwGQ6w/view?usp=drive_link",
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
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
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
