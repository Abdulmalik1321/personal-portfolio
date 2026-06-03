import type { Lang } from "@/i18n/translations";

export type ExperienceContent = {
  title: string;
  jobTitle: string;
  date: string;
  description: string;
  items: string[];
};

export type Experience = {
  img: string;
  link: string;
} & Record<Lang, ExperienceContent>;

export const experiences: Experience[] = [
  {
    img: "/logos/mmra.png",
    link: "",
    en: {
      title: "Ministry of Municipal and Rural Affairs",
      jobTitle:
        "Specialist - SAP Finance Support (Digital Transformation Agency).",
      date: "Jan 2025 - Present",
      description: "",
      items: [
        "Providing functional support for the SAP Finance (FI) module, including troubleshooting, issue resolution, and user assistance.",
        "Coordinating with business users to gather requirements and ensure SAP processes align with financial operations.",
        "Monitoring financial transactions, configurations, and data accuracy within the SAP system.",
        "Collaborating with technical teams to escalate and resolve SAP-related incidents and enhancement requests.",
        "Documenting support procedures, user guides, and process improvements to enhance system efficiency.",
      ],
    },
    ar: {
      title: "وزارة الشؤون البلدية والقروية",
      jobTitle: "أخصائي - دعم SAP المالي (وكالة التحول الرقمي).",
      date: "يناير 2025 - حتى الآن",
      description: "",
      items: [
        "تقديم الدعم الوظيفي لوحدة SAP المالية (FI)، بما في ذلك استكشاف الأخطاء وحلّها ومساعدة المستخدمين.",
        "التنسيق مع مستخدمي الأعمال لجمع المتطلبات وضمان توافق عمليات SAP مع العمليات المالية.",
        "مراقبة المعاملات المالية والإعدادات ودقة البيانات داخل نظام SAP.",
        "التعاون مع الفرق التقنية لتصعيد وحل حوادث SAP وطلبات التحسين.",
        "توثيق إجراءات الدعم وأدلة المستخدم وتحسينات العمليات لرفع كفاءة النظام.",
      ],
    },
  },
  {
    img: "https://res.cloudinary.com/dbgwe94vv/image/upload/v1727939402/New_Project_5_nn7lws.png",
    link: "",
    en: {
      title: "Almanara Trading co",
      jobTitle: "Oracle System Support Coordinator.",
      date: "Jul 2024 - Nov 2024",
      description: "",
      items: [
        "Providing technical support and troubleshooting for system issues.",
        "Coordinating with other IT staff to resolve complex problems.",
        "Manage user accounts, roles, and permissions within Oracle system.",
        "Documenting support activities and system changes.",
        "Training users in system functionality and best practices.",
      ],
    },
    ar: {
      title: "شركة المنارة التجارية",
      jobTitle: "منسق دعم نظام Oracle.",
      date: "يوليو 2024 - نوفمبر 2024",
      description: "",
      items: [
        "تقديم الدعم الفني واستكشاف مشكلات النظام وحلّها.",
        "التنسيق مع موظفي تقنية المعلومات الآخرين لحل المشكلات المعقدة.",
        "إدارة حسابات المستخدمين والأدوار والصلاحيات داخل نظام Oracle.",
        "توثيق أنشطة الدعم وتغييرات النظام.",
        "تدريب المستخدمين على وظائف النظام وأفضل الممارسات.",
      ],
    },
  },
  {
    img: "https://res.cloudinary.com/dbgwe94vv/image/upload/v1727939403/New_Project_xkxni3.png",
    link: "",
    en: {
      title: "Mayyar United Catering co",
      jobTitle: "General Accountant.",
      date: "Dec 2021 - Dec 2022",
      description: "",
      items: [
        "Communicated and reconciled with over 150 suppliers to ensure accurate account entries.",
        "Identified and corrected over 50,000 SAR in incorrect entries.",
        "Leveraging my programming skills, I developed and implemented a Python automation script for the ERP system, resulting in a 400% improvement in work efficiency.",
        "Handled daily invoice entries and issued timely payments, maintaining strong supplier relationships.",
        "Worked directly with suppliers at the company warehouse, ensuring efficient material handling.",
        "Prepared daily reports detailing received and dispatched materials, providing transparency in warehouse operations.",
      ],
    },
    ar: {
      title: "شركة ميار المتحدة للتموين",
      jobTitle: "محاسب عام.",
      date: "ديسمبر 2021 - ديسمبر 2022",
      description: "",
      items: [
        "التواصل والتسوية مع أكثر من 150 مورّداً لضمان دقة القيود المحاسبية.",
        "اكتشاف وتصحيح أكثر من 50,000 ريال سعودي من القيود الخاطئة.",
        "بالاستفادة من مهاراتي البرمجية، طوّرت ونفّذت سكربت أتمتة بلغة بايثون لنظام ERP، مما أدى إلى تحسين كفاءة العمل بنسبة 400%.",
        "إدخال الفواتير اليومية وإصدار المدفوعات في وقتها، مع الحفاظ على علاقات قوية مع الموردين.",
        "العمل المباشر مع الموردين في مستودع الشركة لضمان كفاءة مناولة المواد.",
        "إعداد تقارير يومية بالمواد المستلمة والصادرة لتوفير الشفافية في عمليات المستودع.",
      ],
    },
  },
  {
    img: "https://res.cloudinary.com/dbgwe94vv/image/upload/v1727939402/New_Project_2_kgcqtg.png",
    link: "",
    en: {
      title: "SAP Digital Skills Center",
      jobTitle: "SAP Young Professionals Program.",
      date: "Jul 2024 - Sep 2024",
      description: "",
      items: [
        "Acquired SAP S/4HANA Cloud and RISE with SAP knowledge through a 2-month intensive program.",
        "Gained hands-on experience and certifications to become an SAP Associate Consultant.",
        "Developed soft skills essential for SAP-related roles and engaged in workshops training.",
      ],
    },
    ar: {
      title: "مركز المهارات الرقمية SAP",
      jobTitle: "برنامج SAP للمحترفين الشباب.",
      date: "يوليو 2024 - سبتمبر 2024",
      description: "",
      items: [
        "اكتساب المعرفة بـ SAP S/4HANA Cloud و RISE with SAP من خلال برنامج مكثف لمدة شهرين.",
        "الحصول على خبرة عملية وشهادات لأصبح استشاري SAP معتمد.",
        "تطوير المهارات الشخصية الأساسية لأدوار SAP والمشاركة في ورش تدريبية.",
      ],
    },
  },
  {
    img: "https://res.cloudinary.com/dbgwe94vv/image/upload/v1727939403/New_Project_3_ncn4lv.png",
    link: "",
    en: {
      title: "Saudi Digital Academy",
      jobTitle: "C# & React.js Full-Stack Development Bootcamp.",
      date: "Feb 2024 - May 2024",
      description: "",
      items: [
        "Participated in a 14-week intensive bootcamp focused on C# and React.js web development.",
        "Engaged in 520 hours of training, including practical exercises and real-world project work.",
        "Gained proficiency in C# fundamentals and web development, preparing for roles such as Full-Stack Developer, Web Developer, and more.",
      ],
    },
    ar: {
      title: "الأكاديمية الرقمية السعودية",
      jobTitle: "معسكر تطوير Full-Stack بلغة C# و React.js.",
      date: "فبراير 2024 - مايو 2024",
      description: "",
      items: [
        "المشاركة في معسكر تدريبي مكثف لمدة 14 أسبوعاً يركز على C# وتطوير الويب بـ React.js.",
        "إتمام 520 ساعة تدريبية شملت تمارين عملية ومشاريع واقعية.",
        "اكتساب إتقان أساسيات C# وتطوير الويب، استعداداً لأدوار مثل مطور Full-Stack ومطور ويب وغيرها.",
      ],
    },
  },
  {
    img: "https://res.cloudinary.com/dbgwe94vv/image/upload/v1727939402/New_Project_1_n2b9gv.png",
    link: "https://electronex.vercel.app/",
    en: {
      title: "ElectroNex",
      jobTitle: "Full-Stack Project",
      date: "2024",
      description:
        "Developed ElectroNex, an online marketplace for buying and selling new and used electronic devices. Built with ASP.NET Core and PostgreSQL on the backend, and TypeScript with React.js on the frontend. It features a clean, aesthetic UI, secure transactions, seller accounts, product pages, and a rating system. Hosted on Azure and Vercel.",
      items: [],
    },
    ar: {
      title: "ElectroNex",
      jobTitle: "مشروع Full-Stack",
      date: "2024",
      description:
        "طوّرت ElectroNex، وهو سوق إلكتروني لبيع وشراء الأجهزة الإلكترونية الجديدة والمستعملة. تم بناؤه باستخدام ASP.NET Core و PostgreSQL في الخلفية، و TypeScript و React.js في الواجهة. يتميز بواجهة أنيقة ونظيفة، ومعاملات آمنة، وحسابات للبائعين، وصفحات للمنتجات، ونظام تقييم. مستضاف على Azure و Vercel.",
      items: [],
    },
  },
];
