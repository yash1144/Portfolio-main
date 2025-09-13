import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <section id="home">
                    <Hero />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </div>
    );
};

export default Index;
