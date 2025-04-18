import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Projects } from "@/components/sections/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my recent work and personal projects. Each project represents a unique challenge
            and learning opportunity.
          </p>
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
