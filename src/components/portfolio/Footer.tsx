import { Button } from "@/components/ui/button";
import { Github, Heart, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "https://github.com/minjucse", label: "GitHub" },
        {
            icon: Linkedin,
            href: "",
            label: "LinkedIn",
        },
        { icon: Mail, href: "mailto:minjucse@gmail.com", label: "Email" },
    ];

    const quickLinks = [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <footer className="border-t border-border/50 bg-muted/20 dark:bg-slate-900/50">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <span className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-transform group-hover:scale-105">
                            Minju
                        </span>
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Full Stack JavaScript Developer passionate about creating modern,
                            scalable web applications with exceptional user experiences.
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.label}
                                    variant="ghost"
                                    size="icon"
                                    className="hover-glow"
                                    asChild
                                >
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Get In Touch</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Mohamadpur, Dhaka, Bangladesh</p>
                            <p>minjucse@gmail.com</p>
                            <p>+8801683321990</p>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            Available for new projects
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border/30 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Minju Begum. All rights reserved.
                        </p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span>Built with</span>
                            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                            <span>using React & TypeScript</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};