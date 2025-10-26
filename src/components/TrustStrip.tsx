"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Award, Users, Building2, Star } from "lucide-react";

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function TrustStrip() {
  const stats = [
    {
      icon: Building2,
      value: 200,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: Star,
      value: 98,
      suffix: "%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="bg-[#F7F7F8] py-16 border-y border-[#E6E9EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-sm mb-4">
                  <Icon className="w-7 h-7 text-[#0A84FF]" />
                </div>
                <div className="text-4xl font-semibold text-[#0B1220] mb-2">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-sm text-[#475569]">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
