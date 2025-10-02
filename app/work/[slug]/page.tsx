import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = {
  "emt-2025": {
    title: "EMT-2025",
    subtitle: "Full-Stack E-Commerce Platform",
    description: "Enterprise-level e-commerce application built with Spring Boot and React",
    longDescription:
      "EMT-2025 is a comprehensive e-commerce platform that demonstrates modern full-stack development practices. The project showcases my ability to build scalable backend services with Spring Boot while creating intuitive user interfaces with React. It was developed as part of my university coursework to understand enterprise application architecture.",
    problem:
      "Create a production-ready e-commerce platform with robust backend architecture, secure authentication, efficient data management, and responsive frontend that can handle real-world business requirements.",
    solution:
      "Developed a microservices-based architecture using Spring Boot for the backend with PostgreSQL database, implementing RESTful APIs, JWT authentication, and integrated a modern React frontend with state management and responsive design.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "REST API", "JWT", "Maven", "Hibernate", "Redux"],
    features: [
      "User authentication and authorization with JWT",
      "Product catalog with search and filtering",
      "Shopping cart and order management",
      "Admin dashboard for inventory management",
      "RESTful API with proper error handling",
      "Responsive React frontend with modern UI",
      "Database relationships with JPA/Hibernate",
      "Payment integration ready architecture",
    ],
    challenges: [
      "Implementing secure authentication and authorization",
      "Managing complex database relationships",
      "Ensuring efficient API performance",
      "Creating seamless frontend-backend integration",
      "Handling concurrent user sessions",
    ],
    learned: [
      "Spring Boot framework and Spring ecosystem",
      "RESTful API design and best practices",
      "Database design and JPA/Hibernate ORM",
      "React state management with Redux",
      "Full-stack application architecture",
      "Security implementations with JWT",
    ],
    githubUrl: "https://github.com/dariyozz/EMT-2025",
    liveUrl: "#",
    images: ["/ecommerce-dashboard.png"],
    year: "2024",
    duration: "3 months",
    category: "Full-Stack Development",
  },
  "match-results-devops": {
    title: "MATCH RESULTS DEVOPS",
    subtitle: "DevOps & Cloud Infrastructure Project",
    description: "Sports match results platform with complete DevOps pipeline implementation",
    longDescription:
      "This project showcases modern DevOps practices by building a sports match results platform with automated CI/CD pipelines, containerization, orchestration, and cloud deployment. It demonstrates my understanding of infrastructure as code, continuous integration/deployment, and cloud computing.",
    problem:
      "Build a scalable, highly available application with automated deployment pipelines, containerization, monitoring, and cloud infrastructure that follows DevOps best practices and can handle production workloads.",
    solution:
      "Implemented a complete DevOps pipeline using Docker for containerization, Kubernetes for orchestration, Jenkins for CI/CD automation, and deployed on AWS cloud infrastructure with monitoring and logging solutions.",
    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "MongoDB",
      "Node.js",
      "Terraform",
      "Prometheus",
      "Grafana",
    ],
    features: [
      "Automated CI/CD pipeline with Jenkins",
      "Docker containerization of all services",
      "Kubernetes cluster orchestration",
      "AWS cloud deployment (EC2, S3, RDS)",
      "Infrastructure as Code with Terraform",
      "Monitoring with Prometheus and Grafana",
      "Automated testing and deployment",
      "Load balancing and auto-scaling",
      "Centralized logging system",
    ],
    challenges: [
      "Setting up complex Kubernetes configurations",
      "Implementing efficient CI/CD workflows",
      "Managing cloud infrastructure costs",
      "Ensuring zero-downtime deployments",
      "Implementing comprehensive monitoring",
    ],
    learned: [
      "Docker and containerization concepts",
      "Kubernetes orchestration and management",
      "CI/CD pipeline automation",
      "AWS cloud services and architecture",
      "Infrastructure as Code principles",
      "Monitoring and observability practices",
      "DevOps culture and methodologies",
    ],
    githubUrl: "https://github.com/dariyozz/Match-Results-DevOps-Project",
    liveUrl: "#",
    images: ["/devops-pipeline-kubernetes-dashboard.jpg"],
    year: "2024",
    duration: "4 months",
    category: "DevOps & Cloud",
  },
  "advanced-programming": {
    title: "ADVANCED PROGRAMMING",
    subtitle: "Complex Software Engineering Solutions",
    description: "Collection of advanced programming projects with AI, ML, and design patterns",
    longDescription:
      "This repository contains a comprehensive collection of advanced programming projects that demonstrate my proficiency in complex algorithms, design patterns, machine learning implementations, and software architecture. Projects span multiple domains including AI, data science, distributed systems, and advanced software engineering concepts.",
    problem:
      "Master advanced computer science concepts including machine learning algorithms, AI implementations, design patterns, data structures, distributed systems, and apply them to solve real-world problems effectively.",
    solution:
      "Developed diverse projects showcasing AI/ML implementations using TensorFlow and Scikit-learn, implemented classic design patterns in Java, created data science solutions in Python, and built distributed systems with modern frameworks.",
    technologies: [
      "Java",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Design Patterns",
      "Algorithms",
      "Apache Spark",
    ],
    features: [
      "Machine Learning models (Classification, Regression, Clustering)",
      "Neural Networks with TensorFlow",
      "Data preprocessing and analysis with Pandas",
      "Implementation of 23 Gang of Four design patterns",
      "Advanced algorithms (Graph, Dynamic Programming, Greedy)",
      "Distributed computing with Apache Spark",
      "Natural Language Processing projects",
      "Computer Vision implementations",
      "Data visualization dashboards",
    ],
    challenges: [
      "Understanding complex ML algorithms from scratch",
      "Optimizing model performance and accuracy",
      "Handling large datasets efficiently",
      "Implementing design patterns correctly",
      "Debugging distributed systems",
    ],
    learned: [
      "Machine Learning fundamentals and algorithms",
      "Deep Learning with neural networks",
      "Data science workflow and best practices",
      "Software design patterns and principles",
      "Advanced algorithms and data structures",
      "Distributed computing concepts",
      "Model evaluation and optimization",
      "Feature engineering techniques",
    ],
    githubUrl: "https://github.com/dariyozz/Advanced-Programming",
    liveUrl: "#",
    images: ["/ml-neural-network-visualization.png"],
    year: "2024",
    duration: "Ongoing",
    category: "Software Engineering",
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Analytics"],
    features: [
      "Unique brutalist design approach",
      "Responsive across all devices",
      "Dark/light mode toggle",
      "Smooth scroll animations",
      "SEO optimized",
      "Fast loading performance",
      "Analytics integration",
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
    githubUrl: "https://github.com/dariyozz/Personal-Portfolio",
    liveUrl: "#",
    images: ["/modern-portfolio.png"],
    year: "2024",
    duration: "4 weeks",
    category: "Web Design",
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
              <p className="text-gray-400">Developer</p>
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
