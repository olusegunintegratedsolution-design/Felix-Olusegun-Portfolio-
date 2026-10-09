export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  client?: string;
  year?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  features: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    icon: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors: string;
  details: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
}

export const DEVELOPER_PROFILE = {
  name: "Felix Olusegun",
  shortName: "Felix",
  brandName: "Felix Olusegun",
  title: "Full-Stack Web Developer & IT Solutions Specialist",
  tagline: "I build responsive, fast, and modern web applications that help businesses grow.",
  bio: "I am a dedicated full-stack developer with 6+ years of practical experience crafting high-quality web applications, responsive websites, and custom business portals. I specialize in React, PHP, JavaScript, TypeScript, and MySQL to turn client ideas into functional, clean digital solutions.",
  email: "olusegunintegratedsolution@gmail.com",
  phoneNigeria: "08123792226",
  phoneUS: "+1 205 237 1919",
  location: "Lagos, Nigeria & Remote Worldwide",
  availability: "Available for Full-time Roles, Freelance & Contract Projects",
  yearsExperience: "6+",
  projectsCompleted: "10",
  happyClients: "15",
  clientSatisfaction: "100%",
  whatsappNigeria: "https://wa.me/2348123792226?text=Hello%20Felix,%20I%20would%20like%20to%20discuss%20a%20project",
  whatsappUS: "https://wa.me/12052371919?text=Hello%20Felix,%20I%20would%20like%20to%20discuss%20a%20project",
  github: "https://github.com/felix-olusegun",
  linkedin: "https://linkedin.com/in/felix-olusegun",
  twitter: "https://twitter.com/felix_dev",
};

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    icon: "Monitor",
    badge: "Core Service",
    description: "Modern, responsive websites and single-page applications built with React, PHP, JavaScript, and clean CSS.",
    features: [
      "Custom responsive layouts for mobile, tablet, and desktop",
      "Dynamic data-driven web pages with instant loading",
      "Clean semantic code structure and on-page SEO",
      "Cross-browser testing and device compatibility"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Web Solutions",
    icon: "ShoppingCart",
    badge: "High Conversion",
    description: "Custom online storefronts, product catalogs, shopping carts, and secure payment checkout systems.",
    features: [
      "Product management, category filtering, and search",
      "Secure payment gateway integration (Stripe, Paystack, PayPal)",
      "Customer account portals and order history",
      "Automated email receipts and stock tracking"
    ]
  },
  {
    id: "custom-backend",
    title: "Backend Development & APIs",
    icon: "Server",
    badge: "Reliable & Fast",
    description: "Robust backend logic built with PHP and Node.js with secure database architecture and REST APIs.",
    features: [
      "PHP & Node.js server-side scripts and API endpoints",
      "MySQL and PostgreSQL relational database design",
      "User authentication, password encryption, and sessions",
      "Third-party API integrations and webhooks"
    ]
  },
  {
    id: "database-solutions",
    title: "Database Management & MySQL",
    icon: "Database",
    badge: "Data Integrity",
    description: "Relational database structuring, query optimization, data backup routines, and migrations.",
    features: [
      "MySQL schema design, relationships, and indexing",
      "Query performance tuning and speed optimization",
      "Secure data storage and automated backup setups",
      "Database migrations and data import/export"
    ]
  },
  {
    id: "ui-ux",
    title: "Website Redesign & UI/UX",
    icon: "Palette",
    badge: "Modern Look",
    description: "Transform outdated websites into modern, elegant, and mobile-friendly experiences that attract clients.",
    features: [
      "Figma and sketch design translation into clean code",
      "Tailwind CSS styling and responsive grid layouts",
      "Intuitive navigation and accessible typography",
      "Speed optimization and Core Web Vitals boost"
    ]
  },
  {
    id: "it-consulting",
    title: "IT Support & Website Maintenance",
    icon: "Headphones",
    badge: "Ongoing Care",
    description: "Reliable technical assistance, server deployments, domain configurations, bug fixing, and updates.",
    features: [
      "Domain setup, SSL certificate installation, and cPanel",
      "Bug fixes, security updates, and performance patches",
      "Content updates and new feature additions",
      "24/7 technical advisory for growing businesses"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js & Next.js", level: 94, experience: "5 yrs", icon: "Code" },
      { name: "JavaScript (ES6+)", level: 95, experience: "6 yrs", icon: "Terminal" },
      { name: "TypeScript", level: 90, experience: "4 yrs", icon: "FileCode" },
      { name: "Tailwind CSS & CSS3", level: 96, experience: "5 yrs", icon: "Layout" },
      { name: "HTML5 & Web Accessibility", level: 98, experience: "6 yrs", icon: "Globe" },
      { name: "Responsive UI Design", level: 95, experience: "6 yrs", icon: "Smartphone" }
    ]
  },
  {
    category: "Backend & Server",
    skills: [
      { name: "PHP (Core & OOP)", level: 90, experience: "5 yrs", icon: "Server" },
      { name: "Node.js & Express", level: 88, experience: "5 yrs", icon: "Cpu" },
      { name: "RESTful APIs", level: 92, experience: "5 yrs", icon: "Network" },
      { name: "Authentication & Security", level: 88, experience: "5 yrs", icon: "Lock" }
    ]
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "MySQL Database", level: 92, experience: "5 yrs", icon: "Database" },
      { name: "PostgreSQL & SQL", level: 86, experience: "4 yrs", icon: "HardDrive" },
      { name: "MongoDB", level: 82, experience: "3 yrs", icon: "Layers" }
    ]
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Git & GitHub", level: 94, experience: "6 yrs", icon: "GitBranch" },
      { name: "cPanel & Web Hosting", level: 92, experience: "5 yrs", icon: "Globe" },
      { name: "Docker & VPS Servers", level: 80, experience: "3 yrs", icon: "Box" },
      { name: "Figma to Code Implementation", level: 92, experience: "4 yrs", icon: "Palette" }
    ]
  }
];

