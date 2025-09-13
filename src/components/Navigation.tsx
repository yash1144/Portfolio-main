import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        if (href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-border/50"
                : "bg-transparent"
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => scrollToSection("#home")}
                            className={`text-2xl font-bold transition-colors ${isScrolled ? "text-primary" : "text-white"
                                }`}
                        >
                            YL
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white hover:text-white/80"
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                        <Button
                            variant={isScrolled ? "default" : "outline-hero"}
                            size="sm"
                            onClick={() => scrollToSection("#contact")}
                            className="ml-4"
                        >
                            Hire Me
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className={isScrolled ? "text-primary" : "text-white"}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/50">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-left font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <Button
                                variant="default"
                                size="sm"
                                onClick={() => scrollToSection("#contact")}
                                className="self-start mt-2"
                            >
                                Hire Me
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;