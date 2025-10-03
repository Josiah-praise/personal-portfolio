import Image from 'next/image';

interface ProjectImagesProps {
  images: string[];
  title: string;
}

export function ProjectImages({ images, title }: ProjectImagesProps) {
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
          <div
            key={image}
            className="relative aspect-video overflow-hidden rounded-lg bg-muted"
          >
            <Image
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
