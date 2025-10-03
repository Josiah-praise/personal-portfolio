export function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Prisma', category: 'Backend' },
    { name: 'Git', category: 'Tools' },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative p-6 rounded-lg border-2 border-border hover:border-primary/50 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
            >
              <div className="text-center">
                <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {tech.category}
                </p>
              </div>
              {/* Decorative hover effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
