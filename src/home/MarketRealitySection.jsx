import React from "react";
import { Check, X } from "lucide-react";

export default function MarketRealitySection() {
  const traditional = [
    "External therapy only",
    "Generic protocols",
    "Limited parent communication",
    "Stagnant revenue ceiling",
    "No system, no brand authority",
  ];

  const integrated = [
    "Therapy + Internal Brain Development",
    "Personalized, doctor-backed plans",
    "Structured parent journey",
    "Multiple new revenue streams",
    "Branded, systemized, scalable",
  ];

  const bottomCards = [
    "Parents struggle with slow, inconsistent results",
    "Centers face high dropout rates",
    "Therapy outcomes feel unpredictable",
    "Revenue scalability is limited",
    "Most centers lack real differentiation",
  ];

  return (
    <section className="bg-[#f6f7fc] py-16 lg:py-20">
      <div className="mx-auto  px-6 lg:px-10">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#d8d3f5] bg-[#f1eeff] px-4 py-[6px] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4b2bbb]">
          ⊙ THE MARKET REALITY
        </div>

        {/* Heading */}
        <h2 className="mt-8 max-w-[820px] text-[38px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#02051f] md:text-[50px]">
          Parents aren&apos;t looking for therapy
          <br />
          anymore.{" "}
          <span className="text-[#5f39d6]">
            They&apos;re looking for
            <br />
            outcomes.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-[680px] text-[18px] leading-[1.55] text-[#27345c]">
          The neurodevelopment market is changing. Centers that don&apos;t
          evolve into outcome-driven systems will lose ground.
        </p>

        {/* Compare Cards */}
        <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* Traditional */}
          <div className="rounded-[24px] border border-[#dfe3ef] bg-white px-9 py-8 shadow-[0_22px_50px_rgba(27,24,72,0.06)]">
            <div className="mb-7 flex items-center gap-3 text-[15px] font-medium text-[#27345c]">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Traditional Center
            </div>

            <div className="space-y-5">
              {traditional.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-[14px] text-[#27345c]"
                >
                  <X className="h-4 w-4 text-red-500" strokeWidth={2.2} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Integrated */}
          <div className="rounded-[24px] bg-gradient-to-r from-[#17005e] via-[#2d007f] to-[#540099] px-9 py-8 text-white shadow-[0_28px_60px_rgba(46,0,110,0.22)]">
            <div className="mb-7 flex items-center gap-3 text-[15px] font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-[#c9b5ff]" />
              Integrated System
            </div>

            <div className="space-y-5">
              {integrated.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 text-[14px] font-medium text-white"
                >
                  <Check className="h-4 w-4 text-white" strokeWidth={2.2} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {bottomCards.map((item) => (
            <div
              key={item}
              className="flex min-h-[88px] items-center rounded-[18px] bg-white px-7 py-5 text-[14px] leading-[1.55] text-[#27345c] shadow-[0_16px_35px_rgba(30,30,80,0.04)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}