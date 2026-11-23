import type { Content } from "./types";

export const en: Content = {
  nav: {
    contents: "Contents",
    skip: "Skip to content",
    switchLanguage: "العربية",
    switchLanguageLabel: "Switch to Arabic",
    cv: "CV",
    sections: {
      figures: "Key figures",
      expertise: "Expertise",
      products: "Products",
      experience: "Experience",
      credentials: "Credentials",
      contact: "Contact",
    },
  },
  cover: {
    kicker: "Career report, 2018 – 2026",
    location: "Riyadh, Saudi Arabia",
    name: "Abdulmalik Almasud",
    otherName: "عبدالملك المسعود",
    headline: "Finance & AI Transformation",
    disciplines: [
      { label: "SAP S/4HANA FI/CO", segment: "finance" },
      { label: "Oracle ERP", segment: "finance" },
      { label: "Full-stack development", segment: "engineering" },
      { label: "Applied AI & automation", segment: "ai" },
    ],
    intro:
      "I combine accounting expertise, enterprise finance systems and software engineering to build practical, AI-enabled solutions. My work spans SAP S/4HANA FI/CO and Oracle ERP support, business process improvement, full-stack development and LLM-powered product features.",
    ctaPrimary: "Download CV",
    ctaSecondary: "Get in touch",
  },
  chart: {
    title: "Career by segment",
    asAt: "As at November 2026",
    now: "Now",
    legend: {
      work: "Role or product",
      study: "Study or programme",
      milestone: "Milestone",
      now: "Today",
    },
    lanes: {
      finance: "Finance & ERP",
      engineering: "Engineering",
      ai: "Applied AI",
    },
    items: {
      degree: { label: "B.Sc. Accounting", period: "2018 – 2022" },
      mayyar: { label: "Mayyar · General Accountant", period: "Dec 2021 – Dec 2022" },
      ypp: { label: "SAP YPP", period: "Jul – Sep 2024" },
      almanara: { label: "Almanara · Oracle support", period: "Jul – Nov 2024" },
      momah: { label: "MoMAH · SAP FI/CO & Oracle", period: "Jan 2025 – now" },
      vat: { label: "SOCPA VAT exam", period: "Passed Dec 2025" },
      automation: { label: "Python ERP automation", period: "2021 – 2022" },
      sda: { label: "SDA bootcamp · 520 h", period: "Aug – Nov 2024" },
      pioneers: { label: "Pioneers.dev · Founder", period: "2024 – now" },
      shihab: { label: "Shihab", period: "2026 – now" },
      postwave: { label: "PostWave.ai", period: "2025 – now" },
      moeen: { label: "Moeen.ai", period: "2026 – now" },
      aiInitiatives: { label: "MoMAH AI initiatives", period: "Current" },
    },
  },
  segmentNames: {
    finance: "Finance & ERP",
    engineering: "Full-stack engineering",
    ai: "Applied AI & automation",
    delivery: "Analysis & delivery",
  },
  notesUi: {
    note: "Note",
    close: "Close note",
    goTo: "Go to the entry",
    source: "Source",
    open: "Open note",
  },
  notes: {
    sar50k: {
      title: "SAR 50,000+ in corrected entries",
      body: "While reconciling supplier accounts, identified and corrected more than SAR 50,000 in erroneous accounting entries.",
      source: "General Accountant · Mayyar United Catering Co. · Dec 2021 – Dec 2022",
    },
    suppliers: {
      title: "150+ supplier accounts",
      body: "Reconciled supplier accounts for more than 150 vendors to keep payables and financial records accurate, and processed supplier invoices, payments and transactions in Oracle ERP.",
      source: "General Accountant · Mayyar United Catering Co. · Dec 2021 – Dec 2022",
    },
    changeRequests: {
      title: "About seven change requests a month",
      body: "Finance-user and stakeholder requirements become formal change requests: around seven new requests each month on top of an ongoing backlog. Delivery is coordinated with the external vendor, and stakeholders are kept updated.",
      source: "SAP FI/CO & Oracle Support · MoMAH · Jan 2025 – now",
    },
    products: {
      title: "Three commercial products",
      body: "Shihab (multi-tenant restaurant ordering), PostWave.ai (AI content creation and scheduling) and Moeen.ai (AI WhatsApp customer support). I own the architecture, planning, testing and deployment of each; the current status of every product is stated on it.",
      source: "Founder · Pioneers.dev · 2024 – now",
    },
    bootcamp: {
      title: "520 hours of engineering training",
      body: "Saudi Digital Academy C# & React.js Full-Stack Development Bootcamp: 520 hours of hands-on C#, ASP.NET Core and React, with best final project recognition.",
      source: "Saudi Digital Academy · Aug – Nov 2024",
    },
    ts410: {
      title: "94% on TS410",
      body: "Exam score for SAP Certified Associate – Business Process Integration with SAP S/4HANA (TS410).",
      source: "SAP certification",
    },
    uat: {
      title: "UAT in pre-production",
      body: "User acceptance testing in pre-production for financial changes, including fixed assets, SAP Fiori / SAP GUI and ERP integration scenarios.",
      source: "SAP FI/CO & Oracle Support · MoMAH · Jan 2025 – now",
    },
    aiInitiatives: {
      title: "Departmental AI initiatives",
      body: "Selected to coordinate and develop AI initiatives within the department: identifying opportunities, then following proposed solutions and their implementation progress.",
      source: "SAP FI/CO & Oracle Support · MoMAH · Jan 2025 – now",
    },
    automation: {
      title: "400% efficiency gain",
      body: "Wrote a Python automation script for the ERP system that improved work efficiency by 400%.",
      source: "General Accountant · Mayyar United Catering Co. · Dec 2021 – Dec 2022",
    },
  },
  figures: {
    title: "Key figures",
    intro: "Numbers from the roles I have held and the work I have delivered. Each note links back to its source.",
    lead: {
      prefix: "SAR",
      value: "50,000+",
      label: "in erroneous accounting entries identified and corrected",
      context: "General Accountant, Mayyar United Catering Co.",
    },
    items: [
      { note: "suppliers", value: "150+", label: "supplier accounts reconciled" },
      { note: "changeRequests", value: "~7", label: "new change requests a month, plus the backlog" },
      { note: "products", value: "3", label: "commercial software products built end to end" },
      { note: "bootcamp", value: "520 h", label: "of full-stack training, best final project" },
      { note: "ts410", value: "94%", label: "on the SAP S/4HANA TS410 certification exam" },
    ],
  },
  expertise: {
    title: "Expertise",
    intro: "Four segments that work as one: the finance problem, the system it lives in, the software that solves it, and the delivery that gets it adopted.",
    toolsLabel: "Tools",
    segments: {
      finance: {
        statement: "Accounting judgment, applied inside enterprise systems.",
        items: [
          { text: "SAP S/4HANA FI/CO and Oracle ERP support in a government finance environment" },
          { text: "Incident diagnosis and root-cause analysis for transaction errors and access issues" },
          { text: "Change requests and UAT for fixed assets, SAP Fiori / SAP GUI and integration scenarios", note: "uat" },
          { text: "Accounts payable, supplier reconciliation and VAT", note: "suppliers" },
        ],
        tools: "SAP S/4HANA FI/CO · SAP Fiori · SAP GUI · Oracle ERP · Excel",
      },
      engineering: {
        statement: "I design, build, test and deploy the software myself.",
        items: [
          { text: "Architecture, planning and engineering decisions for commercial SaaS platforms" },
          { text: "Front ends in Next.js, React and TypeScript" },
          { text: "Back ends in C# / ASP.NET Core and Node.js, with REST API integrations" },
          { text: "PostgreSQL, Supabase and MongoDB; testing, debugging and deployment" },
        ],
        tools: "Next.js · React · TypeScript · C# · ASP.NET Core · Node.js · Python · PostgreSQL · MongoDB",
      },
      ai: {
        statement: "LLM features built into products, not bolted on.",
        items: [
          { text: "AI replies over WhatsApp, grounded in a business's own knowledge (Moeen.ai)" },
          { text: "Arabic and English content generation with scheduled publishing (PostWave.ai)" },
          { text: "Workflow automation with background workers and scheduled jobs" },
          { text: "Coordinating departmental AI initiatives at MoMAH", note: "aiInitiatives" },
          { text: "Working knowledge of LLM fine-tuning methods and model customization" },
        ],
        tools: "OpenAI API · Google Gemini API · WhatsApp (Baileys) · Python",
      },
      delivery: {
        statement: "From a user's problem to a change that ships.",
        items: [
          { text: "Requirements gathering with finance users, stakeholders and clients" },
          { text: "About seven new change requests a month, plus backlog management", note: "changeRequests" },
          { text: "Vendor coordination and progress reporting" },
          { text: "Client scoping, delivery and ongoing improvements" },
          { text: "Support documentation and user guidance" },
        ],
        tools: "Requirements · Change management · UAT · Stakeholder and vendor coordination",
      },
    },
    methodTitle: "How I use AI to build",
    method:
      "AI coding assistants speed up implementation. The architecture, engineering decisions, testing and validation of every line that ships stay with me. Separately, some of my products put LLMs in front of users as features.",
  },
  products: {
    title: "Products",
    intro: "Software I designed, built and run under Pioneers.dev: what each product does, how it is built, and what isn't built yet.",
    labels: {
      status: "Status",
      role: "My role",
      system: "System",
      aiLegend: "AI component",
      built: "Built",
      notBuilt: "Not built yet",
      layers: {
        users: "Who uses it",
        app: "Application",
        services: "Services & data",
        external: "External services",
      },
    },
    items: {
      shihab: {
        tagline: "Multi-tenant restaurant ordering platform",
        status: "Client pilot",
        summary:
          "An Arabic-first ordering platform where each restaurant is a tenant with its own branches, menus and orders. Customers order for delivery or pickup, merchants run their branches, and drivers handle deliveries, all on one platform.",
        role: [
          "Multi-tenant data model and system architecture",
          "All four surfaces: customer, merchant, driver and admin",
          "WhatsApp notification and scheduling workers",
          "Client requirements and pilot delivery",
        ],
        system: {
          users: [
            { name: "Customers", detail: "Order per restaurant, delivery or pickup" },
            { name: "Merchants", detail: "Branches, menus and orders" },
            { name: "Drivers", detail: "Delivery workflow" },
            { name: "Admin", detail: "Platform operations" },
          ],
          app: [{ name: "Next.js web app", detail: "One app, four role-based surfaces, Arabic and English" }],
          services: [
            { name: "Supabase · Postgres", detail: "Tenants → branches → orders" },
            { name: "WhatsApp worker", detail: "Baileys; order notifications" },
            { name: "Scheduler", detail: "Timed jobs with node-cron" },
          ],
          external: [
            { name: "Google Maps", detail: "Locations and delivery distance" },
            { name: "Cloudinary", detail: "Menu images" },
          ],
        },
        built: [
          "Tenants with multiple branches",
          "Delivery and pickup per branch",
          "Driver workflow",
          "WhatsApp order notifications",
          "VAT calculated from gross prices",
        ],
        notBuilt: [
          "Online card payments (pay on delivery for now)",
          "ZATCA e-invoicing",
          "Native mobile app",
        ],
      },
      postwave: {
        tagline: "AI-assisted social content and scheduling",
        status: "Live, in active development",
        summary:
          "A SaaS for Saudi and GCC businesses: add products once, and PostWave generates on-brand images, carousels, videos and captions in Arabic or English, then schedules and publishes them.",
        role: [
          "Product architecture and the full Next.js application",
          "LLM and image-model integration for content generation",
          "Scheduling, auto-posting and publishing pipeline",
          "Subscription billing integration",
        ],
        system: {
          users: [
            { name: "Businesses & agencies", detail: "Brands, products, content calendar" },
            { name: "Visitors", detail: "Marketing site and demo" },
            { name: "Admin", detail: "Accounts and operations" },
          ],
          app: [{ name: "Next.js app", detail: "Dashboard, API routes and scheduled jobs" }],
          services: [
            { name: "Supabase", detail: "Accounts, brands, posts, schedules" },
            { name: "Cloudinary", detail: "Media storage" },
            { name: "Remotion", detail: "Video rendering" },
            { name: "PayTabs", detail: "Subscription billing" },
          ],
          external: [
            { name: "OpenAI · Google Gemini", detail: "Prompts, images and captions", ai: true },
            { name: "Post for Me API", detail: "Publishing to Instagram, LinkedIn, Threads, TikTok and X" },
          ],
        },
        built: [
          "Brand and product analysis",
          "AI images, carousels, videos and captions in Arabic and English",
          "Content calendar and scheduling",
          "Auto-posting on chosen days and times",
          "Publishing to five platforms via Post for Me",
        ],
        notBuilt: ["Facebook connection (not enabled)"],
      },
      moeen: {
        tagline: "AI WhatsApp customer support",
        status: "Pre-launch MVP",
        summary:
          "An Arabic-first assistant that answers a business's customers on WhatsApp using only the knowledge the business provides, and steps back when a person replies.",
        role: [
          "SaaS architecture: dashboard, worker and shared database",
          "WhatsApp integration through a dedicated worker",
          "Prompting and reply generation grounded in the knowledge base",
          "AI-to-human takeover design",
        ],
        system: {
          users: [
            { name: "Business owners", detail: "Dashboard: connection, knowledge, conversations" },
            { name: "Customers", detail: "WhatsApp only" },
          ],
          app: [{ name: "Next.js dashboard", detail: "Connection, knowledge base, conversations, settings" }],
          services: [
            { name: "Supabase", detail: "Database doubles as the job queue" },
            { name: "WhatsApp worker", detail: "Baileys; sends and receives messages" },
          ],
          external: [{ name: "OpenAI API", detail: "Replies from the business's knowledge", ai: true }],
        },
        built: [
          "WhatsApp connection by QR code",
          "AI replies grounded in the knowledge base",
          "AI pauses when the owner replies",
          "Conversation dashboard with manual replies",
        ],
        notBuilt: ["Ticketing and bookings (built, switched off)", "Public launch"],
      },
    },
    earlier: {
      kicker: "Earlier build",
      description:
        "A marketplace for new and used electronics, with seller accounts, product pages and ratings. ASP.NET Core and PostgreSQL back end, React and TypeScript front end, hosted on Azure and Vercel.",
      linkLabel: "Live demo",
    },
  },
  experience: {
    title: "Experience",
    intro: "Positions held, most recent first.",
    columns: { period: "Period", organisation: "Organisation and role", contributions: "Contributions" },
    segmentsLabel: "Segments",
    entries: {
      momah: {
        org: "Ministry of Municipalities and Housing (MoMAH)",
        role: "SAP FI/CO & Oracle Support",
        period: "Jan 2025 – Present",
        context: "Government finance · SAP S/4HANA and Oracle ERP",
        items: [
          {
            text: "Selected to coordinate and develop AI initiatives within the department, identifying opportunities and following proposed solutions and implementation progress.",
            note: "aiInitiatives",
          },
          {
            text: "Independently diagnose and resolve SAP FI/CO and Oracle incidents, transaction errors and access issues; escalate complex cases to consultants or IT when needed.",
          },
          {
            text: "Translate stakeholder requirements into formal change requests, around seven new requests a month plus an ongoing backlog; coordinate vendor delivery and stakeholder updates.",
            note: "changeRequests",
          },
          {
            text: "Manage day-to-day ERP support tickets, document resolutions and guide finance users through system workflows.",
          },
          {
            text: "Execute UAT in pre-production for financial changes, including fixed assets, SAP Fiori / SAP GUI and ERP integration scenarios.",
            note: "uat",
          },
        ],
      },
      pioneers: {
        org: "Pioneers.dev – Software Solutions (Sonnaa Al-Tatawor)",
        role: "Founder · Full-Stack Developer & Applied AI Solutions",
        period: "2024 – Present",
        context: "Own company · Commercial software",
        items: [
          { text: "Lead client requirements, workflow design, project scoping, delivery and ongoing improvements for commercial customers." },
          { text: "Build web applications and SaaS platforms with Next.js, React, TypeScript, C#, ASP.NET Core, Node.js and databases." },
          {
            text: "Own software architecture, planning, testing and deployment; use AI coding assistants to accelerate implementation while making the engineering decisions and validating all delivered code.",
          },
          {
            text: "Integrate LLMs into commercial products for customer interactions, content generation and workflow automation; knowledgeable in fine-tuning methods and model customization.",
          },
          { text: "Built Shihab, PostWave.ai and Moeen.ai.", note: "products" },
        ],
      },
      almanara: {
        org: "Almanara Trading Co.",
        role: "Oracle System Support Coordinator",
        period: "Jul 2024 – Nov 2024",
        context: "Trading · Oracle ERP",
        items: [
          { text: "Supported Oracle ERP users, investigated incidents affecting business operations, and coordinated fixes with IT teams." },
          { text: "Administered Oracle user accounts, access roles and system permissions." },
          { text: "Documented support cases and system changes, and guided users through Oracle workflows." },
        ],
      },
      mayyar: {
        org: "Mayyar United Catering Co.",
        role: "General Accountant",
        period: "Dec 2021 – Dec 2022",
        context: "Catering · Oracle ERP",
        items: [
          { text: "Reconciled supplier accounts for 150+ vendors to keep payables and financial records accurate.", note: "suppliers" },
          { text: "Identified and corrected more than SAR 50,000 in erroneous accounting entries.", note: "sar50k" },
          { text: "Wrote a Python automation script for the ERP system that improved work efficiency by 400%.", note: "automation" },
          { text: "Processed supplier invoices, payments and financial transactions in Oracle ERP." },
          { text: "Prepared daily warehouse and inventory reports to improve financial data visibility." },
        ],
      },
    },
  },
  credentials: {
    title: "Credentials",
    intro: "Education, professional programmes and certifications.",
    groups: {
      education: {
        title: "Education",
        items: [
          {
            name: "Bachelor's Degree in Accounting",
            org: "Imam Mohammad Ibn Saud Islamic University",
            detail: "2018 – 2022",
          },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { name: "Arabic", detail: "Native" },
          { name: "English", detail: "Upper intermediate" },
        ],
      },
      development: {
        title: "Professional development",
        items: [
          {
            name: "SAP Young Professionals Program",
            org: "SAP Digital Skills Center",
            detail: "Jul – Sep 2024",
            description:
              "Intensive programme covering S/4HANA enterprise processes, integration and cloud concepts, with consulting, stakeholder communication and business-process skills.",
          },
          {
            name: "C# & React.js Full-Stack Development Bootcamp",
            org: "Saudi Digital Academy",
            detail: "Aug – Nov 2024",
            description: "520 hours of hands-on C#, ASP.NET Core and React; best final project recognition.",
            note: "bootcamp",
          },
        ],
      },
      certifications: {
        title: "Certifications",
        items: [
          {
            name: "SAP Certified Associate – Business Process Integration with SAP S/4HANA (TS410)",
            detail: "Exam score 94%",
            note: "ts410",
          },
          { name: "SAP Certified Specialist – Implementation Consultant – SAP S/4HANA" },
          { name: "SOCPA VAT Specialist Exam", detail: "Passed, Dec 2025" },
          { name: "Google Technical Support" },
          { name: "W3Schools C# Certification" },
          { name: "Tuwaiq Information Science & Quantum Computing Bootcamp" },
        ],
      },
    },
  },
  contact: {
    title: "Contact",
    intro: "Email is the quickest way to reach me.",
    lead: "Open to conversations about finance transformation, applied AI and ERP roles.",
    emailLabel: "Email",
    rows: {
      phone: "Phone",
      whatsapp: { label: "WhatsApp", value: "Message me" },
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: { label: "CV", value: "Download PDF" },
      location: { label: "Based in", value: "Riyadh, Saudi Arabia" },
    },
  },
  footer: { rights: "Abdulmalik Almasud", backToTop: "Back to top" },
};
