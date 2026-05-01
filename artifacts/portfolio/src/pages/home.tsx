import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, ChevronRight } from "lucide-react";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiFigma, SiFramer, SiGraphql } from "react-icons/si";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "E-Commerce Reimagined",
    description: "A headless commerce experience built for speed and seamless user journeys. Features a custom checkout flow and real-time inventory sync.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Financial Dashboard",
    description: "Data visualization tool for personal finance management. Translates complex datasets into calm, actionable insights.",
    tech: ["React", "Recharts", "Node.js"],
    link: "#",
  },
  {
    title: "Design System Core",
    description: "A comprehensive component library built for a rapidly scaling startup. Ensures visual consistency across 4 different products.",
    tech: ["Figma", "React", "Storybook"],
    link: "#",
  },
  {
    title: "Editorial Platform",
    description: "A modern publishing platform with a focus on typography and reading experience. Includes a custom CMS interface.",
    tech: ["Remix", "GraphQL", "PostgreSQL"],
    link: "#",
  }
];

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Studio Analog",
    period: "2021 — Present",
    description: "Leading the frontend architecture for high-profile client projects. Mentoring junior developers and establishing internal code quality standards."
  },
  {
    role: "Product Designer",
    company: "Currents Inc.",
    period: "2019 — 2021",
    description: "Designed and implemented the core UI for a B2B SaaS platform used by over 10,000 teams. Bridged the gap between design and engineering."
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "2017 — 2019",
    description: "Built bespoke marketing sites and creative digital experiences for boutique agencies and independent artists."
  }
];

const skills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Figma", icon: SiFigma },
  { name: "Framer", icon: SiFramer },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground">
          Julian.
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="w-px h-4 bg-border mx-2"></div>
          <ThemeToggle />
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
      <style dangerouslySetInnerHTML={{__html: `html { scroll-behavior: smooth; }`}} />
      <Navbar />

      <main className="container mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-wide mb-6 uppercase text-sm">
              Design Engineer
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 text-foreground">
              Crafting digital experiences with intention & precision.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed">
              I bridge the gap between design and engineering, creating interfaces that are as functional as they are beautiful. Currently based in San Francisco.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-border hover:bg-accent/20">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <h2 className="text-4xl md:text-5xl font-serif mb-8">About Me</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    My journey started in graphic design, but I quickly realized that designing a product without understanding how to build it felt incomplete. For the past six years, I've been mastering the frontend ecosystem.
                  </p>
                  <p>
                    I believe in the power of calm technology — interfaces that respect the user's attention and communicate clearly. When I'm not writing code or nudging pixels, you can find me brewing specialty coffee or exploring the coast.
                  </p>
                </div>
                <div className="mt-10">
                  <a href="#" className="inline-flex items-center text-primary font-medium hover:text-foreground transition-colors group">
                    Download Resume
                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    variants={fadeInUp}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-card-border hover:border-primary/30 transition-colors group"
                  >
                    <skill.icon className="h-8 w-8 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="py-32 border-t border-border">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Selected Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects that showcase my focus on typography, layout, and interaction design.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.title} 
                variants={fadeInUp}
                className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <div className="aspect-[4/3] bg-secondary/50 rounded-2xl mb-8 overflow-hidden relative p-8 flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                      <ExternalLink className="h-4 w-4 text-foreground" />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-serif text-3xl mb-2 text-foreground">{project.title}</h3>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-accent/30 text-accent-foreground border border-accent/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-32 border-t border-border">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Experience</h2>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group"
                >
                  <div className="md:col-span-1 pt-1">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-serif text-foreground mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-lg font-medium text-foreground/80 mb-4">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's build something together.</h2>
              <p className="text-lg text-muted-foreground max-w-md mb-12">
                I'm currently available for freelance projects and open to new opportunities. Reach out if you'd like to chat.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:hello@example.com" className="flex items-center text-lg text-foreground hover:text-primary transition-colors group">
                  <Mail className="h-5 w-5 mr-4 text-muted-foreground group-hover:text-primary" />
                  hello@example.com
                </a>
                <a href="#" className="flex items-center text-lg text-foreground hover:text-primary transition-colors group">
                  <Linkedin className="h-5 w-5 mr-4 text-muted-foreground group-hover:text-primary" />
                  LinkedIn
                </a>
                <a href="#" className="flex items-center text-lg text-foreground hover:text-primary transition-colors group">
                  <Github className="h-5 w-5 mr-4 text-muted-foreground group-hover:text-primary" />
                  GitHub
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-card border border-card-border p-8 md:p-12 rounded-3xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background border-border h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="bg-background border-border min-h-[150px] resize-none" />
                </div>
                <Button type="submit" className="w-full h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90 text-base">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 text-center text-muted-foreground">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Julian. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Available for work</span>
          </div>
        </div>
      </footer>
    </div>
  );
}