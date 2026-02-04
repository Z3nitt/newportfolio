"use client"

import { useState } from "react"
import { ExternalLink, Github, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  name: string
  description: string
  tech: string[]
  role: string
  feature: string
  details: string
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "Mobile Game based on Dragon Ball Z",
    description: "Game where two people compete based on how fast they can tap the screen, includes multiplayer mode or vs. AI.",
    tech: ["Java", "Jetpack Compose"],
    role: "Full Stack Developer",
    feature: "Multiplayer game",
    details: "Developed a competitive mobile game where players race by tapping the screen as fast as possible. Implemented real-time multiplayer, score synchronization, and basic anti-cheat logic. Designed the UI with Jetpack Compose and integrated authentication and data persistence.",
    github: "https://github.com/Z3nitt/DragonBallTapGame_Java/tree/main"
  },
  {
    id: 2,
    name: "Derrap",
    description: "Desktop application that simulates an application used in auto repair shops.",
    tech: ["Java", "MySQL", "JavaAWT", "JavaSwing"],
    role: "Backend Developer",
    feature: "Pure Java desktop app",
    details: "Developed a desktop application for auto repair shop management using pure Java. Implemented backend logic for managing customers, vehicles, services, and invoices. Designed and integrated a MySQL database with proper relational modeling, CRUD operations, and data validation using Java Swing and AWT for the UI.",
    github: "https://github.com/Z3nitt/Derrap/tree/main"
  },
  {
    id: 3,
    name: "Home automation desktop application",
    description: "Home automation desktop application built with Arduino based on the Batcave.",
    tech: ["Python", "FastApi", "Tauri", "Docker", "Arduino", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "Rust"],
    role: "Full Stack Developer",
    feature: "Domotic integration",
    details: "Designed and developed a full-stack home automation desktop application inspired by the Batcave concept. Integrated Arduino-based hardware with a backend built in FastAPI and PostgreSQL, enabling real-time device control and sensor monitoring. The desktop app was built with Tauri, React, and TypeScript, focusing on low-latency communication, modular architecture, and secure data handling. Docker was used to containerize backend services and simplify deployment.",
    github: "https://github.com/Z3nitt/batcomputer-project"
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and experience as a Full Stack Developer & DBA.",
    tech: ["Nextjs", "TypeScript", "TailwindCSS", "React", "Nodejs", "Vercel"],
    role: "Full Stack Developer",
    feature: "Portfolio site",
    details: "Developed a personal portfolio website to showcase my projects, skills, and professional experience as a Full Stack Developer & DBA. Built using Next.js and TypeScript for a robust and scalable frontend, styled with TailwindCSS for a modern and responsive design. Implemented React components for dynamic content rendering and integrated Node.js for backend functionalities. Deployed the site on Vercel for optimal performance and accessibility."
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
          <h2 className="text-2xl font-mono font-bold text-foreground">
            projects
          </h2>
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm font-mono text-muted-foreground">{projects.length} records</span>
        </div>

        {/* Projects table */}
        <div className="border border-border rounded-lg bg-card overflow-hidden">
          {/* Table header bar */}
          <div className="px-4 py-3 bg-secondary/50 border-b border-border flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground">
              SELECT * FROM projects ORDER BY id DESC;
            </span>
            <span className="text-xs font-mono text-primary">ROWS: {projects.length}</span>
          </div>

          {/* Desktop table view */}
          <div className="hidden md:block overflow-x-auto">
            {/* Column headers */}
            <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-muted/30 border-b border-border text-xs font-mono text-muted-foreground uppercase">
              <div className="col-span-1">ID</div>
              <div className="col-span-3">Project Name</div>
              <div className="col-span-3">Tech Stack</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Key Feature</div>
              <div className="col-span-1">Action</div>
            </div>

            {/* Table rows */}
            {projects.map((project) => (
              <div 
                key={project.id}
                className="grid grid-cols-12 gap-4 px-4 py-4 border-b border-border last:border-b-0 hover:bg-primary/5 transition-colors cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.name}`}
              >
                <div className="col-span-1 font-mono text-muted-foreground">
                  #{project.id.toString().padStart(2, '0')}
                </div>
                <div className="col-span-3">
                  <span className="font-mono text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </span>
                </div>
                <div className="col-span-3 flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs font-mono bg-secondary text-muted-foreground rounded">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <div className="col-span-2 text-sm text-muted-foreground">{project.role}</div>
                <div className="col-span-2 text-sm text-accent">{project.feature}</div>
                <div className="col-span-1 flex items-center">
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile card view */}
          <div className="md:hidden divide-y divide-border">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="p-4 hover:bg-primary/5 transition-colors cursor-pointer"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.name}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-muted-foreground">#{project.id.toString().padStart(2, '0')}</span>
                  <span className="text-xs text-accent">{project.feature}</span>
                </div>
                <h3 className="font-mono font-semibold text-foreground mb-2">{project.name}</h3>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs font-mono bg-secondary text-muted-foreground rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{project.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Query footer */}
        <div className="mt-6 font-mono text-sm text-muted-foreground text-center">
          {'-- Click on a row to view detailed record'}
        </div>

        {/* Project detail modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            onKeyDown={(e) => e.key === 'Escape' && setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
          >
            <div 
              className="w-full max-w-2xl border border-border rounded-lg bg-card overflow-hidden animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
                <span className="text-sm font-mono text-muted-foreground">
                  PROJECT DETAIL VIEW
                </span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:bg-muted rounded transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-primary">RECORD #{selectedProject.id.toString().padStart(2, '0')}</span>
                    <h3 id="project-detail-title" className="text-2xl font-mono font-bold text-foreground mt-1">
                      {selectedProject.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full border border-accent/20">
                    {selectedProject.feature}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{selectedProject.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase block mb-2">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase block mb-2">Role</span>
                    <p className="text-foreground">{selectedProject.role}</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase block mb-2">Details</span>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.details}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  {selectedProject.github && (
                    <Button variant="outline" size="sm" className="font-mono bg-transparent" asChild>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.live && (
                    <Button size="sm" className="font-mono" asChild>
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
