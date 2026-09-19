import React from "react";
import { TrendingUp } from "lucide-react";

const partnerModels = [
  {
    level: "Level 01",
    title: "Referral Partner",
    subtitle: "Refer Suitable Patients. Continue What You Already Do.",
    bestFor:
      "Psychologists, therapists, therapy centres, child development centres and allied professionals who want to offer their patients access to Manovaidya's structured clinical system without changing their existing setup.",
  },
  {
    level: "Level 02",
    type: "Local Collaboration",
    title: "OPD Partner",
    subtitle: "Bring Scheduled Manovaidya OPDs to Your Existing Centre.",
    bestFor:
      "Established psychologists, therapy centres and child development centres with an existing patient base and infrastructure that can host scheduled Manovaidya OPDs.",
  },
  {
    level: "Level 03",
    type: "Full Partnership Model",
    title: "Manovaidya Franchise Partner",
    subtitle: "Build a Permanent Manovaidya Clinical Presence in Your City.",
    bestFor:
      "Established therapy centres, psychologists, healthcare entrepreneurs and centre owners who want to add a complete Manovaidya vertical alongside their existing business.",
    featured: true,
  },
];

function PartnerCard({ model }) {
  return (
    <article
      className={`flex h-full flex-col rounded-[8px] border px-7 py-7 sm:px-8 ${
        model.featured
          ? "border-[#6322c6] bg-gradient-to-br from-[#360087] via-[#4d00a9] to-[#26005f] text-white shadow-[0_14px_35px_rgba(67,0,150,0.18)]"
          : "border-[#d8d0ff] bg-white text-[#0d1649]"
      }`}
    >
      <div className="flex min-h-[30px] flex-wrap items-center gap-2">
        <span
          className={`inline-flex h-[28px] items-center rounded-full px-3 text-[11px] font-bold uppercase ${
            model.featured
              ? "bg-white/10 text-white"
              : "bg-[#f0edff] text-[#5720c8]"
          }`}
        >
          {model.level}
        </span>

        {model.type && (
          <span
            className={`inline-flex h-[28px] items-center rounded-full border px-3 text-[11px] font-bold uppercase ${
              model.featured
                ? "border-[#f2a900] text-[#ffd34e]"
                : "border-[#d4c6ff] text-[#5720c8]"
            }`}
          >
            {model.type}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-[25px] font-bold leading-[1.12] sm:text-[27px]">
        {model.title}
      </h3>

      <p
        className={`mt-3 text-[14px] font-medium leading-[1.55] ${
          model.featured ? "text-white/90" : "text-[#5817c6]"
        }`}
      >
        {model.subtitle}
      </p>

      <div className={`my-7 h-px ${model.featured ? "bg-white/20" : "bg-[#ddd7f2]"}`} />

      <p
        className={`text-[14px] font-bold uppercase ${
          model.featured ? "text-[#ffd34e]" : "text-[#541bd0]"
        }`}
      >
        Best For
      </p>

      <p
        className={`mt-3 text-[14px] leading-[1.55] ${
          model.featured ? "text-white/85" : "text-[#60658c]"
        }`}
      >
        {model.bestFor}
      </p>
    </article>
  );
}

export default function PartnershipModelsSection() {
  return (
    <section className="bg-[#fcfcff] px-5 py-10 text-[#090d43] sm:px-8 lg:px-12 lg:py-8">
      <div className="mx-auto max-w-[1760px]">
        <p className="text-[14px] font-extrabold uppercase text-[#5720c8] sm:text-[16px]">
          The Manovaidya B2B Ecosystem
        </p>

        <h2 className="mt-5 max-w-[850px] text-[32px] font-bold leading-[1.1] sm:text-[42px] lg:text-[50px]">
          Three Ways to Partner.
          <span className="block text-[#5720c8]">
            One Integrated Growth Ecosystem.
          </span>
        </h2>

        <p className="mt-5 max-w-[920px] text-[16px] leading-[1.6] text-[#536394] sm:text-[18px]">
          Whether you want to simplify referred patients, bring scheduled
          Neuro-vidya OPDs to your existing centre, or establish a complete
          Manovaidya presence in your city - choose the partnership model that
          matches your current infrastructure, involvement and growth vision.
        </p>

        <div className="mt-5 flex items-start gap-4 text-[#531bc8]">
          <TrendingUp className="mt-0.5 h-6 w-6 shrink-0" strokeWidth={2} />
          <p className="text-[15px] font-bold leading-[1.45] sm:text-[17px]">
            Start with the model that fits you today. Grow stronger when you're
            ready.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {partnerModels.map((model) => (
            <PartnerCard key={model.level} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}
