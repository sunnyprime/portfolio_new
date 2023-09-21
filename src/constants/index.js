import {
  mobile,
  backend,
  creator,
  web,
  vintage,
  kisankart,
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
  AIecom,
  bnb
  
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Blockchain Developer',
    icon: backend,
  },
  {
    title: 'Metaverse Explorer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'IT Bussiness Solution',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'April 2018 - February 2020',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Nextjs Developer',
    company_name: 'Brick & Bolt',
    icon: bnb,
    iconBg: '#E6DEDD',
    date: 'February 2020 - April 2020',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Technical Analyst',
    company_name: 'Infosys',
    icon: shopify,
    iconBg: '#383E56',
    date: 'December 2020 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },

];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Wayne Zawer',
    designation: 'Digital CPO',
    company: 'P/L Optimization',
    image: 'https://media.licdn.com/dms/image/C5103AQGLGrpHWk0NSg/profile-displayphoto-shrink_800_800/0/1581549984015?e=1700697600&v=beta&t=vJ69HW2aLLxZser9xrRv-LgVvqlbwXCeIDgwWJ_NMzE',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Brayden Knowel',
    designation: 'Buisness Analyst',
    company: 'HUB24 LTD',
    image: 'https://media.licdn.com/dms/image/D5603AQGHoz3bdV-bLQ/profile-displayphoto-shrink_400_400/0/1632638956076?e=1700697600&v=beta&t=n2Ec5xEkejKCOUdikjg5lx8w-fOOCuQC3A-71rMgpRg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lissette Villaflores',
    designation: 'Senior Business Analyst',
    company: 'Westpac',
    image: 'https://media.licdn.com/dms/image/C5603AQFFNECnNuKNwQ/profile-displayphoto-shrink_400_400/0/1628736126262?e=1700697600&v=beta&t=McKPoAIjvrWxaTyDFp7dsocUAoyVF7tJjAr0EmyS02k',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: kisankart,
    source_code_link: 'https://cranky-poitras-25ca35.netlify.app/',
  },
  {
    name: 'Cloths selling Ecommerce',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'styled',
        color: 'pink-text-gradient',
      },
    ],
    image: AIecom,
    source_code_link: 'https://rad-empanada-7ba46c.netlify.app/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: vintage,
    source_code_link: 'https://relaxed-mcnulty-3c04c2.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
