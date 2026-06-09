import React from "react";
import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f6f7fc] border-t border-[#e6e8f0]">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-6 md:py-0 md:h-[110px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0 text-center md:text-left">

        {/* Left Logo */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="flex h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] items-center justify-center rounded-[12px] sm:rounded-[14px] bg-[#5f39d6]">
            <Brain
              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
              strokeWidth={2.2}
            />
          </div>

          <span className="text-[18px] sm:text-[20px] font-semibold tracking-[-0.03em] text-[#02051f]">
            Manovaidya
          </span>
        </div>

        {/* Right Text */}
        <p className="text-[14px] sm:text-[15px] md:text-[17px] leading-[1.5] font-normal text-[#556277] max-w-[320px] sm:max-w-none">
          © 2026 Manovaidya. Integrated Mind & Brain Network.
        </p>

      </div>
    </footer>
  );
}