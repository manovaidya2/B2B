import React from "react";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Will I have to stop my existing therapies or practice?",
    answer:
      "No. The partnership models are designed to work alongside an existing practice. The exact operating structure depends on whether you choose Referral, OPD or Franchise partnership.",
  },
  {
    question: "Can my existing therapy centre become a Manovaidya Franchise Partner?",
    answer:
      "Potentially, yes. Existing infrastructure can be an advantage. Final eligibility depends on location, infrastructure, team capability, operating requirements and Manovaidya's approval process.",
  },
  {
    question: "Can I start as a Referral Partner and later explore OPD or Franchise?",
    answer:
      "Yes. Partners may explore deeper collaboration as patient demand, infrastructure and business objectives develop. Progression is subject to eligibility and mutual commercial agreement.",
  },
  {
    question: "Do I need additional space?",
    answer:
      "Referral: No dedicated Manovaidya space is normally required. OPD: Suitable consultation space is required during scheduled OPDs. Franchise: A suitable approved local setup is required, although an existing centre may be able to use its current infrastructure subject to approval.",
  },
  {
    question: "Who prepares the medicines?",
    answer:
      "Where medicines are prescribed as part of the treatment plan, preparation and coordination remain within Manovaidya's centralized approved system. Franchise or OPD partners do not independently manufacture Manovaidya medicines.",
  },
  {
    question: "Who handles the consultation?",
    answer:
      "The consultation pathway depends on the selected partnership model and is conducted through Manovaidya's approved clinical system and qualified professionals as applicable.",
  },
  {
    question: "Who handles marketing and lead generation?",
    answer:
      "This varies by model. Referral opportunities come through suitable referrals. OPD mobilisation can involve the partner and planned campaign support. Franchise may use a more structured local and central growth system under the final commercial model.",
  },
  {
    question: "Who handles appointment booking and counselling?",
    answer:
      "Manovaidya uses structured sales, appointment and counselling processes. Responsibilities may be centralized or shared depending on the selected partnership model.",
  },
  {
    question: "Can we work in both Autism and Mental Health?",
    answer:
      "Depending on the approved partnership model, centre capability and local setup, opportunities may exist across both Autism & Neurodevelopment and Mental Health.",
  },
  {
    question: "How does revenue sharing work?",
    answer:
      "Commercial terms depend on the partnership model, patient source, operating contribution and responsibilities undertaken by each party. The partnership discussion provides the applicable commercial structure.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Earning potential depends on eligible patient volume, conversion, partnership level, contribution and operating costs. Any illustrations shown are examples and should not be interpreted as guaranteed income or net profit.",
  },
  {
    question: "What investment is required?",
    answer:
      "Referral partnerships generally require minimal additional infrastructure. OPD and Franchise requirements depend on the existing centre, city, infrastructure, staffing and final operating model. Exact requirements are discussed after evaluating the centre.",
  },
  {
    question: "Who trains the team?",
    answer:
      "Where training is required under the selected model, Manovaidya provides approved process, workflow and role-specific training according to the partnership structure.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Timelines depend on the partnership selected. Referral partnerships generally require fewer setup steps, while OPD and Franchise models require operational planning, approvals and onboarding before launch.",
  },
  {
    question: "What happens after I submit my interest?",
    answer:
      "The Manovaidya partnership team reviews your centre profile, speaks with you about your existing practice and objectives, identifies the appropriate partnership model and then discusses the operational and commercial structure.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <article className="border-b border-[#ded7f4] last:border-b-0">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <span className="text-[15px] font-bold leading-[1.45] text-[#090d43] sm:text-[16px]">
          {faq.question}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d8d0ff] bg-white text-[#5720c8] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </button>

      {isOpen && (
        <p className="max-w-[930px] pb-6 pr-0 text-[14px] leading-[1.75] text-[#625d85] sm:pr-14 sm:text-[15px]">
          {faq.answer}
        </p>
      )}
    </article>
  );
}

export default function PartnershipFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8d0ff] bg-[#f3f0ff] px-4 py-[7px] text-[11px] font-bold uppercase tracking-[0.14em] text-[#5720c8]">
              <HelpCircle className="h-3.5 w-3.5" />
              Partnership FAQs
            </div>

            <h2 className="mt-6 max-w-[820px] text-[30px] font-bold leading-[1.08] text-[#070b3e] sm:text-[36px]">
              Questions You May Have Before Taking the Next Step.
            </h2>
          </div>

          <p className="max-w-[360px] text-[14px] leading-[1.7] text-[#625d85]">
            Clear answers on setup, operations, training, medicines, revenue and
            how the partnership process moves forward.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[8px] border border-[#d8d0ff] bg-[#fcfbff] px-5 shadow-[0_18px_45px_rgba(42,24,94,0.08)] sm:px-7">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
