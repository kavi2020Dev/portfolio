
export const MOBILE = 768

export const INFO_DATA = {
  title: "Kavi K — Portfolio",
  name: "Kavi",
}

export const PERSONAL_INFO = {
  name: "Kavi K",
  title: "Frontend Engineer",
  email: "kavi.react@gmail.com",
  phone: "+91 99522 84550",
  location: "Ramanathapuram, India",
  linkedin: "https://www.linkedin.com/in/kavi-k-41ab8224b",
  bio: "Frontend Developer with 4+ years of experience building scalable web, mobile, and desktop applications. I focus on understanding JavaScript at a deep, machine-level to write predictable, optimized, and maintainable code.",
  awards: ["Elite Developer Certificate", "Best Teamwork Award"],
}

export const STATS = [
  { value: "4+", numericValue: 4, suffix: "+", label: "Years Experience" },
  { value: "12+", numericValue: 12, suffix: "+", label: "Projects Built" },
  { value: "2", numericValue: 2, suffix: "", label: "Companies" },
  { value: "2", numericValue: 2, suffix: "", label: "Awards Won" },
]

export const NAV_DATA = [
  { name: "Home",       link: "#home",       isActive: ["", "home"] },
  { name: "About",      link: "#about",      isActive: ["about"] },
  { name: "Experience", link: "#experience", isActive: ["experience"] },
  { name: "Projects",   link: "#projects",   isActive: ["projects"] },
  { name: "Skills",     link: "#skills",     isActive: ["skills"] },
  { name: "Services",   link: "#services",   isActive: ["services"] },
]

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Bluekode Solutions",
    role: "Web Developer",
    period: "2022 – Present",
    description:
      "Developed and maintained production-level applications across web, mobile, and desktop. Led the Doctor Mobile App (React Native) with medical web back-office, built Textile ERP (React + Node.js + PostgreSQL), Ads Player module, e-commerce platform, and cross-platform Electron.js desktop apps.",
    technologies: ["React", "Next.js", "TypeScript", "React Native", "Electron.js", "Node.js", "PostgreSQL", "ShadCN"],
  },
  {
    id: 2,
    company: "Rigel Soft Technologies",
    role: "Frontend Developer Intern",
    period: "2021 – 2022",
    description:
      "Started with foundational web development and grew into React.js as project scope expanded. Built fitness-related UI modules with React, MUI, and Tailwind, and improved performance through Lighthouse optimizations.",
    technologies: ["React", "JavaScript", "MUI", "Tailwind CSS"],
  },
]

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "FMCG & Fruits/Veg ERP",
    category: "ERP System",
    description:
      "Complete ERP with full module architecture — inventory, procurement, pricing, supplier management, order processing, and reporting. Clean, responsive interface.",
    technologies: ["React", "MUI", "Redux", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Textile ERP",
    category: "ERP System",
    description:
      "Full-featured ERP with scalable frontend architecture, reusable components, optimized state management, and efficient Node.js + PostgreSQL backend integration.",
    technologies: ["React", "MUI", "Redux", "Node.js", "TypeScript"],
  },
  {
    id: 3,
    title: "Healthcare System",
    category: "Healthcare",
    description:
      "Medical web back-office and Doctor Mobile App for managing appointments, patient data, EHR, and communications. Full React + React Native stack.",
    technologies: ["React", "MUI", "Redux", "React Native", "Native Paper"],
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Full-featured online store with product listings, cart, checkout, Google Maps API for location features, and Razorpay for secure payment processing.",
    technologies: ["React", "MUI", "Redux", "Google Maps API", "Razorpay"],
  },
  {
    id: 5,
    title: "Boomerang Backoffice",
    category: "Back Office",
    description:
      "Scalable dashboards, master configurations, and operational workflows with smooth API communication and optimised data handling via React Query.",
    technologies: ["Next.js", "ShadCN", "React Query", "TypeScript"],
  },
]

export const SKILLS_DATA: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "React Native", "JavaScript", "TypeScript", "Electron.js"],
  "Backend & DB": ["Node.js", "PostgreSQL", "REST API", "Jest"],
  "UI Libraries": ["MUI", "ShadCN", "Tailwind CSS", "Native Paper", "Framer Motion"],
  "State & Tools": ["Tanstack Query", "Zustand", "Redux", "Git", "Lighthouse"],
}

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "BSc Computer Science",
    institution: "Bharathidasan University",
    period: "2024–2027",
    description: "Distance education complementing hands-on experience in algorithms, software engineering, and modern web technologies.",
    achievement: undefined,
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Ramakrishna Mission Polytechnic College",
    period: "2017–2020",
    description: undefined,
    achievement: "Scored 75/75 in Web Technology — top performer in the department.",
  },
]

export const SERVICES = [
  {
    id: 1,
    title: "Product Strategy",
    description: "Define product vision, roadmap, and execution strategy to align with business goals.",
    icon: "strategy",
    link: "/product-strategy",
  },
  {
    id: 2,
    title: "MVP Development",
    description: "Build fast, scalable minimum viable products to validate ideas quickly.",
    icon: "mvp",
    link: "/mvp-development",
  },
  {
    id: 3,
    title: "Web App Development",
    description: "Develop high-performance, secure, and scalable web applications.",
    icon: "web-app",
    link: "/web-app-development",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Create cross-platform and native mobile applications with great UX.",
    icon: "mobile",
    link: "/mobile-app-development",
  },
  {
    id: 5,
    title: "API & Backend Development",
    description: "Design and build robust APIs, databases, and server-side logic.",
    icon: "backend",
    link: "/backend-development",
  },
  {
    id: 6,
    title: "Product Scaling",
    description: "Optimize performance, improve architecture, and scale products efficiently.",
    icon: "scaling",
    link: "/product-scaling",
  },
  {
    id: 7,
    title: "Maintenance & Support",
    description: "Ongoing monitoring, updates, and improvements for long-term success.",
    icon: "support",
    link: "/maintenance-support",
  },
  {
    id: 8,
    title: "UI Integration",
    description: "Convert designs into clean, responsive, and pixel-perfect interfaces.",
    icon: "ui",
    link: "/ui-integration",
  },
  {
    id: 9,
    title: "Tech Consulting",
    description: "Get expert advice on architecture, tools, and best development practices.",
    icon: "consulting",
    link: "/tech-consulting",
  },
]
