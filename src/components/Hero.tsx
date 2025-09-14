import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Clean Theme Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary-variant to-primary">
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Simple accent highlight */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    {/* Avatar */}
                    <div className="mb-8 inline-block">
                        <img
                            src={avatarPlaceholder}
                            alt="Yash Lad - Full Stack Developer"
                            className="w-32 h-32 rounded-full border-4 border-white/20 shadow-elegant mx-auto"
                        />
                    </div>

                    {/* Name and Title */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                        Yash Lad
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
                        Full-Stack Developer
                    </h2>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Passionate about building web applications with the MERN stack.
                        I turn ideas into scalable solutions that make a difference.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button variant="hero" size="lg" className="group" onClick={scrollToProjects}>
                            View My Work
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            variant="outline-hero"
                            size="lg"
                            className="group"
                            onClick={() => window.open('/Yash Lad.pdf', '_blank')}
                        >
                            <Download className="mr-2 h-5 w-5" />
                            Download Resume
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/yash1144"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yash-lad-432386315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="mailto:Ladyash1144@gmail.com"
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                            aria-label="Email Contact"
                        >
                            <Mail className="h-6 w-6" />
                        </a>
                        <a
                            href="tel:7069955444"
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                            aria-label="Phone Contact"
                        >
                            <Phone className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
                <div className="flex flex-col items-center">
                    <span className="text-sm mb-2">Scroll to explore</span>
                    <div className="w-0.5 h-8 bg-white/40"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
