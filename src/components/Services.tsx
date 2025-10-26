"use client";

import { motion } from "motion/react";
import { Home, Paintbrush, Building, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Complete ground-up construction of luxury homes in Bahria Town, DHA, and premium locations",
    features: [
      "Custom home design & planning",
      "Foundation to finishing",
      "Quality material sourcing",
      "Project management",
    ],
    color: "bg-blue-500",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Transform your living spaces with elegant, functional interior design solutions",
    features: [
      "Space planning & layout",
      "Material & finish selection",
      "Custom furniture design",
      "Lighting & decor",
    ],
    color: "bg-purple-500",
  },
  {
    icon: Building,
    title: "Renovation & Remodeling",
    description: "Breathe new life into your existing property with our expert renovation services",
    features: [
      "Kitchen & bathroom upgrades",
      "Room additions",
      "Structural modifications",
      "Facade improvements",
    ],
    color: "bg-green-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1220] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Comprehensive construction and design solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-[#F7F7F8] rounded-3xl p-8 h-full hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#E6E9EE] flex flex-col">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-[#0B1220] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#475569] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-[#22C55E] mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#475569]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn hover:bg-[#0A84FF] hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#F7F7F8] rounded-2xl px-8 py-6 border border-[#E6E9EE]">
            <div className="text-left">
              <p className="text-[#0B1220] font-semibold mb-1">
                Need a custom solution?
              </p>
              <p className="text-[#475569] text-sm">
                We offer tailored packages for unique projects
              </p>
            </div>
            <Button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
