import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/content/projects';
import { ProjectCard } from '@/components/project/project-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export async function FeaturedProjects() {
  const featuredProjects = await getFeaturedProjects();

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-20 sm:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of my best work
            </p>
          </div>
          <Button asChild variant="outline" className="group">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.slice(0, 3).map((project) => (
            <div
              key={project.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${featuredProjects.indexOf(project) * 0.1}s`, animationFillMode: 'both' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
