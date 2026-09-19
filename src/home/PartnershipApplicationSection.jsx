import React from "react";
import { useState } from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";

const patientCategories = [
  "Autism",
  "ADHD",
  "Developmental Delay",
  "Speech / Behavioural Concerns",
  "Adult Mental Health",
  "Mixed Practice",
  "Other",
];

const initialForm = {
  fullName: "",
  mobile: "",
  email: "",
  city: "",
  state: "",
  profession: "",
  centreName: "",
  operatingYears: "",
  monthlyFootfall: "",
  patientCategories: [],
  partnership: "",
  physicalCentre: "",
  centreSize: "",
  teamMembers: "",
};

const inputClass =
  "h-10 w-full rounded-[5px] border border-[#cfc5ed] bg-white px-3 text-[13px] text-[#11133f] outline-none transition focus:border-[#6b21c8] focus:ring-2 focus:ring-[#6b21c8]/10";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-bold text-[#10123d]">
        {label}
        {required && <span aria-hidden="true">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function PartnershipApplicationSection() {
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const toggleCategory = (category) => {
    setForm((current) => ({
      ...current,
      patientCategories: current.patientCategories.includes(category)
        ? current.patientCategories.filter((item) => item !== category)
        : [...current.patientCategories, category],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "*New Partnership Enquiry*",
      "",
      `*Full Name:* ${form.fullName}`,
      `*Mobile Number:* ${form.mobile}`,
      `*Email:* ${form.email || "Not provided"}`,
      `*City:* ${form.city}`,
      `*State:* ${form.state}`,
      `*Current Profession / Business:* ${form.profession}`,
      `*Centre / Practice Name:* ${form.centreName || "Not provided"}`,
      `*Operating Since:* ${form.operatingYears}`,
      `*Approx. Monthly Footfall:* ${form.monthlyFootfall}`,
      `*Primary Patient Categories:* ${form.patientCategories.length ? form.patientCategories.join(", ") : "Not selected"}`,
      `*Interested Partnership:* ${form.partnership}`,
      `*Physical Centre:* ${form.physicalCentre || "Not specified"}`,
      `*Approx. Centre Size:* ${form.centreSize || "Not provided"}`,
      `*Therapists / Clinical Team Members:* ${form.teamMembers || "Not provided"}`,
    ].join("\n");

    window.open(
      `https://wa.me/919718184613?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="apply" className="bg-[#f4f0ff] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-12">
        <div className="lg:pt-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6520c5]">
            Partnership Application
          </p>
          <h2 className="mt-4 max-w-[420px] text-[35px] font-bold leading-[1.05] text-[#080b3f] sm:text-[44px]">
            Tell Us About Your Centre.
          </h2>
          <p className="mt-6 max-w-[390px] text-[14px] leading-[1.75] text-[#6c6687]">
            Share a few details so our partnership team can understand your
            current setup before speaking with you.
          </p>

          <div className="mt-8 max-w-[410px] rounded-[8px] bg-[#310778] p-6 text-white">
            <HeartHandshake className="h-7 w-7 text-[#ffc928]" strokeWidth={2} />
            <p className="mt-5 text-[14px] font-bold">
              An expression of interest, not an approval.
            </p>
            <p className="mt-2 text-[13px] leading-[1.65] text-white/80">
              Our team will review your profile and contact you to discuss the
              most appropriate partnership pathway.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[8px] border border-[#d8d0ed] bg-white p-5 shadow-[0_14px_30px_rgba(40,24,85,0.14)] sm:p-7"
        >
          <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
            <Field label="Full Name" required>
              <input className={inputClass} name="fullName" value={form.fullName} onChange={updateField} required />
            </Field>
            <Field label="Mobile Number" required>
              <input className={inputClass} name="mobile" type="tel" value={form.mobile} onChange={updateField} pattern="[0-9+() -]{8,15}" required />
            </Field>
            <Field label="Email">
              <input className={inputClass} name="email" type="email" value={form.email} onChange={updateField} />
            </Field>
            <Field label="City" required>
              <input className={inputClass} name="city" value={form.city} onChange={updateField} required />
            </Field>
            <Field label="State" required>
              <input className={inputClass} name="state" value={form.state} onChange={updateField} required />
            </Field>
            <Field label="Current Profession / Business" required>
              <select className={inputClass} name="profession" value={form.profession} onChange={updateField} required>
                <option value="">Select an option</option>
                <option>Psychologist</option>
                <option>Therapist</option>
                <option>Therapy Centre Owner</option>
                <option>Child Development Centre</option>
                <option>Ayurveda / Healthcare Professional</option>
                <option>Healthcare Entrepreneur</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Centre / Practice Name">
              <input className={inputClass} name="centreName" value={form.centreName} onChange={updateField} />
            </Field>
            <Field label="How long have you been operating?" required>
              <select className={inputClass} name="operatingYears" value={form.operatingYears} onChange={updateField} required>
                <option value="">Select an option</option>
                <option>Not Started Yet</option>
                <option>Less Than 1 Year</option>
                <option>1-3 Years</option>
                <option>3-5 Years</option>
                <option>5+ Years</option>
              </select>
            </Field>
            <Field label="Approximate Monthly Patient / Client Footfall" required>
              <select className={inputClass} name="monthlyFootfall" value={form.monthlyFootfall} onChange={updateField} required>
                <option value="">Select an option</option>
                <option>Under 25</option>
                <option>25-50</option>
                <option>51-100</option>
                <option>101-200</option>
                <option>200+</option>
              </select>
            </Field>
          </div>

          <fieldset className="mt-5">
            <legend className="text-[12px] font-bold text-[#10123d]">Primary Patient Category</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {patientCategories.map((category) => {
                const selected = form.patientCategories.includes(category);
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleCategory(category)}
                    className={`rounded-[4px] border px-3 py-2 text-[11px] transition ${
                      selected
                        ? "border-[#6520c5] bg-[#6520c5] font-semibold text-white"
                        : "border-[#d5ccec] bg-white text-[#24214b] hover:border-[#6520c5]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="text-[12px] font-bold text-[#10123d]">Which Partnership Are You Interested In?*</legend>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {["Referral Partner", "OPD Partner", "Franchise Partner", "Not Sure - Help Me Choose"].map((option) => (
                <label key={option} className="flex min-h-11 cursor-pointer items-center gap-2 rounded-[5px] border border-[#d5ccec] px-3 text-[12px] text-[#24214b]">
                  <input type="radio" name="partnership" value={option} checked={form.partnership === option} onChange={updateField} required />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="text-[12px] font-bold text-[#10123d]">Do You Currently Have a Physical Centre?*</legend>
            <div className="mt-2 flex gap-3">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex h-10 cursor-pointer items-center gap-2 rounded-[5px] border border-[#d5ccec] px-4 text-[12px] text-[#24214b]">
                  <input type="radio" name="physicalCentre" value={option} checked={form.physicalCentre === option} onChange={updateField} required />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-5 grid gap-x-5 gap-y-4 sm:grid-cols-2">
            <Field label="Approximate Centre Size (sq. ft.)">
              <input className={inputClass} name="centreSize" type="number" min="0" value={form.centreSize} onChange={updateField} />
            </Field>
            <Field label="Number of Therapists / Clinical Team Members">
              <input className={inputClass} name="teamMembers" type="number" min="0" value={form.teamMembers} onChange={updateField} />
            </Field>
          </div>

          <button type="submit" className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-[5px] bg-[#6a1bc2] px-5 text-[13px] font-bold text-white shadow-[0_5px_12px_rgba(78,20,155,0.25)] transition hover:bg-[#5612a4]">
            Submit Partnership Application
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-[11px] leading-relaxed text-[#81799c]">
            Our team will review your profile and contact you to discuss the most appropriate partnership pathway.
          </p>
        </form>
      </div>
    </section>
  );
}
