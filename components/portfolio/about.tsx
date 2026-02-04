"use client"

import { User, Calendar, MapPin, Briefcase, Code, Database } from "lucide-react"

const metadata = [
  { key: "name", value: "Juanlu Serrano Leal", icon: User },
  { key: "role", value: "Full Stack Developer & DBA", icon: Briefcase },
  { key: "location", value: "Málaga, Spain", icon: MapPin },
  { key: "experience", value: "1+ years", icon: Calendar },
  { key: "focus", value: "Mobile app, Desktop app, Web Development and Database Systems", icon: Code },
  { key: "databases", value: "PostgreSQL, MySQL, MongoDB", icon: Database },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <h2 className="text-2xl font-mono font-bold text-foreground">
            about_me
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Metadata panel */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <div className="px-4 py-3 bg-secondary/50 border-b border-border">
              <span className="text-sm font-mono text-muted-foreground">
                TABLE: developer_metadata
              </span>
            </div>
            
            {/* Table header */}
            <div className="grid grid-cols-2 px-4 py-2 bg-muted/30 border-b border-border">
              <span className="text-xs font-mono text-muted-foreground uppercase">Field</span>
              <span className="text-xs font-mono text-muted-foreground uppercase">Value</span>
            </div>
            
            {/* Table rows */}
            {metadata.map((item, index) => (
              <div 
                key={item.key}
                className="grid grid-cols-2 px-4 py-3 border-b border-border last:border-b-0 hover:bg-primary/5 transition-colors group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                  <span className="text-sm font-mono text-muted-foreground">{item.key}</span>
                </div>
                <span className="text-sm font-mono text-foreground">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Bio panel */}
          <div className="border border-border rounded-lg bg-card overflow-hidden">
            <div className="px-4 py-3 bg-secondary/50 border-b border-border flex items-center justify-between">
              <span className="text-sm font-mono text-muted-foreground">
                VIEW: developer_bio
              </span>
              <span className="text-xs font-mono text-primary">RECORD 1/1</span>
            </div>
            
            <div className="p-6 space-y-4">
              <p className="text-foreground leading-relaxed">
                My name is Juanlu but I am better known by my nick Z3nitt and I am a programmer 
                focused on back end and with extensive knowledge in front end. 
                I'm a person eager to put into practice everything I've learned and to give my 100%. 
                My great passion are videogames and comics. I define myself as a sociable person, who likes to learn, with initiative and eager to work in a team.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I have been interested in programming since I was a child, 
                I remember spending part of my childhood trying to create games or applications, but I didn't understand what I was doing. 
                I studied chemistry for two years until I realized that what I was passionate about was programming so 
                I decided to study a higher degree in cross-platform application programming.
              </p>

              <div className="pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {["Problem Solver", "Team Player", "Quick Learner", "Detail-Oriented"].map((trait) => (
                    <span 
                      key={trait}
                      className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Query footer */}
        <div className="mt-6 font-mono text-sm text-muted-foreground text-center">
          {'-- Query executed successfully: 2 panels loaded'}
        </div>
      </div>
    </section>
  )
}
