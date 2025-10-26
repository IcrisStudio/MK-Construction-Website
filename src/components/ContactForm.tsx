"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form@7.55.0";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  location: string;
  message: string;
}

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>();

  const projectType = watch("projectType");
  const budget = watch("budget");

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
    }, 5000);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <section id="contact" className="py-24 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0B1220] mb-4">
            Start Your Project Today
          </h2>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Get a detailed quote for your dream home or renovation project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#0B1220] mb-6">
                Get in Touch
              </h3>
              <p className="text-[#475569] leading-relaxed mb-8">
                Ready to transform your vision into reality? Our team is here to help you every step of the way. Contact us today for a free consultation.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+92 300 1234567",
                  link: "tel:+923001234567",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "info@mkconstruction.pk",
                  link: "mailto:info@mkconstruction.pk",
                },
                {
                  icon: MapPin,
                  title: "Office",
                  content: "Bahria Town, Lahore, Pakistan",
                  link: "#",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#0A84FF]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A84FF]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#0A84FF]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#475569] mb-1">{item.title}</div>
                      <div className="font-semibold text-[#0B1220]">{item.content}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E6E9EE]">
              <h4 className="font-semibold text-[#0B1220] mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm text-[#475569]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-[#0B1220]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-[#0B1220]">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-[#0B1220]">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#E6E9EE]"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#475569]">Step {step} of 3</span>
                      <span className="text-sm text-[#475569]">{Math.round((step / 3) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-[#F7F7F8] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#0A84FF]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              {...register("name", { required: "Name is required" })}
                              className={`mt-2 ${errors.name ? "border-red-500" : ""}`}
                              placeholder="John Doe"
                            />
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.name.message}
                              </motion.p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              {...register("phone", { required: "Phone is required" })}
                              className={`mt-2 ${errors.phone ? "border-red-500" : ""}`}
                              placeholder="+92 300 1234567"
                            />
                            {errors.phone && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.phone.message}
                              </motion.p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              {...register("email", { required: "Email is required" })}
                              className={`mt-2 ${errors.email ? "border-red-500" : ""}`}
                              placeholder="john@example.com"
                            />
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.email.message}
                              </motion.p>
                            )}
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div>
                            <Label htmlFor="projectType">Project Type *</Label>
                            <Select onValueChange={(value) => setValue("projectType", value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new-construction">New Construction</SelectItem>
                                <SelectItem value="renovation">Renovation</SelectItem>
                                <SelectItem value="interior-design">Interior Design</SelectItem>
                                <SelectItem value="consultation">Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="budget">Budget Range *</Label>
                            <Select onValueChange={(value) => setValue("budget", value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-50L">Under PKR 5M</SelectItem>
                                <SelectItem value="50L-1CR">PKR 5M - 10M</SelectItem>
                                <SelectItem value="1CR-2CR">PKR 10M - 20M</SelectItem>
                                <SelectItem value="above-2CR">Above PKR 20M</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="location">Project Location *</Label>
                            <Input
                              id="location"
                              {...register("location", { required: "Location is required" })}
                              className={`mt-2 ${errors.location ? "border-red-500" : ""}`}
                              placeholder="e.g., Bahria Town Phase 8"
                            />
                            {errors.location && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                              >
                                {errors.location.message}
                              </motion.p>
                            )}
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div>
                            <Label htmlFor="message">Project Details</Label>
                            <Textarea
                              id="message"
                              {...register("message")}
                              className="mt-2 min-h-[150px]"
                              placeholder="Tell us about your project requirements, timeline, and any specific preferences..."
                            />
                          </div>

                          <div className="bg-[#F7F7F8] rounded-xl p-4 text-sm text-[#475569]">
                            <p className="mb-2">
                              By submitting this form, you agree to be contacted by MK Construction regarding your project inquiry.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3 pt-4">
                      {step > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="flex-1"
                        >
                          Previous
                        </Button>
                      )}
                      {step < 3 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="flex-1 bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="flex-1 bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
                        >
                          Submit Request
                        </Button>
                      )}
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#22C55E]" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-[#0B1220] mb-3">
                    Request Submitted!
                  </h3>
                  <p className="text-[#475569] mb-2">
                    Thank you for your interest in MK Construction.
                  </p>
                  <p className="text-[#475569]">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
