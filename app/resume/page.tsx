"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail, Github, Linkedin, MapPin, GraduationCap, Code, Award } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const handleDownloadPDF = () => {
    // In a real implementation, you would generate or serve a PDF file
    alert("PDF download would be implemented here. For now, you can print this page as PDF using Ctrl+P")
  }

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express"],
    "Tools & Technologies": ["Git", "VS Code", "MongoDB", "MySQL", "Figma"],
    Concepts: ["Data Structures", "Algorithms", "OOP", "Web Development", "Database Design"],
  }

  const courses = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Web Programming",
    "Software Engineering",
    "Computer Networks",
    "Operating Systems",
    "Discrete Mathematics",
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black mb-4">RESUME</h1>
          <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
          <Button onClick={handleDownloadPDF} size="lg" className="bg-lime-400 text-black hover:bg-lime-300 font-bold">
            <Download className="mr-2 h-4 w-4" />
            DOWNLOAD PDF
          </Button>
        </div>

        {/* Personal Info */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-black mb-2">DARIO JAKOVLESKI</h2>
              <p className="text-xl text-lime-400 mb-4">Computer Science Student & Web Developer</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4 text-lime-400" />
                <span className="text-sm">dariojakovleski10@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-4 w-4 text-lime-400" />
                <span className="text-sm">Skopje, Macedonia</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Github className="h-4 w-4 text-lime-400" />
                <span className="text-sm">github.com/dariyozz</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-black mb-6 text-lime-400 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6" />
              EDUCATION
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold">Bachelor of Computer Science & Engineering</h4>
                <p className="text-lime-400">Faculty of Computer Science & Engineering (FINKI)</p>
                <p className="text-gray-400">2021 - 2025 (Expected) • Skopje, Macedonia</p>
                <p className="text-gray-300 mt-2">
                  Currently in 4th year, focusing on web development and software engineering
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-black mb-6 text-lime-400 flex items-center">
              <Code className="mr-3 h-6 w-6" />
              TECHNICAL SKILLS
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-bold mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-lime-400/10 text-lime-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-black mb-6 text-lime-400 flex items-center">
              <Code className="mr-3 h-6 w-6" />
              FEATURED PROJECTS
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">Snake Game</h4>
                <p className="text-gray-400 mb-2">HTML5, CSS3, JavaScript</p>
                <p className="text-gray-300">
                  Classic Snake game recreation with smooth gameplay, responsive controls, and score tracking. Built
                  with vanilla JavaScript and Canvas API.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold">React CRUD Application</h4>
                <p className="text-gray-400 mb-2">React, JavaScript, CSS3</p>
                <p className="text-gray-300">
                  Job management application with full CRUD functionality, search capabilities, and responsive design.
                  Demonstrates React fundamentals and state management.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold">Portfolio Website</h4>
                <p className="text-gray-400 mb-2">Next.js, TypeScript, Tailwind CSS</p>
                <p className="text-gray-300">
                  Modern, minimalistic portfolio website with unique brutalist design approach, showcasing projects and
                  skills with responsive layout.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Relevant Coursework */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-black mb-6 text-lime-400 flex items-center">
              <Award className="mr-3 h-6 w-6" />
              RELEVANT COURSEWORK
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {courses.map((course) => (
                <div key={course} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  <span className="text-gray-300">{course}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-black mb-6 text-lime-400">LANGUAGES</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Macedonian</span>
                <span className="text-gray-400">Native</span>
              </div>
              <div className="flex justify-between">
                <span>English</span>
                <span className="text-gray-400">Fluent</span>
              </div>
              <div className="flex justify-between">
                <span>Serbian</span>
                <span className="text-gray-400">Conversational</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-2xl font-black mb-6 text-lime-400">LET'S CONNECT</h3>
          <div className="flex justify-center space-x-6">
            <Link
              href="mailto:dariojakovleski10@gmail.com"
              className="text-gray-400 hover:text-lime-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/dariyozz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lime-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/dario-jakovleski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-lime-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
