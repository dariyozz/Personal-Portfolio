"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, Award, Code, Users, Lightbulb } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animations"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <h1 className="text-8xl font-black mb-4">ABOUT</h1>
            <div className="w-32 h-1 bg-lime-400 mb-8"></div>
            <p className="text-2xl text-gray-400 max-w-3xl">
              Full-stack software engineer skilled in Java (Spring Boot), React.js, and Next.js with strong foundations
              in DevOps, cloud infrastructure, and cybersecurity.
            </p>
          </div>
        </ScrollAnimation>

        {/* Bio Section */}
        <ScrollAnimation delay={200}>
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm Dario Jakovleski, a full-stack software engineer currently pursuing my BSc in Internet, Networks &
                  Security at the Faculty of Computer Science & Engineering (FINKI) in Skopje, North Macedonia. My
                  journey in software development started with curiosity and has evolved into a deep passion for
                  creating robust, scalable applications.
                </p>
                <p>
                  I specialize in full-stack development using Java (Spring Boot), React.js, and Next.js, with strong
                  expertise in DevOps practices including Docker, Kubernetes, and CI/CD pipelines via GitHub Actions.
                  I'm also deeply interested in cybersecurity, including ethical hacking and penetration testing.
                </p>
                <p>
                  As a freelance software developer since September 2023, I've designed and delivered full-stack web
                  applications for clients across diverse domains, deployed on AWS and Azure with proper security
                  hardening and end-to-end solutions ensuring scalability, reliability, and performance.
                </p>
              </div>
              <div className="space-y-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Award className="h-8 w-8 text-lime-400" />
                      <h3 className="text-xl font-black">EDUCATION</h3>
                    </div>
                    <p className="text-gray-300 mb-2">BSc Internet, Networks & Security</p>
                    <p className="text-gray-400">FINKI, Skopje, North Macedonia</p>
                    <p className="text-gray-400">Expected September 2026</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Code className="h-8 w-8 text-lime-400" />
                      <h3 className="text-xl font-black">EXPERTISE</h3>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <p>• Full-Stack Development</p>
                      <p>• DevOps & Cloud (AWS/Azure)</p>
                      <p>• Cybersecurity & Pen Testing</p>
                      <p>• Machine Learning & AI</p>
                      <p>• Linux & Networking</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Skills Section */}
        <ScrollAnimation delay={400}>
          <section className="mb-20">
            <h2 className="text-4xl font-black mb-8 text-lime-400">TECHNICAL SKILLS</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="bg-gray-900 border-gray-800 hover:border-lime-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-black mb-4 text-white">BACKEND</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>Java & Spring Boot</p>
                    <p>Node.js</p>
                    <p>MySQL & PostgreSQL</p>
                    <p>REST APIs</p>
                    <p>JWT/OAuth2 Authentication</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-lime-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-black mb-4 text-white">FRONTEND</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>JavaScript / React</p>
                    <p>Next.js</p>
                    <p>TypeScript</p>
                    <p>Tailwind CSS</p>
                    <p>HTML/CSS</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-lime-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-black mb-4 text-white">DEVOPS</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>Docker & Kubernetes</p>
                    <p>AWS / GCP / Azure</p>
                    <p>CI/CD & GitHub Actions</p>
                    <p>Linux Administration</p>
                    <p>Infrastructure as Code</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-lime-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-black mb-4 text-white">AI/ML</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>Python</p>
                    <p>Machine Learning</p>
                    <p>Data Analysis</p>
                    <p>Pandas & NumPy</p>
                    <p>Jupyter Notebooks</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800 hover:border-lime-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-black mb-4 text-white">SECURITY</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>Ethical Hacking</p>
                    <p>Penetration Testing</p>
                    <p>Network Security</p>
                    <p>Security Auditing</p>
                    <p>Cryptography</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollAnimation>

        {/* Community Section */}
        <ScrollAnimation delay={600}>
          <section className="mb-20">
            <h2 className="text-4xl font-black mb-8 text-lime-400">COMMUNITY & ACTIVITIES</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-lime-400 mb-4" />
                  <h3 className="font-black mb-2">FINKI STUDENT CLUB</h3>
                  <p className="text-gray-300 text-sm">Active member of the student programming club</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Code className="h-10 w-10 text-lime-400 mb-4" />
                  <h3 className="font-black mb-2">PEER TUTORING</h3>
                  <p className="text-gray-300 text-sm">Helping fellow students with programming concepts</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Lightbulb className="h-10 w-10 text-lime-400 mb-4" />
                  <h3 className="font-black mb-2">HACKATHONS</h3>
                  <p className="text-gray-300 text-sm">Participating in local and national coding competitions</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollAnimation>

        {/* Testimonials */}
        <ScrollAnimation delay={800}>
          <section className="mb-20">
            <h2 className="text-4xl font-black mb-8 text-lime-400">TESTIMONIALS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">
                    "Dario consistently demonstrates exceptional understanding of software architecture and design
                    patterns. His work on the EMT-2025 project showed professional-level code quality."
                  </p>
                  <div className="border-t border-gray-800 pt-4">
                    <p className="font-bold">Dr. Finki Finkova</p>
                    <p className="text-sm text-gray-400">Software Engineering Professor, FINKI</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">
                    "His DevOps project implementation was impressive. The CI/CD pipeline and Kubernetes orchestration
                    demonstrated deep understanding of modern deployment practices."
                  </p>
                  <div className="border-t border-gray-800 pt-4">
                    <p className="font-bold">Finko Finkof</p>
                    <p className="text-sm text-gray-400">Classmate & Study Partner</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">
                    "Dario's machine learning projects show strong analytical skills. His implementations are clean,
                    well-documented, and demonstrate solid understanding of ML fundamentals."
                  </p>
                  <div className="border-t border-gray-800 pt-4">
                    <p className="font-bold">Finki Finkov</p>
                    <p className="text-sm text-gray-400">Academic Peer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollAnimation>

        {/* Connect Section */}
        <ScrollAnimation delay={1000}>
          <section className="text-center p-12 bg-gray-900 rounded-lg border border-gray-800">
            <h2 className="text-4xl font-black mb-4">LET'S CONNECT</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and conversations about technology. Feel free
              to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="mailto:dariojakovleski10@gmail.com">
                <Button
                  variant="outline"
                  className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  EMAIL ME
                </Button>
              </Link>
              <Link href="https://github.com/dariyozz" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black bg-transparent"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GITHUB
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dario-jakovleski-16417523b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black bg-transparent"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LINKEDIN
                </Button>
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  )
}
