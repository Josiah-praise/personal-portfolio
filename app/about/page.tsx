import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { skills } from '@/lib/data/skills';
import { SkillCategory } from '@/components/sections/skill-category';

export const metadata = {
  title: 'About | Josiah Praise',
  description: 'Learn about my journey as a full-stack developer, my core competencies, and professional background.',
};

export default function AboutPage() {
  return (
    <article className="container mx-auto px-4 py-12">
      {/* Hero Section with Image */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              Hi, I&apos;m Josiah Praise, a passionate full-stack developer dedicated to building
              elegant, efficient, and user-centered digital experiences.
            </p>
            <Button asChild size="lg">
              <a
                href="/resume/Josiah_Praise_Resume.pdf"
                download="Josiah_Praise_Resume.pdf"
                aria-label="Download resume as PDF"
                className="inline-flex"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/images/avatar.webp"
                alt="Josiah Praise - Full Stack Developer"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Background Story */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          My Journey
        </h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            My journey into software development began with curiosity—a desire to understand
            how things work and a fascination with solving complex problems. What started as
            tinkering with code evolved into a passionate career dedicated to crafting
            meaningful digital solutions.
          </p>
          <p>
            Over the years, I&apos;ve had the privilege of working on diverse projects, from building
            robust backend systems to designing intuitive user interfaces. Each project has taught
            me the importance of clean code, thoughtful architecture, and the human element in
            technology.
          </p>
          <p>
            What drives me most is the intersection of creativity and logic—turning ideas into
            reality through code. I&apos;m motivated by challenges that push me to learn, grow, and
            deliver solutions that make a real difference. Whether it&apos;s optimizing performance,
            improving user experience, or collaborating with teams, I&apos;m committed to excellence
            in everything I build.
          </p>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          Core Competencies
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">Full-Stack Development with modern frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">TypeScript & React/Next.js Expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">RESTful & GraphQL API Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">Database Architecture & Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">Cloud Infrastructure & DevOps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">UI/UX Design & Responsive Development</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Professional Qualities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">Creative Problem Solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">Effective Team Collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">Rapid Learning & Adaptability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span className="text-muted-foreground">Clear Technical Communication</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Experience Summary */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          Professional Background
        </h2>
        <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            With several years of experience in full-stack development, I&apos;ve successfully delivered
            projects across diverse industries including fintech, e-commerce, and enterprise SaaS.
            My expertise spans the entire development lifecycle—from initial concept and architecture
            to deployment and maintenance.
          </p>
          <p>
            Key achievements include architecting scalable microservices that handle millions of
            requests, leading development teams through complex projects, and consistently delivering
            solutions that exceed client expectations. I&apos;ve worked with both startups and established
            companies, adapting quickly to different tech stacks and business requirements.
          </p>
          <p>
            I specialize in modern web technologies with a focus on TypeScript, React, Next.js,
            Node.js, and cloud platforms. My approach combines technical excellence with business
            understanding—ensuring that every solution not only works well but also delivers
            measurable value.
          </p>
          <div className="mt-8">
            <p className="text-foreground font-medium mb-4">
              Interested in my full experience?
            </p>
            <Button asChild size="lg" variant="outline">
              <a
                href="/resume/Josiah_Praise_Resume.pdf"
                download="Josiah_Praise_Resume.pdf"
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
