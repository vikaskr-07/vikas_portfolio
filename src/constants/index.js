import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  spectra,
  nova,
  chatapp,
  farmezy,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solving",
    icon: backend, // replace with the actual icon variable for Problem Solver
  },
  {
    title: "System Design",
    icon: web, // replace with the actual icon variable for System Design
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Job Hunt",
    description: "A job hunting application built with ReactJS, Node.js, MongoDB, Express.js, Redux, and Shadcn to help users search and apply for jobs efficiently.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "redux", color: "yellow-text-gradient" }
    ],
    image: jobit,
    source_code_link: "https://github.com/vikaskr-07/JobHunt-Frontend",
    live_link: "https://jobhunt-tau.vercel.app", // Add live link
  },
  {
    name: "ChatApp",
    description: "A real-time chat application that allows users to communicate through messages, pictures, and videos. Built with ReactJS, NodeJS, ExpressJS, Cloudinary, MongoDB, and Socket.io.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "socket.io", color: "pink-text-gradient" },
      { name: "cloudinary", color: "yellow-text-gradient" }
    ],
    image: chatapp,
    source_code_link: "https://github.com/vikaskr-07/chat-app",
    live_link: "https://chat-app-clientt.onrender.com", // Add live link
  },
  {
    name: "Nova-AI",
    description: "An AI-powered assistant application similar to Gemini, allowing users to get quick responses for prompts. Built with ReactJS, Gemini API, and Tailwind CSS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "gemini api", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" }
    ],
    image: nova,
    source_code_link: "https://github.com/vikaskr-07/Nova-AI",
    live_link: "https://nova-ai-cf59.onrender.com/", // Add live link
  },
  {
    name: "FarmEzy",
    description: "A frontend-focused project providing farmers with an easy-to-use platform to manage their tasks, built using HTML, CSS, and JavaScript.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" }
    ],
    image: farmezy,
    source_code_link: "https://github.com/vikaskr-07/farmezy",
    live_link: "https://vikaskr-07.github.io/farmezy/", // Add live link
  },
  {
    name: "Spectra",
    description: "A live streaming platform with real-time interaction, enabling users to broadcast and engage through video streaming.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "webrtc", color: "green-text-gradient" },
      { name: "prisma", color: "pink-text-gradient" },
    ],
    image: spectra,
    source_code_link: "https://github.com/vikaskr-07/Spectra",
    live_link: "https://spectra-three.vercel.app/", // Add live link
  },
  // Add your other projects here (Car Rent, Job IT, Trip Guide)
];



export { services, technologies, experiences, testimonials, projects };
