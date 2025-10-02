import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-4">DARIO JAKOVLESKI</h3>
            <p className="text-gray-400">Full-Stack Developer & Software Engineer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lime-400">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-400 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-gray-400 hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4 text-lime-400">CONNECT</h4>
            <div className="space-y-3">
              <Link
                href="mailto:dariojakovleski10@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email
              </Link>
              <Link
                href="https://github.com/dariyozz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/dario-jakovleski-16417523b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dario Jakovleski. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
