/**
 * Official Portfolio Data for Rajas Manish Ikharkar
 * Extracted directly from official resume.
 */

export const portfolioData = {
  personal: {
    name: "Rajas Manish Ikharkar",
    shortName: "Rajas Ikharkar",
    displayName: "RAJAS IKHARKAR",
    jerseyName: "RAJAS",
    jerseyNumber: "29", // From GitHub @Rajas29
    initials: "RI",
    role: "Web Developer",
    secondaryRole: "Software Engineering & Generative AI",
    status: "AVAILABLE FOR OPPORTUNITIES",
    matchNumber: "DEV #2027",
    shortBio: "Computer Science Engineering student skilled in modern web technologies with hands-on experience in full-stack web development, backend architectures, and Generative AI.",
    longBio: "I am a Computer Science Engineering student at OP Jindal University with a strong foundation in programming, software development, and modern web engineering. I have practical experience developing full-stack applications with React.js, Node.js, Express.js, and integrating Generative AI workflows such as LLMs, RAG, and prompt engineering.",
    location: "Raigarh, CG / Maharashtra, India",
    phone: "7276272133",
    email: "rajasikharkar@gmail.com",
    resumeUrl: "#", // Replace with your resume PDF path e.g. "/Rajas_Ikharkar_Resume.pdf"
    languages: ["English", "Hindi", "Marathi"],
    professionalSkills: ["Lifelong learning", "Problem-Solving", "Adaptability", "Team Collaboration"]
  },

  education: [
    {
      institution: "OP Jindal University",
      degree: "Bachelor of Technology (Computer Science Engineering)",
      location: "Raigarh, CG",
      timeline: "Expected May 2027",
      gpa: "Cumulative GPA: 8.36",
      featured: true,
      coursework: [
        "Data Structures & Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Object-Oriented Programming"
      ]
    },
    {
      institution: "RSGK Agrawal High School",
      degree: "Higher Secondary School (12th – PCM)",
      location: "Maharashtra (Tumsar)",
      timeline: "Passed in 2022",
      score: "80.6%",
      featured: false
    },
    {
      institution: "USA Vidya Niketan",
      degree: "High School (10th)",
      location: "Maharashtra (Tumsar)",
      timeline: "Passed in 2020",
      score: "77.20%",
      featured: false
    }
  ],

  skills: {
    programming: ["C++", "JavaScript"],
    webDevelopment: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "REST APIs"],
    aiAndBackend: ["Generative AI", "LLMs", "RAG", "Prompt Engineering", "Supabase", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Figma"],
    coreCS: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Network", "OOP"]
  },

  experience: [
    {
      company: "Pivot",
      role: "Web Development & Generative AI Intern",
      period: "June 2026 – July 2026",
      location: "Remote",
      points: [
        "Gained hands-on experience in Web Development, Backend Development, and Generative AI.",
        "Worked with HTML, CSS, JavaScript, React.js, Node.js, Express.js, and REST APIs.",
        "Developed practical understanding of LLMs, Prompt Engineering, RAG, and API integration.",
        "Applied full-stack development and AI concepts to real-world applications."
      ],
      tags: ["React.js", "Node.js", "Express.js", "Generative AI", "RAG", "REST APIs"]
    },
    {
      company: "SaiKet System",
      role: "Software Development Intern",
      period: "April 2026 – May 2026",
      location: "Remote",
      points: [
        "Worked on software and web development projects using modern technologies.",
        "Assisted in developing responsive and user-friendly web interfaces.",
        "Improved debugging, problem-solving, and application development skills.",
        "Collaborated with team members on development tasks and project execution."
      ],
      tags: ["Web Development", "UI/UX", "Debugging", "Problem Solving"]
    },
    {
      company: "Cognifyz Technologies",
      role: "Web Development Intern",
      period: "February 2025 – March 2025",
      location: "Remote",
      points: [
        "Built and worked on practical web development tasks and mini projects.",
        "Strengthened frontend development and analytical problem-solving skills.",
        "Gained hands-on experience with real-world web technologies and collaborative workflows."
      ],
      tags: ["Frontend", "HTML/CSS", "JavaScript", "Mini Projects"]
    }
  ],

  projects: [
    {
      matchId: "MATCH 01",
      title: "Perplexity AI Clone",
      category: "AI & ANSWER ENGINE",
      technologies: ["React.js", "Node.js", "Express.js", "LangChain", "Groq LLM", "Gemini Embeddings", "SearXNG"],
      description: "An AI-powered search and conversational answer engine combining real-time web search with multi-agent LLM reasoning.",
      points: [
        "Implemented multiple search and chat agents using LangChain for web, academic, Reddit, YouTube, image, and writing queries.",
        "Integrated Groq LLM, Google Gemini embeddings, and SearXNG for semantic search and web retrieval.",
        "Engineered RAG pipelines, response streaming, agent routing, and API integrations."
      ],
      githubUrl: "https://github.com/Rajas29",
      liveDemoUrl: "#"
    },
    {
      matchId: "MATCH 02",
      title: "Smart Office AI",
      category: "ENTERPRISE RAG ASSISTANT",
      technologies: ["React.js", "Node.js", "Express.js", "Gemini API", "Supabase", "RAG"],
      description: "AI-powered Standard Operating Procedure (SOP) Assistant providing context-aware answers from internal enterprise documents.",
      points: [
        "Implemented a full RAG workflow for document upload, text extraction, chunking, embeddings, and retrieval.",
        "Integrated Google Gemini API and Supabase for vector storage and backend services.",
        "Built complete full-stack interface with React.js, Node.js, and Express.js."
      ],
      githubUrl: "https://github.com/Rajas29",
      liveDemoUrl: "#"
    },
    {
      matchId: "MATCH 03",
      title: "Task Manager",
      category: "FULL-STACK PRODUCTIVITY",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "A full-stack task management application to create, organize, update, and track tasks efficiently with persistent cloud storage.",
      points: [
        "Built a responsive and user-friendly interface using React.js.",
        "Integrated MongoDB database with Express.js REST endpoints for full CRUD operations.",
        "Engineered clean state management for task prioritization and workflow status."
      ],
      githubUrl: "https://github.com/Rajas29",
      liveDemoUrl: "#"
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon (SIH)",
      subtitle: "Team Project Participant",
      type: "Hackathon"
    },
    {
      title: "Internet of Things (IoT)",
      subtitle: "Elite Certification from NPTEL",
      type: "Certification"
    }
  ],

  certifications: [
    { title: "Data Structures & Algorithms Certification", issuer: "CodeHelp" },
    { title: "Online Course in Front-End Development", issuer: "Coursera" },
    { title: "Data Analytics Essential Certification", issuer: "Cisco" },
    { title: "Online Course in Blockchain", issuer: "Coursera" }
  ],

  socialLinks: {
    github: "https://github.com/Rajas29",
    linkedin: "https://www.linkedin.com/in/rajas-ikharkar",
    email: "mailto:rajasikharkar@gmail.com",
    emailDisplay: "rajasikharkar@gmail.com",
    phone: "7276272133"
  }
};
