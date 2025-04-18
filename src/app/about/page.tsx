import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <p className="text-lg text-muted-foreground mb-6">
          I’m Yogesh Konde, a final-year BCA student at Shri Shivaji Science College, Amravati, 
          affiliated with Sant Gadge Baba Amravati University, with a current CGPA of 8.7.
           I’m deeply passionate about coding,with hands-on experience in
            Java, Python, and SQL — and a strong drive to turn ideas into impactful software.
            
          </p>
          <p className="text-lg text-muted-foreground mb-6">
          Recently, I won a college hackathon for building a Smart Fertilizer Detector, 
          a project that blends technology and agriculture to help farmers optimize crop nutrition. 
          It was one of those moments where I realized how powerful code can be in solving real-world problems.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
          I’m also the creator of two personal AI agents — LUNA and YUG — that help automate my daily workflow. 
          From managing files and handling calls to sending messages, performing web searches, and controlling YouTube, 
          my AI tools help me complete tasks up to 85% faster and more accurately than traditional methods.

           Outside of tech, I enjoy spending quality time with family and friends, and I’m always exploring new innovations in 
           the world of software and AI. I'm constantly learning, building, and finding smarter ways to get things done.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
