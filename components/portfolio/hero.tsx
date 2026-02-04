"use client"

import { Database, Terminal, Server, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating database icons */}
      <div className="absolute top-20 left-10 text-primary/20 animate-pulse">
        <Database className="w-16 h-16" />
      </div>
      <div className="absolute bottom-32 right-16 text-accent/20 animate-pulse delay-500">
        <Server className="w-12 h-12" />
      </div>
      <div className="absolute top-40 right-24 text-primary/15 animate-pulse delay-1000">
        <Terminal className="w-10 h-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* System status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-mono text-primary">SYSTEM_STATUS: ONLINE</span>
        </div>

        {/* Database header style */}
        <div className="border border-border rounded-lg bg-card/80 backdrop-blur-sm overflow-hidden animate-slide-up">
          {/* Header bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-chart-4/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <span className="text-xs font-mono text-muted-foreground ml-2">developer_profile.sql</span>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="font-mono text-sm text-muted-foreground mb-4">
              {'SELECT * FROM developers WHERE status = \'available\';'}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-mono text-foreground mb-4 text-balance">
              <span className="text-primary">{'>'}</span> Juanlu Serrano
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-2">
              Full Stack Developer & DBA
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Building scalable applications and optimizing database systems.
              Passionate about clean code, efficient queries, and modern web technologies.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="text-center p-3 rounded-md bg-secondary/50 border border-border">
                <div className="text-2xl font-mono font-bold text-primary">10+</div>
                <div className="text-xs font-mono text-muted-foreground">PROJECTS</div>
              </div>
              <div className="text-center p-3 rounded-md bg-secondary/50 border border-border">
                <div className="text-2xl font-mono font-bold text-accent">1+</div>
                <div className="text-xs font-mono text-muted-foreground">YEARS EXP</div>
              </div>
              <div className="text-center p-3 rounded-md bg-secondary/50 border border-border">
                <div className="text-2xl font-mono font-bold text-primary">99.9%</div>
                <div className="text-xs font-mono text-muted-foreground">UPTIME</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-mono group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Database className="w-4 h-4 mr-2" />
                View Projects
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-mono border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Terminal className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Query result indicator */}
        <div className="mt-6 font-mono text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {'-- 1 row returned in 0.042ms'}
        </div>
      </div>
    </section>
  )
}
