import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = {
  "snake-game": {
    title: "SNAKE GAME",
    subtitle: "Classic Game Recreation",
    description: "A complete recreation of the classic Snake arcade game built with vanilla JavaScript",
    longDescription:
      "This project was my first attempt at game development using pure JavaScript. I wanted to understand game loops, collision detection, and state management without relying on frameworks.",
    problem:
      "Create an engaging, responsive version of the classic Snake game that works smoothly across different devices and browsers while maintaining the nostalgic feel of the original.",
    solution:
      "Built using HTML5 Canvas for smooth rendering, implemented efficient collision detection algorithms, and added responsive controls that work on both desktop and mobile devices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    features: [
      "Smooth 60fps gameplay",
      "Responsive controls (keyboard + touch)",
      "Score tracking and high score system",
      "Game over and restart functionality",
      "Mobile-optimized interface",
    ],
    challenges: [
      "Implementing smooth game loop without performance issues",
      "Creating responsive touch controls for mobile",
      "Managing game state and collision detection efficiently",
    ],
    learned: [
      "Game development fundamentals",
      "Canvas API and 2D rendering",
      "Event handling and user input",
      "Performance optimization techniques",
    ],
    githubUrl: "https://github.com/dariyozz/Snake-Game",
    liveUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    year: "2024",
    duration: "2 weeks",
    category: "Game Development",
  },
  "reactapp-crud": {
    title: "REACT CRUD APP",
    subtitle: "Job Management Application",
    description: "A full-featured job management application built with React",
    longDescription:
      "This project helped me understand React fundamentals, state management, and CRUD operations. It was built as part of my learning journey to master modern web development.",
    problem:
      "Create a user-friendly application for managing job listings with full CRUD functionality, search capabilities, and responsive design.",
    solution:
      "Developed a React application with component-based architecture, local state management, and intuitive user interface for managing job data.",
    technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
    features: [
      "Create, read, update, delete job listings",
      "Search and filter functionality",
      "Responsive design for all devices",
      "Data persistence with local storage",
      "Form validation and error handling",
    ],
    challenges: [
      "Managing complex state across multiple components",
      "Implementing efficient search and filter logic",
      "Creating reusable components",
    ],
    learned: [
      "React hooks and state management",
      "Component lifecycle and effects",
      "Form handling and validation",
      "Local storage and data persistence",
    ],
    githubUrl: "https://github.com/dariyozz/ReactApp-CRUD",
    liveUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    year: "2024",
    duration: "3 weeks",
    category: "Web Application",
  },
  "portfolio-website": {
    title: "PORTFOLIO WEBSITE",
    subtitle: "Personal Portfolio",
    description: "Modern, minimalistic portfolio website showcasing projects and skills",
    longDescription:
      "This portfolio website represents my journey as a developer and designer. Built with Next.js and featuring a unique brutalist design approach, it showcases my projects, skills, and personality.",
    problem:
      "Create a unique, memorable portfolio that stands out from typical developer portfolios while maintaining professionalism and showcasing technical skills effectively.",
    solution:
      "Designed a brutalist-inspired interface with bold typography, asymmetrical layouts, and a distinctive lime-green accent color. Implemented with modern web technologies for optimal performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Unique brutalist design approach",
      "Responsive across all devices",
      "Dark/light mode toggle",
      "Smooth scroll animations",
      "SEO optimized",
      "Fast loading performance",
    ],
    challenges: [
      "Balancing unique design with usability",
      "Implementing complex animations smoothly",
      "Ensuring accessibility while maintaining design vision",
    ],
    learned: [
      "Advanced CSS and Tailwind techniques",
      "Next.js App Router and TypeScript",
      "Design principles and user experience",
      "Performance optimization strategies",
    ],
    githubUrl: "https://github.com/dariyozz",
    liveUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    year: "2024",
    duration: "4 weeks",
    category: "Web Design",
  },
  "university-projects": {
    title: "UNIVERSITY PROJECTS",
    subtitle: "Academic Work Collection",
    description: "Collection of various projects completed during studies at FINKI",
    longDescription:
      "Throughout my studies at FINKI, I've worked on numerous projects that have shaped my understanding of computer science fundamentals. These projects span multiple programming languages and concepts, from data structures to web development.",
    problem:
      "Apply theoretical computer science concepts to practical problems while demonstrating proficiency across multiple programming languages and paradigms.",
    solution:
      "Developed a diverse portfolio of academic projects including database systems, algorithm visualizations, network programming, and full-stack web applications, each tailored to specific course requirements.",
    technologies: ["Java", "C++", "Python", "JavaScript", "MySQL", "PHP", "React", "Node.js", "MongoDB"],
    features: [
      "University Management System with MySQL",
      "Sorting Algorithm Visualizer with JavaScript",
      "Multi-client Chat Application in Java",
      "E-commerce Platform with React and Node.js",
      "Data Structure Implementations in C++",
      "Web scraping tools in Python",
    ],
    challenges: [
      "Adapting to different programming paradigms",
      "Working within academic constraints and deadlines",
      "Collaborating effectively in team projects",
      "Implementing complex algorithms efficiently",
    ],
    learned: [
      "Fundamental computer science concepts",
      "Multiple programming languages and frameworks",
      "Database design and management",
      "Software engineering best practices",
      "Team collaboration and project management",
    ],
    githubUrl: "https://github.com/dariyozz",
    liveUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    year: "2021-2024",
    duration: "Ongoing",
    category: "Academic",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/work">
          <Button variant="ghost" className="group text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            BACK TO WORK
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="mb-8">
          <Badge variant="outline" className="border-lime-400 text-lime-400 mb-4">
            {project.category}
          </Badge>
          <h1 className="text-6xl font-black mb-4">{project.title}</h1>
          <p className="text-2xl text-gray-400 mb-8">{project.subtitle}</p>
        </div>

        {/* Project Meta */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 p-6 bg-gray-900/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-lime-400" />
            <div>
              <h3 className="font-bold text-white">Year</h3>
              <p className="text-gray-400">{project.year}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <User className="h-5 w-5 text-lime-400" />
            <div>
              <h3 className="font-bold text-white">Duration</h3>
              <p className="text-gray-400">{project.duration}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Code className="h-5 w-5 text-lime-400" />
            <div>
              <h3 className="font-bold text-white">Role</h3>
              <p className="text-gray-400">Solo Developer</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Github className="mr-2 h-4 w-4" />
                CODE
              </Button>
            </Link>
            <Button size="sm" className="bg-lime-400 text-black hover:bg-lime-300">
              <ExternalLink className="mr-2 h-4 w-4" />
              DEMO
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video mb-16 overflow-hidden rounded-lg bg-gray-900">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 space-y-16">
        {/* Overview */}
        <section>
          <h2 className="text-3xl font-black mb-6 text-lime-400">OVERVIEW</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">{project.longDescription}</p>
          <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
        </section>

        {/* Problem & Solution */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black mb-6 text-lime-400">PROBLEM</h2>
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-6 text-lime-400">SOLUTION</h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </div>
        </section>

        {/* Technologies */}
        <section>
          <h2 className="text-3xl font-black mb-6 text-lime-400">TECHNOLOGIES USED</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-lime-400/10 text-lime-400 px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-black mb-6 text-lime-400">KEY FEATURES</h2>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges & Learning */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black mb-6 text-lime-400">CHALLENGES</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-6 text-lime-400">WHAT I LEARNED</h2>
            <ul className="space-y-3">
              {project.learned.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Next Project */}
      <div className="max-w-7xl mx-auto px-4 py-16 mt-16 border-t border-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-black mb-8 text-lime-400">EXPLORE MORE PROJECTS</h2>
          <Link href="/work">
            <Button
              size="lg"
              variant="outline"
              className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black bg-transparent"
            >
              VIEW ALL PROJECTS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
