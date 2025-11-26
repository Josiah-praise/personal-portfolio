'use client';

import CircularText from '@/components/ui/circular-text';

export function OpenToWorkBadge() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center">
        {/* Circular spinning text */}
        <CircularText
          text="• OPEN TO WORK • OPEN TO WORK "
          spinDuration={15}
          onHover="pause"
          className="text-black/40 dark:text-white/40"
        />
      </div>
    </div>
  );
}

export default OpenToWorkBadge;
