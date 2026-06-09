import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBrain from "../images/hero-brain.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#17004d] text-white">
      {/* Background */}
      <img
        src={heroBrain}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#160045]/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1120px] flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-sm">
          <Sparkles className="h-3 w-3" />
          Selected Partner Network · Doctor-Led Ecosystem
        </div>

        {/* Heading */}
        <h1 className="max-w-[760px] text-[36px] font-semibold leading-[1.03] tracking-[-0.03em] sm:text-[46px] md:text-[52px]">
          India's Most Advanced
          <br />
          Neuro-Ayurveda
          <br />
          <span className="text-[#d6c6ff]">
            Neurodevelopment Ecosystem
          </span>
          <br />
          for Autism &amp; Mind Development
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[600px] text-[12px] font-medium leading-[1.65] text-white/80">
          A doctor-led, integrated clinical ecosystem under the vision of Dr
          Ankush Garg — built on structured Neuro-Ayurveda developmental
          principles. Selected centers gain access to a system designed for
          premium positioning and lasting neurodevelopment outcomes.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <a
            href="#apply"
            className="inline-flex h-[36px] min-w-[165px] items-center justify-center gap-2 rounded-[4px] bg-white px-5 text-[13px] font-semibold text-[#2c176b]"
          >
            Apply for Ecosystem Access
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <a
            href="#call"
            className="inline-flex h-[36px] min-w-[140px] items-center justify-center rounded-[4px] border border-white/60 bg-transparent px-5 text-[13px] font-semibold text-white"
          >
            Request Selection Call
          </a>
        </div>

        {/* Tags */}
        <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
          {["Autism", "ADHD", "Cerebral Palsy", "Neurodevelopment", "Mental Health"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 bg-[#120038]/40 px-4 py-1.5 text-[11px] font-medium text-white/85 backdrop-blur-sm"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}