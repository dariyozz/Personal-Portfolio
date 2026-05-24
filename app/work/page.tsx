import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function WorkPage() {
  const projects = [
    {
      id: "shift-management-saas",
      title: "SHIFT MANAGEMENT SAAS",
      subtitle: "Enterprise Workforce Platform",
      description:
        "Full-stack SaaS application for workforce shift scheduling and management. Features employee scheduling, time tracking, real-time notifications, and analytics dashboard. Built with modern TypeScript stack for scalability and maintainability.",
      tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "REST API"],
      year: "2025",
      status: "LIVE",
      category: "SAAS / FULL-STACK",
      githubUrl: "https://github.com/dariyozz/Shift-Management-SAAS",
    },
    {
      id: "virtual-try-on",
      title: "VIRTUAL TRY-ON",
      subtitle: "AI-Powered Fashion Tech",
      description:
        "Innovative virtual try-on application using AI and computer vision to let users visualize clothing items on themselves. Features a React frontend with Python/ML backend for realistic image processing and augmentation.",
      tech: ["Python", "React", "TensorFlow", "Computer Vision", "REST API"],
      year: "2025",
      status: "LIVE",
      category: "AI / MACHINE LEARNING",
      githubUrl: "https://github.com/dariyozz/Try-on-frontend",
    },
    {
      id: "match-results-devops",
      title: "MATCH RESULTS DEVOPS",
      subtitle: "DevOps & Cloud Infrastructure Project",
      description:
        "Sports match results platform with complete DevOps pipeline implementation. Features CI/CD automation, containerization with Docker, Kubernetes orchestration, monitoring, and cloud deployment. Showcases modern DevOps practices and infrastructure as code.",
      tech: ["Docker", "Kubernetes", "Jenkins", "AWS", "MongoDB", "Node.js"],
      year: "2025",
      status: "LIVE",
      category: "DEVOPS & CLOUD",
      githubUrl: "https://github.com/dariyozz/Match-Results-DevOps-Project",
    },
    {
      id: "emt-2025",
      title: "EMT-2025",
      subtitle: "Full-Stack E-Commerce Platform",
      description:
        "Enterprise-level e-commerce application built with Spring Boot backend and React frontend. Features include product management, shopping cart, order processing, user authentication, and admin dashboard. Demonstrates full-stack development with modern technologies and RESTful API design.",
      tech: ["Spring Boot", "React", "PostgreSQL", "REST API", "JWT"],
      year: "2025",
      status: "LIVE",
      category: "FULL-STACK DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/EMT-2025",
    },
    {
      id: "distributed-systems",
      title: "DISTRIBUTED SYSTEMS",
      subtitle: "Scalable System Architecture",
      description:
        "Implementation of distributed systems concepts including microservices architecture, message queues, load balancing, and fault tolerance. Demonstrates understanding of scalable system design and distributed computing principles.",
      tech: ["JavaScript", "Node.js", "Message Queues", "Microservices"],
      year: "2025",
      status: "LIVE",
      category: "SYSTEM DESIGN",
      githubUrl: "https://github.com/dariyozz/Distributed-Systems-Project",
    },
    {
      id: "ethical-hacking",
      title: "ETHICAL HACKING",
      subtitle: "Cybersecurity Research & Penetration Testing",
      description:
        "Comprehensive collection of ethical hacking projects and security research. Includes penetration testing methodologies, vulnerability assessments, security audits, and defensive techniques. Showcases practical cybersecurity skills.",
      tech: ["Kali Linux", "Metasploit", "Burp Suite", "Python", "Network Security"],
      year: "2026",
      status: "ONGOING",
      category: "CYBERSECURITY",
      githubUrl: "https://github.com/dariyozz/Ethical-Hacking",
    },
    {
      id: "digital-forensics",
      title: "DIGITAL FORENSICS",
      subtitle: "Incident Response & Analysis",
      description:
        "Digital forensics projects covering evidence acquisition, analysis, and reporting. Includes memory forensics, disk analysis, network forensics, and malware analysis. Essential skills for cybersecurity incident response.",
      tech: ["Autopsy", "Volatility", "Wireshark", "FTK", "Python"],
      year: "2026",
      status: "ONGOING",
      category: "CYBERSECURITY",
      githubUrl: "https://github.com/dariyozz/Digital-Forensics",
    },
    {
      id: "ai-labs",
      title: "AI LABS 2025",
      subtitle: "Machine Learning & AI Projects",
      description:
        "Collection of AI and machine learning laboratory projects. Includes neural networks, deep learning models, natural language processing, and computer vision implementations. Built with Python and modern ML frameworks.",
      tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter"],
      year: "2025",
      status: "LIVE",
      category: "AI / MACHINE LEARNING",
      githubUrl: "https://github.com/dariyozz/AI-Labs-2025",
    },
    {
      id: "data-science",
      title: "DATA SCIENCE",
      subtitle: "Analytics & Visualization",
      description:
        "Data science projects featuring exploratory data analysis, statistical modeling, and data visualization. Covers real-world datasets with insights extraction and predictive modeling techniques.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
      year: "2026",
      status: "LIVE",
      category: "DATA SCIENCE",
      githubUrl: "https://github.com/dariyozz/Data_Science",
    },
    {
      id: "web-programming-springboot",
      title: "WEB PROGRAMMING",
      subtitle: "Spring Boot Backend Development",
      description:
        "Comprehensive web programming projects built with Spring Boot. Features REST API development, database integration, authentication, and enterprise application patterns. Demonstrates Java backend expertise.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Maven"],
      year: "2024",
      status: "LIVE",
      category: "BACKEND DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/Web_Programming_SpringBOOT",
    },
    {
      id: "advanced-programming",
      title: "ADVANCED PROGRAMMING",
      subtitle: "Design Patterns & Algorithms",
      description:
        "Collection of advanced programming projects demonstrating design patterns, algorithms, data structures, and software architecture. Showcases clean code principles and software engineering best practices.",
      tech: ["Java", "Design Patterns", "Algorithms", "OOP", "SOLID"],
      year: "2025",
      status: "LIVE",
      category: "SOFTWARE ENGINEERING",
      githubUrl: "https://github.com/dariyozz/Advanced_Programing",
    },
    {
      id: "e-commerce-fullstack",
      title: "E-COMMERCE FULLSTACK",
      subtitle: "Complete Online Store Solution",
      description:
        "Full-stack e-commerce platform with product catalog, shopping cart, checkout process, and admin panel. Features user authentication, payment integration, and order management system.",
      tech: ["TypeScript", "React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      status: "IN PROGRESS",
      category: "FULL-STACK DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/E-commerceShop-Fullstack",
    },
    {
      id: "react-crud",
      title: "REACT CRUD APP",
      subtitle: "Job Finding Platform",
      description:
        "React CRUD application for finding and creating job listings. Features job search, filtering, posting new jobs, and user-friendly interface. Demonstrates React state management and component architecture.",
      tech: ["React", "JavaScript", "REST API", "CSS"],
      year: "2024",
      status: "LIVE",
      category: "FRONTEND DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/ReactApp-CRUD",
    },
    {
      id: "software-quality-testing",
      title: "SOFTWARE QUALITY & TESTING",
      subtitle: "QA & Test Automation",
      description:
        "Software quality assurance and testing projects covering unit testing, integration testing, test automation, and CI/CD testing pipelines. Demonstrates commitment to code quality and reliability.",
      tech: ["Java", "JUnit", "Selenium", "TestNG", "CI/CD"],
      year: "2026",
      status: "ONGOING",
      category: "QA & TESTING",
      githubUrl: "https://github.com/dariyozz/Software-Quality-And-Testing",
    },
    {
      id: "snake-game",
      title: "SNAKE GAME",
      subtitle: "Classic Arcade Recreation",
      description:
        "Classic snake game built with vanilla JavaScript. Features smooth gameplay, score tracking, and responsive design. A fun project demonstrating game development fundamentals and DOM manipulation.",
      tech: ["JavaScript", "HTML5", "CSS3", "Canvas"],
      year: "2023",
      status: "LIVE",
      category: "GAME DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/Snake-Game",
    },
    {
      id: "wordle-game",
      title: "WORDLE GAME",
      subtitle: "Word Puzzle Clone",
      description:
        "Recreation of the popular Wordle word-guessing game. Features daily word challenges, keyboard input, letter feedback, and statistics tracking. Built with clean HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      year: "2024",
      status: "LIVE",
      category: "GAME DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/Wordle-Game",
    },
    {
      id: "algorithms-data-structures",
      title: "ALGORITHMS & DATA STRUCTURES",
      subtitle: "Core Computer Science",
      description:
        "Comprehensive collection of algorithm implementations and data structure exercises. Covers sorting, searching, graphs, trees, dynamic programming, and more. Essential computer science fundamentals in Java.",
      tech: ["Java", "Algorithms", "Data Structures", "Problem Solving"],
      year: "2024",
      status: "LIVE",
      category: "COMPUTER SCIENCE",
      githubUrl: "https://github.com/dariyozz/Algorithms-DataStructures-Java",
    },
    {
      id: "portfolio-website",
      title: "PORTFOLIO WEBSITE",
      subtitle: "Personal Portfolio",
      description:
        "Modern, minimalistic portfolio website showcasing my projects and skills. Features a unique brutalist design approach with asymmetrical layouts and bold typography. Built with Next.js, TypeScript, and Tailwind CSS.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      year: "2024",
      status: "LIVE",
      category: "WEB DESIGN",
      githubUrl: "https://github.com/dariyozz/Personal-Portfolio",
    },
  ]

  // Group projects by category
  const categories = [...new Set(projects.map((p) => p.category))]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-8xl font-black mb-4">ALL</h1>
          <h1 className="text-8xl font-black text-lime-400 mb-8">PROJECTS</h1>
          <div className="w-32 h-1 bg-lime-400"></div>
          <p className="text-xl text-gray-400 mt-8 max-w-2xl">
            A comprehensive collection of {projects.length} projects spanning full-stack development, DevOps, AI/ML,
            cybersecurity, and software engineering. Each project represents a learning journey and creative challenge.
          </p>

          {/* Category Stats */}
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="text-xs text-gray-500 bg-gray-900 px-3 py-1 rounded font-mono">
                {category} ({projects.filter((p) => p.category === category).length})
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              <div className="grid grid-cols-12 gap-8 items-start">
                {/* Project Number */}
                <div className="col-span-12 md:col-span-2">
                  <div className="text-9xl font-black text-gray-900 group-hover:text-gray-700 transition-colors leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Project Content */}
                <div className="col-span-12 md:col-span-10 space-y-6">
                  {/* Title and Status */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-4xl font-black group-hover:text-lime-400 transition-colors mb-2">
                        {project.title}
                      </h2>
                      <p className="text-xl text-gray-400">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge
                        variant="outline"
                        className={`font-bold ${
                          project.status === "LIVE"
                            ? "border-lime-400 text-lime-400"
                            : project.status === "ONGOING"
                              ? "border-yellow-400 text-yellow-400"
                              : "border-blue-400 text-blue-400"
                        }`}
                      >
                        {project.status}
                      </Badge>
                      <span className="text-sm text-gray-500 font-mono">{project.category}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 font-mono tracking-wider">TECH STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-sm text-lime-400 bg-lime-400/10 px-3 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-6 pt-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-lime-400 transition-colors font-bold"
                    >
                      VIEW CODE <Github className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href={`/work/${project.id}`}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> DETAILS
                    </Link>
                    <span className="text-gray-600 font-mono text-sm">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < projects.length - 1 && <div className="mt-32 h-px bg-gray-800"></div>}
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-32 text-center py-20 border-t border-gray-800">
          <h2 className="text-5xl font-black mb-8">EXPLORE MORE ON</h2>
          <h2 className="text-5xl font-black text-lime-400 mb-8">GITHUB</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Check out my GitHub profile for more projects, contributions, and code samples. I&apos;m always working on
            something new!
          </p>
          <Link href="https://github.com/dariyozz" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-lime-400 text-black hover:bg-lime-300 font-bold px-12 py-4 text-lg">
              <Github className="mr-2 h-5 w-5" />
              VISIT GITHUB
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
