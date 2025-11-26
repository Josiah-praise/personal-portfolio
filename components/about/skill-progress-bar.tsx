'use client';

import { useEffect, useRef, useState } from 'react';

interface SkillProgressBarProps {
  skill: string;
  proficiency: number; // 0-100
}

export function SkillProgressBar({ skill, proficiency }: SkillProgressBarProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setWidth(proficiency), 100);
    }
  }, [isVisible, proficiency]);

  return (
    <div ref={ref} className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-xs text-muted-foreground font-mono">{proficiency}%</span>
      </div>
      <div className="relative h-2 bg-black/10 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full bg-black/70 dark:bg-white/70 transition-all duration-1000 ease-out group-hover:bg-black dark:group-hover:bg-white"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
