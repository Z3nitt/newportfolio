"use client"

import React from "react"

import { Code, Server, Database, Wrench } from "lucide-react"

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    color: "primary",
    skills: [
      { name: "React / Next.js", level: 70 },
      { name: "TypeScript", level: 68 },
      { name: "Tailwind CSS", level: 60 },
      { name: "Vue.js", level: 70 },
      { name: "HTML & CSS", level: 98 },
      { name: "Angular", level: 55 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "accent",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 82 },
      { name: "Go", level: 65 },
      { name: "REST APIs", level: 92 },
      { name: "Express.js", level: 88 },
      { name: "Django", level: 75 },
      { name: "Ruby on Rails", level: 60 },
      { name: "Java", level: 90 },
      { name: "C#", level: 70 },
      { name: "PHP", level: 70 },
      { name: ".NET", level: 65 },
      { name: "Spring Boot", level: 60 },
      { name: "Kotlin", level: 75 },
      { name: "Rust", level: 50 },
      { name: "Hibernate", level: 70 },
      { name: "FastAPI", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "primary",
    skills: [
      { name: "PostgreSQL", level: 60 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "CouchDB", level: 78 },
      { name: "Firebase", level: 80 },
      { name: "Redis", level: 70 },
      { name: "SQLite", level: 88 },
      { name: "Oracle DB", level: 65 },
      { name: "Microsoft SQL Server", level: 75 },
    ],
  },
  {
    title: "DevOps / Tools",
    icon: Wrench,
    color: "accent",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git", level: 92 },
      { name: "AWS", level: 40 },
      { name: "CI/CD", level: 80 },
    ],
  },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const barColor = color === "primary" ? "bg-primary" : "bg-accent"
  const textColor = color === "primary" ? "text-primary" : "text-accent"
  
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className={`text-xs font-mono ${textColor}`}>{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full ${barColor} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <h2 className="text-2xl font-mono font-bold text-foreground">
            skills
          </h2>
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm font-mono text-muted-foreground">{skillCategories.length} categories</span>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="border border-border rounded-lg bg-card overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* Category header */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <category.icon className={`w-4 h-4 ${category.color === "primary" ? "text-primary" : "text-accent"}`} />
                  <span className="text-sm font-mono font-semibold text-foreground">
                    {category.title}
                  </span>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills list */}
              <div className="p-4 space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    color={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional badges */}
        <div className="mt-8 border border-border rounded-lg bg-card overflow-hidden">
          <div className="px-4 py-3 bg-secondary/50 border-b border-border">
            <span className="text-sm font-mono text-muted-foreground">
              ALSO PROFICIENT IN:
            </span>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {[
              "GraphQL", "Prisma"
            ].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1.5 text-sm font-mono bg-muted text-muted-foreground rounded-md border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Query footer */}
        <div className="mt-6 font-mono text-sm text-muted-foreground text-center">
          {'-- Skill proficiency calculated from project experience and usage frequency'}
        </div>
      </div>
    </section>
  )
}
