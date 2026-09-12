export const profile = {
  name: 'Zayam Mushtaq',
  initials: 'ZM',
  title: 'AI Automation Specialist | n8n • Make • Zapier • GoHighLevel • Kommo | Backend & AI Agent Developer',
  tagline:
    'I design and build AI-powered automation workflows and backend systems — connecting n8n, Make, Zapier, GoHighLevel, and Kommo with custom AI agents, RAG pipelines, and REST APIs to automate real business processes.',
  location: 'Sialkot, Pakistan',
  email: 'zayammushtaq@gmail.com',
  github: 'https://github.com/zayam47',
  linkedin: 'https://www.linkedin.com/in/zayam-mushtaq-62569628b',
  resumeAI: '/resume/Zayam_Mushtaq_AI_Engineer_Resume.pdf',
  resumeBD: '/resume/Zayam_Mushtaq_Business_Development_Resume.pdf',
  summary:
    "Computer Science graduate (BS, University of Gujrat) working as an AI Automation Specialist — building AI agent and workflow automations on n8n, Make, Zapier, GoHighLevel, and Kommo, backed by custom Python/FastAPI services and AI integrations. On the engineering side, I developed a Retrieval-Augmented Generation (RAG) pipeline using Python, FastAPI, sentence embeddings, and vector search (ChromaDB) to deliver grounded, context-aware question answering — entirely on local, open-source models with no paid API dependency. I also bring full-stack MERN development, REST API design, and database architecture experience from a final-year AI-integrated marketplace project. Alongside the engineering track, I have hands-on business development experience — lead generation, client communication, and requirement gathering — which sharpens how I scope and automate real client workflows.",
}

export const skills = [
  {
    category: 'Automation & AI Agent Platforms',
    items: ['n8n', 'Make (Integromat)', 'Zapier', 'GoHighLevel', 'Kommo CRM', 'Workflow Automation', 'AI Agent Design'],
  },
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'AI / Machine Learning',
    items: [
      'Retrieval-Augmented Generation (RAG)',
      'LLM Integration',
      'Vector Databases',
      'Semantic Search',
      'Sentence Embeddings',
      'Hugging Face Transformers',
      'sentence-transformers',
      'TensorFlow.js',
      'NLP Fundamentals',
      'Prompt Design',
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST API Design',
      'Pydantic',
      'Authentication & Authorization',
    ],
  },
  {
    category: 'Data & Databases',
    items: ['MongoDB', 'ChromaDB', 'Database Schema Design', 'Data Chunking & Retrieval'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git & GitHub', 'Version Control', 'Agile / Team Collaboration', 'Technical Documentation'],
  },
  {
    category: 'Business & Client-Facing',
    items: [
      'Lead Generation',
      'Client Communication',
      'Requirement Gathering',
      'Proposal Writing',
      'Digital Marketing Fundamentals',
    ],
  },
]

