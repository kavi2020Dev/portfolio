
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
  portfolio: "kavi-dev-portfolio.vercel.app",
  bio: "Frontend Engineer with 4+ years of experience independently architecting and shipping 12+ production-grade applications across ERP, healthcare, e-commerce, and advertising. Proven ability to own full development cycles — from system design and UI architecture to deployment and performance optimization. Deep expertise in React, Next.js, TypeScript, React Native, and Electron.js.",
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
    role: "Frontend Developer",
    period: "Jan 2022 – Present",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Full-time",
    description:
      "Independently architected and delivered 12+ production applications across web, mobile, and desktop platforms — consistently owning full development cycles from UI design to production deployment.",
    highlights: [
      "Built Ads Player (Next.js · TypeScript · Zustand · Tanstack Query) — a web platform for dynamic advertisement playlist management, time-based content scheduling, and real-time backend synchronization.",
      "Engineered POS Sales Billing Counter (React · Electron.js · Zustand · Tanstack Query) with offline-capable billing, barcode-based product search, thermal receipt printing, and automated daily sales reporting.",
      "Architected two enterprise ERP systems — FMCG and Textile — (React · TypeScript · MUI · Redux · Node.js · PostgreSQL) covering full inventory, procurement, dynamic pricing, supplier management, and executive reporting.",
      "Led end-to-end development of a Healthcare Platform: React Native Doctor Mobile App and React web back-office for EHR management, appointment scheduling, and clinical communications.",
      "Developed Boomerang Backoffice (Next.js · ShadCN · Tanstack Query · TypeScript) with role-based admin dashboards, master configuration panels, and multi-step operational workflow automation.",
      "Shipped a full E-Commerce Platform with Razorpay secure payment integration, Google Maps delivery routing, and inventory-synced order management.",
      "Built and maintained a shared component library and design system reused across multiple products — improving UI consistency and reducing per-feature development time.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "React Native", "Electron.js", "Node.js", "PostgreSQL", "ShadCN UI", "Zustand", "Tanstack Query"],
  },
  {
    id: 2,
    company: "Rigel Soft Technologies",
    role: "Frontend Developer Intern",
    period: "Jun 2021 – Dec 2021",
    location: "India",
    type: "Full-time",
    description:
      "Developed key UI modules for a Healthcare web application and rapidly progressed to independently building complete React feature modules within a 6-month internship.",
    highlights: [
      "Developed key UI modules — including Workout Plan and Diet Plan features — using React, MUI, and Tailwind CSS, delivering responsive and user-friendly interfaces.",
      "Improved application performance and accessibility by conducting systematic Lighthouse audits, resolving rendering bottlenecks, optimizing assets, and applying WCAG best practices.",
      "Progressed from foundational HTML, CSS, and JavaScript to independently building complete React feature modules within 6 months — demonstrating rapid technical growth.",
    ],
    technologies: ["React", "JavaScript", "MUI", "Tailwind CSS"],
  },
]

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Ads Player",
    subtitle: "Advertisement Web Platform",
    category: "Web Platform",
    description:
      "Full-featured web platform for dynamic advertisement content management with playlist creation, time-based scheduling rules, and real-time backend sync.",
    bullets: [
      "Designed and built a full-featured platform for advertisement content management with dynamic playlist creation, time-based scheduling rules, and real-time backend sync via Tanstack Query.",
      "Implemented type-safe architecture using Next.js App Router and TypeScript strict mode; Zustand manages global playback state and scheduling queues with zero prop-drilling.",
    ],
    technologies: ["Next.js", "TypeScript", "Zustand", "Tanstack Query"],
  },
  {
    id: 2,
    title: "POS Sales Billing",
    subtitle: "Desktop Application",
    category: "Desktop App",
    description:
      "Complete offline-capable point-of-sale system with barcode product lookup, discount engine, thermal receipt printing, and shift-end sales summaries via Electron.js.",
    bullets: [
      "Delivered a complete POS system with barcode product lookup, multi-item cart, discount engine, thermal receipt printing, and shift-end sales summaries — fully offline-capable via Electron.js.",
      "Tanstack Query handles real-time inventory sync and optimistic updates; Zustand manages transaction state for a fast, reliable billing flow under intermittent connectivity.",
    ],
    technologies: ["React", "Electron.js", "Zustand", "Tanstack Query", "Node.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Boomerang Backoffice",
    subtitle: "Enterprise Admin Platform",
    category: "Back Office",
    description:
      "Role-based admin dashboards with real-time KPI views, master configuration panels, and multi-step operational workflows with full form validation.",
    bullets: [
      "Independently built both core modules: role-based admin dashboards with real-time KPI views, master configuration panels, and multi-step operational workflows.",
      "Leveraged Tanstack Query for paginated data tables, optimistic mutations, and cache invalidation — achieving smooth UX across large datasets without custom fetching boilerplate.",
    ],
    technologies: ["Next.js", "TypeScript", "ShadCN UI", "Tanstack Query"],
  },
  {
    id: 4,
    title: "FMCG & Textile ERP",
    subtitle: "Enterprise Resource Planning",
    category: "ERP System",
    description:
      "Complete module architecture for two production ERP systems — procurement workflows, multi-level inventory tracking, dynamic pricing rules, and management-level reporting.",
    bullets: [
      "Designed complete module architecture for two production ERP systems — procurement workflows, multi-level inventory tracking, dynamic pricing rules, supplier onboarding, and reporting dashboards.",
      "Created a shared reusable component library and design token system used across both ERPs, enabling consistent UI patterns and significantly faster delivery of new modules.",
    ],
    technologies: ["React", "TypeScript", "MUI", "Redux", "Node.js", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Healthcare Platform",
    subtitle: "Web & Mobile",
    category: "Healthcare",
    description:
      "Cross-platform healthcare system: React web back-office for clinic administrators and React Native Doctor Mobile App with EHR access, scheduling, and in-app messaging.",
    bullets: [
      "Built a cross-platform healthcare system: a React web back-office for clinic administrators and a React Native Doctor Mobile App — featuring live appointment scheduling, EHR access, patient records, and in-app messaging.",
    ],
    technologies: ["React", "React Native", "MUI", "Redux", "Native Paper"],
  },
]

export const SKILLS_DATA: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "React Native", "Electron.js", "TypeScript", "JavaScript (ES2023+)", "HTML5", "CSS3"],
  "Backend & DB": ["Node.js", "PostgreSQL", "REST APIs", "SQL", "Jest"],
  "UI Libraries": ["MUI", "ShadCN UI", "Tailwind CSS", "Native Paper", "Framer Motion"],
  "State & Tools": ["Zustand", "Tanstack Query", "Redux", "React Query", "Git", "GitHub", "Lighthouse", "Agile"],
}

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "BSc Computer Science",
    institution: "Bharathidasan University",
    period: "2024 – 2027",
    description: "Distance education complementing hands-on experience in algorithms, software engineering, and modern web technologies.",
    achievement: undefined,
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Ramakrishna Mission Polytechnic College",
    period: "2017 – 2020",
    description: undefined,
    achievement: "Scored 75/75 in Web Technology — ranked among top performers in the department.",
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
