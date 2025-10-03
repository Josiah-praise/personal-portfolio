import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Projects | Josiah Praise`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {project.description}
        </p>

        <div className="bg-muted rounded-lg p-12 text-center">
          <p className="text-lg text-muted-foreground">
            Detailed project information coming soon...
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            This page will include project screenshots, technical details, challenges solved, and live demo links.
          </p>
        </div>
      </div>
    </div>
  );
}
