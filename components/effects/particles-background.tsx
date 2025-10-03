'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0"
      style={{
        zIndex: 1,
      }}
      options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fullScreen: {
            enable: false,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: isDark ? '#ffffff' : '#333333',
            },
            links: {
              color: isDark ? '#ffffff' : '#666666',
              distance: 150,
              enable: true,
              opacity: isDark ? 0.2 : 0.3,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 200,
            },
            opacity: {
              value: isDark ? 0.4 : 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 2, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
  );
}
