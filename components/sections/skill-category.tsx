import type { SkillCategory as SkillCategoryType } from '@/lib/data/skills';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-foreground">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
