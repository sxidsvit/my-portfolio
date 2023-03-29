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
  lyriks,
  refine,
  aidalle,
  threejs,
  youtubeclone,
  fitnessclub,
  realestate,
  reactdocker,
  reactlanding,
  leisureadvisor,
  foodrecipe,
  bookstore,
  milkteashop,
  storybooks,
  alijspress,
  ilfara,
  doughbag,
  deliveryfood,
  smitler,
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
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "JavaScript Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "figma",
    icon: figma,
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
    name: "Lyriks",
    description:
      "An elegant Music Application, an attempt to improve Spotify. Modern homepage. Fully- fledged music player.Search lyrics song features. The search for popular music around your worldwide top charts. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux ToolKit",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "blue-text-gradient",
      },
    ],
    image: lyriks,
    source_code_link: "https://github.com/sxidsvit/lyriks",
  },
  {
    name: "Dashboard",
    description:
      "Dashboard application based on Refine headless framework (runs on top of React), MongoDB (NoSQL database and service), Cloudinary store, Render",
    tags: [
      {
        name: "Refine",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "Render",
        color: "green-text-gradient",
      },
    ],
    image: refine,
    source_code_link: "https://github.com/sxidsvit/refine-yariga",
  },
  {
    name: "AI-Painter",
    description:
      "Application for creating realistic images and drawings from a text description, based on OpenAI DALL-E-2",
    tags: [
      {
        name: "React+Vite",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI DALL-E-2",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "Render",
        color: "green-text-gradient",
      },
    ],
    image: aidalle,
    source_code_link: "https://github.com/sxidsvit/openai-dall-e-2",
  },
  {
    name: "Youtube clone",
    description:
      "This is my best clone of Youtube up to now",
    tags: [
      {
        name: "React 18",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI 5",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeclone,
    source_code_link: "https://github.com/sxidsvit/youtube-jsm",
  },
  {
    name: "Fitness Club",
    description:
      "Modern Fitness Exercise Application",
    tags: [
      {
        name: "React 18",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI 5.6",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "pink-text-gradient",
      },
    ],
    image: fitnessclub,
    source_code_link: "https://github.com/sxidsvit/fitness-app",
  },
  {
    name: "Real Estate",
    description:
      "Modern Real Estate Application",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Chackra",
        color: "green-text-gradient",
      },
      {
        name: "Baut API",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/sxidsvit/next-realestate",
  },
  {
    name: "React Table",
    description:
      "React-based table with the base functionality: CRUD, filtering, search, pagination, adding data with validation, Docker",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React-bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Formik",
        color: "pink-text-gradient",
      },
      {
        name: "Yup",
        color: "blue-text-gradient",
      },
      {
        name: "React-paginate",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "is_js",
        color: "blue-text-gradient",
      },
    ],
    image: reactdocker,
    source_code_link: "https://github.com/sxidsvit/react-table",
  },
  {
    name: "Landing Page",
    description:
      "SPA ‘Landing Page’ created using  Next.js, Theme UI and some other libraries",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React Multi Carousel",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "React Modal Video",
        color: "blue-text-gradient",
      },
    ],
    image: reactlanding,
    source_code_link: "https://github.com/sxidsvit/react-nextjs-landingpage",
  },
  {
    name: "Leisure Advisor",
    description:
      "Advanced Leisure Companion Application which is using Google Maps",
    tags: [
      {
        name: "React 17",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Google Maps API",
        color: "pink-text-gradient",
      },
      {
        name: "Travel Advisor API",
        color: "blue-text-gradient",
      },
      {
        name: "Open Weather Map API",
        color: "green-text-gradient",
      },
    ],
    image: leisureadvisor,
    source_code_link: "https://github.com/sxidsvit/leisure-advisor",
  },

  {
    name: "Food Recipe",
    description:
      "Mobile application for food recipe",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
    ],
    image: foodrecipe,
    source_code_link: "https://github.com/sxidsvit/food-recipe",
  },

  {
    name: "Book Store",
    description:
      "Mobile application for book store",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/sxidsvit/book-store-app",
  },

  {
    name: "Milk Tea Shop",
    description:
      "Mobile application for milk tea shop",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
    ],
    image: milkteashop,
    source_code_link: "https://github.com/sxidsvit/milk-tea-shop",
  },

  {
    name: "il Faro",
    description:
      "Restorante 'Il Faro'  - landing page",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "Gulp",
        color: "blue-text-gradient",
      },
    ],
    image: ilfara,
    source_code_link: "https://github.com/sxidsvit/ilfaro",
  },

  {
    name: "S & Mitler",
    description:
      "Landing page for fashion salon",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: smitler,
    source_code_link: "https://github.com/sxidsvit/sxidsvit.github.io",
  },


  {
    name: "Dough Bag",
    description:
      "Landing page for selling dough bags",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: doughbag,
    source_code_link: "https://github.com/sxidsvit/dough-bag",
  },

  {
    name: "Delivery Food",
    description:
      "Simple online store on pure javascript",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: deliveryfood,
    source_code_link: "https://github.com/sxidsvit/delivery-food",
  },

  {
    name: "AliJSPress",
    description:
      "Simple AliExpress in pure JavaScript",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
    ],
    image: alijspress,
    source_code_link: "https://github.com/sxidsvit/AliJSpress",
  },


  {
    name: "Story Books",
    description:
      "Application for creating public and private stories from your life",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Google OAuth",
        color: "blue-text-gradient",
      },
    ],
    image: storybooks,
    source_code_link: "https://github.com/sxidsvit/storybooks",
  },

];

export { services, technologies, experiences, testimonials, projects };
