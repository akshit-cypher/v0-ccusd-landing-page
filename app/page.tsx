"use client";

import React from "react"

import { motion } from "framer-motion";
import { Shield, Zap, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Navigation Component
function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0b0d]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            src="/images/icon-dark.png"
            alt="CCUSD"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold tracking-tight text-white">
            CCUSD
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            Developers
          </a>
          <a
            href="#"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            Transparency
          </a>
          <a
            href="#"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            Institutional
          </a>
          <Button
            variant="outline"
            className="border-[#00E5FF] bg-transparent text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:text-[#00E5FF]"
          >
            Mint CCUSD
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
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
          <span className="text-balance">Liquidity, Synchronized.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
          The first native settlement layer for the Canton Network. Atomic
          privacy. Instant finality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-white px-8 text-[#0a0b0d] hover:bg-white/90"
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="border border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-white"
          >
            Read Whitepaper
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

// Trust Bar Component
function TrustBar() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative z-20 -mt-16 px-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-2xl shadow-black/50 backdrop-blur-xl md:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <div className="text-center">
            <p className="mb-1 text-xs uppercase tracking-widest text-slate-400">
              Total Supply
            </p>
            <p className="font-mono text-xl font-bold text-white md:text-2xl">
              $50,000,000.00
            </p>
          </div>
          <div className="text-center">
            <p className="mb-1 text-xs uppercase tracking-widest text-slate-400">
              Reserves
            </p>
            <p className="font-mono text-xl font-bold text-white md:text-2xl">
              101% <span className="text-sm text-slate-400">(AUDITED)</span>
            </p>
          </div>
          <div className="text-center">
            <p className="mb-1 text-xs uppercase tracking-widest text-slate-400">
              Network
            </p>
            <p className="flex items-center justify-center gap-2 font-mono text-xl font-bold text-white md:text-2xl">
              CANTON MAINNET
              <span className="flex items-center gap-1.5 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-green-400">LIVE</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
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

// Features Grid Component
function FeaturesGrid() {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Built for Institutions
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Enterprise-grade infrastructure designed for compliant, secure, and
            efficient settlement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Privacy First."
            description="GDPR-compliant settlement for institutional flows. Your transactions remain confidential while meeting regulatory requirements."
            className="md:col-span-2 lg:col-span-1 lg:row-span-2"
            delay={0.1}
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="Atomic Speed."
            description="Sub-second finality ensures your settlements complete instantly with guaranteed execution."
            delay={0.2}
          />
          <FeatureCard
            icon={<Network className="h-6 w-6" />}
            title="Interoperable."
            description="Native integration with all Canton dApps and seamless cross-chain compatibility."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

// Contact Form Component
function ContactSection() {
  return (
    <section className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0f1014] to-[#0a0b0d]">
          {/* Background glow effect */}
          <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#00E5FF]/10 blur-3xl" />
          
          <div className="relative grid grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-2 lg:gap-16">
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
                  Ready to integrate<br />with Canton?
                </h2>
                <p className="mb-6 text-slate-400 leading-relaxed">
                  Connect with our team to explore how CCUSD can power 
                  your institutional settlement needs with privacy-preserving, 
                  compliant infrastructure.
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
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-white placeholder-slate-500 outline-none transition-all focus:border-[#00E5FF]/40 focus:bg-white/[0.05]"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-white placeholder-slate-500 outline-none transition-all focus:border-[#00E5FF]/40 focus:bg-white/[0.05]"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Business email"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-white placeholder-slate-500 outline-none transition-all focus:border-[#00E5FF]/40 focus:bg-white/[0.05]"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-white placeholder-slate-500 outline-none transition-all focus:border-[#00E5FF]/40 focus:bg-white/[0.05]"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#00E5FF] py-6 text-[#0a0b0d] font-semibold hover:bg-[#00E5FF]/90 transition-all"
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
      <TrustBar />
      <FeaturesGrid />
      <ContactSection />
      <Footer />
    </main>
  );
}
