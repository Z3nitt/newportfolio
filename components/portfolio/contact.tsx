"use client"

import { Mail, Github, Linkedin, Twitter, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const endpoints = [
  {
    method: "MAIL",
    path: "/contact/email",
    value: "juanluserranoleal@gmail.com",
    href: "mailto:juanluserranoleal@gmail.com",
    icon: Mail,
    color: "primary",
  },
  {
    method: "GET",
    path: "/social/github",
    value: "https://github.com/Z3nitt",
    href: "https://github.com",
    icon: Github,
    color: "foreground",
  },
  {
    method: "GET",
    path: "/social/linkedin",
    value: "linkedin.com/in/juanlu-serrano-leal-b27b59324/",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "accent",
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <h2 className="text-2xl font-mono font-bold text-foreground">
            connect
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* API endpoint panel */}
        <div className="border border-border rounded-lg bg-card overflow-hidden">
          <div className="px-4 py-3 bg-secondary/50 border-b border-border flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground">
              API ENDPOINTS
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-mono text-primary">READY</span>
            </div>
          </div>

          {/* Endpoint list */}
          <div className="divide-y divide-border">
            {endpoints.map((endpoint) => (
              <a
                key={endpoint.path}
                href={endpoint.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 hover:bg-primary/5 transition-colors group"
              >
                <div className="hidden sm:flex w-16 h-8 items-center justify-center bg-muted rounded font-mono text-xs text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {endpoint.method}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-sm text-muted-foreground mb-0.5">
                    {endpoint.path}
                  </div>
                  <div className={`font-mono text-foreground group-hover:text-primary transition-colors truncate`}>
                    {endpoint.value}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <endpoint.icon className={`w-5 h-5 ${endpoint.color === "primary" ? "text-primary" : endpoint.color === "accent" ? "text-accent" : "text-foreground"} group-hover:text-primary transition-colors`} />
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <div className="border border-border rounded-lg bg-card p-8 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-mono font-bold text-foreground mb-2">
              {"Let's Build Something Together"}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {"I'm always interested in hearing about new projects, opportunities, or just connecting with fellow developers. Feel free to reach out!"}
            </p>
            <Button size="lg" className="font-mono" asChild>
              <a href="mailto:juanluserranoleal@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </a>
            </Button>
          </div>
        </div>

        {/* Response preview */}
        <div className="mt-8 border border-border rounded-lg bg-card overflow-hidden max-w-xl mx-auto">
          <div className="px-4 py-2 bg-secondary/50 border-b border-border">
            <span className="text-xs font-mono text-muted-foreground">RESPONSE PREVIEW</span>
          </div>
          <pre className="p-4 text-sm font-mono text-muted-foreground overflow-x-auto">
{`{
  "status": 200,
  "message": "Connection established",
  "data": {
    "availability": "Open to opportunities",
    "response_time": "Usually within 24 hours",
    "preferred_contact": "email"
  }
}`}
          </pre>
        </div>

        {/* Query footer */}
        <div className="mt-6 font-mono text-sm text-muted-foreground text-center">
          {'-- All endpoints are active and accepting requests'}
        </div>
      </div>
    </section>
  )
}
