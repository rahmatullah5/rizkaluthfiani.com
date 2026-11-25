/**
 * Single source of truth for the site and the /resume page.
 * Edit here; both the homepage and the printable resume update.
 *
 * @format
 */

export const profile = {
  name: "Rizka Luthfiani Fakhriah",
  shortName: "Rizka Luthfiani",
  title: "Product Owner",
  location: "Jakarta, Indonesia",
  email: "hi.rizkaluthfiani@gmail.com",
  phone: "+62 812 9747 4940",
  phoneHref: "tel:+6281297474940",
  linkedin: "https://www.linkedin.com/in/rizka-luthfiani/",
  github: "https://github.com/rizkaluthfiani",
  medium: "https://medium.com/@bytebyme",
  resumePdf: "/Rizka-Luthfiani-Resume.pdf",
};

export const summary =
  "Product Owner at Terus E-Learning. I take fuzzy client and user needs, turn them into a prioritized backlog the team can build, and keep delivery on schedule. Previously led a 4-person engineering team across 3 countries to an on-time client launch. Data-literate — I write SQL and Python, and back product calls with dashboards rather than opinions.";

export type Role = {
  company: string;
  companyUrl?: string;
  role: string;
  mode: string;
  period: string;
  context: string;
  oneLiner: string;
  bullets: string[];
  outcome?: string;
  win?: string;
  track: "Product" | "Project" | "Data" | "Marketing";
  span: [number, number];
};

export const roles: Role[] = [
  {
    company: "Terus E-Learning",
    track: "Product",
    span: [74, 100],
    role: "Product Owner",
    mode: "Remote · Full-time",
    period: "Current",
    context: "Online learning platform for learners and course teams.",
    oneLiner: "Backlog, user stories and sprints for an e-learning platform.",
    bullets: [
      "Own the product backlog: gather requests from learners, content and business teams, then prioritize them into sprint-sized work.",
      "Write user stories with clear acceptance criteria so engineering can estimate and build without back-and-forth.",
      "Run sprint planning and reviews, accept finished work against criteria, and report progress to stakeholders.",
    ],
  },
  {
    company: "ASAP Company",
    track: "Project",
    span: [50, 72],
    role: "Project Manager",
    mode: "Remote · Part-time",
    period: "Client project",
    context: "Client software project with a distributed engineering team.",
    oneLiner: "Led 4 engineers across 3 countries for a client build.",
    bullets: [
      "Led an engineering team of 4 people across 3 countries, coordinating work across time zones.",
      "Translated the client's business requirements into scoped, assignable engineering tasks.",
      "Ran the project in sprints and kept the client updated on scope, progress and risks.",
    ],
    outcome: "Delivered the project to the client on time.",
    win: "Shipped on time",
  },
  {
    company: "Yayasan Anak Bangsa Bisa by GoTo",
    track: "Data",
    span: [25, 48],
    companyUrl: "https://www.goto-impact.org/generasi-gigih/",
    role: "Data Analyst (Generasi GIGIH)",
    mode: "6-month program",
    period: "2022",
    context: "GoTo's intensive data analytics program.",
    oneLiner: "SQL, Python, BigQuery and Looker in a 6-month program.",
    bullets: [
      "Trained in SQL, Python, Google BigQuery and Looker for large-scale analysis and reporting.",
      "Final team project: built a stroke-risk prediction model and presented the findings to internal and external reviewers.",
    ],
    outcome: "Model reached over 90% prediction accuracy.",
    win: "90%+ model accuracy",
  },
  {
    company: "Griin.id",
    track: "Marketing",
    span: [0, 23],
    companyUrl: "https://www.linkedin.com/company/griin-id/about/",
    role: "Marketing Intern",
    mode: "Remote · Full-time internship",
    period: "Internship",
    context: "B2B sustainability startup.",
    oneLiner: "Prospecting, qualifying and booking client meetings.",
    bullets: [
      "Sourced prospects, qualified their needs and booked meetings with potential clients.",
      "Kept the pipeline in spreadsheets and sent daily and weekly reports to the marketing lead.",
    ],
    outcome: "Generated two qualified leads and met the internship KPI.",
    win: "KPI met",
  },
];

