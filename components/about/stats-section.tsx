'use client';

import { useEffect, useRef, useState } from 'react';
import { Code, Briefcase, Users, Award } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { NumberTicker } from '@/components/ui/number-ticker';
import { BlurFade } from '@/components/ui/blur-fade';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function StatItem({ icon: Icon, value, label, suffix = '', delay = 0 }: StatItemProps) {
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

  return (
    <BlurFade delay={delay} inView className="h-full">
      <div ref={ref} className="h-full">
        <GlassCard className="h-full flex flex-col items-center justify-center text-center group hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-none border border-black/20 bg-black/5 dark:border-white/20 dark:bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-foreground" />
          </div>
          <div className="text-4xl font-bold text-foreground mb-2">
            {isVisible ? (
              <>
                <NumberTicker value={value} />
                {suffix}
              </>
            ) : (
              `0${suffix}`
            )}
          </div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </GlassCard>
      </div>
    </BlurFade>
  );
}

export function StatsSection() {
  return (
    <section className="mb-16">
      <BlurFade delay={0.1} inView>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground">
          By The Numbers
        </h2>
      </BlurFade>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-fr">
        <StatItem icon={Code} value={2} label="Years Experience" suffix="+" delay={0.2} />
        <StatItem icon={Briefcase} value={5} label="Projects Completed" suffix="+" delay={0.3} />
        <StatItem icon={Users} value={5} label="Happy Clients" suffix="+" delay={0.4} />
        <StatItem icon={Award} value={10} label="Technologies Mastered" suffix="+" delay={0.5} />
      </div>
    </section>
  );
}
