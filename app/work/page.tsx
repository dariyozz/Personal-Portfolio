import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function WorkPage() {
  const projects = [
    {
      id: "emt-2025",
      title: "EMT-2025",
      subtitle: "Full-Stack E-Commerce Platform",
      description:
        "Enterprise-level e-commerce application built with Spring Boot backend and React frontend. Features include product management, shopping cart, order processing, user authentication, and admin dashboard. Demonstrates full-stack development with modern technologies and RESTful API design.",
      tech: ["Spring Boot", "React", "PostgreSQL", "REST API", "JWT"],
      year: "2024",
      status: "LIVE",
      category: "FULL-STACK DEVELOPMENT",
      githubUrl: "https://github.com/dariyozz/EMT-2025",
    },
    {
      id: "match-results-devops",
      title: "MATCH RESULTS DEVOPS",
      subtitle: "DevOps & Cloud Infrastructure Project",
      description:
        "Sports match results platform with complete DevOps pipeline implementation. Features CI/CD automation, containerization with Docker, Kubernetes orchestration, monitoring, and cloud deployment. Showcases modern DevOps practices and infrastructure as code.",
      tech: ["Docker", "Kubernetes", "Jenkins", "AWS", "MongoDB", "Node.js"],
      year: "2024",
      status: "LIVE",
      category: "DEVOPS & CLOUD",
      githubUrl: "https://github.com/dariyozz/Match-Results-DevOps-Project",
    },
    {
      id: "advanced-programming",
      title: "ADVANCED PROGRAMMING",
      subtitle: "Complex Software Engineering Solutions",
      description:
        "Collection of advanced programming projects demonstrating design patterns, algorithms, data structures, and software architecture. Includes machine learning implementations, AI algorithms, data science projects, and distributed systems. Built with Java, Python, and modern frameworks.",
      tech: ["Java", "Python", "TensorFlow", "Scikit-learn", "Design Patterns"],
      year: "2024",
      status: "ONGOING",
      category: "SOFTWARE ENGINEERING",
      githubUrl: "https://github.com/dariyozz/Advanced-Programming",
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

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-8xl font-black mb-4">ALL</h1>
          <h1 className="text-8xl font-black text-lime-400 mb-8">PROJECTS</h1>
          <div className="w-32 h-1 bg-lime-400"></div>
          <p className="text-xl text-gray-400 mt-8 max-w-2xl">
            A collection of my work spanning full-stack development, DevOps, machine learning, and software engineering.
            Each project represents a learning journey and creative challenge.
          </p>
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
                      <Badge variant="outline" className="border-lime-400 text-lime-400 font-bold">
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
            Check out my GitHub profile for more projects, contributions, and code samples. I'm always working on
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