export const principles = [
  {
    step: "Discover",
    line: "Start from the problem, not the feature request.",
    detail:
      "Talk to the people asking, find the job behind the request, and write down what “done” means for them.",
    proof: "Client requirement sessions at ASAP Company",
  },
  {
    step: "Define",
    line: "Make it buildable.",
    detail:
      "Break work into user stories with acceptance criteria, sized for a sprint. Cut scope before cutting quality.",
    proof: "Backlog & user stories at Terus E-Learning",
  },
  {
    step: "Deliver",
    line: "Protect the team’s focus and the deadline.",
    detail:
      "Clear priorities, short feedback loops, and early warning when a date is at risk — across time zones if needed.",
    proof: "4 engineers, 3 countries, shipped on time",
  },
  {
    step: "Measure",
    line: "Check the numbers before the next call.",
    detail:
      "Pull the data myself with SQL or Python and put it in a dashboard the team actually opens.",
    proof: "Power BI, Looker Studio, BigQuery projects",
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  year: string;
  question: string;
  did: string;
  result: string;
  label: string;
  tags: string[];
  href: string;
  linkLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "CS-01",
    title: "FMCG sales reporting tool",
    label: "Analytics",
    year: "2024",
    question:
      "A coffee chain's sales team needs one place to see what sells, where and when.",
    did: "Defined the reporting needs, modelled the sales data and built an interactive Power BI report around them.",
    result: "A self-serve sales dashboard instead of manual spreadsheet pulls.",
    tags: ["Requirements", "Power BI", "Reporting"],
    href: "https://github.com/rizkaluthfiani/kopken-powerbi-sales-analysis",
    linkLabel: "GitHub",
  },
  {
    id: "CS-02",
    title: "Digital library database system",
    label: "System design",
    year: "2024",
    question:
      "An e-library needs a data model that supports members, books, loans and holds.",
    did: "Mapped the user flows into entities and rules, then designed the schema with an ERD before any build.",
    result: "A documented, buildable database design for the whole lending flow.",
    tags: ["System design", "ERD", "SQL"],
    href: "https://medium.com/@bytebyme/infinibook-e-library-system-database-design-with-entity-relationship-diagram-0ac2224d2bf8",
    linkLabel: "Medium write-up",
  },
  {
    id: "CS-03",
    title: "High-risk loan prediction",
    label: "Fintech",
    year: "2025",
    question: "Which loans are likely to become non-performing?",
    did: "Compared several modelling approaches on loan data and packaged the best one behind an API and app.",
    result: "A working risk-scoring prototype a credit team could plug into review.",
    tags: ["Fintech", "Python", "ML"],
    href: "https://github.com/rizkaluthfiani/credit-risk-npl-prediction",
    linkLabel: "GitHub",
  },
  {
    id: "CS-04",
    title: "Online lending among young adults",
    label: "Fintech",
    year: "2024",
    question:
      "Why are personal online loans surging among young Indonesians?",
    did: "Analyzed public lending data to size the trend and segment who is borrowing.",
    result: "A published market analysis of Indonesia's online lending users.",
    tags: ["Market research", "Fintech", "EDA"],
    href: "https://medium.com/@bytebyme/exploring-the-surge-of-personal-online-loans-among-young-adults-in-indonesia-35c290a49272",
    linkLabel: "Medium write-up",
  },
  {
    id: "CS-05",
    title: "Country segmentation for an NGO",
    label: "Analytics",
    year: "2025",
    question: "Where should an NGO focus limited aid funding?",
    did: "Clustered countries by socio-economic indicators to group them by need.",
    result: "A clear shortlist of the countries in greatest need.",
    tags: ["Prioritization", "Clustering", "Python"],
    href: "https://github.com/rizkaluthfiani/NGO-country-clustering",
    linkLabel: "GitHub",
  },
  {
    id: "CS-06",
    title: "Stroke risk prediction",
    label: "ML",
    year: "2022",
    question: "Can we flag patients at high risk of stroke early?",
    did: "Team project: cleaned clinical data, tested several models and shipped the best one as a Streamlit app.",
    result: "Over 90% prediction accuracy.",
    tags: ["Healthcare", "ML", "Team project"],
    href: "https://github.com/reyhannaufal/stroke-model-gigih",
    linkLabel: "GitHub",
  },
];

