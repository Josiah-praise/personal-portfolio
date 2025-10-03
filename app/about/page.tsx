import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Code, Palette } from 'lucide-react';
import { skills, topSkills } from '@/lib/data/skills';
import { SkillCategory } from '@/components/sections/skill-category';
import { StatsSection } from '@/components/about/stats-section';
import { SkillProgressBar } from '@/components/about/skill-progress-bar';

export const metadata = {
  title: 'About | Praise Josiah',
  description:
    'Learn about my journey as a full-stack and blockchain developer, my core competencies, and professional background.',
};

export default function AboutPage() {
  return (
    <article className="container mx-auto px-4 py-12 animate-fade-in">
      {/* Hero Section with Image */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h1>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              Hi, I&apos;m Praise Josiah, a full-stack and blockchain developer dedicated to building
              scalable systems and decentralized solutions that solve real-world problems.
            </p>
            <Button asChild size="lg">
              <a
                href="/resume/Praise_Josiah_Resume.pdf"
                download="Praise_Josiah_Resume.pdf"
                aria-label="Download resume as PDF"
                className="inline-flex"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-muted">
              <Image
                src="/images/profile.jpg"
                alt="Josiah Praise - Full Stack Developer"
                width={256}
                height={256}
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Background Story */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">My Journey</h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            In 2022, I made a pivotal decision to leave university and fully commit to software
            development as my career. Through an intensive bootcamp, coupled with relentless hard
            work and self-driven learning, I built the foundation for the experience I have today.
          </p>
          <p>
            Over the years, I&apos;ve immersed myself in computer science fundamentals—mastering
            data structures and algorithms, understanding space-time complexity, and diving deep
            into languages like C, Python, JavaScript, and TypeScript. I&apos;ve explored servers,
            Linux/Unix systems, and countless other technologies. Some remain core to my daily work,
            while others have shaped my problem-solving approach in ways I still draw upon.
          </p>
          <p>
            What drives me as a software engineer is the ability to bring ideas and solutions from
            concept to reality. My development philosophy is simple yet powerful: given time and
            resources, I can solve any problem I&apos;m faced with. This mindset extends beyond
            code—it&apos;s a principle I apply to all facets of life. Whether it&apos;s building
            scalable systems, debugging complex issues, or architecting blockchain solutions,
            I&apos;m committed to finding the path forward.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Top Skills with Progress Bars */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">Top Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            {topSkills.slice(0, 4).map((skill) => (
              <SkillProgressBar
                key={skill.name}
                skill={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
          <div>
            {topSkills.slice(4).map((skill) => (
              <SkillProgressBar
                key={skill.name}
                skill={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          Core Competencies
        </h2>

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          {/* Technical Skills */}
          <div className="relative group h-full">
            <div className="absolute inset-0 rounded-lg border border-primary/15 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <Card className="relative h-full transition-all duration-300 group-hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  <CardTitle className="text-xl">Technical Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">
                      Full-Stack Development with modern frameworks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">
                      Blockchain & Smart Contract Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">
                      TypeScript & React/Next.js Expertise
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">Backend Architecture & Systems Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">RESTful & GraphQL API Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">
                      Database Architecture & Optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">Security Analysis & Code Review</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div className="relative group h-full">
            <div className="absolute inset-0 rounded-lg border border-primary/15 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <Card className="relative h-full transition-all duration-300 group-hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  <CardTitle className="text-xl">Professional Qualities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">Resourceful Problem Solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">Self-Driven & Dedicated Work Ethic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">Rapid Learning & Adaptability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">Detail-Oriented Code Review</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span className="text-muted-foreground">Clear Technical Communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience Summary */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          Professional Background
        </h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            With 3+ years of experience, I&apos;ve worked across diverse industries including
            fintech, AI, and whistleblowing platforms, delivering full-stack and blockchain
            solutions. My expertise spans the entire development lifecycle—from initial concept and
            architecture to deployment and maintenance.
          </p>
          <p>
            My professional journey includes working at a fintech startup, where I built scalable
            backend systems; an AI startup, where I identified and resolved critical security flaws
            before production launch—preventing what could have been catastrophic vulnerabilities;
            and a whistleblowing platform, alongside various freelance projects. These experiences
            have honed my ability to adapt quickly to different tech stacks and business
            requirements.
          </p>
          <p>
            I specialize in modern web technologies and blockchain development, with a focus on
            TypeScript, React, Next.js, Node.js, Solidity, and decentralized systems. My approach
            combines technical excellence with business understanding—ensuring that every solution
            not only works well but also delivers measurable value and security.
          </p>
          <div className="mt-8">
            <p className="text-foreground font-medium mb-4">Interested in my full experience?</p>
            <Button asChild size="lg" variant="outline">
              <a
                href="/resume/Praise_Josiah_Resume.pdf"
                download="Praise_Josiah_Resume.pdf"
                aria-label="Download resume as PDF"
                className="inline-flex"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Full Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
          Skills & Technologies
        </h2>
        <div className="space-y-6">
          {skills.map((category) => (
            <SkillCategory key={category.name} category={category} />
          ))}
        </div>
      </section>
    </article>
  );
}
