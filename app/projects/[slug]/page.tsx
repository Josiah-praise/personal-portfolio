import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/content/projects';
import { ProjectHeader } from '@/components/project/project-header';
import { ProjectImages } from '@/components/project/project-images';
import { ProjectContent } from '@/components/project/project-content';
import { ProjectLinks } from '@/components/project/project-links';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);
    return {
      title: `${project.title} | Projects | Josiah Praise`,
      description: project.description,
    };
  } catch {
    return {
      title: 'Project Not Found',
    };
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);

    return (
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto space-y-12">
          <ProjectHeader project={project} />
          <ProjectImages images={project.images} title={project.title} />
          <ProjectContent content={project.content} />
          <ProjectLinks demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
        </article>
      </div>
    );
  } catch {
    notFound();
  }
}
