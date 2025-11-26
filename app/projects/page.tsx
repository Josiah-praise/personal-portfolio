import { getAllProjects } from '@/lib/content/projects';
import { ProjectCard } from '@/components/project/project-card';
import { BlurFade } from '@/components/ui/blur-fade';
import { TextAnimate } from '@/components/ui/text-animate';

export const metadata = {
  title: 'Projects | Praise Josiah',
  description:
    'Explore my portfolio of web development and blockchain projects, including full-stack applications, decentralized solutions, and scalable systems.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-16">
        <BlurFade delay={0.1}>
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            My Projects
          </TextAnimate>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A collection of projects showcasing my expertise in full-stack development, blockchain
            solutions, and scalable system architecture.
          </p>
        </BlurFade>

        {/* Stats Row */}
        <BlurFade delay={0.3}>
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">{projects.length}</span>
              <span className="text-muted-foreground">Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground">
                {new Set(projects.flatMap((p) => p.technologies)).size}+
              </span>
              <span className="text-muted-foreground">Technologies</span>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <BlurFade key={project.slug} delay={0.1 + index * 0.1} inView>
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
