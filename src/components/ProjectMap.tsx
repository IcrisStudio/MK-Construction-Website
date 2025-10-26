"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, X, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    name: "Villa Moderna",
    location: "Bahria Town Phase 8",
    coordinates: { x: 35, y: 45 },
    status: "Completed",
    image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?w=400",
    details: "4,500 sq ft luxury villa with modern amenities",
  },
  {
    id: 2,
    name: "Elegant Residence",
    location: "DHA Phase 6",
    coordinates: { x: 65, y: 35 },
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1641823911769-c55f23c25143?w=400",
    details: "Contemporary home with premium finishes",
  },
  {
    id: 3,
    name: "Urban Oasis",
    location: "Bahria Town Phase 4",
    coordinates: { x: 45, y: 65 },
    status: "Completed",
    image: "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?w=400",
    details: "Modern interior design transformation",
  },
  {
    id: 4,
    name: "Luxury Heights",
    location: "DHA Phase 8",
    coordinates: { x: 75, y: 55 },
    status: "Planning",
    image: "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?w=400",
    details: "5,200 sq ft custom residential project",
  },
];

export function ProjectMap() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#22C55E]";
      case "In Progress":
        return "bg-[#FFC107]";
      case "Planning":
        return "bg-[#0A84FF]";
      default:
        return "bg-[#475569]";
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-green-500/20"
          >
            <MapPin className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-bold">Interactive Map</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Projects Across <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Lahore</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building excellence in Lahore's most prestigious communities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Map Container with stunning design */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl border-4 border-white"
            style={{
              backgroundImage: `url('https://media.istockphoto.com/id/1151367251/vector/seamless-texture-city-map-in-retro-style-outline-map.jpg?s=612x612&w=0&k=20&c=0EzK-SAxKD6tkZJGMjICcYenqTgL6SXc8LFGxMpHY3Y=')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat',
              backgroundColor: '#F7F7F8',
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-gray-100/80" />
            
            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px),
                                  repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)`,
              }} />
            </div>
            
            {/* Content Container */}
            <div className="absolute inset-0 p-8 md:p-12">
              {/* Area Labels - Stunning Design */}
              <motion.div 
                className="absolute top-6 md:top-8 left-6 md:left-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 px-6 py-3 rounded-2xl shadow-2xl border-2 border-white relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-base font-bold text-gray-900">Bahria Town</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-6 md:top-8 right-6 md:right-12"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 px-6 py-3 rounded-2xl shadow-2xl border-2 border-white relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-base font-bold text-gray-900">DHA</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 px-6 py-3 rounded-2xl shadow-2xl border-2 border-white relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-base font-bold text-gray-900">City Center</span>
                  </div>
                </div>
              </motion.div>

              {/* Project Pins */}
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  initial={{ scale: 0, opacity: 0, y: -50 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  onClick={() => setSelectedProject(project)}
                  className="absolute group cursor-pointer z-10"
                  style={{
                    left: `${project.coordinates.x}%`,
                    top: `${project.coordinates.y}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                  aria-label={`View ${project.name}`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Shadow under pin */}
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-black/30 rounded-full blur-sm"
                      style={{ transform: 'translate(-50%, 10px) scale(1, 0.5)' }}
                    />
                    
                    {/* Custom realistic pin */}
                    <svg 
                      width="48" 
                      height="48" 
                      viewBox="0 0 48 48" 
                      fill="none" 
                      className="drop-shadow-2xl"
                    >
                      <defs>
                        <linearGradient id={`pin-gradient-${project.id}`} x1="24" y1="0" x2="24" y2="40">
                          <stop offset="0%" stopColor={
                            project.status === "Completed" ? "#22C55E" :
                            project.status === "In Progress" ? "#FFC107" :
                            "#0A84FF"
                          } />
                          <stop offset="100%" stopColor={
                            project.status === "Completed" ? "#16A34A" :
                            project.status === "In Progress" ? "#F59E0B" :
                            "#0066CC"
                          } />
                        </linearGradient>
                        <filter id={`pin-shadow-${project.id}`}>
                          <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.4"/>
                        </filter>
                      </defs>
                      
                      {/* Pin body */}
                      <path
                        d="M24 2C15.163 2 8 9.163 8 18c0 11.25 16 26 16 26s16-14.75 16-26c0-8.837-7.163-16-16-16z"
                        fill={`url(#pin-gradient-${project.id})`}
                        filter={`url(#pin-shadow-${project.id})`}
                        className="transition-all group-hover:brightness-110"
                      />
                      
                      {/* Inner highlight */}
                      <ellipse
                        cx="24"
                        cy="16"
                        rx="8"
                        ry="8"
                        fill="white"
                        opacity="0.9"
                      />
                      
                      {/* Inner circle */}
                      <circle
                        cx="24"
                        cy="16"
                        r="6"
                        fill={
                          project.status === "Completed" ? "#22C55E" :
                          project.status === "In Progress" ? "#FFC107" :
                          "#0A84FF"
                        }
                        className="transition-all group-hover:r-7"
                      />
                      
                      {/* Shine effect */}
                      <path
                        d="M20 12c0-2.2 1.8-4 4-4s4 1.8 4 4"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                      
                      {/* Bottom dot */}
                      <circle
                        cx="24"
                        cy="16"
                        r="2"
                        fill="white"
                        opacity="0.8"
                      />
                    </svg>
                    
                    {/* Pulsing ring on hover */}
                    <motion.div
                      className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 opacity-0 group-hover:opacity-100"
                      style={{ 
                        borderColor: project.status === "Completed" ? "#22C55E" :
                                    project.status === "In Progress" ? "#FFC107" :
                                    "#0A84FF"
                      }}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                    <motion.div
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-2xl border border-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <div 
                          className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}
                        />
                        <span>{project.name}</span>
                    </div>
                      <div className="text-xs text-gray-400 mt-1">{project.location}</div>
                      {/* Arrow */}
                      <div 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45 border-r border-b border-gray-700"
                      />
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Legend - Stunning Design */}
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { status: "Completed", icon: "✓", gradient: "from-green-500 to-emerald-600" },
              { status: "In Progress", icon: "⏳", gradient: "from-amber-500 to-orange-600" },
              { status: "Planning", icon: "📋", gradient: "from-blue-500 to-indigo-600" }
            ].map((item, index) => (
              <motion.div 
                key={item.status}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-gray-200 transition-all">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg`} />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
          </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    {item.icon} {item.status}
                  </span>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal - Stunning Design */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border-4 border-white relative"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-3xl" />
              
              <div className="relative h-56">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg group"
                  aria-label="Close modal"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
                </motion.button>
                
                <motion.div 
                  className={`absolute bottom-4 left-4 ${getStatusColor(selectedProject.status)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl backdrop-blur-sm`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.status}
                </motion.div>
              </div>
              
              <div className="p-8 relative z-10">
                <motion.h3 
                  className="text-3xl font-bold text-gray-900 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedProject.name}
                </motion.h3>
                
                <motion.div 
                  className="flex items-center gap-2 text-gray-600 mb-6 bg-gray-50 px-4 py-2 rounded-xl w-fit"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="font-medium">{selectedProject.location}</span>
                </motion.div>
                
                <motion.p 
                  className="text-gray-600 mb-8 leading-relaxed text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedProject.details}
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                <Button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    setSelectedProject(null);
                  }}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white h-14 text-base font-semibold shadow-xl shadow-green-600/30 rounded-xl cursor-pointer"
                >
                  Get Similar Quote
                    <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
