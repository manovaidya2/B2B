import React from "react";
import {
  Target,
  Users,
  TrendingUp,
  Sparkles,
  BarChart3,
  Zap,
  Shield,
  LineChart,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Better Outcomes",
  },
  {
    icon: Users,
    title: "Better Parent Retention",
  },
  {
    icon: TrendingUp,
    title: "Additional Revenue",
  },
  {
    icon: Sparkles,
    title: "Strong Differentiation",
  },
  {
    icon: BarChart3,
    title: "Structured Growth",
  },
  {
    icon: Zap,
    title: "Marketing Systems",
  },
  {
    icon: Shield,
    title: "Doctor-Backed Authority",
  },
  {
    icon: LineChart,
    title: "Scalable Infrastructure",
  },
];

export default function ClinicalEcosystemSection() {
  return (
    <section className="bg-[#f6f7fc] py-14 lg:py-16 overflow-hidden">
      <div className="mx-auto px-6 lg:px-10">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#d8d3f5] bg-[#f1eeff] px-4 py-[6px] text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2113a8]">
          ⊙ DOCTOR-LED GROWTH INFRASTRUCTURE
        </div>

        {/* Heading */}
        <h2 className="mt-8 max-w-[780px] text-[38px] font-semibold leading-[1.05] tracking-[-0.05em] text-[#02051f] md:text-[50px]">
          Not a referral model.{" "}
          <span className="text-[#5f39d6]">
            A structured
            <br />
            clinical ecosystem.
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[18px] bg-white px-6 py-7 border border-[#e5e7f1] shadow-[0_12px_35px_rgba(30,25,80,0.03)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#5f39d6]">
                  <Icon
                    className="h-5 w-5 text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-[18px] font-semibold leading-[1.4] text-[#02051f]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}