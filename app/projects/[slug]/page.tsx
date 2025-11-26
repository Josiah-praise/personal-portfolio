import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/content/projects';
import { ProjectHeader } from '@/components/project/project-header';
import { ProjectImages } from '@/components/project/project-images';
import { ProjectContent } from '@/components/project/project-content';
import { ProjectLinks } from '@/components/project/project-links';
import { BlurFade } from '@/components/ui/blur-fade';
import { GlassCard } from '@/components/ui/glass-card';
import { TracingBeam } from '@/components/ui/tracing-beam';

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
      title: `${project.title} | Projects | Praise Josiah`,
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
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <BlurFade delay={0.05}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-black/10 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </BlurFade>

        <TracingBeam className="px-6">
          <article className="max-w-4xl mx-auto">
            <ProjectHeader project={project} />

            {/* Content wrapped in glass card */}
            <GlassCard className="p-8 mb-12">
              <ProjectContent content={project.content} />
            </GlassCard>

            <ProjectImages images={project.images} title={project.title} />
            <ProjectLinks demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
          </article>
        </TracingBeam>
      </div>
    );
  } catch {
    notFound();
  }
}
