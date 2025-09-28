import { ChevronRight, ChevronLeft } from "lucide-react";
import { useSaleTobBar } from "../hooks/useSaleTobBar";
export default function SaleTobBar() {
  const { days, hours, minutes, seconds } = useSaleTobBar();

  return (
    <div className="bg-[#C70032] w-full text-white">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-10 py-3">
        {/* Left Chevron */}
        <div className="hidden md:flex items-center justify-center w-8 h-8">
          <ChevronLeft size={40} />
        </div>

        {/* Center Content */}
        <div className="flex flex-col md:flex-row items-center justify-center flex-grow text-center space-y-2 md:space-y-0 md:space-x-16">
          {/* Countdown Timer */}
          <div className="flex flex-col space-y-2 justify-center items-center">
            <div className="text-xs  font-medium">
              {days} : {hours} : {minutes} : {seconds}
            </div>
            <div className="text-xs">DYS : HRS : MIN : SEC</div>
          </div>

          {/* Promo Text */}
          <h1 className="text-sm md:text-md font-semibold">
            Flash Sale up to 56% & Free Shipping
          </h1>

          {/* CTA Button */}
          <button className="bg-white text-black font-semibold text-sm py-1.5 px-4 rounded-full hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>

        {/* Right Chevron */}
        <div className="hidden md:flex items-center justify-center w-8 h-8">
          <ChevronRight size={40} />
        </div>
      </div>
    </div>
  );
}
