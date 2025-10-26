"use client";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { BeforeAfter } from "./components/BeforeAfter";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { ProjectMap } from "./components/ProjectMap";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <FeaturedProjects />
        <ProcessTimeline />
        <WhyChooseUs />
        <BeforeAfter />
        <Services />
        <Testimonials />
        <ProjectMap />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