export const toolkit = [
  {
    group: "Product & delivery",
    items: [
      "Backlog prioritization",
      "User stories & acceptance criteria",
      "Scrum / sprint planning",
      "Requirements gathering",
      "Stakeholder communication",
      "Distributed team coordination",
    ],
  },
  {
    group: "Tools",
    items: [
      "ClickUp",
      "Trello",
      "Moodle",
      "Google Workspace",
      "Microsoft 365",
    ],
  },
  {
    group: "Data",
    items: [
      "SQL",
      "Python",
      "BigQuery",
      "Power BI",
      "Tableau",
      "Looker Studio",
      "ERD / database design",
    ],
  },
];

export const education = [
  {
    school: "Padjadjaran University",
    detail: "B.Agr. Agrotechnology — Cum laude, GPA 3.64",
    period: "2019 – 2023",
    note: "Thesis published in Research on Crops (2024).",
    href: "https://gauravpublications.com/journal/research-on-crops/volume-25/issue-1-march-2024/ROC-1027",
  },
  {
    school: "Pacmann Bright Future Program",
    detail: "Data Engineering track",
    period: "Jul 2024 – present",
  },
];

export const certifications = [
  { org: "Pacmann", name: "SQL & Relational Database", year: "2024", href: "https://drive.google.com/file/d/1vZfxYqMas9J4E4KhUCo09XVe1CGiBHC9/view?usp=sharing" },
  { org: "Pacmann", name: "Basic Python Programming", year: "2024", href: "https://drive.google.com/file/d/1mels8gSO6vYDNpvh5Zw9V3y_Jhsf75VH/view?usp=sharing" },
  { org: "Dicoding", name: "Machine Learning", year: "2024", href: "https://drive.google.com/file/d/1fczkB9c2W_b0jxAQ5QCyTPxmszsg5WvV/view?usp=sharing" },
  { org: "Dicoding", name: "DevOps Fundamentals (AWS)", year: "2023", href: "https://drive.google.com/file/d/1dUuHCcSUE8Rq9YTqsmTkHsQ3mRUOh1_L/view?usp=sharing" },
  { org: "GoTo Impact Foundation", name: "Data Analyst Track", year: "2022", href: "https://drive.google.com/file/d/1TawVpZwzewZSiCsx4mT_NlCVsov6a8b_/view?usp=sharing" },
  { org: "Cloudswyft", name: "Essential Math for Machine Learning", year: "2022", href: "https://drive.google.com/file/d/1Y-y1xY03UpOI_3XK9ZXURn1ATdq4e4xA/view?usp=sharing" },
  { org: "Cloudswyft", name: "Introduction to Python Programming", year: "2022", href: "https://drive.google.com/file/d/1YtIuY4vslDRKj6lCxDyuN86dZ9H7aX6B/view?usp=sharing" },
  { org: "Cloudswyft", name: "Introduction to Data Science", year: "2022", href: "https://drive.google.com/file/d/1MyfPLFDDyTPKQfecj9AbF4ifI110S_wJ/view?usp=sharing" },
  { org: "DQLab", name: "COVID-19 Data Analysis", year: "2021", href: "https://drive.google.com/file/d/1SPF4ciubQCFCYPN1AlZpT2VI-n26RmtL/view?usp=sharing" },
  { org: "Sanbercode", name: "Python and Data Science", year: "2020", href: "https://drive.google.com/file/d/1vN7_22Y8RfGsCuYs360tML3rygFjL5sO/view?usp=sharing" },
];

export const extras = {
  languages: "English (upper intermediate), Indonesian (native)",
  speaking: {
    text: "Moderator, IAAS English Week 2021 — International Association of Students in Agricultural and Related Sciences",
    href: "https://drive.google.com/file/d/1WuUyxJPttVaR4tRuVYZOSjoylpLm5pEL/view?usp=sharing",
  },
};
