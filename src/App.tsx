import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  LineChart, 
  ShipWheel, 
  Cpu, 
  CheckCircle2, 
  AlertCircle,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Clock,
  Layout,
  MessageSquare,
  Quote
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Ship Plan', href: '#plan' },
    { name: 'Workflow', href: '#workflow' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center shadow-lg shadow-brand-cyan/20">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">Canva<span className="text-brand-cyan">Pulse</span></span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-gray-600 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-md"
          >
            Contact Admin
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-900"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }: { title: string; subtitle: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-xl text-gray-500 max-w-2xl"
    >
      {subtitle}
    </motion.p>
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

const Card = ({ children, className = "" }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.5 }}
    className={`glass p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border-white/40 ${className}`}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_50%,#e0f7fa_0%,transparent_50%)] opacity-40" />
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-6">
          The Future of Brand Collaboration
        </span>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.95]">
          Design at the <br />
          <span className="text-brand-cyan">Speed of Thought.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          The Agentic Pre-Flight Layer that turns static Brand Kits <br className="hidden md:block" />
          into a living, self-healing ecosystem.
        </p>
        <div className="flex justify-center">
          <a 
            href="https://canva-pulse.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 inline-flex items-center justify-center"
          >
            Watch the Demo
          </a>
        </div>
      </motion.div>
      
      {/* Decorative Canvas Preview / Active State */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 relative px-4"
      >
        <div className="glass max-w-5xl mx-auto h-[600px] rounded-t-[3rem] shadow-2xl overflow-hidden p-3 border-b-0 space-y-3">
          {/* Mock Browser Header (matching screenshot) */}
          <div className="bg-white rounded-t-2xl border-b border-gray-100 h-14 flex items-center justify-between px-6">
            <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
              <span>Teams</span>
              <ChevronRight className="w-4 h-4" />
              <span>Local Promos</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">Grand Opening Flyer</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-600 text-xs font-bold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Brand Pulse: Healthy
              </div>
              <div className="px-6 py-2 rounded-lg bg-brand-magenta text-white text-xs font-bold shadow-lg shadow-brand-magenta/20">
                Share / Publish
              </div>
            </div>
          </div>

          <div className="flex gap-3 h-[calc(100%-72px)] overflow-hidden">
            {/* Left Tools (Generic Canva Style) */}
            <div className="w-16 bg-white border border-gray-100 rounded-xl flex flex-col items-center py-6 gap-8">
              <div className="w-6 h-6 bg-gray-100 rounded" />
              <div className="w-6 h-6 bg-gray-100 rounded" />
              <div className="w-6 h-6 bg-gray-100 rounded font-bold text-[8px] flex items-center justify-center">T</div>
            </div>

            {/* Main Editor Surface - matching the "UPS Store" flyer style */}
            <div className="flex-1 bg-gray-50/50 rounded-xl border border-gray-100 relative overflow-hidden flex items-center justify-center p-8">
               <div className="w-[300px] h-full bg-white shadow-2xl rounded-sm border border-gray-100 p-8 flex flex-col items-start text-left relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-magenta via-brand-cyan to-brand-magenta" />
                  
                  {/* Photo area with drift detection pulse effect */}
                  <div className="w-full h-40 bg-gray-50 rounded-lg mb-8 relative group">
                    <img 
                      src="https://picsum.photos/seed/person/400/400" 
                      alt="UPS Staff" 
                      className="w-full h-full object-cover rounded-lg grayscale opacity-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 rounded-lg shadow-xl flex items-center justify-center p-2">
                       <img src="https://static.cdnlogo.com/logos/u/49/ups.svg" alt="logo" className="invert" referrerPolicy="no-referrer" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 leading-none mb-1">GRAND</h3>
                  <h3 className="text-3xl font-black text-gray-900 leading-none mb-4">OPENING</h3>
                  <p className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Midtown NYC</p>
                  <p className="text-[10px] text-gray-500 leading-relaxed mb-8">
                    Join us for printing, shipping & business services at your neighborhood UPS Store.
                  </p>
                  
                  <button className="bg-gray-900 text-white px-4 py-2 rounded text-[10px] font-bold">
                    Visit Us Today
                  </button>
               </div>
            </div>

            {/* Right Sidebar - Canva Pulse Intelligent Engine */}
            <div className="w-72 flex flex-col gap-3">
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-gray-900">Canva Pulse</h5>
                    <p className="text-[8px] text-gray-400">Agentic Brand Engine</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-2 h-2 rounded-full bg-green-500" />
                       <span className="text-[10px] font-bold text-green-700">Brand Pulse: Healthy</span>
                    </div>
                    <p className="text-[9px] text-green-600/80 leading-normal">
                      Monitoring live collaboration. <span className="font-bold text-green-700">100% Brand Match.</span> All elements are within brand guidelines.
                    </p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                       <TrendingUp className="w-3 h-3 text-gray-400" />
                       <span className="text-[10px] font-bold text-gray-900">Simulate Edit</span>
                    </div>
                    <p className="text-[9px] text-gray-400 leading-normal">
                      Move the staff photo to trigger a brand drift scenario.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                       <Cpu className="w-3 h-3 text-brand-magenta" />
                       <span className="text-[10px] font-bold text-gray-900">Cross-Learning Insights</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 bg-gray-100 rounded shrink-0 overflow-hidden">
                        <img src="https://picsum.photos/seed/flyer/100/100" alt="flyer" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-[8px] font-bold leading-tight">Related: UPS Store — Brooklyn</p>
                        <p className="text-[7px] text-gray-400 leading-tight">Top performer in NE Region. 32% higher engagement.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionProblem = () => (
  <section id="problem" className="py-32 bg-white/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="The Last-Mile Compliance Tax" 
        subtitle="Even after major wins, stubborn friction remains in live collaboration" 
      />
      
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { stat: "77%", label: "FedEx reduction in brand review requests", icon: <ShipWheel className="text-brand-cyan" /> },
          { stat: "£16.8M", label: "Property Franchise Group savings across 700 offices", icon: <LineChart className="text-brand-cyan" /> },
          { stat: "64%", label: "eXp Realty design time reduction (25→9 min)", icon: <Zap className="text-brand-cyan" /> },
        ].map((item, i) => (
          <Card key={i} className="text-center group">
            <div className="w-12 h-12 bg-brand-cyan/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-cyan/10 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</h3>
            <p className="text-gray-500 font-medium">{item.label}</p>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <p className="text-2xl text-gray-800 leading-relaxed mb-8">
            Yet micro-frictions persist: <span className="text-brand-cyan font-bold">subtle logo drift</span>, safe-zone violations, padding/alignment issues, and off-brand asset choices during real-time multi-user editing. 
          </p>
          <div className="glass p-6 rounded-2xl mb-8 border-l-4 border-brand-cyan">
             <p className="italic text-gray-600">
              "Brand Kits help with consistency, but they still depend on how teams use them."
             </p>
             <p className="text-sm font-bold mt-2 text-gray-400 uppercase tracking-widest">— G2 Reviewer & r/canva</p>
          </div>
          <p className="text-lg text-gray-500">
            At franchise/enterprise scale, these small issues create extra review cycles, slow local teams, and force central brand managers to act as police officers instead of strategists.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="aspect-square bg-brand-cyan/5 rounded-[4rem] flex items-center justify-center p-12">
            <div className="w-full aspect-video glass rounded-2xl shadow-xl flex items-center justify-center gap-2 overflow-hidden relative">
               <div className="absolute top-4 left-4 flex gap-1">
                 <div className="w-2 h-2 rounded-full bg-red-400" />
                 <div className="w-2 h-2 rounded-full bg-yellow-400" />
                 <div className="w-2 h-2 rounded-full bg-green-400" />
               </div>
               <div className="text-center">
                  <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-2 animate-pulse" />
                  <p className="text-xs font-bold text-red-500 uppercase tracking-tighter">Safe-Zone Violation Detected</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionSolution = () => (
  <section id="solution" className="py-32">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Canva Pulse – The Agentic Pre-Flight Layer" 
        subtitle="An always-on intelligent companion that turns static Brand Kits into a living system"
        centered
      />

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "Real-Time Guardrails", 
            text: "Watches the canvas in real time and offers instant Auto-Heal suggestions for micro-drift.", 
            icon: ShieldCheck 
          },
          { 
            title: "Contextual Assembly", 
            text: "Pulls from past approved designs and Brand Kit to pre-assemble smart, on-brand layouts.", 
            icon: Cpu 
          },
          { 
            title: "Feedback Loop Learning", 
            text: "Quietly learns from Brand Admin rejection comments, digitizing intuition and preventing recurring mistakes.", 
            icon: MessageSquare 
          },
        ].map((item, i) => (
          <Card key={i} className="flex flex-col h-full">
            <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-gray-200">
              <item.icon className="text-white w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
            <p className="text-gray-500 leading-relaxed min-h-[80px]">
              {item.text}
            </p>
            <div className="mt-auto pt-8">
              <button className="text-brand-cyan font-bold text-sm flex items-center gap-2 group">
                Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-24 p-12 glass rounded-[4rem] text-center border-brand-cyan/20">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 italic">The Strategic Reasoning</h3>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          This mirrors <span className="font-bold text-brand-cyan">Eulerity’s cross-learning agents</span> — empowering local franchise operators to move fast while protecting central brand governance through autonomous intelligence.
        </p>
      </div>
    </div>
  </section>
);

const SectionMetrics = () => (
  <section id="metrics" className="py-32 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Success Metrics – What Good Looks Like" 
        subtitle="Tangible impact on brand operations and velocity" 
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "First-Pass Approval", val: "85%+", desc: "measures reduced rework" },
          { title: "Time to Approval", val: "<24h", desc: "tracks velocity gain" },
          { title: "Auto-Heal Acceptance", val: "70%+", desc: "measures trust and helpfulness" },
          { title: "Admin Time Saved", val: "15h+", desc: "business impact weekly" },
        ].map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
          >
            <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-4">{m.title}</p>
            <h4 className="text-5xl font-black text-gray-900 mb-2">{m.val}</h4>
            <p className="text-sm text-gray-400 font-medium">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SectionShipPlan = () => (
  <section id="plan" className="py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Ship Plan – High-Velocity & Realistic" 
        subtitle="A three-phase approach to building the intelligent pulse" 
      />

      <div className="relative">
        <div className="hidden lg:block absolute top-[110px] left-0 right-0 h-0.5 bg-gray-100 -z-10" />
        
        <div className="grid lg:grid-cols-3 gap-12">
          {[
            { 
              phase: "Phase 1", 
              weeks: "Weeks 1-4", 
              title: "Visual Guardrails", 
              desc: "Brand Kit integration with real-time canvas detection.", 
              teams: "Product, Design, Engineering" 
            },
            { 
              phase: "Phase 2", 
              weeks: "Weeks 5-8", 
              title: "Contextual Assembly", 
              desc: "Using approved asset history to generate layouts.", 
              teams: "Data, Engineering" 
            },
            { 
              phase: "Phase 3", 
              weeks: "Weeks 9-12", 
              title: "Feedback Learning", 
              desc: "Digitizing Admin comments to refine suggestions.", 
              teams: "Full Rollout" 
            },
          ].map((step, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="relative"
            >
              <div className="w-12 h-12 bg-white border-4 border-brand-cyan/20 rounded-full flex items-center justify-center mb-10 mx-auto lg:mx-0 z-10 shadow-lg">
                <div className="w-3 h-3 bg-brand-cyan rounded-full" />
              </div>
              <div className="glass p-8 rounded-3xl border-brand-cyan/5">
                <span className="text-brand-cyan font-bold text-sm uppercase tracking-widest">{step.phase} • {step.weeks}</span>
                <h4 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{step.title}</h4>
                <p className="text-gray-500 mb-6">{step.desc}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-bold text-gray-400">{step.teams}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center gap-4 bg-red-50/50 p-6 rounded-2xl border border-red-100 max-w-3xl mx-auto">
        <AlertCircle className="w-6 h-6 text-red-400" />
        <p className="text-sm font-medium text-gray-700">
          <span className="font-bold text-red-600">Key Risk: Notification fatigue.</span> Mitigation: Only surface suggestions when confidence is low; always allow easy ignore.
        </p>
      </div>
    </div>
  </section>
);

const SectionWorkflow = () => (
  <section id="workflow" className="py-32 bg-[#1a1a1a] text-white rounded-[3rem] mx-6 my-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
           <span className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-6">
            Execution Philosophy
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.95]">
            My AI-Native <br />
            <span className="text-brand-cyan">Workflow.</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-12">
            Built as an AI-First APM, orchestrating a suite of intelligent agents to accelerate discovery and synthesis.
          </p>

          <div className="space-y-6">
            {[
              { t: "Framing & Prompt Architecture", tool: "ChatGPT" },
              { t: "Brainstorming & Creativity", tool: "Google AI Studio" },
              { t: "Deep Research & Grounding", tool: "Grok" },
              { t: "Synthesis & Iteration", tool: "Human" },
              { t: "Deck & Prototype", tool: "Kimi + Lovable" },
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-brand-cyan font-bold group-hover:bg-brand-cyan group-hover:text-black transition-all">
                  {i + 1}
                </div>
                <div>
                  <h5 className="font-bold text-lg">{s.t}</h5>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-black leading-none mt-1">Primary Engine: {s.tool}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-gradient-to-br from-brand-cyan/20 to-brand-magenta/20 rounded-[3rem] p-10 flex flex-col justify-center">
             <div className="glass bg-white/5 p-8 md:p-10 rounded-3xl border-white/10 backdrop-blur-xl">
                <Quote className="w-8 h-8 text-brand-cyan mb-4 fill-brand-cyan/20" />
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                  "This was not 'using AI tools' — it was orchestrating AI as my primary interface for discovery, research, synthesis, design, and shipping. Exactly how I plan to operate as Associate Product Manager – AI First at Eulerity."
                </p>
                <p className="text-sm font-bold text-brand-cyan tracking-widest uppercase">— Associate Product Manager Vision</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <SectionProblem />
      <SectionSolution />
      <SectionMetrics />
      <SectionShipPlan />
      <SectionWorkflow />
      
      <footer className="py-20 px-6 border-t border-gray-100 flex flex-col items-center gap-8">
        <div className="flex items-center gap-2 grayscale opacity-50">
          <Zap className="w-5 h-5 text-gray-900" />
          <span className="font-bold tracking-tight text-gray-900">Canva<span className="text-gray-400">Pulse</span></span>
        </div>
        <p className="text-gray-400 text-sm font-medium">© 2026 Canva Pulse Strategy | Built for Eulerity</p>
      </footer>
    </div>
  );
}
