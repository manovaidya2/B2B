import React from "react";
import {
  ArrowRight,
  Check,
  Star,
  Medal,
  Crown,
  Sparkles,
  Brain,
  Waves,
  HeartHandshake,
  Activity
} from "lucide-react";

const plans = [
  {
    icon: Sparkles,
    title: "Entry Access",
    subtitle: "Entry Access into the Manovaidya Ecosystem",
    bestFor: "Centers entering the Selected Partner Network",
    price: "₹10K–₹15K",
    unit: "per patient",
    button: "Request Entry Access",
    dark: false,
    popular: false,
    features: [
      "Access to the Manovaidya clinical ecosystem",
      "Doctor led consultation & treatment handled centrally",
      "Structured onboarding into the partner network",
      "Scripts, parent communication & clinical templates",
    ],
  },
  {
    icon: Star,
    title: "Integrated Partner",
    subtitle: "Integrated Neurodevelopment Partner",
    bestFor: "Established centers selected for integrated practice",
    price: "₹1–3 Lakh",
    unit: "monthly potential",
    button: "Apply as Integrated Partner",
    dark: false,
    popular: true,
    features: [
      "Integrated Therapy + Neuro-Ayurveda Development System",
      "Co-branded positioning under Manovaidya",
      "Parent conversion & clinical communication training",
      "Structured marketing infrastructure & weekly support",
      "Priority access to Dr Ankush Garg-led consultations",
    ],
  },
  {
    icon: Medal,
    title: "Growth & Positioning Partner",
    subtitle: "Advanced Growth & Positioning Partner",
    bestFor: "Multi therapist clinics aiming for premium positioning",
    price: "₹2–4 Lakh",
    unit: "monthly potential",
    button: "Apply for Advanced Partnership",
    dark: false,
    popular: false,
    features: [
      "Dedicated ecosystem success lead",
      "Advanced doctor led growth infrastructure",
      "Premium positioning & conversion systems",
      "Monthly clinical & growth performance reviews",
      "Priority pathway to Official Center status",
    ],
  },
  {
    icon: Crown,
    title: "Official Manovaidya Center",
    subtitle: "Official Manovaidya Neurodevelopment Center",
    bestFor: "Founders building a flagship Mind & Brain Center",
    price: "₹4–10 Lakh",
    unit: "monthly potential",
    button: "Apply for Official Center",
    dark: true,
    popular: false,
    features: [
      "Full Manovaidya brand & clinical identity",
      "Centralized marketing, lead generation & funnels",
      "Doctor-led clinical authority in your city",
      "Adult Mental Health vertical expansion",
      "Recognized node in India’s neurodevelopment ecosystem",
    ],
  },
];

const verticals = [
  {
    title: "Stress & Anxiety",
    icon: Brain,
  },
  {
    title: "Sleep Programs",
    icon: Waves,
  },
  {
    title: "Emotional Wellness",
    icon: HeartHandshake,
  },
  {
    title: "Adult Mental Health",
    icon: Activity,
  },
];

