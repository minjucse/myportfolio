import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API Call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast({
            title: "Message Sent Successfully!",
            description: "Thank you, Minju will get back to you shortly.",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "minjucse@gmail.com",
            href: "mailto:minjucse@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+880 1683 321990",
            href: "tel:+8801683321990",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Mohammadpur, Dhaka, Bangladesh",
            href: "https://maps.google.com",
        },
    ];

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/minjucse" },
        { icon: Linkedin, label: "LinkedIn", href: "#" },
    ];

    return (
        <section className="py-24 px-6 bg-white dark:bg-slate-900" id="contact">
            <div className="container mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out.
                        I am always open to discussing new projects and creative ideas.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info & Sidebar */}
                    <div className="flex flex-col gap-6">
                        <Card className="border-slate-200/60 dark:border-slate-700 shadow-sm dark:bg-slate-800">
                            <CardHeader>
                                <CardTitle className="text-xl">Contact Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {contactInfo.map((info) => (
                                    <a
                                        key={info.label}
                                        href={info.href}
                                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-100 transition-all group"
                                    >
                                        <div className="p-2.5 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                            <info.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{info.label}</p>
                                            <p className="text-sm font-medium text-slate-700">{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200/60 dark:border-slate-700 shadow-sm dark:bg-slate-800">
                            <CardHeader>
                                <CardTitle className="text-xl">Social Profiles</CardTitle>
                            </CardHeader>
                            <CardContent className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Availability Card */}
                        <Card className="border-emerald-100 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/30 shadow-sm overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-2">
                                <div className="w-20 h-20 bg-emerald-500/5 rounded-full -mr-10 -mt-10 animate-pulse" />
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 rounded-full w-fit mb-4">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Available Now</span>
                                </div>
                                <h4 className="font-bold text-slate-800 mb-1">Freelance Projects</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    I am currently taking on new projects. Let’s build something amazing together!
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="shadow-lg border-slate-200/60 dark:border-slate-700 dark:bg-slate-800">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:bg-white dark:focus:bg-slate-600 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:bg-white dark:focus:bg-slate-600 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Project Inquiry"
                                            required
                                            className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:bg-white dark:focus:bg-slate-600 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Your Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can I help you?"
                                            rows={5}
                                            required
                                            className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 focus:bg-white dark:focus:bg-slate-600 transition-all resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto rounded-full px-10 shadow-md shadow-primary/20 transition-all hover:scale-[1.02]"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <Send className="h-4 w-4" /> Send Message
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>


                </div>
            </div>
        </section>
    );
};