/**
 * =========================================================================
 * FEATURED PROJECTS (7 - 10 WEBPAGES)
 * =========================================================================
 * HOW TO ADD OR UPDATE YOUR WEBPAGES & LINKS:
 * You can easily add more projects below by copying an object and providing:
 * - title: The name of the project
 * - category: Category tag (e.g. 'E-Commerce', 'Corporate', 'Healthcare', etc.)
 * - description: What the webpage does
 * - image: Path to your screenshot/interface image
 * - liveUrl: The link to visit the website
 * - tags: Technologies used (e.g. ['React', 'PHP', 'MySQL'])
 * =========================================================================
 */
export const FEATURED_PROJECTS: Project[] = [
  {
    id: "technova-corporate",
    title: "TechNova IT Solutions & Software Portal",
    category: "Corporate & Agency",
    description: "Modern enterprise IT agency website featuring dynamic services, client quote calculators, and interactive case study showcases.",
    image: "/src/assets/images/tech_laptop_workspace_1791525812281.jpg",
    tags: ["React", "Tailwind CSS", "PHP", "MySQL", "JavaScript"],
    liveUrl: "https://demo.technova-solutions.com",
    githubUrl: "https://github.com/felix-olusegun/technova-portal",
    client: "TechNova Group",
    year: "2025"
  },
  {
    id: "luxe-ecommerce",
    title: "Nova Tech E-Commerce Store & Checkout",
    category: "E-Commerce",
    description: "Full-featured online store with real-time product search, inventory status, shopping cart, and secure checkout processing.",
    image: "/src/assets/images/project_ecommerce_preview_1791525825032.jpg",
    tags: ["React", "PHP", "MySQL", "Tailwind CSS", "Stripe API"],
    liveUrl: "https://demo.novatech-store.com",
    githubUrl: "https://github.com/felix-olusegun/nova-ecommerce",
    client: "Nova Retail Brand",
    year: "2025"
  },
  {
    id: "cryptovault-dashboard",
    title: "CryptoVault Real-Time Asset Dashboard",
    category: "Fintech",
    description: "High-performance financial web portal with live price updates, interactive charts, transaction ledgers, and portfolio analytics.",
    image: "/src/assets/images/project_crypto_dashboard_1791525836448.jpg",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "Tailwind CSS"],
    liveUrl: "https://demo.cryptovault-dashboard.io",
    githubUrl: "https://github.com/felix-olusegun/cryptovault-fintech",
    client: "FinFlow Capital",
    year: "2024"
  },
  {
    id: "sprintly-management",
    title: "Sprintly Collaborative Task & Project Board",
    category: "Web Application",
    description: "Team productivity suite with drag-and-drop task boards, sprint progress analytics, milestone tracking, and user role management.",
    image: "/src/assets/images/project_task_management_1791525846300.jpg",
    tags: ["React", "JavaScript", "PHP", "MySQL", "Tailwind CSS"],
    liveUrl: "https://demo.sprintly-app.dev",
    githubUrl: "https://github.com/felix-olusegun/sprintly-app",
    client: "Productivity Works",
    year: "2024"
  },
  {
    id: "novaclinic-care",
    title: "NovaClinic Health & Appointment System",
    category: "Healthcare",
    description: "Medical clinic portal enabling patients to browse specialized doctors, book appointments, and review hospital service packages.",
    image: "/src/assets/images/tech_laptop_workspace_1791525812281.jpg",
    tags: ["React", "PHP", "MySQL", "Tailwind CSS"],
    liveUrl: "https://demo.novaclinic-care.org",
    githubUrl: "https://github.com/felix-olusegun/novaclinic-web",
    client: "Nova Healthcare Centre",
    year: "2024"
  },
  {
    id: "apex-realty",
    title: "Apex Realty Property Listings & Tour Portal",
    category: "Real Estate",
    description: "Modern real estate platform with neighborhood filters, high-resolution property galleries, mortgage calculators, and agent contact.",
    image: "/src/assets/images/project_ecommerce_preview_1791525825032.jpg",
    tags: ["JavaScript", "PHP", "MySQL", "Tailwind CSS"],
    liveUrl: "https://demo.apex-realty.com",
    githubUrl: "https://github.com/felix-olusegun/apex-realty",
    client: "Apex Real Estate Ltd.",
    year: "2023"
  },
  {
    id: "swift-logistics",
    title: "SwiftLogistics Courier & Shipment Tracker",
    category: "Logistics",
    description: "Logistics tracking website allowing customers to track package status live, calculate shipping rates, and schedule doorstep pick-up.",
    image: "/src/assets/images/project_task_management_1791525846300.jpg",
    tags: ["React", "Node.js", "MySQL", "REST APIs"],
    liveUrl: "https://demo.swiftlogistics-express.com",
    githubUrl: "https://github.com/felix-olusegun/swift-logistics",
    client: "Swift Express Couriers",
    year: "2023"
  },
  {
    id: "artisan-bistro",
    title: "Artisan Bistro Restaurant & Table Reservations",
    category: "Hospitality & Food",
    description: "Elegant restaurant website with interactive culinary menus, private dining reservation forms, and online takeaway orders.",
    image: "/src/assets/images/tech_laptop_workspace_1791525812281.jpg",
    tags: ["React", "Tailwind CSS", "JavaScript", "PHP"],
    liveUrl: "https://demo.artisan-bistro.com",
    githubUrl: "https://github.com/felix-olusegun/artisan-bistro",
    client: "Artisan Bistro",
    year: "2023"
  },
  {
    id: "eduportal-academy",
    title: "EduPortal Online Learning & Course Academy",
    category: "Education",
    description: "E-learning platform featuring course catalogs, student registration, instructor profiles, and video lesson access.",
    image: "/src/assets/images/project_ecommerce_preview_1791525825032.jpg",
    tags: ["React", "PHP", "MySQL", "Tailwind CSS"],
    liveUrl: "https://demo.eduportal-academy.edu",
    githubUrl: "https://github.com/felix-olusegun/eduportal-web",
    client: "EduPortal Learning",
    year: "2022"
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Web Developer & Consultant",
    company: "Freelance & Independent Client Work",
    period: "2022 - Present",
    location: "Lagos, Nigeria & Remote",
    description: "Building custom web applications, e-commerce stores, and corporate websites for business owners, tech founders, and SMEs.",
    achievements: [
      "Completed 10+ end-to-end web projects delivered on time and within agreed budget.",
      "Engineered reliable database structures using MySQL and backend API integrations with PHP and Node.js.",
      "Implemented responsive mobile-friendly UI designs with React and Tailwind CSS.",
      "Provided ongoing technical support, cPanel web server setup, and domain management for 15+ satisfied clients."
    ],
    technologies: ["React", "PHP", "JavaScript", "TypeScript", "MySQL", "Tailwind CSS", "Git", "cPanel"]
  },
  {
    id: "exp-2",
    role: "Software Developer",
    company: "CodeCraft Digital Studio",
    period: "2020 - 2022",
    location: "Lagos, Nigeria",
    description: "Collaborated in developing dynamic client websites, database integrations, and customer portals.",
    achievements: [
      "Built clean, modular React frontend interfaces and connected them to secure PHP/MySQL backends.",
      "Optimized website asset sizes and database queries, boosting page speed and customer engagement.",
      "Integrated payment gateways including Paystack, Stripe, and bank transfer verifications."
    ],
    technologies: ["JavaScript", "React", "PHP", "MySQL", "HTML5", "CSS3", "REST APIs"]
  },
  {
    id: "exp-3",
    role: "Junior Web Developer",
    company: "Apex Tech Integrations",
    period: "2018 - 2020",
    location: "Lagos, Nigeria",
    description: "Designed responsive web pages, updated existing client websites, and managed database backups.",
    achievements: [
      "Constructed clean website layouts from Figma and Photoshop mockups.",
      "Handled domain registrations, email configurations, and WordPress/PHP maintenance.",
      "Assisted senior engineers with MySQL database queries and routine site maintenance."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Lagos",
    period: "2015 - 2019",
    location: "Lagos, Nigeria",
    honors: "Honors Graduate",
    details: "Specialized in Software Engineering, Database Systems, Web Technologies, Data Structures, and Computer Networking."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Meta Certified Front-End Developer Professional",
    issuer: "Meta",
    issueDate: "2023",
    credentialId: "META-FED-5591039",
    verifyUrl: "https://coursera.org/verify/meta"
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2024",
    credentialId: "AWS-SAA-8492041",
    verifyUrl: "https://aws.amazon.com/verification"
  },
  {
    title: "MySQL Database Administrator Specialist",
    issuer: "Oracle / MySQL Academy",
    issueDate: "2023",
    credentialId: "MYSQL-DBA-49102",
    verifyUrl: "https://oracle.com/certification"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Johnson",
    role: "Managing Director",
    company: "TechStart Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    content: "Felix is a reliable and talented developer who delivers high-quality work on time. He created an outstanding website for our business, and his communication throughout the project was transparent and helpful.",
    rating: 5,
    project: "Corporate Web Portal"
  },
  {
    id: "test-2",
    name: "Ahmed Raza",
    role: "Chief Executive Officer",
    company: "Future Solutions Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "Working with Felix on our e-commerce platform was seamless. He set up the PHP backend, MySQL database, and payment gateway cleanly. We've had zero downtime since launch.",
    rating: 5,
    project: "E-Commerce Web Store"
  },
  {
    id: "test-3",
    name: "Marcus Vance",
    role: "Product Lead",
    company: "FinFlow Payments",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    content: "Felix's work on our real-time dashboard was fantastic. He writes clean, organized code and explains technical decisions clearly. Highly recommended!",
    rating: 5,
    project: "Web Dashboard Project"
  }
];

export const LANDING_PAGES = [
  { id: "home", label: "Home Overview", icon: "Home", kicker: "01. Main Landing" },
  { id: "about", label: "About Me", icon: "User", kicker: "02. Background" },
  { id: "services", label: "IT Services", icon: "Briefcase", kicker: "03. Solutions" },
  { id: "skills", label: "Skills Mastery", icon: "Code", kicker: "04. Tech Stack" },
  { id: "projects", label: "Featured Projects (9)", icon: "FolderKanban", kicker: "05. Live Webpages" },
  { id: "experience", label: "Career Journey", icon: "Clock", kicker: "06. Experience" },
  { id: "education", label: "Education & Certs", icon: "GraduationCap", kicker: "07. Credentials" },
  { id: "testimonials", label: "Client Reviews", icon: "Star", kicker: "08. Reviews" },
  { id: "cv", label: "CV & Resume Hub", icon: "Download", kicker: "09. Word .docx CV" },
  { id: "contact", label: "Contact & WhatsApp", icon: "Mail", kicker: "10. Get in Touch" }
] as const;
