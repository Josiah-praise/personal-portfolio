import { Hero } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { TechStack } from '@/components/sections/tech-stack';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TechStack />
    </>
  );
}
