import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FloatingBubble } from './components/FloatingBubble';
import { IntegrationsSection } from './components/IntegrationsSection';
import { ConversationModeSection } from './components/ConversationModeSection';
import { BioGeneratorSection } from './components/BioGeneratorSection';
import { ConversationThermometerSection } from './components/ConversationThermometerSection';
import { ApproachModeSection } from './components/ApproachModeSection';
import { ProfileAnalysisSection } from './components/ProfileAnalysisSection';
import { FeaturesGridSection } from './components/FeaturesGridSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { VSLSection } from './components/VSLSection';

export default function App() {
  const handleButtonClick = () => {
    window.open("https://go.centerpag.com/PPU38CQ3E3H?src=lead2", "_blank");
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-blue-500/30 font-inter">
      
      {/* Top Section Wrapper: Hero with Shared Background */}
      <div className="relative overflow-hidden min-h-screen">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: `url("https://framerusercontent.com/images/FAYi3psR2wCxdiS3d7ulhxNVvg.svg")`, backgroundSize: '250px' }}>
        </div>

        {/* Background Gradients (Orbs) */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>

        {/* HERO SECTION */}
        <div className="relative z-10">
          <section className="flex flex-col justify-center pt-6 pb-8 lg:pt-10 lg:pb-12">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center w-full">
              
              {/* 1. VSL Section - ALWAYS VISIBLE - High Z-Index to ensure it's on top */}
              <div className="w-full mb-8 lg:mb-12 relative z-50">
                 <VSLSection />
              </div>

              {/* 2. SECTION 1 Content - ALWAYS VISIBLE */}
              <div className="flex flex-col items-center w-full transition-all duration-1000 ease-in-out opacity-100 translate-y-0">
                  
                  {/* Header Logo/Badge */}
                  <div className="flex justify-center mb-6 animate-fade-in-down">
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-gray-200 tracking-tight text-xl">Emotional Spikes Method</span>
                    </div>
                  </div>

                  {/* Centered Headlines */}
                  <div className="text-center max-w-3xl mx-auto space-y-6 mb-8">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                          Tired of being ignored by women?
                        </span>
                      </h1>
                      
                      <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl mx-auto">
                        Learn how to create emotional spikes that make any woman addicted to you in less than 5 minutes - even if you're shy, ugly or broke.
                      </p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col items-center gap-4 mb-16">
                      <button 
                        onClick={handleButtonClick}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] active:scale-95"
                      >
                        <span>Master The Method Now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                  </div>

                  {/* Visual Mockup - Stacked below */}
                  <div className="relative w-full max-w-[400px] mx-auto flex flex-col items-center justify-center gap-6">
                    
                    {/* Tenor GIF Embed Container */}
                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-0 border-4 border-gray-900/50">
                      <img 
                        src="https://c.tenor.com/rt23AR7cgwUAAAAd/tenor.gif" 
                        alt="Sabrina Carpenter Flirting GIF" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating Chat Bubbles */}
                    <div className="w-full flex flex-col items-center space-y-3">
                      <div className="w-full max-w-[280px]">
                          <FloatingBubble 
                          text="I had to come say hi... you're stunning 😏"
                          className="w-full animate-float"
                          delay={0}
                          />
                      </div>
                      
                      <div className="w-full max-w-[280px]">
                          <FloatingBubble 
                          text="But I bet you're trouble... I can tell by that smile 🤔"
                          className="w-full animate-float-delayed"
                          delay={2}
                          />
                      </div>

                      <div className="w-full max-w-[280px]">
                          <FloatingBubble 
                          text="Are you always this confident or is today special? 😂"
                          className="w-full animate-float-slow"
                          delay={4}
                          />
                      </div>
                    </div>

                    {/* Decorative Elements behind */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full"></div>
                  </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* OTHER SECTIONS - ALWAYS VISIBLE */}
      <div className="transition-opacity duration-1000 opacity-100 block">
          <div className="animate-fade-in">
            {/* INTEGRATIONS SECTION */}
            <IntegrationsSection />

            {/* CONVERSATION MODE SECTION */}
            <ConversationModeSection onCtaClick={handleButtonClick} />

            {/* BIO GENERATOR SECTION */}
            <BioGeneratorSection onCtaClick={handleButtonClick} />

            {/* CONVERSATION THERMOMETER SECTION */}
            <ConversationThermometerSection onCtaClick={handleButtonClick} />

            {/* APPROACH MODE SECTION */}
            <ApproachModeSection onCtaClick={handleButtonClick} />

            {/* PROFILE ANALYSIS SECTION */}
            <ProfileAnalysisSection onCtaClick={handleButtonClick} />

            {/* FEATURES GRID SECTION */}
            <FeaturesGridSection />

            {/* PRICING SECTION */}
            <PricingSection />

            {/* FAQ SECTION */}
            <FAQSection />

            {/* FOOTER */}
            <Footer />
          </div>
      </div>

    </div>
  );
}