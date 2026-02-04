"use client"

import { Database, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                <Database className="w-4 h-4 text-primary" />
              </div>
              <span className="font-mono font-bold text-foreground">
                Z3nitt<span className="text-primary">.db</span>
              </span>
            </div>
            <span className="text-sm text-muted-foreground font-mono">
              {currentYear} Juanlu 'Z3nitt' Serrano
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Z3nitt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/juanlu-serrano-leal-b27b59324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Available for work</span>
          </div>
        </div>

        {/* Footer query */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground">
            {'-- Built with Next.js, Tailwind CSS, and love for databases'}
          </p>
        </div>
      </div>
    </footer>
  )
}
