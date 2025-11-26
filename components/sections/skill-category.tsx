import type { SkillCategory as SkillCategoryType } from '@/lib/data/skills';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-foreground">{category.name}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const skillName = typeof skill === 'string' ? skill : skill.name;
          return (
            <span
              key={skillName}
              className="relative border border-black/15 bg-white/30 dark:border-white/15 dark:bg-black/30 text-foreground px-4 py-2 text-sm font-medium hover:bg-white/50 dark:hover:bg-black/50 transition-colors backdrop-blur-sm"
            >
              {skillName}
            </span>
          );
        })}
      </div>
    </div>
  );
}
