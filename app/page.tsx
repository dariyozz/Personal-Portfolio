import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import Link from "next/link"

export default function HomePage() {
  const projects = [
    {
      id: "snake-game",
      title: "SNAKE GAME",
      subtitle: "Classic Game Recreation",
      description:
        "Famous 'Snake Game' built with JavaScript. A complete recreation of the classic arcade game with smooth gameplay, score tracking, and responsive controls. Built with HTML, CSS, and JavaScript in a single file.",
      tech: "HTML, CSS, JavaScript",
      year: "2024",
      status: "LIVE",
      githubUrl: "https://github.com/dariyozz/Snake-Game",
    },
    {
      id: "reactapp-crud",
      title: "REACT CRUD APP",
      subtitle: "Job Management Application",
      description:
        "React CRUD Application for finding and creating jobs. Features full CRUD functionality with a clean, intuitive interface for managing job listings. Built with modern React patterns and responsive design.",
      tech: "React, JavaScript, CSS",
      year: "2024",
      status: "LIVE",
      githubUrl: "https://github.com/dariyozz/ReactApp-CRUD",
    },
    {
      id: "portfolio-website",
      title: "PORTFOLIO WEBSITE",
      subtitle: "Personal Portfolio",
      description:
        "Modern, minimalistic portfolio website showcasing my projects and skills. Features a unique brutalist design approach with asymmetrical layouts and bold typography.",
      tech: "Next.js, TypeScript, Tailwind CSS",
      year: "2024",
      status: "LIVE",
      githubUrl: "https://github.com/dariyozz",
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
                    COMPUTER SCIENCE STUDENT & WEB DEVELOPER PASSIONATE ABOUT CODING AND PROBLEM-SOLVING
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
                    <div>WEB DEVELOPMENT</div>
                    <div>JAVASCRIPT & REACT</div>
                    <div>PROBLEM SOLVING</div>
                    <div>FULL-STACK DEVELOPMENT</div>
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
                    Skopje, Macedonia. Passionate about coding and problem-solving, I love creating web applications
                    that solve real-world problems.
                  </p>
                  <p>
                    My journey in programming started with curiosity and has evolved into a deep passion for web
                    development. I enjoy working with JavaScript, React, and exploring new technologies that push the
                    boundaries of what's possible on the web.
                  </p>
                  <p>
                    When I'm not coding, you'll find me learning new programming concepts, contributing to open source
                    projects, or working on personal projects that challenge my skills and creativity.
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
                      <span>JavaScript</span>
                      <span className="text-gray-500">Advanced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>React</span>
                      <span className="text-gray-500">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>HTML/CSS</span>
                      <span className="text-gray-500">Advanced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next.js</span>
                      <span className="text-gray-500">Learning</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Python</span>
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
                      href="https://linkedin.com/in/dario-jakovleski"
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
