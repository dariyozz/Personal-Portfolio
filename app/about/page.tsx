import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Award, Heart, Code, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const testimonials = [
    {
      name: "Finki Finkov",
      role: "Professor at FINKI",
      content:
        "Dario shows exceptional problem-solving skills and dedication to learning. His projects demonstrate a strong understanding of software engineering principles.",
      course: "Software Engineering",
    },
    {
      name: "Finki Finkova",
      role: "Classmate & Study Partner",
      content:
        "Working with Dario on group projects has been amazing. He's always willing to help others and brings creative solutions to complex problems.",
      project: "Database Systems Project",
    },
    {
      name: "Finko Finkov",
      role: "Fellow FINKI Student",
      content:
        "Dario's coding skills and attention to detail are impressive. He helped me understand React concepts that I was struggling with.",
      context: "Web Programming Course",
    },
  ]

  const finki_involvement = [
    {
      title: "Student Programming Club",
      role: "Active Member",
      description: "Participate in coding competitions and workshops, helping organize events for fellow students",
    },
    {
      title: "Peer Tutoring",
      role: "Volunteer Tutor",
      description: "Help first and second-year students with programming fundamentals and web development",
    },
    {
      title: "Hackathon Participant",
      role: "Team Member",
      description: "Participated in university hackathons, focusing on web development and innovative solutions",
    },
  ]

  const academic_projects = [
    {
      title: "University Management System",
      course: "Database Systems",
      tech: ["MySQL", "PHP", "HTML/CSS"],
      description:
        "Designed and implemented a complete database system for managing student records, courses, and grades",
    },
    {
      title: "Sorting Algorithm Visualizer",
      course: "Data Structures & Algorithms",
      tech: ["JavaScript", "HTML5 Canvas"],
      description: "Interactive visualization tool for various sorting algorithms with step-by-step animation",
    },
    {
      title: "Chat Application",
      course: "Computer Networks",
      tech: ["Java", "Socket Programming"],
      description: "Real-time chat application using socket programming with multiple client support",
    },
    {
      title: "E-Commerce Website",
      course: "Web Programming",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "Full-stack e-commerce platform with user authentication, product management, and payment integration",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-8xl font-black mb-4">ABOUT</h1>
          <h1 className="text-8xl font-black text-lime-400 mb-8">ME</h1>
          <div className="w-32 h-1 bg-lime-400"></div>
        </div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-black mb-8 text-lime-400">MY JOURNEY</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm currently in my 4th year at FINKI (Faculty of Computer Science & Engineering) in Skopje, Macedonia.
                My journey into programming started with curiosity about how websites work, which quickly evolved into a
                passion for creating digital solutions.
              </p>
              <p>
                What drives me is the endless possibility to learn and create. Every project, whether it's a simple game
                or a complex web application, teaches me something new about problem-solving and software development.
              </p>
              <p>
                I believe in the power of collaboration and knowledge sharing. That's why I actively participate in the
                FINKI community, help fellow students, and contribute to open-source projects whenever possible.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-lime-400 mr-3" />
                  <h3 className="text-xl font-bold">EDUCATION</h3>
                </div>
                <p className="text-gray-300">4th Year Computer Science Student at FINKI</p>
                <p className="text-gray-400 text-sm">Expected Graduation: 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-lime-400 mr-3" />
                  <h3 className="text-xl font-bold">FOCUS AREAS</h3>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400 mr-2">
                    Web Development
                  </Badge>
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400 mr-2">
                    Frontend Engineering
                  </Badge>
                  <Badge variant="secondary" className="bg-lime-400/10 text-lime-400 mr-2">
                    Problem Solving
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-lime-400 mr-3" />
                  <h3 className="text-xl font-bold">INTERESTS</h3>
                </div>
                <p className="text-gray-300 text-sm">Game Development, Open Source, Teaching, Technology Innovation</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FINKI Community Involvement */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-lime-400 flex items-center">
            <Users className="mr-4 h-8 w-8" />
            FINKI COMMUNITY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {finki_involvement.map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lime-400 text-sm mb-3">{item.role}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Projects */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-lime-400 flex items-center">
            <BookOpen className="mr-4 h-8 w-8" />
            ACADEMIC PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {academic_projects.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lime-400 text-sm mb-3">{project.course}</p>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-lime-400/10 text-lime-400 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-lime-400 flex items-center">
            <Award className="mr-4 h-8 w-8" />
            TESTIMONIALS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-lime-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs mt-1">
                      {testimonial.course || testimonial.project || testimonial.context}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Expanded */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-lime-400">EXPANDED SKILLS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-lime-400">Frontend</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>JavaScript</span>
                    <span className="text-gray-400">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span>React</span>
                    <span className="text-gray-400">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HTML/CSS</span>
                    <span className="text-gray-400">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next.js</span>
                    <span className="text-gray-400">Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-lime-400">Backend</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Node.js</span>
                    <span className="text-gray-400">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Python</span>
                    <span className="text-gray-400">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Java</span>
                    <span className="text-gray-400">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PHP</span>
                    <span className="text-gray-400">Basic</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-lime-400">Database</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>MySQL</span>
                    <span className="text-gray-400">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MongoDB</span>
                    <span className="text-gray-400">Basic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PostgreSQL</span>
                    <span className="text-gray-400">Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-lime-400">Tools</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Git</span>
                    <span className="text-gray-400">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VS Code</span>
                    <span className="text-gray-400">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Figma</span>
                    <span className="text-gray-400">Basic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Docker</span>
                    <span className="text-gray-400">Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-16 border-t border-gray-800">
          <h2 className="text-4xl font-black mb-8">WANT TO COLLABORATE?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in new projects, learning opportunities, and connecting with fellow developers.
          </p>
          <Link href="/contact">
            <button className="bg-lime-400 text-black hover:bg-lime-300 font-bold px-12 py-4 text-lg rounded transition-colors">
              LET'S CONNECT
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
