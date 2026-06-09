import React from "react";

const steps = [
  {
    number: "1",
    title: "Lead Generation",
    desc: "Marketing systems route qualified parents to your center.",
    side: "right",
  },
  {
    number: "2",
    title: "Consultation",
    desc: "Doctor-backed clinical assessment establishes the plan.",
    side: "left",
  },
  {
    number: "3",
    title: "Internal Development Plan",
    desc: "Customized neuro-foundation protocol activated.",
    side: "right",
  },
  {
    number: "4",
    title: "Therapy Integration",
    desc: "Your team delivers therapy on a primed nervous system.",
    side: "left",
  },
  {
    number: "5",
    title: "Monitoring & Support",
    desc: "Ongoing parent communication and outcome tracking.",
    side: "right",
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-[#f6f7fc] py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto  px-6 lg:px-10">
        <div className="inline-flex items-center rounded-full border border-[#d8d3f5] bg-[#f1eeff] px-4 py-[6px] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2113a8]">
          ⊙ HOW THE SYSTEM WORKS
        </div>

        <h2 className="mt-7 max-w-[720px] text-[36px] font-semibold leading-[1.06] tracking-[-0.05em] text-[#02051f] md:text-[50px]">
          A clinical workflow built for
          <br />
          <span className="text-[#5f39d6]">consistent outcomes</span>
        </h2>

        <div className="relative mt-16 min-h-[620px]">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#c8c6ef] lg:block" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative grid items-center lg:grid-cols-2 ${
                index !== 0 ? "mt-10" : ""
              }`}
            >
              <div className={step.side === "left" ? "lg:pr-12" : "hidden lg:block"} />

              <div
                className={`relative ${
                  step.side === "right" ? "lg:pl-20" : "lg:pr-20"
                } ${step.side === "left" ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <div
                  className={`absolute top-1/2 z-10 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-[#4b2bbb] text-[15px] font-bold text-white shadow-[0_10px_25px_rgba(75,43,187,0.25)] ${
                    step.side === "right"
                      ? "left-0 lg:left-[-21px]"
                      : "left-0 lg:left-auto lg:right-[-21px]"
                  }`}
                >
                  {step.number}
                </div>

                <div className="ml-14 rounded-[18px] border border-[#dce1ef] bg-white px-7 py-6 shadow-[0_18px_40px_rgba(30,25,80,0.04)] lg:ml-0">
                  <h3 className="text-[17px] font-semibold text-[#02051f]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#27345c]">
                    {step.desc}
                  </p>
                </div>
              </div>

              {step.side === "left" && <div className="hidden lg:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}