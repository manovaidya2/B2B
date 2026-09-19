import React from "react";
import { Check } from "lucide-react";

const pathways = [
  {
    number: "01",
    label: "Referral Partner",
    title: "Start by Referring Suitable Patients",
    features: [
      "Minimal operational involvement",
      "No dedicated setup required",
      "Understand the Manovaidya ecosystem",
      "Create an additional referral-based opportunity",
    ],
  },
  {
    number: "02",
    label: "OPD Partner",
    title: "Bring Manovaidya Into Your Centre",
    features: [
      "Scheduled clinical OPDs",
      "Use existing infrastructure",
      "Activate your existing patient base",
      "Build stronger local collaboration",
      "Enhanced commercial opportunity",
    ],
  },
  {
    number: "03",
    label: "Franchise Partner",
    title: "Build a Permanent Manovaidya Presence",
    features: [
      "Dedicated Manovaidya vertical",
      "Structured local operations",
      "Autism & Neurodevelopment",
      "Adult Mental Health",
      "Central systems",
      "Marketing & sales infrastructure under agreed model",
      "Multiple potential revenue streams",
      "Long-term local growth opportunity",
    ],
    featured: true,
  },
];

function PathwayCard({ pathway }) {
  return (
    <article
      className={`flex h-full flex-col rounded-[8px] border px-7 py-7 shadow-[0_10px_22px_rgba(42,24,94,0.10)] sm:px-8 ${
        pathway.featured
          ? "border-[#43008e] bg-gradient-to-br from-[#4b009c] to-[#23005e] text-white"
          : "border-[#d8d0ec] bg-white text-[#090c35]"
      }`}
    >
      <span
        className={`text-[28px] font-extrabold leading-none ${
          pathway.featured ? "text-[#f3b925]" : "text-[#5720c8]"
        }`}
      >
        {pathway.number}
      </span>

      <p
        className={`mt-5 text-[10px] font-bold uppercase ${
          pathway.featured ? "text-[#ffd34e]" : "text-[#531bc8]"
        }`}
      >
        {pathway.label}
      </p>

      <h3 className="mt-3 max-w-[340px] text-[18px] font-bold leading-[1.35]">
        {pathway.title}
      </h3>

      <div className="mt-6 space-y-3.5">
        {pathway.features.map((feature) => (
          <div
            key={feature}
            className={`flex items-start gap-3 text-[13px] leading-[1.5] ${
              pathway.featured ? "text-white/90" : "text-[#69658c]"
            }`}
          >
            <span
              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                pathway.featured ? "bg-white/10" : "bg-[#f1edff]"
              }`}
            >
              <Check
                className={`h-2.5 w-2.5 ${
                  pathway.featured ? "text-[#ffd34e]" : "text-[#6d35df]"
                }`}
                strokeWidth={3}
              />
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function GrowthPathwaysSection() {
  return (
    <section id="models" className="bg-[#f5f1ff] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[11px] font-bold uppercase text-[#5720c8]">
          Start Where You Are
        </p>

        <h2 className="mt-4 max-w-[680px] text-[35px] font-bold leading-[1.05] text-[#070b3e] sm:text-[44px]">
          Your Partnership Can Grow With Your Centre.
        </h2>

        <p className="mt-5 max-w-[840px] text-[14px] leading-[1.7] text-[#665d8e] sm:text-[15px]">
          You don't have to make the biggest commitment on Day 1. Centres can
          begin at the level that fits their current situation and explore
          deeper integration as patient demand, infrastructure and business
          goals develop.
        </p>

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {pathways.map((pathway) => (
            <PathwayCard key={pathway.number} pathway={pathway} />
          ))}
        </div>

        <div className="mt-9 text-center">
          <p className="text-[17px] font-extrabold uppercase leading-[1.4] text-[#170061] sm:text-[20px]">
            Start Simple. <span className="text-[#6324da]">Prove Demand.</span>{" "}
            Expand When the Model Makes Business Sense.
          </p>

          <p className="mx-auto mt-3 max-w-[850px] text-[10px] leading-[1.6] text-[#887eaa] sm:text-[11px]">
            Progression is not automatic. Every partnership level remains
            subject to Manovaidya's eligibility, operational review and final
            commercial agreement.
          </p>
        </div>
      </div>
    </section>
  );
}
