"use client";

import { motion } from "motion/react";
import { FileText, Pencil, Hammer, Key } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Consultation",
    description: "We discuss your vision, requirements, and budget to create a tailored plan",
  },
  {
    icon: Pencil,
    title: "Design",
    description: "Our team creates detailed designs and 3D visualizations for your approval",
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "Expert craftsmen bring your vision to life with precision and quality",
  },
  {
    icon: Key,
    title: "Handover",
    description: "Final walkthrough and key delivery with comprehensive warranty",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1220] mb-4">
            Our Process
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            A streamlined approach to transform your vision into reality
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-[#E6E9EE]" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Dot - Desktop */}
                  <div className="hidden md:flex absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-[#0A84FF] rounded-full items-center justify-center z-10">
                    <div className="w-3 h-3 bg-[#0A84FF] rounded-full" />
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full border border-[#E6E9EE] hover:border-[#0A84FF]/20">
                    <div className="flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-[#0A84FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0A84FF]/20 transition-colors">
                        <Icon className="w-8 h-8 text-[#0A84FF]" />
                      </div>

                      {/* Step Number */}
                      <div className="text-sm font-semibold text-[#0A84FF] mb-3">
                        STEP {index + 1}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-[#0B1220] mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#475569]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-xl px-6 py-4 shadow-sm border border-[#E6E9EE]">
            <div className="w-3 h-3 bg-[#22C55E] rounded-full animate-pulse" />
            <span className="text-[#475569]">
              Average project completion: <span className="font-semibold text-[#0B1220]">6-8 months</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
