'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Safari } from '@/components/ui/safari';
import { BlurFade } from '@/components/ui/blur-fade';

interface ProjectImagesProps {
  images: string[];
  title: string;
}

export function ProjectImages({ images, title }: ProjectImagesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <BlurFade delay={0.35}>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">Screenshots</h2>
      </BlurFade>

      {/* Primary image in Safari mock */}
      {images[0] && (
        <BlurFade delay={0.4}>
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className="w-full mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg overflow-hidden group"
            aria-label={`View ${title} screenshot 1 in fullscreen`}
          >
            <div className="relative border border-black/10 dark:border-white/10 rounded-lg overflow-hidden bg-white/20 dark:bg-black/20 backdrop-blur-sm p-4 transition-all group-hover:bg-white/30 dark:group-hover:bg-black/30">
              <Safari
                url={title.toLowerCase().replace(/\s+/g, '-') + '.app'}
                imageSrc={images[0]}
                className="w-full shadow-2xl"
              />
            </div>
          </button>
        </BlurFade>
      )}

      {/* Secondary images grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(1).map((image, index) => (
            <BlurFade key={image} delay={0.45 + index * 0.05} inView>
              <button
                type="button"
                onClick={() => setActiveIndex(index + 1)}
                className="relative aspect-video w-full overflow-hidden border border-black/10 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
                aria-label={`View ${title} screenshot ${index + 2} in fullscreen`}
              >
                <Image
                  src={image}
                  alt={`${title} screenshot ${index + 2}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            </BlurFade>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot viewer"
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            {/* Close button */}
            <button
              type="button"
              aria-label="Close screenshot viewer"
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setActiveIndex(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative h-[80vh] overflow-hidden rounded-lg border border-white/10">
              <Image
                src={images[activeIndex]}
                alt={`${title} screenshot ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 90vw, 1280px"
                priority
              />
            </div>

            {/* Counter */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {activeIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
