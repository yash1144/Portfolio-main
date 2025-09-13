import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            value: "+91 7069955444",
            href: "tel:+917069955444"
        },
        {
            icon: Mail,
            title: "Email",
            value: "Ladyash1144@gmail.com",
            href: "mailto:Ladyash1144@gmail.com"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Surat, Gujarat 395005",
            href: "#"
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            title: "GitHub",
            url: "https://github.com/yash1144",
            description: "Check out my repositories"
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/yash-lad-432386315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            description: "Connect professionally"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Let's collaborate and build something amazing together
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Contact Information */}
                        <Card className="bg-card border-border/50">
                            <CardHeader>
                                <CardTitle className="text-card-foreground">Contact Information</CardTitle>
                                <CardDescription>
                                    Feel free to reach out through any of these channels
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {contactInfo.map((contact, index) => {
                                    const IconComponent = contact.icon;
                                    return (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <IconComponent className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-card-foreground">{contact.title}</p>
                                                {contact.href !== "#" ? (
                                                    <a
                                                        href={contact.href}
                                                        className="text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        {contact.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-muted-foreground">{contact.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>

                        {/* Social Links & Resume */}
                        <Card className="bg-card border-border/50">
                            <CardHeader>
                                <CardTitle className="text-card-foreground">Connect & Resume</CardTitle>
                                <CardDescription>
                                    Connect with me on social platforms or download my resume
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Social Links */}
                                <div className="space-y-3">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                                            >
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                    <IconComponent className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-card-foreground">{social.title}</p>
                                                    <p className="text-sm text-muted-foreground">{social.description}</p>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>

                                {/* Resume Download */}
                                <div className="pt-4 border-t border-border">
                                    <Button
                                        className="w-full bg-primary hover:bg-primary-variant transition-colors"
                                        size="lg"
                                        onClick={() => window.open('/Yash Lad.pdf', '_blank')}
                                    >
                                        <Download className="mr-2 h-5 w-5" />
                                        Download Resume
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Education Section */}
                    <Card className="bg-card border-border/50">
                        <CardHeader>
                            <CardTitle className="text-card-foreground">Education</CardTitle>
                            <CardDescription>
                                My academic background and professional development
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">R&W</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-card-foreground">Full-Stack Developer Course</h3>
                                    <p className="text-primary font-medium">Red & White Multimedia</p>
                                    <p className="text-muted-foreground">2023 - 2025</p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Comprehensive training in MERN stack development, covering both frontend and backend technologies.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;