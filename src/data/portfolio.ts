import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  type LucideIcon,
} from 'lucide-react';

export const PROFILE = {
  name: 'Muthu Kumar M',
  roles: [
    'Software Developer',
    'Java Programmer',
    'Problem Solver',
    'Aspiring Software Engineer',
  ],
  title: 'Software Developer | Java Programmer | Problem Solver',
  intro:
    "Hi, I'm Muthu Kumar, a Computer Science and Engineering student passionate about software development, Java programming, problem-solving and building innovative technology solutions.",
  linkedin: 'https://www.linkedin.com/in/muthu-kumar-m-036a63329/',
  github: 'https://github.com/MuthukumarMM',
  email: 'muthu140507@gmail.com',
};

export const ABOUT = {
  paragraphs: [
    "I am a Computer Science and Engineering student with a strong interest in software development, Java programming, problem-solving and emerging technologies.",
    "I enjoy developing practical applications that solve real-world problems. I am particularly interested in building scalable software solutions and exploring Artificial Intelligence, web development and modern technologies.",
    "I continuously improve my technical knowledge through programming practice, academic projects and certifications.",
  ],
  cards: [
    { label: 'Education', value: 'B.E. CSE', sub: '2024 – 2028' },
    { label: 'Focus', value: 'Software Dev', sub: 'Java · AI · Web' },
    { label: 'Mindset', value: 'Problem Solver', sub: 'Build · Learn · Ship' },
  ],
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code2,
    accent: 'from-brand-500 to-brand-700',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Frontend Development',
    icon: Globe,
    accent: 'from-electric-500 to-electric-600',
    skills: ['HTML', 'CSS', 'React.js'],
  },
  {
    title: 'Database & Backend',
    icon: Database,
    accent: 'from-emerald-400 to-teal-600',
    skills: ['Firebase', 'SQL'],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    accent: 'from-amber-400 to-orange-600',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export type Project = {
  id: string;
  shortName: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  status: 'Completed' | 'Ongoing';
  accent: string;
  githubUrl: string; // ← set your repo URL
  demoUrl: string; // ← set your live demo URL
};

export const PROJECTS: Project[] = [
  {
    id: 'drugtrack',
    shortName: 'DrugTrack',
    title:
      'DrugTrack: Real-Time Smart Drug Inventory and Pharmaceutical Supply Chain Tracking System',
    tagline:
      'Pharmaceutical technology & supply chain management platform',
    description:
      'DrugTrack is a smart pharmaceutical inventory and supply chain management platform designed to manage medicine inventory, pharmaceutical orders, manufacturers, distributors and delivery tracking.',
    features: [
      'Medicine inventory management',
      'Pharmaceutical product catalogue',
      'Role-based dashboards',
      'Manufacturer management',
      'Distributor management',
      'Pharmacy and hospital management',
      'Order processing',
      'Real-time shipment tracking',
      'Medicine stock management',
      'Expiry and recall management',
    ],
    technologies: ['Java', 'Firebase', 'SQL', 'React.js'],
    status: 'Completed',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
    githubUrl: '',
    demoUrl: '',
  },
  {
    id: 'skillgaprag',
    shortName: 'SkillGapRAG',
    title:
      'SkillGapRAG: AI-Powered Career Intelligence and Skill Gap Analysis System Using Retrieval-Augmented Generation',
    tagline: 'AI-powered career intelligence & skill analysis',
    description:
      'SkillGapRAG is an AI-powered career intelligence platform that analyses resumes, skills and job requirements to identify skill gaps and provide personalized learning roadmaps for career development and placement preparation.',
    features: [
      'Resume analysis',
      'Skill extraction',
      'Job requirement comparison',
      'Skill gap identification',
      'Personalized learning roadmaps',
      'Career guidance',
      'Placement readiness analysis',
      'Retrieval-Augmented Generation (RAG)',
    ],
    technologies: ['Python', 'RAG', 'AI', 'NLP'],
    status: 'Completed',
    accent: 'from-brand-500 via-violet-500 to-fuchsia-500',
    githubUrl: '',
    demoUrl: '',
  },
  {
    id: 'resolv-ai',
    shortName: 'Resolv AI',
    title:
      'Resolv AI: AI-Assisted Civic Infrastructure Complaint Management and Visual Repair Verification System',
    tagline: 'Smart city infrastructure & complaint management',
    description:
      'Resolv AI is an AI-assisted civic infrastructure complaint management platform that enables citizens to report public infrastructure problems through image uploads. The system helps authorities manage complaints, assign workers and verify completed repairs using AI-assisted before-and-after image analysis.',
    features: [
      'Citizen complaint registration',
      'Image-based issue reporting',
      'Complaint categorization',
      'Issue assignment to workers',
      'Before-and-after image comparison',
      'AI-assisted repair verification',
      'Human reviewer approval',
      'Complaint status tracking',
      'Civic infrastructure management',
    ],
    technologies: ['Python', 'AI', 'React.js', 'Firebase'],
    status: 'Ongoing',
    accent: 'from-electric-500 via-blue-500 to-indigo-500',
    githubUrl: '',
    demoUrl: '',
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  details: string;
};

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Francis Xavier Engineering College',
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    duration: '2024 – 2028',
    details:
      'Pursuing B.E. in Computer Science and Engineering, building strong foundations in software engineering, data structures, algorithms, databases and modern development practices.',
  },
  {
    institution: "St. Xavier's Higher Secondary School",
    degree: 'Higher Secondary Education',
    duration: 'Completed',
    details:
      'Completed higher secondary education with a focus on science and mathematics, building analytical thinking and problem-solving fundamentals.',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  accent: string;
  certificateUrl: string; // ← set your certificate link
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Programming Using Java',
    issuer: 'Infosys',
    accent: 'from-brand-500 to-violet-600',
    certificateUrl: '',
  },
  {
    title: 'Software Engineering & Agile Software Development',
    issuer: 'Infosys',
    accent: 'from-electric-500 to-blue-600',
    certificateUrl: '',
  },
  {
    title: 'Introduction to NoSQL Database',
    issuer: 'Online Certification',
    accent: 'from-emerald-500 to-teal-600',
    certificateUrl: '',
  },
  {
    title: 'Ethical Hacking',
    issuer: 'NPTEL',
    accent: 'from-amber-500 to-orange-600',
    certificateUrl: '',
  },
  {
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    issuer: 'NPTEL',
    accent: 'from-cyan-500 to-sky-600',
    certificateUrl: '',
  },
];

// Editable achievement statistics — set to your verified numbers
export const ACHIEVEMENTS_STATS = [
  { label: 'LeetCode Problems Solved', value: 150, suffix: '+', icon: Cpu },
  { label: 'Technologies Learned', value: 10, suffix: '+', icon: Code2 },
  { label: 'Projects Built', value: 3, suffix: '', icon: GitBranch },
  { label: 'Certifications Earned', value: 5, suffix: '', icon: Database },
];

export const ACHIEVEMENTS_ITEMS = [
  {
    title: 'LeetCode Problem-Solving',
    description:
      'Consistently practicing data structures and algorithms on LeetCode to sharpen problem-solving skills and competitive programming ability.',
  },
  {
    title: 'Programming Practice',
    description:
      'Regular hands-on coding in Java and Python, building small utilities and solving algorithmic challenges to reinforce concepts.',
  },
  {
    title: 'Academic Accomplishments',
    description:
      'Maintaining strong academic performance in Computer Science and Engineering coursework while building real-world projects.',
  },
  {
    title: 'Technical Learning Milestones',
    description:
      'Completed industry-recognized certifications from Infosys and NPTEL covering Java, software engineering, ethical hacking and Industry 4.0.',
  },
];
