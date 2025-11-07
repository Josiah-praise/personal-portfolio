'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ProjectImagesProps {
  images: string[];
  title: string;
}

export function ProjectImages({ images, title }: ProjectImagesProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
        Project Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setActiveImage(image)}
            className="relative aspect-video overflow-hidden rounded-lg bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View ${title} screenshot ${index + 1} in a larger modal`}
          >
            <Image
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot viewer"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close screenshot viewer"
              className="absolute -top-10 right-0 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setActiveImage(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-[80vh] overflow-hidden rounded-xl bg-muted">
              <Image
                src={activeImage}
                alt="Expanded project screenshot"
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 90vw, 1280px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
