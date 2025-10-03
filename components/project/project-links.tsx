import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectLinksProps {
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectLinks({ demoUrl, githubUrl }: ProjectLinksProps) {
  if (!demoUrl && !githubUrl) {
    return null;
  }

  return (
    <section className="mt-12 pt-12 border-t">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
        Project Links
      </h2>
      <div className="flex flex-wrap gap-4">
        {demoUrl && (
          <Button asChild size="lg">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button asChild size="lg" variant="outline">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
            >
              <Github className="mr-2 h-5 w-5" />
              View Source Code
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}
