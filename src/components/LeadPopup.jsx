import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Send,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import axiosInstance from "../api/axiosInstance";

export default function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const alreadyFilled = localStorage.getItem("consultationFormSubmitted");

    if (!alreadyFilled) {
      setShowPopup(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\d\s+()-]{8,}$/.test(formData.phone))
      newErrors.phone = "Valid phone number required";

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await axiosInstance.post(
        "/autism/contact/create",
        formData
      );

      if (
        response.data.success ||
        response.status === 200 ||
        response.status === 201
      ) {
        setIsSubmitted(true);

        localStorage.setItem("consultationFormSubmitted", "true");

        localStorage.setItem(
          "consultationFormData",
          JSON.stringify(formData)
        );

        setTimeout(() => {
          setShowPopup(false);
          document.body.style.overflow = "auto";
          window.location.href = "/";
        }, 800);
      } else {
        setSubmitError(response.data.message || "Failed to submit form.");
      }
    } catch (err) {
      if (err.response) {
        setSubmitError(
          err.response.data.message || "Server error. Please try again."
        );
      } else if (err.request) {
        setSubmitError("No response from server. Please check your connection.");
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

  return (
<div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/70 backdrop-blur-sm px-3 pt-[95px] pb-3 overflow-y-auto">
      <div className="relative w-full max-w-[390px] sm:max-w-[430px] rounded-xl sm:rounded-2xl bg-white shadow-2xl border border-slate-200 p-3.5 sm:p-5">
        <div className="text-center mb-2.5 sm:mb-3">
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">
            Get Help Now
          </h2>

          <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
            Please fill this form to continue
          </p>
        </div>

        {isSubmitted && (
          <div className="mb-2.5 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 px-2.5 py-1.5 text-[11px] text-green-700">
            <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
            <span>Form submitted! Opening website...</span>
          </div>
        )}

        {submitError && (
          <div className="mb-2.5 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-[11px] text-red-700">
            <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
            <span>{submitError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-2">
          {[
            {
              label: "Full Name",
              name: "fullName",
              type: "text",
              placeholder: "Enter full name",
              icon: User,
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "Enter email",
              icon: Mail,
            },
            {
              label: "Phone",
              name: "phone",
              type: "tel",
              placeholder: "Enter phone number",
              icon: Phone,
            },
            {
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter address",
              icon: MapPin,
            },
          ].map((field) => {
            const Icon = field.icon;

            return (
              <div key={field.name}>
                <label className="mb-0.5 block text-[10px] sm:text-[11px] font-medium text-slate-700">
                  {field.label} *
                </label>

                <div className="relative">
                  <Icon className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`w-full h-[36px] sm:h-[38px] rounded-lg border pl-9 pr-3 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors[field.name]
                        ? "border-red-400 bg-red-50"
                        : "border-slate-300"
                    }`}
                  />
                </div>

                {errors[field.name] && (
                  <p className="mt-0.5 text-[10px] text-red-500">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            );
          })}

          <div>
            <label className="mb-0.5 block text-[10px] sm:text-[11px] font-medium text-slate-700">
              Message *
            </label>

            <div className="relative">
              <FileText className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />

              <textarea
                name="message"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ask your question..."
                className={`w-full h-[54px] sm:h-[58px] rounded-lg border pl-9 pr-3 py-2 text-xs sm:text-sm outline-none resize-none focus:ring-2 focus:ring-blue-500 ${
                  errors.message
                    ? "border-red-400 bg-red-50"
                    : "border-slate-300"
                }`}
              />
            </div>

            {errors.message && (
              <p className="mt-0.5 text-[10px] text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[40px] sm:h-[44px] rounded-lg bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                Submit & Continue
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}