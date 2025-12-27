import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Calendar,
    ExternalLink,
    Github,
    ShoppingCart,
    Zap,
} from "lucide-react";

export const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
            icon: ShoppingCart,
            techs: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://myshop-browser.vercel.app/",
            codeUrl: "https://github.com/minjucse",
            featured: true,
        },
        {
            id: 2,
            title: "Event Management System",
            description:
                "Complete event management platform with booking, payments, and attendee management.",
            icon: Calendar,
            techs: ["Next.js", "TypeScript", "Prisma", "Stripe"],
            liveUrl: "https://events-platform-browser.vercel.app/",
            codeUrl: "https://github.com/minjucse",
            featured: false,
        },
        {
            id: 3,
            title: "Inventory Management",
            description:
                "Advanced dashboard for tracking stock, managing suppliers, and analyzing sales data.",
            icon: Zap,
            techs: ["React", "Material UI", "Node.js", "MongoDB"],
            liveUrl: "https://ecom-admin-minjucse-minjucses-projects.vercel.app/",
            codeUrl: "https://github.com/minjucse",
            featured: false,
        },
    ];

    return (
        <section id="portfolio" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900">
            <div className="container mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Featured <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        A selection of my recent work involving full-stack development,
                        API integrations, and modern UI design.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="group border-slate-200/60 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col bg-white dark:bg-slate-800"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                                        <project.icon className="h-6 w-6" />
                                    </div>
                                    {project.featured && (
                                        <Badge
                                            className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                                        >
                                            Featured Project
                                        </Badge>
                                    )}
                                </div>
                                <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-6 flex-grow flex flex-col">
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techs.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-3 pt-4 mt-auto">
                                    <Button
                                        asChild
                                        size="sm"
                                        className="flex-1 rounded-full shadow-md shadow-primary/10"
                                    >
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 rounded-full border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
                                    >
                                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            Source
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16 flex justify-center">
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="relative rounded-full px-8 py-6 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group overflow-hidden"
                    >
                        <a
                            href="https://github.com/minjubegum?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                        >
                            {/* Decorative background glow on hover */}
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <Github className="h-5 w-5 text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors z-10" />
                            <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors z-10">
                                Explore more on GitHub
                            </span>

                            {/* Subtle arrow that appears/slides on hover */}
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 z-10 text-slate-400 group-hover:text-primary">
                                →
                            </span>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};