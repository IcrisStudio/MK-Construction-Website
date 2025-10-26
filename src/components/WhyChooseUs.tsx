"use client";

import { motion } from "motion/react";
import { Shield, Clock, Award, Users, TrendingUp, Heart } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Premium materials and expert craftsmanship with comprehensive warranties",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Proven track record of completing projects within agreed timelines",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Recognized for excellence in residential architecture and interior design",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with 15+ years of combined experience",
  },
  {
    icon: TrendingUp,
    title: "Value Engineering",
    description: "Maximize your investment with cost-effective solutions",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your satisfaction is our priority with personalized service",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1220] mb-4">
            Why Choose MK Construction
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Setting the standard for luxury residential construction in Lahore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-[#F7F7F8] rounded-2xl p-8 h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#E6E9EE]">
                  {/* Animated Icon Background */}
                  <motion.div
                    className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-7 h-7 text-[#0A84FF]" />
                  </motion.div>

                  {/* Animated Check Mark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    className="absolute top-6 right-6 w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-[#0B1220] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#475569] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
