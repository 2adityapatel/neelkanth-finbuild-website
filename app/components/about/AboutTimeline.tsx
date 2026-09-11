"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  date: string;
  event: string;
}

interface AboutTimelineProps {
  items: TimelineItem[];
}

export default function AboutTimeline({ items }: AboutTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative ml-3 space-y-8">
      {/* Growing Vertical Line */}
      <div
        className={`absolute top-2 bottom-2 left-[7px] w-0.5 bg-neelkanth-blue/20 origin-top ${
          inView ? "timeline-line-grow" : "scale-y-0"
        }`}
      />

      {items.map((item, index) => (
        <div
          key={item.date}
          className={`relative pl-8 ${
            inView
              ? index === 0
                ? "timeline-item-0"
                : index === 1
                ? "timeline-item-1"
                : "timeline-item-2"
              : "opacity-0"
          }`}
        >
          {/* Milestone Dot */}
          <div
            className={`absolute -left-[1px] top-1 h-4 w-4 rounded-full border-2 border-neelkanth-blue bg-white z-10 ${
              inView
                ? index === 0
                  ? "timeline-dot-0"
                  : index === 1
                  ? "timeline-dot-1"
                  : "timeline-dot-2"
                : "opacity-0 scale-50"
            }`}
          />
          <p className="text-xs font-semibold text-neelkanth-blue uppercase tracking-wider mb-1">
            {item.date}
          </p>
          <p className="text-slate leading-relaxed">{item.event}</p>
        </div>
      ))}
    </div>
  );
}
