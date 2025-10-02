"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, Github, Linkedin, MapPin, Calendar, Award, Briefcase, Code } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const handleDownload = () => {
    // This would trigger the PDF download
    alert("Resume download functionality - Add your PDF here!")
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-6xl font-black mb-4">RESUME</h1>
              <div className="w-24 h-1 bg-lime-400 mb-6"></div>
              <p className="text-xl text-gray-400">
                Full-Stack Developer & Software Engineer specializing in Spring Boot, React, DevOps, Cybersecurity, and
                Machine Learning
              </p>
            </div>
            <Button onClick={handleDownload} size="lg" className="bg-lime-400 text-black hover:bg-lime-300 font-bold">
              <Download className="mr-2 h-5 w-5" />
              DOWNLOAD PDF
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="mailto:dariojakovleski10@gmail.com"
              className="flex items-center text-gray-400 hover:text-lime-400 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              dariojakovleski10@gmail.com
            </Link>
            <Link
              href="https://github.com/dariyozz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-lime-400 transition-colors"
            >
              <Github className="h-4 w-4 mr-2" />
              github.com/dariyozz
            </Link>
            <Link
              href="https://www.linkedin.com/in/dario-jakovleski-16417523b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-lime-400 transition-colors"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn Profile
            </Link>
            <div className="flex items-center text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              Skopje, Macedonia
            </div>
          </div>
        </div>

        {/* Summary */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-lime-400 text-2xl font-black">PROFESSIONAL SUMMARY</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 leading-relaxed">
            <p>
              4th-year Computer Science student at FINKI with strong expertise in full-stack development, DevOps
              practices, cybersecurity, and machine learning. Experienced in building enterprise-level applications with
              Spring Boot and React, implementing CI/CD pipelines, security best practices, and developing AI/ML
              solutions. Passionate about clean code, scalable architecture, and secure software engineering practices.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-lime-400 text-2xl font-black flex items-center">
              <Award className="mr-3 h-6 w-6" />
              EDUCATION
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-400">Faculty of Computer Science and Engineering (FINKI)</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    2021 - 2025
                  </div>
                  <p className="text-gray-400">Skopje, Macedonia</p>
                </div>
              </div>
              <p className="text-gray-300 mt-2">
                Focus on Software Engineering, Web Technologies, Cloud Computing, and Artificial Intelligence
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-lime-400 text-2xl font-black flex items-center">
              <Code className="mr-3 h-6 w-6" />
              TECHNICAL SKILLS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-bold text-white mb-3">Backend Development</h4>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "Java", "Node.js", "REST API", "Hibernate", "JPA", "PostgreSQL", "MongoDB"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary" className="bg-lime-400/10 text-lime-400">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Frontend Development</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-lime-400/10 text-lime-400">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">DevOps & Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD", "Terraform", "Git", "Linux"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-lime-400/10 text-lime-400">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">AI & Machine Learning</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Neural Networks", "Data Science"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary" className="bg-lime-400/10 text-lime-400">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Cybersecurity</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Application Security",
                  "Penetration Testing",
                  "OWASP Top 10",
                  "Network Security",
                  "Wireshark",
                  "Burp Suite",
                  "Cryptography",
                  "Security Auditing",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-lime-400/10 text-lime-400">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="text-lime-400 text-2xl font-black flex items-center">
              <Briefcase className="mr-3 h-6 w-6" />
              KEY PROJECTS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold">EMT-2025</h3>
                  <p className="text-gray-400">Full-Stack E-Commerce Platform</p>
                </div>
                <Badge className="bg-lime-400 text-black">2024</Badge>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-2">
                <li>Built enterprise e-commerce application with Spring Boot backend and React frontend</li>
                <li>Implemented JWT authentication, RESTful APIs, and PostgreSQL database design</li>
                <li>Created admin dashboard for inventory management and order processing</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  Spring Boot
                </Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  React
                </Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  PostgreSQL
                </Badge>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold">Match Results DevOps Project</h3>
                  <p className="text-gray-400">DevOps & Cloud Infrastructure</p>
                </div>
                <Badge className="bg-lime-400 text-black">2024</Badge>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-2">
                <li>Implemented complete CI/CD pipeline using Jenkins for automated deployments</li>
                <li>Containerized application with Docker and orchestrated with Kubernetes</li>
                <li>Deployed on AWS cloud with monitoring using Prometheus and Grafana</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  Docker
                </Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  Kubernetes
                </Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  AWS
                </Badge>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold">Advanced Programming Projects</h3>
                  <p className="text-gray-400">AI, ML & Software Engineering</p>
                </div>
                <Badge className="bg-lime-400 text-black">2024</Badge>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-2">
                <li>Developed machine learning models using TensorFlow and Scikit-learn</li>
                <li>Implemented 23 Gang of Four design patterns in Java</li>
                <li>Built distributed systems with Apache Spark for data processing</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  Python
                </Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  TensorFlow
                </Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  Java
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lime-400 font-black">LANGUAGES</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Macedonian</span>
                <span className="text-gray-400">Native</span>
              </div>
              <div className="flex justify-between">
                <span>English</span>
                <span className="text-gray-400">Fluent</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lime-400 font-black">INTERESTS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-300">
              <p>• Cloud Computing & Infrastructure</p>
              <p>• AI & Machine Learning</p>
              <p>• Application Security</p>
              <p>• Open Source Contribution</p>
              <p>• Software Architecture</p>
            </CardContent>
          </Card>
        </div>

        {/* Download CTA */}
        <div className="mt-12 text-center p-8 bg-gray-900 rounded-lg border border-gray-800">
          <h3 className="text-2xl font-black mb-4">WANT A PDF COPY?</h3>
          <p className="text-gray-400 mb-6">Download my resume for offline viewing or printing.</p>
          <Button onClick={handleDownload} size="lg" className="bg-lime-400 text-black hover:bg-lime-300 font-bold">
            <Download className="mr-2 h-5 w-5" />
            DOWNLOAD RESUME
          </Button>
        </div>
      </div>
    </div>
  )
}
