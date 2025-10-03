export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  name: string;
  skills: string[] | Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Solidity", "C", "SQL", "HTML", "CSS"],
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
    name: "Blockchain Development",
    skills: ["Solidity", "Ethers.js", "Viem", "Wagmi", "Stacks", "StacksJS", "Subgraph", "Web3.js"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "Linux/Unix", "VS Code", "Figma", "Vercel", "AWS", "Firebase"],
  },
  {
    name: "Practices & Methodologies",
    skills: ["Agile/Scrum", "Test-Driven Development", "CI/CD", "Responsive Design", "Code Review", "API Design"],
  },
];

export const topSkills: Skill[] = [
  { name: "React / Next.js", proficiency: 95 },
  { name: "TypeScript", proficiency: 90 },
  { name: "Node.js / Express", proficiency: 85 },
  { name: "Solidity / Smart Contracts", proficiency: 82 },
  { name: "PostgreSQL", proficiency: 80 },
  { name: "REST APIs", proficiency: 88 },
  { name: "Git / GitHub", proficiency: 90 },
  { name: "Docker", proficiency: 75 },
];
