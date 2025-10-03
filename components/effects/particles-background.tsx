'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log('Starting particles initialization...'); // Debug log
    initParticlesEngine(async (engine) => {
      console.log('Loading particles engine...'); // Debug log
      await loadSlim(engine);
      console.log('Particles engine loaded!'); // Debug log
    }).then(() => {
      console.log('Particles ready!'); // Debug log
      setInit(true);
    });
  }, []);

  if (!init) {
    console.log('Particles not initialized yet'); // Debug log
    return null;
  }

  console.log('Rendering particles...'); // Debug log

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
              value: '#333333',
            },
            links: {
              color: '#666666',
              distance: 150,
              enable: true,
              opacity: 0.3,
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
              value: 0.5,
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
