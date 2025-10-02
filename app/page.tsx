import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import Link from "next/link"

export default function HomePage() {
  const projects = [
    {
      id: "emt-2025",
      title: "EMT-2025",
      subtitle: "Full-Stack E-Commerce Platform",
      description:
        "Enterprise-level e-commerce application built with Spring Boot backend and React frontend. Features include product management, shopping cart, order processing, user authentication, and admin dashboard. Demonstrates full-stack development with modern technologies and RESTful API design.",
      tech: "Spring Boot, React, PostgreSQL",
      year: "2024",
      status: "LIVE",
      githubUrl: "https://github.com/dariyozz/EMT-2025",
    },
    {
      id: "match-results-devops",
      title: "MATCH RESULTS DEVOPS",
      subtitle: "DevOps & Cloud Infrastructure",
      description:
        "Sports match results platform with complete DevOps pipeline implementation. Features CI/CD automation, containerization with Docker, Kubernetes orchestration, monitoring, and cloud deployment. Showcases modern DevOps practices and infrastructure as code.",
      tech: "Docker, Kubernetes, Jenkins, AWS",
      year: "2024",
      status: "LIVE",
      githubUrl: "https://github.com/dariyozz/Match-Results-DevOps-Project",
    },
    {
      id: "advanced-programming",
      title: "ADVANCED PROGRAMMING",
      subtitle: "AI & Software Engineering",
      description:
        "Collection of advanced programming projects demonstrating design patterns, algorithms, data structures, and software architecture. Includes machine learning implementations, AI algorithms, data science projects, and distributed systems.",
      tech: "Java, Python, TensorFlow, ML",
      year: "2024",
      status: "ONGOING",
      githubUrl: "https://github.com/dariyozz/Advanced-Programming",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section - Asymmetrical Layout */}
      <section className="relative min-h-screen flex items-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Left side - Name and Title */}
            <div className="col-span-12 lg:col-span-7 space-y-8">
              <ScrollAnimation>
                <div className="space-y-2">
                  <h1 className="text-8xl md:text-9xl font-black leading-none tracking-tighter">DARIO</h1>
                  <h1 className="text-8xl md:text-9xl font-black leading-none tracking-tighter text-lime-400">
                    JAKOVLESKI
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <div className="space-y-4 max-w-lg">
                  <p className="text-xl font-light text-gray-400 leading-relaxed">
                    COMPUTER SCIENCE STUDENT & SOFTWARE ENGINEER PASSIONATE ABOUT FULL-STACK DEVELOPMENT, DEVOPS, AND AI
                  </p>
                  <div className="flex items-center space-x-8">
                    <Link href="/work">
                      <Button
                        size="lg"
                        className="bg-lime-400 text-black hover:bg-lime-300 font-bold px-8 transition-all hover:scale-105"
                      >
                        VIEW WORK
                      </Button>
                    </Link>
                    <Link href="/contact" className="text-lime-400 hover:text-white transition-colors font-medium">
                      GET IN TOUCH →
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right side - Floating Info */}
            <div className="col-span-12 lg:col-span-5 space-y-12">
              <ScrollAnimation delay={400}>
                <div className="text-right space-y-4">
                  <div className="text-sm text-gray-500 font-mono">CURRENTLY</div>
                  <div className="text-lg text-white">4TH YEAR STUDENT</div>
                  <div className="text-sm text-gray-400">@ FINKI - FACULTY OF COMPUTER SCIENCE & ENGINEERING</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={600}>
                <div className="text-right space-y-4">
                  <div className="text-sm text-gray-500 font-mono">LOCATION</div>
                  <div className="text-lg text-white">SKOPJE, MACEDONIA</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={800}>
                <div className="text-right space-y-4">
                  <div className="text-sm text-gray-500 font-mono">FOCUS AREAS</div>
                  <div className="space-y-1 text-sm text-gray-300">
                    <div>SPRING BOOT & REACT</div>
                    <div>DEVOPS & CLOUD</div>
                    <div>AI & MACHINE LEARNING</div>
                    <div>CYBERSECURITY</div>
                    <div>SOFTWARE ENGINEERING</div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* Geometric accent */}
        <div className="absolute top-1/4 right-10 w-2 h-32 bg-lime-400 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-2 bg-lime-400 animate-pulse"></div>
      </section>

      {/* Projects Section - Experimental Layout */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation>
            <div className="mb-20">
              <h2 className="text-6xl font-black mb-4">SELECTED</h2>
              <h2 className="text-6xl font-black text-lime-400 mb-8">PROJECTS</h2>
              <div className="w-24 h-1 bg-white"></div>
            </div>
          </ScrollAnimation>

          {/* Projects List - Asymmetrical */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 200}>
                <div className="group">
                  <div className={`grid grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "text-right" : ""}`}>
                    {/* Project Number */}
                    <div className={`col-span-12 md:col-span-2 ${index % 2 === 1 ? "md:order-3" : ""}`}>
                      <div className="text-8xl font-black text-gray-800 group-hover:text-lime-400 transition-colors duration-500">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className={`col-span-12 md:col-span-7 space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                          <h3 className="text-3xl font-black group-hover:text-lime-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="text-xs bg-lime-400 text-black px-2 py-1 font-bold animate-pulse">
                            {project.status}
                          </span>
                        </div>
                        <p className="text-lg text-gray-400 font-light">{project.subtitle}</p>
                      </div>

                      <p className="text-gray-300 max-w-md leading-relaxed">{project.description}</p>

                      <div className="space-y-2">
                        <div className="text-xs text-gray-500 font-mono">TECH STACK</div>
                        <div className="text-sm text-lime-400">{project.tech}</div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-white hover:text-lime-400 transition-colors font-medium group"
                        >
                          VIEW CODE <Github className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        </Link>
                        <Link
                          href={`/work/${project.id}`}
                          className="inline-flex items-center text-gray-400 hover:text-white transition-colors font-medium group"
                        >
                          DETAILS <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        </Link>
                      </div>
                    </div>

                    {/* Project Year */}
                    <div className={`col-span-12 md:col-span-3 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <div className="text-right">
                        <div className="text-4xl font-black text-gray-600 group-hover:text-white transition-colors duration-300">
                          {project.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < projects.length - 1 && <div className="mt-24 h-px bg-gray-800"></div>}
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* View All Projects */}
          <ScrollAnimation delay={600}>
            <div className="mt-24 text-center">
              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-bold px-12 bg-transparent transition-all hover:scale-105"
                >
                  VIEW ALL PROJECTS
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section - Text Heavy */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <ScrollAnimation>
                <h2 className="text-5xl font-black mb-8">ABOUT</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I'm a 4th year Computer Science student at FINKI (Faculty of Computer Science & Engineering) in
                    Skopje, Macedonia. I specialize in full-stack development with Spring Boot and React, DevOps
                    practices, and machine learning implementations.
                  </p>
                  <p>
                    My journey in software engineering combines academic excellence with hands-on experience in
                    enterprise technologies, cloud computing, and AI/ML projects. I'm passionate about building scalable
                    applications and modern infrastructure.
                  </p>
                  <p>
                    When I'm not coding, you'll find me learning new technologies, exploring DevOps tools, or working on
                    machine learning projects that challenge my skills and creativity.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-span-12 lg:col-span-4 space-y-8">
              <ScrollAnimation delay={200}>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-lime-400">SKILLS</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Spring Boot</span>
                      <span className="text-gray-500">Advanced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>React</span>
                      <span className="text-gray-500">Advanced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>DevOps/Kubernetes</span>
                      <span className="text-gray-500">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Machine Learning</span>
                      <span className="text-gray-500">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cloud (AWS)</span>
                      <span className="text-gray-500">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cybersecurity</span>
                      <span className="text-gray-500">Intermediate</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={400}>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-lime-400">CONNECT</h3>
                  <div className="space-y-3">
                    <Link
                      href="mailto:dariojakovleski10@gmail.com"
                      className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    >
                      <Mail className="h-4 w-4 mr-3 group-hover:text-lime-400 transition-colors" />
                      EMAIL
                    </Link>
                    <Link
                      href="https://github.com/dariyozz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    >
                      <Github className="h-4 w-4 mr-3 group-hover:text-lime-400 transition-colors" />
                      GITHUB
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/dario-jakovleski-16417523b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    >
                      <Linkedin className="h-4 w-4 mr-3 group-hover:text-lime-400 transition-colors" />
                      LINKEDIN
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl font-black mb-8">LET'S BUILD</h2>
            <h2 className="text-6xl font-black text-lime-400 mb-8">SOMETHING AMAZING</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to collaborate on an exciting project? I'm always open to new opportunities and interesting
              challenges.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-lime-400 text-black hover:bg-lime-300 font-bold px-12 py-4 text-lg transition-all hover:scale-105"
              >
                START A PROJECT
              </Button>
            </Link>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