export const projects = [
  {
    title: 'AI Lead Qualification & CRM Auto-Sync',
    subtitle: 'n8n Workflow · AI Agent + CRM Automation',
    description:
      'An n8n workflow that scores inbound leads with an LLM, drafts a personalized reply, and routes each lead into Kommo or GoHighLevel automatically — no manual triage.',
    highlights: [
      'AI node scores every lead hot / warm / cold and drafts a first-touch reply in the same call',
      'Hot leads sync to Kommo CRM and ping sales in Slack; warm/cold leads go into a GoHighLevel nurture pipeline with an automated reply',
      'Every lead is logged to a tracking sheet — full workflow JSON + design notes included',
    ],
    tags: ['n8n', 'AI Agents', 'Kommo', 'GoHighLevel', 'Slack', 'Workflow Automation'],
    github: 'https://github.com/zayam47/Ai-Lead-Qualification-CRM-Sync',
    demo: null,
    featured: true,
  },
  {
    title: 'AI Content Repurposing & Multi-Channel Publisher',
    subtitle: 'n8n Workflow · Marketing Automation',
    description:
      'An n8n workflow that turns newly published content into platform-ready LinkedIn, Twitter/X, and Instagram copy, then routes the drafts to Slack for human approval before anything ships.',
    highlights: [
      'Google Sheet content tracker as the single source of truth — no code changes needed to add new content',
      'One AI call generates a LinkedIn post, a Twitter thread, and an Instagram caption in a single structured response',
      'Human-in-the-loop approval via Slack, and idempotent processing so nothing gets repurposed twice',
    ],
    tags: ['n8n', 'AI Agents', 'Slack', 'Google Sheets', 'Content Automation'],
    github: 'https://github.com/zayam47/Content-Repurposing-Publisher',
    demo: null,
    featured: true,
  },
  {
    title: 'RAG Knowledge Base API',
    subtitle: 'Retrieval-Augmented Generation System',
    description:
      'A full end-to-end RAG pipeline exposed through a FastAPI backend, combining semantic search with local LLM generation to answer questions grounded in a custom knowledge base — no hallucination, no paid API dependency.',
    highlights: [
      'Document chunking with overlap, embeddings via sentence-transformers, and persistent vector storage in ChromaDB using cosine similarity search',
      'Retrieval-then-generate flow that grounds LLM answers in retrieved context, running fully locally on an open-source LLM (flan-t5-base)',
      'Documented REST API (FastAPI + Pydantic) with endpoints for ingestion, knowledge-base stats, and question answering',
    ],
    tags: ['FastAPI', 'Python', 'RAG', 'Sentence-Transformers', 'ChromaDB', 'Hugging Face'],
    github: 'https://github.com/zayam47/RAG-knowledge-base-API',
    demo: null,
    featured: true,
  },
  {
    title: 'MCP Resume Assistant',
    subtitle: 'Model Context Protocol CLI Chat Agent',
    description:
      'A command-line chat agent that lets Claude answer questions about my resume and project write-ups by exposing those documents as MCP tools, resources, and prompts — instead of stuffing everything into a single prompt.',
    highlights: [
      'FastMCP server exposing career documents via tools (read/search/edit docs), resources, and slash-command prompts',
      'Agentic chat loop over the Anthropic API: streams responses, executes MCP tool calls, and repeats until a final answer',
      'Interactive REPL with @doc-mention and /command tab-completion built on prompt_toolkit',
    ],
    tags: ['Python', 'MCP', 'Anthropic API', 'Agentic AI', 'CLI'],
    github: 'https://github.com/zayam47/My-CV-Assistant',
    demo: null,
    featured: true,
  },
  {
    title: 'Petify — AI-Driven Pet Marketplace',
    subtitle: 'Final Year Project · Grade: A+',
    description:
      'A MERN-stack marketplace platform featuring an AI-powered recommendation engine (TensorFlow.js) for personalized pet suggestions, built as Backend & Database Lead on a 3-member team.',
    highlights: [
      'Designed and implemented the MongoDB schema for users, listings, and transactions',
      'Built backend routing and RESTful API logic with Node.js and Express.js',
      'Implemented authentication (JWT) and data-integrity safeguards for user and transaction data',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TensorFlow.js', 'JWT'],
    github: null,
    demo: null,
    featured: false,
  },
]

export const experience = [
  {
    role: 'Business Development Intern',
    org: 'Qodeon Lab',
    period: 'During University',
    points: [
      'Supported lead generation and client outreach alongside the technical team, gaining first-hand exposure to how client requirements translate into development scopes.',
      'Assisted in requirement gathering and documentation for client projects, coordinating between business and technical stakeholders.',
      'Contributed to proposal preparation and follow-up communication, building foundational client-relationship management experience.',
      'Gained practical understanding of web development and AI-based project workflows, strengthening the ability to speak confidently with both clients and developers.',
    ],
  },
  {
    role: 'Freelance Web & Client Support Projects',
    org: 'Self-employed',
    period: 'Ongoing',
    points: [
      'Applied web development (HTML, CSS, JavaScript) and AI fundamentals to small client-facing projects, handling requirement discussions end-to-end.',
      'Managed client correspondence, documentation, and follow-up using Google Workspace and standard productivity tools.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'University of Gujrat, Pakistan',
  gpa: 'CGPA: 3.06 / 4.0',
  coursework: [
    'Database Management',
    'Web Technologies',
    'Business Communication',
    'Documentation & Reporting',
    'Team Collaboration',
  ],
}

export const certifications = [
  {
    name: 'Basics of Digital Marketing',
    issuer: 'UniAthena, in partnership with Cambridge International Qualifications (UK)',
    date: 'July 2026',
  },
  {
    name: 'Basics of Digital Marketing Analytics',
    issuer: 'UniAthena, in partnership with Cambridge International Qualifications (UK)',
    date: 'July 2026',
  },
]
