import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Name and Title */}
          <div>
            <h3 className="text-2xl font-black mb-2">DARIO JAKOVLESKI</h3>
            <p className="text-gray-400 text-sm">COMPUTER SCIENCE STUDENT</p>
            <p className="text-gray-500 text-xs">FINKI - SKOPJE, MACEDONIA</p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-lime-400 mb-4 tracking-wider">QUICK LINKS</h4>
            <div className="space-y-2">
              <Link href="/work" className="block text-sm text-gray-400 hover:text-white transition-colors">
                WORK
              </Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-white transition-colors">
                CONTACT
              </Link>
              <Link
                href="https://github.com/dariyozz"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                GITHUB
              </Link>
            </div>
          </div>

          {/* Right - Social */}
          <div>
            <h4 className="text-sm font-bold text-lime-400 mb-4 tracking-wider">CONNECT</h4>
            <div className="flex space-x-4">
              <Link
                href="mailto:dariojakovleski10@gmail.com"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/dariyozz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/dario-jakovleski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">© 2024 DARIO JAKOVLESKI. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
