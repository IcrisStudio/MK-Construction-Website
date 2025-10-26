"use client";

import { motion } from "motion/react";
import { ArrowRight, MapPin, Calendar, Square } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Modern Villa - Bahria Town",
    location: "Bahria Town, Lahore",
    image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYxNDg2NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Residential",
    sqft: "4,500",
    duration: "8 months",
    tags: ["Luxury", "Modern"],
  },
  {
    id: 2,
    title: "Contemporary Living Space",
    location: "DHA Phase 6, Lahore",
    image: "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNDY3Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Interior Design",
    sqft: "3,200",
    duration: "4 months",
    tags: ["Minimalist", "Elegant"],
  },
  {
    id: 3,
    title: "Luxury Kitchen Design",
    location: "Bahria Town, Lahore",
    image: "https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNDA2NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Interior Design",
    sqft: "800",
    duration: "2 months",
    tags: ["Modern", "Functional"],
  },
  {
    id: 4,
    title: "Master Bedroom Suite",
    location: "DHA Phase 8, Lahore",
    image: "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwZGVzaWdufGVufDF8fHx8MTc2MTQ3MDc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Interior Design",
    sqft: "600",
    duration: "6 weeks",
    tags: ["Luxury", "Cozy"],
  },
  {
    id: 5,
    title: "Spa-Inspired Bathroom",
    location: "Bahria Town, Lahore",
    image: "https://images.unsplash.com/photo-1687951276836-06efbfda608b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTQwMTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Interior Design",
    sqft: "400",
    duration: "5 weeks",
    tags: ["Premium", "Relaxing"],
  },
  {
    id: 6,
    title: "New Construction Project",
    location: "Bahria Town, Lahore",
    image: "https://images.unsplash.com/photo-1689574666551-52eb11c37bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzYxNDE5MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Residential",
    sqft: "5,200",
    duration: "12 months",
    tags: ["Ground-up", "Custom"],
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1220] mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Explore our portfolio of luxury residential projects across Lahore's premier locations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#F7F7F8] aspect-[4/3] mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Square className="w-4 h-4" />
                      <span className="text-sm">{project.sqft} sq ft</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-[#0B1220] hover:bg-white">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0B1220] group-hover:text-[#0A84FF] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-[#475569] text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-[#F7F7F8] text-[#475569] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center text-[#0A84FF] hover:text-[#0A84FF]/80 font-medium group">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
