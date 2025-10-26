"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#0A84FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">MK</span>
              </div>
              <span className="font-semibold">MK Construction</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Building luxury residential projects across Lahore's most prestigious communities since 2009.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0A84FF] transition-colors"
                    aria-label={`Social link ${index + 1}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Projects", href: "#projects" },
                { name: "Services", href: "#services" },
                { name: "Process", href: "#process" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#0A84FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Residential Construction",
                "Interior Design",
                "Renovation & Remodeling",
                "Project Management",
                "Consultation",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-[#0A84FF] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-6">Stay Updated</h3>
            <p className="text-white/70 mb-4 text-sm">
              Subscribe to our newsletter for latest projects and updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0A84FF] flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium mb-1">Office Address</div>
                <div className="text-white/70 text-sm">
                  Main Boulevard, Bahria Town<br />
                  Lahore, Pakistan
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#0A84FF] flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium mb-1">Phone</div>
                <div className="text-white/70 text-sm">
                  +92 300 1234567<br />
                  +92 42 1234567
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#0A84FF] flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium mb-1">Email</div>
                <div className="text-white/70 text-sm">
                  info@mkconstruction.pk<br />
                  projects@mkconstruction.pk
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} MK Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-[#0A84FF] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-[#0A84FF] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 hover:text-[#0A84FF] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
