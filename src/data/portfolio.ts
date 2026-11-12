export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  scoreLabel: string;
  score: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  highlights: string[];
  role: string;
  viewDetails: {
    architecture: string;
    metrics: string[];
    useCase: string;
    flowSteps: string[];
  };
  links: {
    project: string | null;
    github: string | null;
  };
}

export interface ExperienceItem {
  role: string;
  organizationType: string;
  year: string;
  duration: string;
  description: string;
  additionalDescription: string;
  highlights: string[];
}

export interface TechnicalSkill {
  name: string;
  category: string;
  tag: string;
  iconName: 'Java' | 'Python' | 'Cpp' | 'C';
  description: string;
}

export interface InterpersonalSkill {
  name: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  platform?: string;
  topics: string[];
}

export interface HobbyItem {
  name: string;
  icon: 'puzzle' | 'movie' | 'dumbbell';
  description: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: string;
}

export interface AssignmentItem {
  id: string;
  badge: string;
  title: string;
  subject: string;
  description: string;
  file: string;
}

export const portfolioData = {
  personal: {
    name: "Hardik Aggarwal",
    title: "Computer Science Student | AI Enthusiast | Developer",
    heroLabel: "COMPUTER SCIENCE STUDENT • AI ENTHUSIAST",
    university: "Chandigarh University",
    course: "Bachelor of Engineering",
    specialization: "AI",
    year: "Second Year",
    uid: "25BAI10001",
    location: "Gharuan, Punjab",
    email: "hardikaggarwal347@gmail.com",
    phone: "+91-9501500347",
    resumePath: "/assets/25BAI10001_Hardik_Resume.pdf",
    shortBio:
      "I'm a second-year Computer Science student at Chandigarh University, specializing in AI, with a real curiosity for how software gets built end to end.",
    aboutParagraphs: [
      "I'm a second-year Computer Science student at Chandigarh University, specializing in AI, with a real curiosity for how software gets built end to end.",
      "Outside of coursework, I enjoy picking a problem and building my way through it — whether that's a small automation script or a full project.",
      "I'm now looking for an internship where I can work alongside an experienced engineering team, learn how things are actually done in practice, and contribute meaningfully to real product work."
    ],
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/hardik-aggarwal-253697384",
    github: "https://github.com/hardikaggarwal347",
    email: "mailto:hardikaggarwal347@gmail.com",
  },

  aboutHighlights: [
    {
      number: "01",
      title: "AI & Technology",
      description: "Focused on speech recognition, machine learning models, and computer vision pipelines that solve tangible challenges.",
    },
    {
      number: "02",
      title: "Problem Solving",
      description: "Approaching engineering obstacles with structured algorithmic thinking, clean code discipline, and practical iteration.",
    },
    {
      number: "03",
      title: "Software Development",
      description: "Curious about end-to-end architecture — from audio extraction tools to real-time webcam data processing and logging.",
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science (AI Specialization)",
      institution: "Chandigarh University",
      location: "Gharuan, Punjab",
      duration: "2025 – 2029",
      scoreLabel: "CGPA",
      score: "7.5",
      description: "Specializing in Artificial Intelligence with hands-on coursework in Data Structures, Object-Oriented Programming, and Machine Learning algorithms.",
    },
    {
      degree: "Senior Secondary Education",
      field: "Science – PCM",
      institution: "LSMS",
      location: "Khanna, Punjab",
      duration: "2023 – 2025",
      scoreLabel: "Percentage",
      score: "89%",
      description: "Completed higher secondary curriculum with Physics, Chemistry, and Mathematics foundation.",
    },
    {
      degree: "Secondary Education",
      field: "Science – PCM",
      institution: "OPBMS",
      location: "Khanna, Punjab",
      duration: "2022 – 2023",
      scoreLabel: "Percentage",
      score: "91%",
      description: "Completed secondary school curriculum with distinction in Science and Mathematics.",
    },
  ] as EducationItem[],

  projects: [
    {
      id: "ai-video-summarizer",
      title: "AI Video Summarizer",
      technologies: ["Python", "OpenAI Whisper", "NLP", "FFmpeg"],
      description:
        "Built an end-to-end pipeline that pulls audio out of video files using FFmpeg and transcribes the speech with OpenAI Whisper, reaching about 95% accuracy on the clips I tested it against.",
      highlights: [
        "End-to-end video-to-text pipeline",
        "FFmpeg audio extraction",
        "OpenAI Whisper transcription",
        "Approximately 95% accuracy on tested clips",
      ],
      role: "Sole Developer & Pipeline Architect",
      viewDetails: {
        architecture: "Input Video → FFmpeg Stream Extraction (.wav format, 16kHz mono) → Audio Normalization → OpenAI Whisper Acoustic Model → NLP Text Post-Processing → Formatted Transcript & Summary.",
        metrics: ["~95% Transcription Accuracy", "Automated Audio Extraction", "Zero Cloud Latency Local Option"],
        useCase: "Accelerates reviewing educational lecture recordings and meeting clips by generating readable transcripts and succinct key takeaways automatically.",
        flowSteps: [
          "Upload or supply raw video file (MP4, MKV, AVI)",
          "FFmpeg demuxes and strips audio track with custom sampling parameter",
          "Whisper model performs sequence-to-sequence speech-to-text decoding",
          "Presents organized markdown timestamps and textual takeaways"
        ]
      },
      links: {
        project: null, // Coming Soon / In Active Development
        github: "https://github.com/hardikaggarwal347",
      },
    },
    {
      id: "smart-ai-attendance",
      title: "Smart AI Attendance System",
      technologies: ["Python", "OpenCV", "NumPy", "scikit-learn"],
      description:
        "Designed a face-recognition system that reads a live webcam feed and marks attendance in real time.",
      highlights: [
        "Around 25 FPS on an ordinary laptop",
        "92%+ accuracy across different lighting conditions and angles",
        "Custom dataset",
        "Automatic CSV attendance logging",
        "Replaced manual paper attendance with automated attendance logging",
      ],
      role: "Sole Developer & Computer Vision Engineer",
      viewDetails: {
        architecture: "Live Camera Stream → Haar Cascade / OpenCV Facial Detection → Vector Embedding Generation → scikit-learn Classifier Match → Timestamped CSV Verification & Deduplication.",
        metrics: ["~25 FPS real-time processing", "92%+ recognition rate", "Sub-second CSV logging"],
        useCase: "Eliminates time-consuming paper roll calls in classrooms and labs with contact-free, automated computer vision attendance verification.",
        flowSteps: [
          "Capture live video frame from connected standard webcam",
          "Isolate facial bounding boxes and normalize illumination with NumPy",
          "Match facial features against trained custom student face dataset",
          "Append verified student ID and exact ISO timestamp to session CSV log"
        ]
      },
      links: {
        project: null, // Coming Soon / In Active Development
        github: "https://github.com/hardikaggarwal347",
      },
    },
  ] as ProjectItem[],

  experience: [
    {
      role: "Social Internship — NGO",
      organizationType: "Local Community NGO",
      year: "2026",
      duration: "30 Hours",
      description:
        "Volunteered 30 hours with a local NGO on community outreach, pitching in on on-ground activities and day-to-day coordination.",
      additionalDescription:
        "Worked closely with the team and local residents, which taught me a lot about listening well, staying patient, and thinking on my feet.",
      highlights: [
        "30 hours dedicated community outreach",
        "On-ground logistics & grassroots coordination",
        "Collaborative problem solving and resident communication",
      ],
    },
  ] as ExperienceItem[],

  technicalSkills: [
    {
      name: "Java",
      category: "Programming Language",
      tag: "OOP, Data Structures, Systems",
      iconName: "Java",
      description: "Strong object-oriented fundamentals, algorithmic problem solving, and standard libraries.",
    },
    {
      name: "Python",
      category: "Programming Language",
      tag: "AI, Automation, Computer Vision",
      iconName: "Python",
      description: "Primary scripting and machine learning language used with OpenCV, Whisper, and NumPy.",
    },
    {
      name: "C++",
      category: "Programming Language",
      tag: "High Performance, Algorithms",
      iconName: "Cpp",
      description: "Low-overhead computational routines, memory handling, and competitive problem solving.",
    },
    {
      name: "C",
      category: "Programming Language",
      tag: "Systems Foundations, Pointers",
      iconName: "C",
      description: "Core systems foundations, procedural logic, pointer operations, and hardware understanding.",
    },
  ] as TechnicalSkill[],

  interpersonalSkills: [
    {
      name: "Active Listening",
      description:
        "Attentively absorbing team feedback, user requirements, and academic guidance to formulate the most effective and considerate engineering solutions.",
    },
    {
      name: "Smart Worker",
      description:
        "Balancing rigorous effort with efficient prioritization, modular code structures, and automated tooling to consistently deliver quality outcomes.",
    },
    {
      name: "Problem Solving Mindset",
      description:
        "Approaching ambiguities by deconstructing complex challenges into manageable milestones, whether diagnosing pipeline bugs or refining system logic.",
    },
  ] as InterpersonalSkill[],

  certifications: [
    {
      title: "Critical Enquiry and Research Methodology",
      issuer: "Coursera / Chandigarh University",
      topics: ["Scientific Enquiry", "Data Analysis", "Research Frameworks"],
    },
    {
      title: "Entrepreneurial Mindset: Build, Grow & Lead Your Own Venture",
      issuer: "Coursera / Chandigarh University",
      topics: ["Venture Strategy", "Product-Market Fit", "Leadership"],
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft / Certiport",
      topics: ["Azure Cognitive Services", "Computer Vision", "Responsible AI"],
    },
    {
      title: "Agile Foundations",
      issuer: "LinkedIn Learning",
      topics: ["Scrum Methodologies", "Sprint Planning", "Continuous Iteration"],
    },
    {
      title: "Design Thinking: Understanding the Process",
      issuer: "LinkedIn Learning",
      topics: ["Empathy Mapping", "Ideation", "Problem Formulation"],
    },
    {
      title: "Design Thinking: Implementing the Process",
      issuer: "LinkedIn Learning",
      topics: ["Prototyping", "User Testing", "Iterative Validation"],
    },
  ] as CertificationItem[],

  hobbies: [
    {
      name: "Puzzle Solving",
      icon: "puzzle",
      description: "Exercising logical reasoning and pattern recognition through brain teasers and algorithmic puzzles.",
    },
    {
      name: "Movie Watching",
      icon: "movie",
      description: "Appreciating storytelling, cinematic pacing, and creative narratives across diverse genres.",
    },
    {
      name: "Gym & Physical Exercise",
      icon: "dumbbell",
      description: "Building physical discipline, endurance, and mental clarity through regular strength training.",
    },
  ] as HobbyItem[],

  languages: [
    {
      language: "English",
      proficiency: "Professional",
      level: "Fluent written & spoken communication in technical and collaborative settings",
    },
    {
      language: "Hindi",
      proficiency: "Professional",
      level: "Native / bilingual proficiency for active day-to-day and professional exchanges",
    },
    {
      language: "Punjabi",
      proficiency: "Intermediate",
      level: "Working conversational comprehension and regional dialogue proficiency",
    },
  ] as LanguageItem[],

  // Computer Organization & Architecture learning and practical records
  coaGithubUrl: "#", // Update with your actual COA repo e.g. "https://github.com/hardikaggarwal347/coa-practicals"
  coaPracticalFile: "", // Path to practical record PDF if available e.g. "/assets/COA_Practical_Record.pdf"

  assignments: [
    {
      id: "01",
      badge: "ASSIGNMENT 01",
      title: "COA Assignment – 1",
      subject: "Computer Organization & Architecture",
      description:
        "Covers single-board computing (Raspberry Pi), AI Summit takeaways, Yotta & NPTEL infrastructure, programming language evaluation, CPU vs GPU vs TPU, memory hierarchies, Turing award research, and 64-bit ARM architecture organization.",
      file: "/assets/COA_Assignment_1.pdf",
    },
        {
      id: "02",
      badge: "CASE STUDY 01",
      title: "Case Study 1 – RISC vs CISC",
      subject: "Computer Organization & Architecture",
      description:
        "Case study comparing RISC and CISC processor architectures, covering instruction sets, performance trade-offs, and real-world use cases.",
      file: "/assets/Case_Study_1_RISC_vs_CISC.docx",
    },
    {
      id: "03",
      badge: "ASSIGNMENT 02",
      title: "RISC vs CISC Report",
      subject: "Computer Organization & Architecture",
      description:
        "Assignment report on RISC vs CISC architectures, comparing design philosophy, instruction complexity, and performance.",
      file: "/assets/Assignment_RISC_vs_CISC_Report.docx",
    },
  ] as AssignmentItem[],
};
