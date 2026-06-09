import React from "react";
import { Quote } from "lucide-react";

const stories = [
  {
    quote:
      "Within months of integrating the internal development model, parent confidence shifted dramatically — and so did our retention curve.",
    stat: "+40%",
    label: "PARENT RETENTION",
    name: "A Tier-2 Therapy Center",
  },
  {
    quote:
      "Manovaidya gave my practice a structured neurodevelopment vertical I could never have built alone.",
    stat: "3x",
    label: "MONTHLY INQUIRIES",
    name: "An Independent Psychologist",
  },
  {
    quote:
      "We don't operate a therapy center anymore. We run a Mind & Brain clinic with real systems behind it.",
    stat: "₹6L+",
    label: "MONTHLY REVENUE",
    name: "A Founding Franchise",
  },
];

export default function OutcomesStoriesSection() {
  return (
    <section className="bg-[#f6f7fc] py-14 lg:py-16 overflow-hidden">
      <div className="mx-auto  px-6 lg:px-10">
        <div className="inline-flex items-center rounded-full border border-[#d8d3f5] bg-[#f1eeff] px-4 py-[6px] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2113a8]">
          ⊙ OUTCOMES & STORIES
        </div>

        <h2 className="mt-8 max-w-[760px] text-[42px] font-semibold leading-[1.04] tracking-[-0.055em] text-[#02051f] md:text-[50px]">
          What integrated centers are
          <br />
          <span className="text-[#5f39d6]">experiencing</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
          {stories.map((item) => (
            <div
              key={item.name}
              className="rounded-[22px] border border-[#dce1ef] bg-white px-8 py-9 shadow-[0_20px_45px_rgba(30,25,80,0.04)]"
            >
              <Quote className="h-10 w-10 text-[#b9b4df]" />

              <p className="mt-6 min-h-[95px] text-[16px] leading-[1.7] text-[#37446a]">
                &quot;{item.quote}&quot;
              </p>

              <div className="my-3 h-px bg-[#dce1ef]" />

              <div className="text-[34px] font-semibold tracking-[-0.04em] text-[#3420a9]">
                {item.stat}
              </div>

              <div className="mt-2 text-[13px]  uppercase tracking-[0.08em] text-[#37446a]">
                {item.label}
              </div>

              <div className="mt-5 text-[16px] font-semibold text-[#02051f]">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-9 text-center text-[13px] leading-[1.6] text-[#37446a]">
          Indicative center experiences. Outcomes vary by clinical context. No
          medical guarantees implied.
        </p>
      </div>
    </section>
  );
}