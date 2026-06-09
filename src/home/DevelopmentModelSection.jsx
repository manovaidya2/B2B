import React from "react";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Center Therapy",
    desc: "Your existing therapeutic excellence.",
  },
  {
    number: "02",
    title: "Internal Development",
    desc: "Manovaidya's neuro-foundation system.",
  },
  {
    number: "03",
    title: "Integrated Outcomes",
    desc: "Better results. Better retention. Better revenue.",
  },
];

export default function DevelopmentModelSection() {
  return (
    <section id="solution" className="bg-[#f6f7fc] py-10 lg:py-12 overflow-hidden">
      <div className="mx-auto  px-6 lg:px-10">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#d8d3f5] bg-[#f1eeff] px-3 py-[5px] text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2113a8]">
          ⊙ THE SOLUTION
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-[34px] font-semibold leading-[1.08] tracking-[-0.01em] text-[#02051f] md:text-[46px]">
          The{" "}
          <span className="text-[#3420a9]">
            Integrated Development
          </span>{" "}
          Model
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[650px] text-[18px] leading-[1.7] text-[#37446a]">
          Therapy alone is not enough. Manovaidya layers internal brain
          development and structured systems on top of your existing center.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              
              <div className="min-h-[135px] rounded-[20px] border border-[#dce1ef] bg-white px-7 py-7 shadow-[0_18px_35px_rgba(27,24,72,0.04)]">

                <div className="text-[11px] font-medium text-[#111b43]">
                  {step.number}
                </div>

                <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-[#02051f]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[14px] leading-[1.6] text-[#39476e]">
                  {step.desc}
                </p>

              </div>

              {index !== steps.length - 1 && (
                <div className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 lg:block">
                  <ChevronRight
                    className="h-6 w-6 text-[#9289cf]"
                    strokeWidth={2}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Equation Box */}
        <div className="mt-10 rounded-[20px] bg-white/70 px-6 py-8 text-center shadow-[0_18px_35px_rgba(27,24,72,0.03)]">

          <div className="text-[12px] font-medium uppercase tracking-[0.25em] text-[#27345c]">
            THE EQUATION
          </div>

          <h3 className="mt-5 text-[24px] font-semibold leading-[1.4] tracking-[-0.03em] text-[#02051f] md:text-[30px]">
            Center Therapy{" "}
            <span className="mx-2 text-[#3420a9]">+</span>

            <span className="text-[#5f39d6]">
              Internal Development
            </span>

            <span className="mx-2 text-[#3420a9]">=</span>

            Better Outcomes, Retention & Revenue
          </h3>

        </div>
      </div>
    </section>
  );
}