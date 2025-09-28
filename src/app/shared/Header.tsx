"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import SaleTobBar from "./components/SaleTobBar";

export default function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Change the locale by navigating to the same path with the new locale
    router.push(`/${newLocale}${pathname}`);
  };
  return (
    <>
      <SaleTobBar />
      <div className="bg-white border-b border-[#E1E1E1] w-full">
        <div className="flex justify-between items-center ps-20 pe-12 pt-4 pb-6 max-w-screen-2xl mx-auto">
          <div className="flex items-center space-x-15">
            {/* Logo */}
            <div className="w-32">
              <Image
                src="/Assets/icons/bnaia-logo.ai_page-0001 4.webp"
                alt="bnaia-logo"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-lg mt-6  text-black">
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Idea Book
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Professionals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop Products
                  </a>
                </li>

                {/* Language Selector */}
                <div className="flex items-center space-x-0.5 text-[1rem]">
                  <Image
                    src={
                      locale === "en"
                        ? "/Assets/icons/circle-flags_us.webp"
                        : "/Assets/icons/AR.webp"
                    }
                    alt="flag-logo"
                    width={20}
                    height={20}
                    className="w-6 h-6"
                  />
                  <select
                    value={locale}
                    onChange={handleChange}
                    className=" text-[#3B3B3B]"
                  >
                    <option value="en">En</option>
                    <option value="ar">Ar</option>
                  </select>
                </div>
              </ul>
            </nav>
          </div>

          <div className="flex items-center  space-x-8 mt-2">
            {/* Join Button */}
            <button className="bg-[#F2F4F7] flex justify-center items-center  text-[#3B3B3B] py-4 px-2 rounded text-sm hover:bg-gray-200 transition">
              <span>
                {" "}
                <Image
                  src="/Assets/icons/Vector.webp"
                  alt="pro-logo"
                  width={24}
                  height={24}
                  className="w-5 h-5 mx-2"
                />
              </span>{" "}
              Join as a Pro
            </button>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <Image
                src="/Assets/icons/iconoir_search.webp"
                alt="search-logo"
                width={24}
                height={24}
                className="w-8 h-8"
              />
              <Image
                src="/Assets/icons/Frame 3383.webp"
                alt="profile-logo"
                width={24}
                height={24}
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
