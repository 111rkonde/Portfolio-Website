import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Building a Modern Web Application  ",
    excerpt: "Learn how to leverage the power of to build fast, SEO-friendly web applications with great developer experience.",
    date: "Till Date",
    category: "Development",
    slug: "#"
  },
  {
    id: 2,
    title: "The AI Power of Server Components",
    excerpt: "Explore how Components enable better performance and user experience in modern web applications.",
    date: "Till Date",
    category: "React",
    slug: "#"
  },
  {
    id: 3,
    title: "Optimizing Your Website for Core Web Vitals",
    excerpt: "A comprehensive guide to improving your site's Core Web Vitals scores for better user experience and SEO rankings.",
    date: "March 15, 2023",
    readTime: "Till Date",
    category: "Performance",
    slug: "#"
  },
  {
    id: 4,
    title: "The Future of Web Development in 2024",
    excerpt: "Exploring emerging trends and technologies that will shape the future of web development in the coming years.",
    date: "February 22, 2023",
    readTime: "Till Date",
    category: "Treading",
    slug: "#"
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Future Ideas</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, ideas, and insights on web development, design, and new AI-Power technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col border border-border overflow-hidden card-hover h-full">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">
                  {post.category} • {post.date} • {post.readTime}
                </div>
                <CardTitle className="text-xl">
                  <Link href={post.slug} className="hover:text-primary/80 transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={post.slug} className="text-sm font-medium inline-flex items-center hover:text-primary/80 transition-colors">
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