export default function GrowthPathwaysSection() {
  return (
    <section id="models" className="bg-[#f6f7fc] py-12 lg:py-10">
      <div className="mx-auto  px-6 lg:px-10">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-[#d8d3f5] bg-[#f1eeff] px-4 py-[6px] text-[8px] font-semibold uppercase tracking-[0.18em] text-[#2113a8]">
            ⊙ SELECTED PARTNER PATHWAYS
          </div>

          <h2 className="mt-6 text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#02051f] md:text-[46px]">
            Four growth pathways into the{" "}
            <span className="text-[#5f39d6]">Manovaidya ecosystem</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[18px] leading-[1.7] text-[#37446a]">
            Designed for centers aiming for premium positioning. Each pathway is
            a structured progression — from ecosystem access to becoming an
            Official Manovaidya Neurodevelopment Center in your city.
          </p>
        </div>

        <div className="mx-auto mt-14 grid  grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.title}
                className={`relative flex h-full flex-col rounded-[18px] border p-7 shadow-[0_18px_45px_rgba(32,24,80,0.08)] ${
                  plan.dark
                    ? "border-[#26007a] bg-gradient-to-b from-[#15004f] to-[#4b008b] text-white"
                    : plan.popular
                    ? "border-[#5f39d6] bg-white text-[#02051f] shadow-[0_24px_55px_rgba(95,57,214,0.20)]"
                    : "border-[#dce1ef] bg-white text-[#02051f]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#5f39d6] px-4 py-1 text-[12px] font-bold text-white">
                    Most Selected
                  </div>
                )}

                <div
                  className={`flex h-[42px] w-[42px] items-center justify-center rounded-[11px] ${
                    plan.dark ? "bg-white/10" : "bg-[#5f39d6]"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px] text-white" />
                </div>

                <h3 className="mt-6 text-[20px] font-semibold leading-tight">
                  {plan.title}
                </h3>

                <p
                  className={`mt-3 text-[14px] leading-[1.6] ${
                    plan.dark ? "text-white/70" : "text-[#66758a]"
                  }`}
                >
                  {plan.subtitle}
                </p>

                <div className="mt-6">
                  <p
                    className={`text-[12px] font-bold uppercase tracking-[0.16em] ${
                      plan.dark ? "text-white/55" : "text-[#8b93a7]"
                    }`}
                  >
                    Best For
                  </p>

                  <p className="mt-2 min-h-[44px] text-[14px] leading-[1.55]">
                    {plan.bestFor}
                  </p>
                </div>

                <div
                  className={`my-5 h-px ${
                    plan.dark ? "bg-white/20" : "bg-[#dce1ef]"
                  }`}
                />

                <div>
                  <div
                    className={`text-[30px] font-semibold tracking-[-0.04em] ${
                      plan.dark ? "text-white" : "text-[#3b22b8]"
                    }`}
                  >
                    {plan.price}
                  </div>

                  <p
                    className={`mt-1 text-[12px] ${
                      plan.dark ? "text-white/65" : "text-[#66758a]"
                    }`}
                  >
                    {plan.unit}
                  </p>
                </div>

                <div className="mt-7 flex-grow space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex gap-3 text-[15px] leading-[1.5] ${
                        plan.dark ? "text-white/90" : "text-[#3c4665]"
                      }`}
                    >
                      <Check className="mt-[5px] h-4 w-4 shrink-0 text-[#5f39d6]" />
                      <span className="">{feature}</span>
                    </div>
                  ))}
                </div>

              <a
  href="#apply"
  className={`mt-9 flex h-[52px] w-full items-center justify-center gap-2 whitespace-nowrap px-3 rounded-[10px] text-[12px] font-semibold ${
    plan.dark
      ? "bg-white text-[#3b158d]"
      : plan.popular
      ? "bg-[#5f39d6] text-white"
      : "bg-[#050721] text-white"
  }`}
>
  <span>{plan.button}</span>
  <ArrowRight className="h-4 w-4 shrink-0" />
</a>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 grid max-w-[1120px] gap-8 rounded-[22px] bg-white px-8 py-9 shadow-[0_18px_45px_rgba(32,24,80,0.04)] lg:grid-cols-[1fr_520px]">
          <div>
            <p className="text-[12px]  uppercase tracking-[0.10em] text-[#4b2bbb]">
              A Second Major Growth Vertical
            </p>

            <h3 className="mt-4 text-[30px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#02051f]">
              Build a recognized Mind & Brain Center in your city
            </h3>

            <p className="mt-4 text-[15px] leading-[1.75] text-[#5b667d]">
              Move beyond a therapy center and build a premium neurodevelopment
              identity. Official Centers expand into Adult Mental Health —
              Stress & Anxiety, Sleep, Emotional Wellness and Mind–Body
              Regulation — becoming part of India’s emerging neurodevelopment
              ecosystem.
            </p>

            <p className="mt-4 text-[15px] font-bold text-[#02051f]">
              Autism & Neurodevelopment → Adult Mental Health → Category
              Leadership.
            </p>
          </div>

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  {verticals.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        className="flex items-center gap-4 rounded-[14px] border border-[#dce1ef] bg-white px-5 py-5 text-[16px] font-semibold text-[#172040]"
      >
        <span className="flex h-[54px] w-[54px] items-center justify-center rounded-[14px] bg-[#5f39d6]">
          <Icon className="h-6 w-6 text-white" />
        </span>

        {item.title}
      </div>
    );
  })}
</div>
        </div>
      </div>
    </section>
  );
}