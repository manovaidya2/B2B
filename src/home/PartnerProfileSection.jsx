import React from "react";
import { Building2, Stethoscope, Leaf } from "lucide-react";

const profiles = [
  {
    icon: Building2,
    title: "Autism Therapy Centres",
    desc: "Differentiate your center with internal development programs that visibly improve outcomes and retention.",
  },
  {
    icon: Stethoscope,
    title: "Psychologists & Mental Health Pros",
    desc: "Add a structured neurodevelopment vertical and a doctor-backed clinical framework to your practice.",
  },
  {
    icon: Leaf,
    title: "Ayurvedic Doctors & Practitioners",
    desc: "Integrate modern systemization, marketing and a national brand into your traditional practice.",
  },
];

export default function PartnerProfileSection() {
  return (
    <section className="bg-[#f6f7fc] py-14 lg:py-16">
      <div className="mx-auto  px-6 lg:px-10">
        <div className="inline-flex items-center rounded-full border border-[#d8d3f5] bg-[#f1eeff] px-4 py-[6px] text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2113a8]">
          ⊙ SELECTED PARTNER PROFILE
        </div>

        <h2 className="mt-8 text-[42px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#02051f] md:text-[50px]">
          Centers we{" "}
          <span className="text-[#5f39d6]">
            select into the ecosystem
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {profiles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[22px] border border-[#dce1ef] bg-white px-8 py-9 shadow-[0_20px_45px_rgba(30,25,80,0.04)]"
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-[#5f39d6]">
                  <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>

                <h3 className="mt-7 text-[20px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#02051f]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[17px] leading-[1.65] text-[#37446a]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}