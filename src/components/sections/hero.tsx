"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative hero-gradient pt-24 pb-10 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-6">
            Hey I'm <span className="gradient-text"> Yogesh Konde </span> Building{" "}
            <span className="gradient-text"> AI-Powered Solutions </span> with creativity and unmatched precision.
          </h1>

          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            I'm a developer specializing in crafting exceptional digital experiences
            with modern AI-powered technologies like Python, Java, SQL, and more...
            Loading...(React, Next.js, Tailwind CSS, Node.js).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild className="h-12 px-6 gap-2">
              <Link href="/projects">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-12 px-6 gap-2">
              <a href="https://github.com/111rkonde/Portfolio-Website" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                My GitHub Profile
              </a>
            </Button>
          </div>
        </div>

        <div
          className={`gradient-border max-w-5xl mx-auto overflow-hidden transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card p-1 relative">
            <div className="flex justify-between items-center p-3 bg-card/80 border-b border-border">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="font-mono text-xs text-muted-foreground">portfolio.py</div>
              <div className="flex items-center">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-4 font-mono text-sm overflow-x-auto bg-black/80">
              <pre className="text-primary-foreground">
                <code>
                  <span className="text-yellow-300">developer</span> = {"{"}
                  <br />
                  {"  "}name: <span className="text-green-400">'Yogesh Konde'</span>,
                  <br />
                  {"  "}skills: <span className="text-green-400">[
                    'Python', 'Java', 'SQL', 'C# / .NET', 'Tailwind CSS'
                  ]</span>,
                  <br />
                  {"  "}passion: <span className="text-green-400">'Building AI-powered tools'</span>,
                  <br />
                  {"  "}location: <span className="text-green-400">'Tiosa, Amravati'</span>,
                  <br />
                  {"  "}available: <span className="text-purple-400">true</span>,
                  <br />
                  {"  "}job_type: <span className="text-green-400">'Remote'</span>,
                  <br />
                  {"  "}job_time: <span className="text-green-400">'Full Time <span className="text-purple-400">OR</span> Part Time'</span>,
                  <br />
                  {"  "}job_location: <span className="text-green-400">'All Over India'</span>,
                  <br />
                  {"  "}resume:{" "}
                  <a
                    href="https://github.com/111rkonde/Portfolio-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block text-green-400 underline underline-offset-4 decoration-green-400 transition-all duration-300 ease-in-out transform hover:scale-110 px-2 py-1 rounded-md hover:bg-green-100"
                  >
                    <span className="block group-hover:hidden">View Resume</span>
                    <span className="hidden group-hover:block font-semibold text-green-600 transition-all duration-300">
                      Yogesh Konde Resume
                    </span>
                  </a>
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
