import Link from 'next/link';
import Image from 'next/image';
import { HeroMotion, FeatureCardMotion, LanguageFlagMotion } from '@/components/landing/Animations';
import {
  Terminal,
  Users,
  Calendar,
  Type,
  Ruler,
  Image as ImageIcon,
  Download,
  Globe
} from 'lucide-react';

const features = [
  { icon: Terminal, title: "Step 1: Keywords", desc: "Tag-based keyword selection for precise topic targeting." },
  { icon: Users, title: "Step 2: Key Persons", desc: "Include government officials and transport experts." },
  { icon: Calendar, title: "Step 3: Temporal Context", desc: "Select specific search periods and case study regions." },
  { icon: Type, title: "Step 4: Writing Style", desc: "From Casual to Academic - match your target audience." },
  { icon: Ruler, title: "Step 5: Depth Control", desc: "From short social updates to 2,000+ word deep dives." },
  { icon: ImageIcon, title: "Step 6: Visual Assets", desc: "AI-generated photos, infographics, and data tables." },
  { icon: Download, title: "Step 7: Multiple Formats", desc: "Export as Markdown, HTML, PDF, or Word documents." },
  { icon: Globe, title: "Step 8: Global Reach", desc: "Support for 8 languages including Arabic (RTL)." },
];

const languages = [
  { flag: "🇰🇷", name: "Korean" }, { flag: "🇺🇸", name: "English" },
  { flag: "🇨🇳", name: "Chinese" }, { flag: "🇯🇵", name: "Japanese" },
  { flag: "🇪🇸", name: "Spanish" }, { flag: "🇸🇦", name: "Arabic" },
  { flag: "🇫🇷", name: "French" }, { flag: "🇩🇪", name: "German" }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroMotion>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Powered by Advanced AI
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Master the Future of <br />
              <span className="gradient-text">Transport Content</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-xl">
              From KTX high-speed rail updates to autonomous bus research, generate professional transport blog posts in seconds. Optimized for experts, journalists, and enthusiasts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/wizard" className="px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/30">
                Start Writing Now
              </Link>
              <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-lg hover:bg-white/10 transition-colors">
                View Live Demo
              </button>
            </div>
          </HeroMotion>

          <HeroMotion delay={0.2} className="relative aspect-square lg:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="Seoul Future Transport"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 p-4 glass rounded-xl">
              <p className="text-sm font-bold">SEOUL SMART TRANSIT HUB</p>
              <p className="text-xs text-gray-300">AI Visualization 2025</p>
            </div>
          </HeroMotion>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400">Everything you need to write world-class transport reports.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FeatureCardMotion key={i} index={i}>
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/50 transition-colors group">
                  <f.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </FeatureCardMotion>
            ))}
          </div>
        </div>
      </section>

      {/* Language Carousel */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Write for the World</h2>
          <p className="text-gray-400">Supporting 8 major languages for global transport insights.</p>
        </div>
        <div className="flex gap-12 whitespace-nowrap animate-scroll">
          {[...languages, ...languages].map((lang, i) => (
            <LanguageFlagMotion key={i}>
              <div className="flex items-center gap-4 bg-white/5 px-8 py-4 rounded-full border border-white/5">
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-bold">{lang.name}</span>
              </div>
            </LanguageFlagMotion>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden glass p-12 text-center border-primary/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 blur-[100px] -z-10" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">Ready to drive the conversation?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Join thousands of transport analysts using AI to power their blogs.
          </p>
          <Link href="/wizard" className="inline-block px-12 py-5 rounded-full bg-primary text-white font-black text-xl hover:scale-110 transition-all shadow-xl shadow-primary/40">
            GET STARTED NOW
          </Link>
        </div>
      </section>
    </main>
  );
}
