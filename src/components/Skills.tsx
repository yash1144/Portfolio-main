import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend",
            skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
            color: "bg-blue-500"
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
            color: "bg-green-500"
        },
        {
            category: "Tools & Others",
            skills: ["Git", "GitHub", "JSON Server", "Responsive Design", "CRUD Operations"],
            color: "bg-purple-500"
        },
        {
            category: "Soft Skills",
            skills: ["Communication", "Time Management", "Problem Solving", "Team Collaboration"],
            color: "bg-orange-500"
        }
    ];

    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Technical skills and tools I use to bring ideas to life
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-none"
                        >
                            <CardContent className="p-6">
                                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                                    <span className="text-white font-bold text-lg">
                                        {category.category.charAt(0)}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                                    {category.category}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Badge
                                            key={skillIndex}
                                            variant="secondary"
                                            className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;