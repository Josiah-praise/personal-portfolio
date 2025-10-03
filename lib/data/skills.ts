export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "React Query", "Zustand"],
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "VS Code", "Figma", "Vercel", "AWS", "Firebase"],
  },
  {
    name: "Practices & Methodologies",
    skills: ["Agile/Scrum", "Test-Driven Development", "CI/CD", "Responsive Design", "Code Review", "API Design"],
  },
];
