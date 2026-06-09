import React from "react";
import {
  Brain,
  HeartPulse,
  Activity,
  SlidersHorizontal,
  Compass,
} from "lucide-react";
import doctorImg from "../images/imghero.jpeg";

const features = [
  {
    icon: Brain,
    title: "Brain Nourishment",
    desc: "Foundational neural fuel for sustained cognitive growth.",
  },
  {
    icon: HeartPulse,
    title: "Gut–Brain Balance",
    desc: "Restoring the axis that regulates mood, focus and behaviour.",
  },
  {
    icon: Activity,
    title: "Neural Activation",
    desc: "Targeted stimulation of underactive developmental pathways.",
  },
  {
    icon: SlidersHorizontal,
    title: "Sensory Regulation",
    desc: "Calming the nervous system so therapy can take root.",
  },
  {
    icon: Compass,
    title: "Behaviour Alignment",
    desc: "Anchoring outcomes through structured behavioural design.",
  },
];

export default function EcosystemSection() {
  return (
    <section className="bg-[#f6f7fb] py-14 lg:py-20 overflow-hidden">
      <div className="mx-auto  px-6 lg:px-10">
        <div className="inline-flex items-center rounded-full border border-[#d8d3f5] bg-[#f1eeff] px-4 py-[6px] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4b2bbb]">
          ⊙ THE MANOVAIDYA ECOSYSTEM
        </div>

        <h2 className="mt-5 max-w-[760px] text-[34px] leading-[1.05] font-semibold tracking-[-0.04em] text-[#121227] md:text-[48px]">
          A doctor-led <span className="text-[#4a26d9]">Neuro-Ayurveda</span>
          <br />
          <span className="text-[#6d42ef]">ecosystem</span> — not another
          therapy network.
        </h2>

        <p className="mt-6 max-w-[650px] text-[18px] leading-[1.8] text-[#556277]">
          Manovaidya is one of India’s leading Neuro-Ayurveda Autism systems —
          an integrated clinical ecosystem for Autism, ADHD, Cerebral Palsy,
          Neurodevelopmental Conditions and Adult Mental Health. Built on the
          Brain–Gut–Neurodevelopment Framework and structured to give selected
          centers access to systems they cannot build alone.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[16px] border border-[#dbe0ef] bg-white p-6 min-h-[175px] shadow-[0_15px_35px_rgba(40,30,90,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[#4b2bbb]">
                  <Icon className="h-[18px] w-[18px] text-white" />
                </div>

                <h3 className="mt-5 text-[16px] font-semibold text-[#121227]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[16px] leading-[1.7] text-[#66758a]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[24px] bg-gradient-to-r from-[#16005f] via-[#2c007e] to-[#5c00a7] p-8 lg:p-10 shadow-[0_30px_70px_rgba(37,0,112,0.25)]">
          <div className="grid gap-10 items-center lg:grid-cols-[380px_1fr]">
            <div className="overflow-hidden rounded-[18px] border border-white/20 bg-[#240072]">
              <img
                src={doctorImg}
                alt="Doctor"
                className="w-full h-[420px] object-cover object-top"
              />
            </div>

            <div className="text-white">
              <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-white/70">
                Founder · Clinical Vision
              </p>

              <h3 className="mt-4 text-[38px] font-semibold leading-none">
                Dr Ankush Garg
              </h3>

              <p className="mt-4 text-[14px] text-white/75 font-medium">
                Founder, Neuro–Ayurveda Development System ·
                Brain–Gut–Neurodevelopment Framework Developer
              </p>

              <p className="mt-7 text-[16px] leading-[1.9] text-white/90">
                Recognized among India’s emerging Neuro-Ayurveda Autism
                authorities, Dr Ankush Garg is the clinical visionary behind the
                Manovaidya ecosystem — architecting a structured developmental
                framework for Autism, ADHD and integrated mental health.
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-white/90">
                The entire ecosystem operates under his clinical vision and is
                built on structured Neuro-Ayurveda developmental principles —
                designed to create better neurodevelopment outcomes at scale.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Neuro-Ayurveda Authority",
                  "Brain-Gut Framework",
                  "Neurodevelopment Specialist",
                  "Ecosystem Architect",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}