import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Online E-Commerce Platform",
            description: "A fully functional online e-commerce platform that allows users to browse, search, and purchase products securely, while enabling administrators to manage products, users, and orders efficiently.",
            technologies: ["Node.js", "Express.js", "React.js", "MongoDB"],
            features: [
                "User authentication & authorization",
                "Product catalog with search & filtering",
                "Secure payment processing",
                "Admin dashboard for inventory management",
                "Real-time order tracking"
            ],
            demoUrl: "#",
            githubUrl: "https://github.com/yash1144",
            status: "Completed"
        },
        {
            title: "React CRUD Manager",
            description: "A user management system built with React and JSON Server. It supports CRUD operations with features like search, pagination, and soft delete. The UI is designed with Bootstrap for responsiveness.",
            technologies: ["React.js", "JSON Server", "Bootstrap"],
            features: [
                "Complete CRUD operations",
                "Advanced search functionality",
                "Pagination for large datasets",
                "Soft delete functionality",
                "Responsive Bootstrap UI"
            ],
            demoUrl: "#",
            githubUrl: "https://github.com/yash1144",
            status: "Completed"
        },
        {
            title: "Frontlane Essentials",
            description: "A modern web project showcasing frontend development skills with clean design principles and responsive layouts.",
            technologies: ["React.js", "Tailwind CSS", "TypeScript"],
            features: [
                "Modern responsive design",
                "Component-based architecture",
                "TypeScript for type safety",
                "Optimized performance"
            ],
            demoUrl: "#",
            githubUrl: "https://github.com/yash1144",
            status: "In Progress"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work and technical expertise
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
                        >
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <Badge
                                        variant={project.status === "Completed" ? "default" : "secondary"}
                                        className="text-xs"
                                    >
                                        {project.status}
                                    </Badge>
                                </div>
                                <CardDescription className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {/* Technologies */}
                                <div>
                                    <h4 className="font-semibold text-card-foreground mb-2">Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="outline"
                                                className="text-xs border-primary/20 text-primary"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h4 className="font-semibold text-card-foreground mb-2">Key Features:</h4>
                                    <ul className="space-y-1">
                                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className="text-sm text-muted-foreground flex items-start"
                                            >
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="flex-1 bg-primary hover:bg-primary-variant transition-colors"
                                        asChild
                                    >
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo
                                        </a>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 border-primary/20 text-primary hover:bg-primary/10"
                                        asChild
                                    >
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;