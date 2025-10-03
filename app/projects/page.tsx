import { getAllProjects } from '@/lib/content/projects';
import { ProjectCard } from '@/components/project/project-card';

export const metadata = {
  title: 'Projects | Josiah Praise',
  description: 'Explore my portfolio of web development projects, including full-stack applications, APIs, and user interfaces.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          My Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of projects showcasing my expertise in full-stack development,
          modern web technologies, and user-centered design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
