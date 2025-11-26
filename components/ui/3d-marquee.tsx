"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "relative mx-auto w-full overflow-hidden",
        className
      )}
    >
      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div 
        className="flex h-full w-full items-center justify-center py-8"
        style={{ perspective: "1200px" }}
      >
        <div 
          className="flex gap-5 sm:gap-6 lg:gap-8"
          style={{
            transform: "rotateX(45deg) rotateZ(-45deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {chunks.map((subarray, colIndex) => (
            <motion.div
              initial={{ y: colIndex % 2 === 0 ? -50 : 50 }}
              animate={{ y: colIndex % 2 === 0 ? 50 : -50 }}
              transition={{
                duration: 8 + colIndex * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              key={colIndex + "marquee"}
              className="flex flex-col gap-5 sm:gap-6 lg:gap-8"
            >
              {[...subarray, ...subarray].map((image, imageIndex) => (
                <motion.div
                  key={imageIndex + image}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-md p-3 sm:p-4 border border-white/20 dark:border-white/10 shadow-xl flex items-center justify-center cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`Tech ${imageIndex + 1}`}
                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
