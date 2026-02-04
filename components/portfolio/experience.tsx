"use client"

import { Briefcase, GraduationCap, Award, Code } from "lucide-react"

interface TimelineEntry {
  id: number
  type: "work" | "education" | "project" | "achievement"
  title: string
  organization: string
  date: string
  description: string
  tags: string[]
}

const timeline: TimelineEntry[] = [
{
  id: 1,
  type: "work",
  title: "Full Stack Developer & Database Administrator",
  organization: "Mosaic Factory",
  date: "November 2025 - Present",
  description: "Working on production web applications with a strong focus on backend systems and database administration. Responsible for database design and implementation, backend development with Node.js, frontend development using React, and deployment of websites. Managing MySQL and PostgreSQL databases, including schema design, user management, backups, and performance tuning.",
  tags: ["Node.js", "React", "MySQL", "PostgreSQL", "SQL", "NoSQL"],
},
{
  id: 2,
  type: "work",
  title: "Junior Full Stack Developer",
  organization: "Internalia Group",
  date: "March 2025 - October 2025",
  description: "Developed and maintained an intelligent WhatsApp bot with a PHP backend, including webhook integrations with Firestore. Participated in web deployment and maintenance tasks, and contributed to frontend development using React and Angular.",
  tags: ["PHP", "Firestore", "React", "Angular", "Webhooks"],
},
{
  id: 3,
  type: "work",
  title: "Store Clerk",
  organization: "Comic Stores",
  date: "April 2023 - September 2023",
  description: "Assisted customers with purchases and product recommendations while managing stock and organizing merchandise displays. Maintained a clean, welcoming store environment and provided customer support.",
  tags: ["Customer Service", "Inventory Management", "Retail"],
},
{
  id: 4,
  type: "education",
  title: "Enterprise Cybersecurity Specialization",
  organization: "Aprendea",
  date: "2024 - 2025",
  description: "Completed a certified specialization focused on cybersecurity practices for enterprise environments. Covered key topics such as network security, risk mitigation, threat detection, and incident response, with emphasis on protecting business-critical systems.",
  tags: ["Cybersecurity", "Enterprise Security", "Risk Mitigation", "Incident Response"],
},
{
  id: 5,
  type: "education",
  title: "Cross-Platform Application Development Technician",
  organization: "MEDAC Málaga",
  date: "2023 - 2025",
  description: "Completed a technical degree focused on cross-platform application development. Gained hands-on experience building desktop and mobile applications, working with databases, and applying software engineering fundamentals across multiple technologies and platforms.",
  tags: ["Software Development", "Cross-Platform", "Databases", "Desktop Apps", "Mobile Apps"],
},
]

function getIcon(type: TimelineEntry["type"]) {
  switch (type) {
    case "work":
      return Briefcase
    case "education":
      return GraduationCap
    case "achievement":
      return Award
    case "project":
      return Code
  }
}

function getTypeLabel(type: TimelineEntry["type"]) {
  switch (type) {
    case "work":
      return "WORK"
    case "education":
      return "EDU"
    case "achievement":
      return "CERT"
    case "project":
      return "PROJ"
  }
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
          <h2 className="text-2xl font-mono font-bold text-foreground">
            experience_log
          </h2>
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm font-mono text-muted-foreground">{timeline.length} entries</span>
        </div>

        {/* System log header */}
        <div className="border border-border rounded-lg bg-card overflow-hidden">
          <div className="px-4 py-3 bg-secondary/50 border-b border-border flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground">
              {'SELECT * FROM experience ORDER BY date DESC;'}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary">LIVE</span>
            </div>
          </div>

          {/* Timeline entries */}
          <div className="divide-y divide-border">
            {timeline.map((entry, index) => {
              const Icon = getIcon(entry.type)
              return (
                <div 
                  key={entry.id}
                  className="p-4 md:p-6 hover:bg-primary/5 transition-colors group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    {/* Icon and line */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
                          {getTypeLabel(entry.type)}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          [{entry.date}]
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                        {entry.title}
                      </h3>
                      <p className="text-sm text-accent mb-2">{entry.organization}</p>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {entry.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-0.5 text-xs font-mono bg-secondary text-muted-foreground rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Log footer */}
          <div className="px-4 py-3 bg-muted/30 border-t border-border">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="text-primary">INFO</span>
              <span>Experience log updated. Continuous learning in progress...</span>
            </div>
          </div>
        </div>

        {/* Query footer */}
        <div className="mt-6 font-mono text-sm text-muted-foreground text-center">
          {'-- Log entries displayed in reverse chronological order'}
        </div>
      </div>
    </section>
  )
}
