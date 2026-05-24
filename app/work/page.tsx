import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function WorkPage() {
  const projects = [
    // === YOUR PRIORITY ORDER ===
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
      id: "emt-2025",
      title: "E-COMMERCE APP",
      subtitle: "Full-Stack Online Store",
      description:
        "E-commerce application built for the Electronic and Mobile Commerce course. Features product management, shopping cart, order processing, and responsive mobile-first design. Demonstrates full-stack development with modern web technologies.",
      tech: ["JavaScript", "React", "E-commerce", "REST API"],
      year: "2025",
      status: "LIVE",
      category: "FULL-STACK DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/EMT-2025",
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
      id: "match-results-devops",
      title: "MATCH RESULTS DEVOPS",
      subtitle: "DevOps & Cloud Infrastructure Project",
      description:
        "Sports match results platform with complete DevOps pipeline implementation. Features CI/CD automation, containerization with Docker, Kubernetes orchestration, monitoring, and cloud deployment. Showcases modern DevOps practices and infrastructure as code.",
      tech: ["Docker", "Kubernetes", "Jenkins", "AWS", "TypeScript", "Node.js"],
      year: "2025",
      status: "LIVE",
      category: "DEVOPS & CLOUD",
      githubUrl: "https://github.com/dariyozz/Match-Results-DevOps-Project",
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
      id: "design-computer-networks",
      title: "DESIGN OF COMPUTER NETWORKS",
      subtitle: "Network Architecture & Design",
      description:
        "Projects focused on computer network design, topology planning, and network infrastructure. Covers routing protocols, network security, and enterprise network architecture principles.",
      tech: ["Cisco", "Network Design", "TCP/IP", "Routing", "Subnetting"],
      year: "2026",
      status: "ONGOING",
      category: "NETWORKING",
      githubUrl: "https://github.com/dariyozz/Design-of-computer-networks",
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
    // === REMAINING PROJECTS ===
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
      id: "levelup-mvc",
      title: "LEVELUP MVC",
      subtitle: "Course Selling Platform",
      description:
        "MVC-based application for selling online courses. Features course management, user enrollment, content delivery, and payment processing with clean architecture.",
      tech: ["JavaScript", "MVC Architecture", "Node.js", "Express"],
      year: "2024",
      status: "LIVE",
      category: "FULL-STACK DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/LevelUp-MVC-Selling-Courses-App",
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
      id: "kiii2025",
      title: "KIII 2025",
      subtitle: "Cloud Infrastructure & DevOps",
      description:
        "Cloud infrastructure and containerization projects from the KIII course. Features container orchestration, cloud deployment strategies, and infrastructure as code practices.",
      tech: ["Docker", "Kubernetes", "Cloud", "Infrastructure"],
      year: "2025",
      status: "LIVE",
      category: "DEVOPS & CLOUD",
      githubUrl: "https://github.com/dariyozz/kiii2025",
    },
    {
      id: "information-security",
      title: "INFORMATION SECURITY",
      subtitle: "Security Fundamentals & Practices",
      description:
        "Information security projects covering cryptography, access control, security policies, and risk management. Essential knowledge for building secure applications and systems.",
      tech: ["Cryptography", "Security Policies", "Risk Assessment", "Vim Script"],
      year: "2025",
      status: "LIVE",
      category: "CYBERSECURITY",
      githubUrl: "https://github.com/dariyozz/Information-security",
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
      id: "javascript-projects",
      title: "JAVASCRIPT PROJECTS",
      subtitle: "Client-Side Web Development",
      description:
        "Collection of JavaScript projects from the Internet Programming course. Features DOM manipulation, event handling, interactive web applications, and modern JavaScript practices.",
      tech: ["JavaScript", "HTML", "CSS", "DOM", "Web APIs"],
      year: "2024",
      status: "LIVE",
      category: "FRONTEND DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/JavaScript-Projects",
    },
    {
      id: "internet-technology",
      title: "INTERNET TECHNOLOGY",
      subtitle: "Web Technologies & Protocols",
      description:
        "Projects exploring internet technologies, web protocols, and modern web development practices. Covers HTTP, REST APIs, and web application architecture.",
      tech: ["JavaScript", "HTML", "CSS", "Web APIs", "Protocols"],
      year: "2024",
      status: "LIVE",
      category: "WEB DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/Internet-Technology",
    },
    {
      id: "advent-of-code",
      title: "ADVENT OF CODE 2024",
      subtitle: "Programming Challenges",
      description:
        "Solutions to Advent of Code 2024 programming challenges. Features algorithmic problem-solving, code optimization, and creative solutions to daily coding puzzles.",
      tech: ["Java", "Algorithms", "Problem Solving", "Optimization"],
      year: "2024",
      status: "LIVE",
      category: "COMPUTER SCIENCE",
      githubUrl: "https://github.com/dariyozz/AdventOfCode-2024",
    },
    {
      id: "oop",
      title: "OBJECT-ORIENTED PROGRAMMING",
      subtitle: "OOP Principles in C++",
      description:
        "Object-oriented programming exercises and projects in C++. Covers classes, inheritance, polymorphism, encapsulation, and design principles for building maintainable software.",
      tech: ["C++", "OOP", "Classes", "Inheritance", "Polymorphism"],
      year: "2024",
      status: "LIVE",
      category: "COMPUTER SCIENCE",
      githubUrl: "https://github.com/dariyozz/Object-Oriented-Programming",
    },
    {
      id: "structured-programming",
      title: "STRUCTURED PROGRAMMING",
      subtitle: "C/C++ Fundamentals",
      description:
        "Collection of C/C++ programs from the Structured Programming course. Covers fundamental programming concepts, memory management, pointers, and algorithmic problem solving.",
      tech: ["C", "C++", "Algorithms", "Memory Management"],
      year: "2024",
      status: "LIVE",
      category: "COMPUTER SCIENCE",
      githubUrl: "https://github.com/dariyozz/Structured-Programming",
    },
    {
      id: "color-switch-game",
      title: "COLOR SWITCH GAME",
      subtitle: "Unity Game Development",
      description:
        "Recreation of the popular Color Switch game built with C# and Unity. Features smooth gameplay mechanics, color matching challenges, and increasing difficulty levels.",
      tech: ["C#", "Unity", "Game Development", "Physics"],
      year: "2024",
      status: "LIVE",
      category: "GAME DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/Color-Switch-Game",
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
      id: "bingo-game",
      title: "BINGO GAME",
      subtitle: "Lottery-Style Game",
      description:
        "Lottery-style bingo game with number generation, card management, and win detection. A fun interactive project demonstrating randomization and game logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      year: "2023",
      status: "LIVE",
      category: "GAME DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/Bingo-Game",
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
