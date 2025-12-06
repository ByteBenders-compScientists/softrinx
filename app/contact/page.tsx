// app/contact/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  ChevronDown,
  Check,
} from "lucide-react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import "@/styles/animations.scss";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// Define form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string(),
  budget: z.string(),
  timeline: z.string(),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteTotal, setQuoteTotal] = useState<number | null>(null);
  const [quoteRange, setQuoteRange] = useState<string>("");

  // Quote calculator state
  const [quoteOptions, setQuoteOptions] = useState({
    projectType: "",
    features: [] as string[],
    complexity: "",
    timeline: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormValues>();

  useEffect(() => {
    // Animation triggers on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements
    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  // Calculate quote based on selected options
  useEffect(() => {
    if (
      quoteOptions.projectType &&
      quoteOptions.complexity &&
      quoteOptions.timeline
    ) {
      let basePrice = 0;

      // Base price by project type
      switch (quoteOptions.projectType) {
        case "web":
          basePrice = 25000;
          break;
        case "mobile":
          basePrice = 35000;
          break;
        case "custom":
          basePrice = 45000;
          break;
        default:
          basePrice = 20000;
      }

      // Multiply by complexity factor
      const complexityMultiplier =
        quoteOptions.complexity === "simple"
          ? 1
          : quoteOptions.complexity === "medium"
          ? 1.5
          : quoteOptions.complexity === "complex"
          ? 2
          : 1;

      // Add feature costs
      const featureCost = quoteOptions.features.length * 5000;

      // Timeline factor (faster = more expensive)
      const timelineMultiplier =
        quoteOptions.timeline === "asap"
          ? 1.3
          : quoteOptions.timeline === "3months"
          ? 1
          : quoteOptions.timeline === "6months"
          ? 0.9
          : 1;

      // Calculate total
      const calculatedTotal =
        (basePrice + featureCost) * complexityMultiplier * timelineMultiplier;

      // Set range (±15%)
      const lowerRange = Math.round((calculatedTotal * 0.85) / 1000) * 1000;
      const upperRange = Math.round((calculatedTotal * 1.15) / 1000) * 1000;

      setQuoteTotal(calculatedTotal);
      setQuoteRange(
        `$${lowerRange.toLocaleString()} - $${upperRange.toLocaleString()}`
      );
    }
  }, [quoteOptions]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);

    try {
      // In a real app, this would send data to a backend API
      console.log(data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFeatureToggle = (feature: string) => {
    setQuoteOptions((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  return (
    <main className="contact-page">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Contact Softrinx"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="brightness-[0.2]"
          />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl fade-in">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200 md:text-2xl slide-up">
            Start the conversation about your next software project
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Mail size={24} />,
                title: "Email Us",
                info: "info@softrinx.com",
                detail: "We respond within 24 hours",
                link: "mailto:hello@softrinx.com",
              },
              {
                icon: <Phone size={24} />,
                title: "Phone",
                info: "+254 750 109798",
                detail: "Available 24/7",
                link: "tel:+15551234567",
              },
              {
                icon: <MapPin size={24} />,
                title: "Location",
                info: "Nyeri, Kenya",
                detail: "Kimathi",
                link: "https://maps.google.com",
              },
              {
                icon: <Clock size={24} />,
                title: "Working Hours",
                info: "24/7",
                detail: "Available globally for clients",
                link: null,
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="p-6 text-center transition-all rounded-lg bg-gray-50 hover:shadow-md"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100 text-primary-600">
                  {contact.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{contact.title}</h3>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-primary-600 hover:underline"
                  >
                    {contact.info}
                  </a>
                ) : (
                  <p className="text-gray-800">{contact.info}</p>
                )}
                <p className="mt-2 text-sm text-gray-500">{contact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quote Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold">Get In Touch</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Fill out the form below to discuss your project, or Reach out
                via the provided emails or phone call
              </p>
            </div>

            <div className="grid grid-cols-1 gap-16 bg-gray-50 lg:grid-cols-2 ">
              {/* Contact Form */}
              <div ref={formRef} className="transform-on-scroll">
                <div className="overflow-hidden bg-white shadow-lg rounded-xl ">
                  <div className="p-8">
                    <h3 className="mb-6 text-2xl font-bold">Contact Form</h3>

                    {isSubmitted ? (
                      <div className="py-10 text-center">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
                          <Check size={32} className="text-green-600" />
                        </div>
                        <h4 className="mb-2 text-2xl font-bold text-gray-900">
                          Thank You!
                        </h4>
                        <p className="mb-6 text-gray-600">
                          We&apos;ve received your message and will get back to
                          you within 24 hours.
                        </p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="px-6 py-3 text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                          <div>
                            <label
                              htmlFor="name"
                              className="block mb-1 text-sm font-medium text-gray-700"
                            >
                              Your Name *
                            </label>
                            <input
                              id="name"
                              type="text"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                errors.name
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              placeholder="John Doe"
                              {...register("name", { required: true })}
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-red-600">
                                {errors.name.message || "Name is required"}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-1 text-sm font-medium text-gray-700"
                            >
                              Email Address *
                            </label>
                            <input
                              id="email"
                              type="email"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                errors.email
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              placeholder="john@example.com"
                              {...register("email", { required: true })}
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red-600">
                                {errors.email.message ||
                                  "Valid email is required"}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                          <div>
                            <label
                              htmlFor="company"
                              className="block mb-1 text-sm font-medium text-gray-700"
                            >
                              Company Name
                            </label>
                            <input
                              id="company"
                              type="text"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                              placeholder="Your Company"
                              {...register("company")}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block mb-1 text-sm font-medium text-gray-700"
                            >
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                              placeholder="(+254) 700 000 000"
                              {...register("phone")}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
                          <div>
                            <label
                              htmlFor="service"
                              className="block mb-1 text-sm font-medium text-gray-700"
                            >
                              Service Needed *
                            </label>
                            <select
                              id="service"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                errors.service
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              {...register("service", { required: true })}
                            >
                              <option value="">Select a service</option>
                              <option value="web">Web Application</option>
                              <option value="mobile">Mobile Application</option>
                              <option value="custom">Custom Software</option>
                              <option value="cloud">Cloud Solutions</option>
                              <option value="ai">AI & Machine Learning</option>
                              <option value="data">Data Analytics</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.service && (
                              <p className="mt-1 text-sm text-red-600">
                                Please select a service
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="budget"
                              className="block mb-1 text-sm font-medium text-gray-700"
                            >
                              Budget Range *
                            </label>
                            <select
                              id="budget"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                errors.budget
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              {...register("budget", { required: true })}
                            >
                              <option value="">Select budget</option>
                              <option value="below25k">Below $25,000</option>
                              <option value="25k-50k">$25,000 - $50,000</option>
                              <option value="50k-100k">
                                $50,000 - $100,000
                              </option>
                              <option value="100k-250k">
                                $100,000 - $250,000
                              </option>
                              <option value="above250k">Above $250,000</option>
                              <option value="not_sure">Not sure yet</option>
                            </select>
                            {errors.budget && (
                              <p className="mt-1 text-sm text-red-600">
                                Please select a budget range
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="timeline"
                              className="block mb-1 text-sm font-medium text-gray-700"
                            >
                              Timeline *
                            </label>
                            <select
                              id="timeline"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                errors.timeline
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                              {...register("timeline", { required: true })}
                            >
                              <option value="">Select timeline</option>
                              <option value="immediate">
                                Immediate (ASAP)
                              </option>
                              <option value="1-3months">1-3 months</option>
                              <option value="3-6months">3-6 months</option>
                              <option value="6months+">6+ months</option>
                              <option value="not_sure">Not sure yet</option>
                            </select>
                            {errors.timeline && (
                              <p className="mt-1 text-sm text-red-600">
                                Please select a timeline
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="message"
                            className="block mb-1 text-sm font-medium text-gray-700"
                          >
                            Project Details *
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.message
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            placeholder="Tell us about your project, goals, and any specific requirements..."
                            {...register("message", {
                              required: true,
                              minLength: 10,
                            })}
                          ></textarea>
                          {errors.message && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.message.message ||
                                "Please provide project details"}
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send size={20} className="mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
              {/*Company emails*/}
              <div className="overflow-hidden bg-white shadow-lg rounded-xl">
                <div className="p-8">
                  <h3 className="mb-6 text-2xl font-bold">Company Emails</h3>

                  <div className="space-y-4">
                    {/* Info Email */}
                    <div className="flex items-start gap-4 p-4 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg shrink-0">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <a
                          href="mailto:info@softrinx.com"
                          className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                        >
                          info@softrinx.com
                        </a>
                        <p className="mt-1 text-sm text-gray-600">
                          General info
                        </p>
                      </div>
                    </div>

                    {/* Support Email */}
                    <div className="flex items-start gap-4 p-4 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg shrink-0">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <a
                          href="mailto:support@softrinx.com"
                          className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                        >
                          support@softrinx.com
                        </a>
                        <p className="mt-1 text-sm text-gray-600">
                          Tech support & customer issues
                        </p>
                      </div>
                    </div>

                    {/* Sales Email */}
                    <div className="flex items-start gap-4 p-4 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg shrink-0">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <a
                          href="mailto:sales@softrinx.com"
                          className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                        >
                          sales@softrinx.com
                        </a>
                        <p className="mt-1 text-sm text-gray-600">
                          Sales & Partnerships
                        </p>
                      </div>
                    </div>

                    {/* Accounts Email */}
                    <div className="flex items-start gap-4 p-4 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg shrink-0">
                        <svg
                          className="w-5 h-5 text-yellow-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <a
                          href="mailto:accounts@softrinx.com"
                          className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                        >
                          accounts@softrinx.com
                        </a>
                        <p className="mt-1 text-sm text-gray-600">
                          Billing, invoices, finance
                        </p>
                      </div>
                    </div>

                    {/* Admin Email */}
                    <div className="flex items-start gap-4 p-4 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg shrink-0">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <a
                          href="mailto:admin@softrinx.com"
                          className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                        >
                          admin@softrinx.com
                        </a>
                        <p className="mt-1 text-sm text-gray-600">
                          Internal and main business email, for creating
                          accounts on other platforms etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Office */}
      <section ref={mapRef} className="py-20 bg-white transform-on-scroll">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold">Visit Our Office</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              We&apos;re always happy to meet in person to discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3 rounded-xl overflow-hidden h-[400px] shadow-lg">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7245900718594!2d36.960811873682566!3d-0.3927370352995991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18286779bfd0e3b7%3A0xff724c2b23076240!2sBomas!5e0!3m2!1sen!2ske!4v1765030944031!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Softrinx Location Map"
                />
              </div>
            </div>

            <div className="lg:col-span-2 rounded-xl overflow-hidden h-[400px] shadow-lg relative">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
                alt="Softrinx Office"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black bg-opacity-60">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Kenya Office
                </h3>
                <p className="mb-4 text-gray-300">
                  Kimathi
                  <br />
                  Nyeri, Kenya
                </p>
                <div className="flex mt-2 space-x-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium transition-colors bg-white rounded-lg text-primary-900 hover:bg-gray-100"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Have questions about working with us? Find quick answers below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What happens after I submit my contact form?",
                answer:
                  "Within 24 hours, a member of our team will reach out to schedule an initial consultation. This call helps us understand your project better and determine how we can best assist you.",
              },
              {
                question: "Is the quote calculator estimate accurate?",
                answer:
                  "The calculator provides a ballpark estimate based on typical projects with similar requirements. For a precise quote, we'll need to discuss your specific needs in detail during our consultation.",
              },
              {
                question: "Do you work with clients outside of the US?",
                answer:
                  "Absolutely! We work with clients globally and have experience managing remote collaboration across different time zones. Our team can adapt to your schedule for meetings and updates.",
              },
              {
                question:
                  "What information should I prepare before our first call?",
                answer:
                  "Having a basic outline of your project goals, timeline, budget constraints, and any existing materials (wireframes, requirements docs, etc.) is helpful but not required. We can guide you through the discovery process.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-emerald-500">
        <div className="container px-4 mx-auto text-center">
          <h2 className="max-w-3xl mx-auto mb-6 text-4xl font-bold">
            Ready to Transform Your Business with Custom Software?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-950">
            Let&apos;s discuss how we can help you achieve your goals and
            overcome your challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="px-8 py-4 text-lg font-medium text-white transition-colors rounded-2xl bg-emerald-600 btn-primary bg-primary-600 hover:bg-primary-700"
            >
              Start Your Project
            </a>
            <Link
              href="/portfolio"
              className="px-8 py-4 text-lg font-medium text-white transition-colors border-2 border-white rounded-2xl bg-slate-700 btn-secondary hover:bg-white hover:text-gray-900"
            >
              See Our Work
            </Link>

            <Link
              href="/portfolio"
              className="px-8 py-4 text-lg font-medium text-white transition-colors rounded-2xl bg-emerald-600 btn-primary bg-primary-600 hover:bg-primary-700"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
