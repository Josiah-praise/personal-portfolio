'use client';

import { useEffect, useRef, useState } from 'react';
import { Code, Briefcase, Users, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

function StatItem({ icon: Icon, value, label, suffix = '' }: StatItemProps) {
  const [count, setCount] = useState(0);
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
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
      <div className="relative bg-card border border-border rounded-lg p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <div className="text-4xl font-bold text-foreground mb-2">
          {count}{suffix}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground">
        By The Numbers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <StatItem icon={Code} value={3} label="Years Experience" suffix="+" />
        <StatItem icon={Briefcase} value={15} label="Projects Completed" suffix="+" />
        <StatItem icon={Users} value={5} label="Happy Clients" suffix="+" />
        <StatItem icon={Award} value={20} label="Technologies Mastered" suffix="+" />
      </div>
    </section>
  );
}
