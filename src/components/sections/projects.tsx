"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Build a Dynamic Portfolio Website",
    description:
      " Ownner of this website . Build a dynamic portfolio website with Tailwind CSS and React. It should be responsive and have a clean design.",
    tags: ["Tailwind.CSS", "React", "Next.js", "TypeScript", "HTML", "CSS"],
    
    demo: "https://yogeshkonde-portfolios.netlify.app/",
    github: "https://github.com/111rkonde/Portfolio-Website",
    image: "project1.jpg"
  },
  {
    id: 2,
    title: "AI-Powered Task Manager",
    description:
      "Meet Luna — your AI-powered productivity partner. Stay organized with intelligent reminders and stay ahead with real-time smart suggestions",
    tags: ["OpenAI", "Python", "OPENAI API", "All AI-Powered Tools"],
    demo: "https://example.com",
    github: " https://github.com/111rkonde/Portfolio-Website",
    image: "/images/project2.jpg"
  },
  {
    id: 3,
    title: "Real-Time Smart Fertilizer Detector powered by AI ",
    description:
      "Smart Fertilizer Detector powered by AI. Detects the best fertilizer for your crops and plants with real-time data visualization.",
    tags: ["Python", "Android Application", "API Integration", "TensorFlow", "Keras"],
    demo: "https://example.com ",
    github: "https://github.com/111rkonde/Portfolio-Website ",
    image: "/images/project3.jpg"
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work across <span className="gradient-text">AI-Powered tools</span>, design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`card-hover border border-border overflow-hidden h-full transition-all duration-300 ${
                hoveredId === project.id ? "scale-[1.02]" : ""
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-48 bg-muted flex items-center justify-center p-6 border-b border-border">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" asChild>
            <a href="/projects"> <span className="gradient-text">View All Projects</span></a>
          </Button>
        </div>
      </div>
    </section>
  );
}
