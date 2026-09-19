import { Check } from "lucide-react";
import React from "react";
const unchangedItems = [
  "Your existing centre",
  "Your existing therapies",
  "Your existing professional practice",
  "Your existing team",
  "Your existing services",
  "Your existing patient relationships",
  "Your existing expertise",
];

const addedItems = [
  "Manovaidya clinical ecosystem",
  "Structured consultation pathway",
  "Doctor-led treatment planning",
  "Central treatment coordination",
  "Central medicine preparation",
  "Structured patient follow-up",
  "New B2B growth opportunity",
  "Autism & neurodevelopment vertical",
  "Mental health vertical",
  "Partnership-based revenue opportunity",
];

function ListItem({ children, highlighted = false }) {
  return (
    <li className="flex items-center gap-3 text-[13px] leading-[1.45] text-[#66608c] sm:text-[16px]">
      <span
        className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
          highlighted ? "text-[#6524db]" : "bg-[#f0edff] text-[#6935e8]"
        }`}
      >
        <Check className="h-3 w-3" strokeWidth={2.5} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function PartnershipClaritySection() {
  return (
    <section className="bg-white px-5 py-14 text-[#090d43] sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#6520c5] sm:text-[11px]">
          Partnership Clarity
        </p>

        <h2 className="mx-auto mt-4 max-w-[1120px] text-center text-[32px] font-bold leading-[1.1] text-[#070b3e] sm:text-[42px] lg:text-[40px]">
          What Changes When You Partner With Manovaidya?
        </h2>

        <div className="mt-10 grid overflow-hidden rounded-[8px] border border-[#d8d0ef] bg-white shadow-[0_12px_26px_rgba(38,24,80,0.13)] md:grid-cols-2">
          <div className="min-h-[350px] px-7 py-8 sm:px-10 sm:py-10">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#675d87]">
              What Doesn&apos;t Change
            </h3>
            <ul className="mt-7 space-y-5">
              {unchangedItems.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </ul>
          </div>

          <div className="min-h-[350px] border-t border-[#ddd5f2] bg-[#f3efff] px-7 py-8 sm:px-10 sm:py-10 md:border-l md:border-t-0">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6720d4]">
              What You Can Add
            </h3>
            <ul className="mt-7 space-y-[15px]">
              {addedItems.map((item) => (
                <ListItem key={item} highlighted>
                  {item}
                </ListItem>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex min-h-[64px] items-center justify-center rounded-[7px] bg-gradient-to-r from-[#5000ad] to-[#13005c] px-5 py-4 text-center">
          <p className="text-[16px] font-bold uppercase leading-[1.4] text-white sm:text-[19px]">
            Don&apos;t Rebuild Your Business.{" "}
            <span className="text-[#ffc51b]">Expand What It Can Offer.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
