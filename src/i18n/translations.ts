export type Lang = "en" | "ar";

export type Translation = {
  nav: {
    home: string;
    experience: string;
    education: string;
    contact: string;
    switchLanguage: string;
  };
  hero: {
    name: string;
    title: string;
    intro: string;
    downloadCV: string;
    contactMe: string;
  };
  sections: {
    objective: string;
    experience: string;
    blend: string;
    objectiveText: string;
  };
  credentials: {
    heading: string;
    educationTitle: string;
    degree: string;
    university: string;
    eduDate: string;
    languagesTitle: string;
    arabic: string;
    arabicLevel: string;
    english: string;
    englishLevel: string;
    skillsTitle: string;
    certificatesTitle: string;
    skills: string[];
    certificates: string[];
  };
  contact: {
    titleLine1: string;
    titleLine2: string;
    paragraph: string;
    whatIBring: string;
    benefits: string[];
    getInTouch: string;
    getInTouchDesc: string;
    whatsapp: string;
    email: string;
    linkedin: string;
    github: string;
  };
};

export const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      switchLanguage: "العربية",
    },
    hero: {
      name: "Abdulmalik Almasud",
      title: "Accountant, Full-Stack Developer, SAP Consultant",
      intro:
        "I am a highly motivated professional with a Bachelor's degree in Accounting 🎓 and a strong background in software development. With hands-on experience in full-stack development, SAP consulting, and financial automation, I'm passionate about streamlining processes 🔄 and delivering impactful results 🚀.",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
    },
    sections: {
      objective: "Objective 🎯",
      experience: "Experience ✨",
      blend:
        "A blend of technical skills and accounting experience. Here are key highlights of my work. 👉",
      objectiveText:
        "I aim to leverage my skills in full-stack development💻 and my accounting knowledge📊 to drive innovation💡 and efficiency⚡, while continuously learning📚",
    },
    credentials: {
      heading: "Education & Skills 📚",
      educationTitle: "Education",
      degree: "Bachelor's Degree in Accounting",
      university: "Imam Mohammad Ibn Saud Islamic University",
      eduDate: "2018 - 2022",
      languagesTitle: "Languages",
      arabic: "Arabic",
      arabicLevel: "Native",
      english: "English",
      englishLevel: "Upper Intermediate",
      skillsTitle: "Skills",
      certificatesTitle: "Certificates",
      skills: [
        "Python",
        "JavaScript",
        "C#",
        "React.js",
        "ASP.NET Core",
        "Full-Stack Development",
        "SAP S/4HANA",
        "SAP FI",
        "Oracle ERP",
        "Data Analysis & Visualization",
        "Process Automation",
        "Accounts Payable",
        "Invoice Processing",
        "Account Reconciliation",
        "Inventory Accounting",
        "Payroll Processing",
        "Excel (Advanced)",
        "Troubleshooting",
        "IT System Monitoring",
        "Software Documentation",
      ],
      certificates: [
        "SAP Certified Associate - Business Process Integration with SAP S/4HANA",
        "SAP Certified Specialist - Implementation Consultant - SAP S/4HANA",
        "Google Technical Support",
        "W3Schools C# Certification",
        "Tuwaiq - Information Science & Quantum Computing Bootcamp",
      ],
    },
    contact: {
      titleLine1: "Let's Connect",
      titleLine2: "and Explore New Opportunities",
      paragraph:
        "I'm eager to connect with professionals, recruiters, and organizations looking for innovative solutions in development and accounting. Feel free to reach out if you have any questions or want to discuss potential opportunities.",
      whatIBring: "What I bring to the table:",
      benefits: [
        "Technical Expertise",
        "Problem-Solving Skills",
        "Innovation-Driven",
        "Results-Oriented",
        "Strong Communication",
        "Team Player",
      ],
      getInTouch: "Get in Touch",
      getInTouchDesc:
        "The quickest way to reach me is on WhatsApp or by email. You can also find me on LinkedIn and GitHub.",
      whatsapp: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      experience: "الخبرات",
      education: "التعليم",
      contact: "تواصل",
      switchLanguage: "English",
    },
    hero: {
      name: "عبدالملك المسعود",
      title: "محاسب، مطوّر Full-Stack، استشاري SAP",
      intro:
        "أنا محترف شغوف حاصل على درجة البكالوريوس في المحاسبة 🎓 ولديّ خلفية قوية في تطوير البرمجيات. بفضل خبرتي العملية في تطوير Full-Stack واستشارات SAP والأتمتة المالية، أسعى دائماً إلى تبسيط العمليات 🔄 وتحقيق نتائج مؤثرة 🚀.",
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "تواصل معي",
    },
    sections: {
      objective: "الهدف 🎯",
      experience: "الخبرات ✨",
      blend:
        "مزيج من المهارات التقنية وخبرة المحاسبة. إليك أبرز محطات عملي. 👉",
      objectiveText:
        "أسعى للاستفادة من مهاراتي في تطوير Full-Stack 💻 ومعرفتي المحاسبية 📊 لدفع الابتكار 💡 والكفاءة ⚡، مع التعلّم المستمر 📚",
    },
    credentials: {
      heading: "التعليم والمهارات 📚",
      educationTitle: "التعليم",
      degree: "بكالوريوس في المحاسبة",
      university: "جامعة الإمام محمد بن سعود الإسلامية",
      eduDate: "2018 - 2022",
      languagesTitle: "اللغات",
      arabic: "العربية",
      arabicLevel: "اللغة الأم",
      english: "الإنجليزية",
      englishLevel: "متوسط متقدّم",
      skillsTitle: "المهارات",
      certificatesTitle: "الشهادات",
      skills: [
        "بايثون",
        "جافاسكريبت",
        "C#",
        "React.js",
        "ASP.NET Core",
        "تطوير Full-Stack",
        "SAP S/4HANA",
        "SAP FI",
        "Oracle ERP",
        "تحليل وتصوير البيانات",
        "أتمتة العمليات",
        "الحسابات الدائنة",
        "معالجة الفواتير",
        "تسوية الحسابات",
        "محاسبة المخزون",
        "معالجة الرواتب",
        "إكسل (متقدّم)",
        "استكشاف الأخطاء وحلّها",
        "مراقبة أنظمة تقنية المعلومات",
        "توثيق البرمجيات",
      ],
      certificates: [
        "SAP Certified Associate - تكامل العمليات مع SAP S/4HANA",
        "SAP Certified Specialist - استشاري تطبيق SAP S/4HANA",
        "الدعم الفني من Google",
        "شهادة C# من W3Schools",
        "طويق - معسكر علوم المعلومات والحوسبة الكمية",
      ],
    },
    contact: {
      titleLine1: "لنتواصل",
      titleLine2: "ونستكشف فرصاً جديدة",
      paragraph:
        "يسعدني التواصل مع المختصين وجهات التوظيف والمؤسسات الباحثة عن حلول مبتكرة في التطوير والمحاسبة. لا تتردد في التواصل إذا كان لديك أي استفسار أو رغبة في مناقشة فرص محتملة.",
      whatIBring: "ما الذي أقدّمه:",
      benefits: [
        "خبرة تقنية",
        "مهارات حل المشكلات",
        "مدفوع بالابتكار",
        "موجّه نحو النتائج",
        "تواصل فعّال",
        "روح الفريق",
      ],
      getInTouch: "تواصل معنا",
      getInTouchDesc:
        "أسرع طريقة للوصول إليّ هي عبر واتساب أو البريد الإلكتروني. يمكنك أيضاً متابعتي على لينكدإن وجيت هب.",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      linkedin: "لينكدإن",
      github: "جيت هب",
    },
  },
};
