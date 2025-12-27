import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Fixed relative path
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-900"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-6 h-6 border-2 border-purple-400 rounded-full"></div>

      {/* Curved Background Shape (Abstract Wave) */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 bg-white dark:bg-slate-800"
        style={{ clipPath: 'ellipse(70% 50% at 50% 100%)' }}
      ></div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10 relative">

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <div className="space-y-2">
            <p className="text-primary font-semibold tracking-widest text-sm uppercase">
              Hello, My name is
            </p>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
              Minju <span className="text-primary">Begum</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-lg mx-auto lg:mx-0">
              A passionate Full Stack Developer crafting high-performance web applications
              with modern technologies.
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript"].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary/50 transition-all cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 shadow-lg shadow-primary/20 group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: ExternalLink, href: "#" }
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors shadow-sm bg-white dark:bg-slate-800"
              >
                <social.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>

            {/* Main Circle Container */}
            <div className="relative w-full h-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden border-[12px] border-white dark:border-slate-800 shadow-2xl flex items-end justify-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Minju Begum"
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;