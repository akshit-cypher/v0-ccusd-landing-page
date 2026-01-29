"use client";

import React from "react";


import { motion } from "framer-motion";
import { Shield, Zap, Network, Globe, Layers, ShieldCheck, Landmark, RefreshCw, FileCheck, Key, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Navigation Component
function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0b0d]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button 
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/icon-dark.png"
            alt="CCUSD"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold tracking-tight text-white">
            CCUSD
          </span>
        </button>
        <div className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("why-choose")}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Why Choose
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-lg border border-[#00E5FF]/60 bg-transparent px-4 py-2 text-sm font-medium text-[#00E5FF] transition-all hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]"
          >
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Glowing pulse effect behind coin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-64 w-64 animate-pulse rounded-full bg-[#00E5FF]/20 blur-3xl md:h-96 md:w-96" />
        <div
          className="absolute h-48 w-48 animate-pulse rounded-full bg-[#00E5FF]/30 blur-2xl md:h-72 md:w-72"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Central Coin Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mb-8"
      >
        <div className="relative flex items-center justify-center">
          {/* Outer glow ring */}
          <div 
            className="absolute h-52 w-52 animate-spin rounded-full md:h-72 md:w-72"
            style={{ 
              animationDuration: "20s",
              background: "conic-gradient(from 0deg, transparent, #00E5FF/20, transparent, transparent)"
            }} 
          />
          
          {/* Primary orbital ring */}
          <div 
            className="absolute h-48 w-48 animate-spin rounded-full md:h-64 md:w-64"
            style={{ 
              animationDuration: "12s",
              background: "conic-gradient(from 180deg, transparent 0%, #00E5FF 10%, transparent 20%)"
            }} 
          />
          
          {/* Secondary counter-rotating ring */}
          <div 
            className="absolute h-44 w-44 rounded-full md:h-60 md:w-60"
            style={{ 
              animationDuration: "15s",
              animationDirection: "reverse",
              animationName: "spin",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              background: "conic-gradient(from 90deg, transparent 0%, rgba(0, 229, 255, 0.3) 5%, transparent 10%, transparent 50%, rgba(0, 229, 255, 0.2) 55%, transparent 60%)"
            }} 
          />
          
          {/* Inner dashed orbit */}
          <div 
            className="absolute h-[11.5rem] w-[11.5rem] animate-spin rounded-full border border-dashed border-white/10 md:h-[16rem] md:w-[16rem]"
            style={{ animationDuration: "30s" }} 
          />
          
          {/* Orbiting dots */}
          <div 
            className="absolute h-48 w-48 animate-spin md:h-64 md:w-64"
            style={{ animationDuration: "8s" }}
          >
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#00E5FF] shadow-lg shadow-[#00E5FF]/50" />
            <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#00E5FF]/60" />
          </div>
          
          {/* Counter-orbiting dot */}
          <div 
            className="absolute h-52 w-52 md:h-72 md:w-72"
            style={{ 
              animationDuration: "10s",
              animationDirection: "reverse",
              animationName: "spin",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite"
            }}
          >
            <div className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-white/80" />
          </div>
          
          {/* Coin image */}
          <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-[#0a0b0d] p-1 shadow-2xl shadow-black/50 ring-1 ring-white/10 md:h-48 md:w-48">
            <img
              src="/images/ccusd-dark-logo.png"
              alt="CCUSD Coin"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-center"
      >
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          <span className="text-balance">Stable, Transparent, Native.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
          CCUSD is a 1:1 fiat-backed stablecoin by OpenVector, designed for seamless liquidity provisioning across all products in the Canton ecosystem.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="px-10 py-6 text-base bg-white text-[#0a0b0d] font-semibold hover:bg-white/90 transition-all rounded-lg"
          >
            Get Started
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

// OpenVector Section Component
function OpenVectorSection() {
  return (
    <motion.section
      id="about"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative z-20 -mt-16 px-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-2xl shadow-black/50 backdrop-blur-xl md:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#00E5FF]">
            Powered by OpenVector
          </div>
          <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
            Built by OpenVector, an R&D Studio for AI & Blockchain
          </h3>
          <p className="mx-auto max-w-2xl text-slate-400">
            CCUSD is a 1:1 fiat-backed stablecoin designed for seamless liquidity across the Canton ecosystem. Every token is CIP-56 compliant, fully backed by fiat reserves managed by Brale with third-party attestations.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

function FeatureCard({
  icon,
  title,
  description,
  className = "",
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 shadow-xl shadow-black/30 backdrop-blur-xl transition-all hover:border-[#00E5FF]/20 hover:bg-white/[0.04] ${className}`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] transition-colors group-hover:bg-[#00E5FF]/20">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  );
}

// Value Props Visual Section
function ValuePropsSection() {
  const props: any[] = [
    {
      title: "Fiat-Backed Stability",
      description: "Every CCUSD token is fully backed by fiat reserves, providing institutional-grade stability and trust.",
      icon: (
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-16 w-16 rounded-full border border-white/[0.08]" />
          <div className="absolute h-12 w-12 rounded-full border border-[#00E5FF]/20" />
          <Shield className="h-8 w-8 text-[#00E5FF]" />
        </div>
      ),
    },
    {
      title: "CIP-56 Compliant",
      description: "Meets the Canton Interoperability Protocol standards, ensuring seamless integration across the ecosystem.",
      icon: (
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-16 w-16 rounded-full border border-white/[0.08]" />
          <div className="flex">
            <div className="h-8 w-8 rounded-full border border-white/40 bg-white/[0.02]" />
            <div className="-ml-3 h-8 w-8 rounded-full border border-[#00E5FF]/60 bg-[#00E5FF]/10" />
          </div>
        </div>
      ),
    },
    {
      title: "Verified Reserve Management",
      description: "Brale provides automated reserve management with third-party attestations for US-regulated backing.",
      icon: (
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-16 w-16 rounded-full border border-white/[0.08]" />
          <div className="flex items-center gap-0.5">
            <div className="h-5 w-5 rounded-full border border-white/40 bg-white/[0.02]" />
            <div className="-mt-5 h-5 w-5 rounded-full border border-[#00E5FF]/60 bg-[#00E5FF]/10" />
            <div className="h-5 w-5 rounded-full border border-white/40 bg-white/[0.02]" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {props.map((prop, index) => (
            <motion.div
              key={prop.title}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center shadow-xl shadow-black/30 backdrop-blur-xl transition-all hover:border-[#00E5FF]/20 hover:bg-white/[0.04]"
            >
              <div className="mb-6">{prop.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-white">{prop.title}</h3>
              <p className="text-slate-400">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Section
function WhyChooseSection() {
  const features = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Built by OpenVector",
      description: "Created by OpenVector, an R&D studio building hardware & software solutions for the AI & Blockchain ecosystem.",
    },
    {
      icon: <Landmark className="h-5 w-5" />,
      title: "Transparent Reserve Custody",
      description: "Brale provides professional reserve administration with regular third-party verifications ensuring full regulatory compliance and US-regulated backing.",
    },
    {
      icon: <FileCheck className="h-5 w-5" />,
      title: "CIP-56 Compliance",
      description: "Fully compliant with Canton Interoperability Protocol standards, ensuring seamless integration across Canton ecosystem products.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Ecosystem Native Integration",
      description: "Works seamlessly with existing Canton ecosystem users including Zoro wallet, Trade.Fast, Cypherock and other financial applications.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Security & Audits",
      description: "Independent security audits validate smart contracts, ensuring adherence to industry standards and building institutional confidence.",
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Liquidity Provisioning",
      description: "Designed for easy liquidity provisioning across all OpenVector products, enabling seamless transactions within the ecosystem.",
    },
    {
      icon: <Key className="h-5 w-5" />,
      title: "Enterprise-Grade Infrastructure",
      description: "Advanced multi-party computation enables high-throughput minting and redemption with institutional-grade security.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Privacy-Preserving Design",
      description: "Built with privacy considerations for the Canton Network's atomic privacy and instant finality features.",
    },
  ];

  return (
    <section id="why-choose" className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header matching FeaturesGrid style */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Why choose CCUSD?
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Institutional-grade infrastructure with compliance, security, and scalability at its core.
          </p>
        </motion.div>

        {/* Glass card container */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 shadow-xl shadow-black/30 backdrop-blur-xl md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] transition-colors group-hover:bg-[#00E5FF]/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Form Component
function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0f1014] to-[#0a0b0d]">
          {/* Background glow effect */}
          <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#00E5FF]/10 blur-3xl" />
          
          <div className="relative grid grid-cols-1 gap-10 p-6 sm:p-8 md:p-12 lg:grid-cols-2 lg:gap-16">
            {/* Left side - Text Content */}
            <div className="flex flex-col justify-center">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-4 inline-block rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#00E5FF]">
                  Get in Touch
                </span>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Ready to explore<br />CCUSD?
                </h2>
                <p className="mb-6 text-slate-400 leading-relaxed">
                  Connect with our team to learn how CCUSD can provide 
                  stable, compliant liquidity for your Canton ecosystem applications 
                  with institutional-grade infrastructure backed by OpenVector.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                    <span>24hr Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                    <span>Enterprise Support</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#00E5FF]/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#00E5FF]/20"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#00E5FF]/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#00E5FF]/20"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Business email"
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#00E5FF]/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#00E5FF]/20"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#00E5FF]/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#00E5FF]/20"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#00E5FF] py-3.5 text-base text-[#0a0b0d] font-semibold hover:bg-[#00E5FF]/90 transition-all rounded-lg"
                >
                  Request a Demo
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <img
            src="/images/icon-dark.png"
            alt="CCUSD"
            className="h-8 w-8"
          />
          <span className="font-bold text-white">CCUSD</span>
        </div>
        <p className="text-sm text-slate-500">
          © 2026 CCUSD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0b0d]">
      <Navigation />
      <HeroSection />
      <OpenVectorSection />
      <ValuePropsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
