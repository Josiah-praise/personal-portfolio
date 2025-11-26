'use client';

import { ExternalLink, Github } from 'lucide-react';
import { ShineBorder } from '@/components/ui/shine-border';
import { BlurFade } from '@/components/ui/blur-fade';

interface ProjectLinksProps {
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectLinks({ demoUrl, githubUrl }: ProjectLinksProps) {
  if (!demoUrl && !githubUrl) {
    return null;
  }

  return (
    <section className="mt-12 pt-12 border-t border-black/10 dark:border-white/10">
      <BlurFade delay={0.5}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
          Project Links
        </h2>
      </BlurFade>

      <BlurFade delay={0.55}>
        <div className="flex flex-wrap gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
              className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors overflow-hidden"
            >
              <ShineBorder
                shineColor={['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.2)']}
                borderWidth={1}
                duration={10}
              />
              <ExternalLink className="h-4 w-4" />
              View Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
              className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-black/15 dark:border-white/15 bg-white/30 dark:bg-black/30 text-foreground hover:bg-white/50 dark:hover:bg-black/50 backdrop-blur-sm transition-colors overflow-hidden"
            >
              <ShineBorder
                shineColor={['rgba(0,0,0,0.3)', 'rgba(255,255,255,0.3)']}
                borderWidth={1}
                duration={12}
              />
              <Github className="h-4 w-4" />
              View Source Code
            </a>
          )}
        </div>
      </BlurFade>
    </section>
  );
}
