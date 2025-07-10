"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-8xl font-black mb-4">LET'S</h1>
          <h1 className="text-8xl font-black text-lime-400 mb-8">CONNECT</h1>
          <div className="w-32 h-1 bg-lime-400"></div>
          <p className="text-xl text-gray-400 mt-8 max-w-2xl">
            I'm always interested in new opportunities, collaborations, and interesting projects. Whether you have a
            project in mind or just want to chat about technology, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-black mb-8">SEND MESSAGE</h2>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-lime-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-lime-400 mb-2">MESSAGE SENT!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-lime-400 font-bold">
                          NAME
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-black border-gray-700 text-white placeholder-gray-500 focus:border-lime-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-lime-400 font-bold">
                          EMAIL
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="bg-black border-gray-700 text-white placeholder-gray-500 focus:border-lime-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-lime-400 font-bold">
                        SUBJECT
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-black border-gray-700 text-white placeholder-gray-500 focus:border-lime-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-lime-400 font-bold">
                        MESSAGE
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        rows={6}
                        required
                        className="bg-black border-gray-700 text-white placeholder-gray-500 focus:border-lime-400 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-lime-400 text-black hover:bg-lime-300 font-bold py-4 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "SENDING..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          SEND MESSAGE
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black mb-8">GET IN TOUCH</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-lime-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">EMAIL</h3>
                    <Link
                      href="mailto:dariojakovleski10@gmail.com"
                      className="text-gray-400 hover:text-lime-400 transition-colors"
                    >
                      dariojakovleski10@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-lime-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">LOCATION</h3>
                    <p className="text-gray-400">Skopje, Macedonia</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-lime-400">SOCIAL LINKS</h3>
              <div className="space-y-4">
                <Link
                  href="https://github.com/dariyozz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Github className="h-5 w-5 group-hover:text-lime-400" />
                  <span>github.com/dariyozz</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/dario-jakovleski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Linkedin className="h-5 w-5 group-hover:text-lime-400" />
                  <span>LinkedIn Profile</span>
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold mb-3 text-lime-400">RESPONSE TIME</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I typically respond to messages within 24-48 hours. For urgent inquiries, feel free to reach out via
                email or LinkedIn.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold mb-3 text-lime-400">COLLABORATION</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm open to freelance projects, internship opportunities, and collaborative work. Let's discuss how we
                can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
