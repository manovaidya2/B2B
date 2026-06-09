import React from "react";
import { CalendarDays, Phone, Sparkles } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#2b006f] py-20 lg:py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,40,190,0.55),transparent_58%)]" />

      <div className="relative z-10 mx-auto max-w-[850px] px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-[6px] text-[10px] font-bold uppercase tracking-[0.12em] text-white">
          <Sparkles className="h-3 w-3" />
          Selected Centers Only · Limited Onboarding
        </div>

        <h2 className="mt-9 text-[42px] font-semibold leading-[1.12] tracking-[-0.055em] md:text-[60px]">
          Lead the neurodevelopment
          <br />
          category
          <br />
          in your <span className="text-[#d2a8ff]">city.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-[650px] text-[17px] leading-[1.75] text-white/80">
          Apply to be selected into India&apos;s most advanced integrated
          neurodevelopment ecosystem — under the clinical vision of Dr Ankush
          Garg. Built for long-term center growth and premium positioning.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#call"
            className="inline-flex h-[46px] min-w-[230px] items-center justify-center gap-3 rounded-[7px] bg-white px-6 text-[14px] font-semibold text-[#2b006f]"
          >
            <CalendarDays className="h-4 w-4" />
            Request Selection Call
          </a>

          <a
            href="#apply"
            className="inline-flex h-[46px] min-w-[270px] items-center justify-center gap-3 rounded-[7px] border border-white/35 bg-transparent px-6 text-[14px] font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Apply for Ecosystem Access
          </a>
        </div>
      </div>
    </section>
  );
}