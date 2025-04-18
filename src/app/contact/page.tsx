import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!
          </p>

          <div className="flex flex-col space-y-6 mt-12">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a href="rkonde91@gmail.com" className="text-muted-foreground hover:text-primary">
                  rkonde91@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary rounded-full">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">GitHub</h3>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                  github.com/yogeshkonde
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary rounded-full">
                <Twitter className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Twitter</h3>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                  twitter.com/yogeshkonde
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary rounded-full">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">LinkedIn</h3>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                  linkedin.com/in/yogeshkonde
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <a href="rkonde91@gmail.com">
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
