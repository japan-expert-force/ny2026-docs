"use client";

import confetti from "canvas-confetti";
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

const updates = [
  {
    version: "1.21",
    date: "2024-06-13",
    title: "Tricky Trials",
  },
  {
    version: "1.21.2",
    date: "2024-10-22",
    title: "Bundles of Bravery",
  },
  {
    version: "1.21.4",
    date: "2024-12-03",
    title: "The Garden Awakens",
  },
  {
    version: "1.21.5",
    date: "2025-03-25",
    title: "Spring to Life",
  },
  {
    version: "1.21.6",
    date: "2025-06-17",
    title: "Chase the Skies",
  },
  {
    version: "1.21.9",
    date: "2025-09-30",
    title: "The Copper Age",
  },
  {
    version: "1.21.11",
    date: "2025-12-09",
    title: "Mounts of Mayhem",
  },
];

export default function Home() {
  useEffect(() => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) {
        return;
      }
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
      requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="flex mt-40 text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            NY2026
          </h1>
          <div className="mt-8 flex justify-center">
            <span className="text-muted-foreground">Happy new year 2026!</span>
          </div>
        </div>

        <div className="mt-10">
          <Timeline spacing="sm">
            {updates.flat().map((update, i) => (
              <TimelineItem
                key={update.date}
                title={update.title}
                description={`${update.version} ・ ${update.date}`}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </ScrollArea>
  );
}
