"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import SaleTobBar from "./components/SaleTobBar";

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLocale = (newLocale: string) => {
    setLangOpen(false);
    router.push(`/${newLocale}${pathname.replace(/^\/(en|ar)/, "")}`);
  };

  return (
    <>
      <SaleTobBar />
      <div className="bg-white border-b border-[#E1E1E1] w-full">
        <div className="flex justify-between items-center ps-6 md:ps-20 pe-6 pt-4 pb-6 max-w-screen-2xl mx-auto">
          {/* Left: Logo + Desktop Nav */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="w-28 md:w-32">
              <Image
                src="/Assets/icons/bnaia-logo.ai_page-0001 4.webp"
                alt="bnaia-logo"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block">
              <ul className="flex space-x-8 text-lg mt-6 text-black">
                <li>
                  <a href="#">{t("services")}</a>
                </li>
                <li>
                  <a href="#">{t("ideaBook")}</a>
                </li>
                <li>
                  <a href="#">{t("professionals")}</a>
                </li>
                <li>
                  <a href="#">{t("shopProducts")}</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right side (always visible) */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-2"
              >
                <Image
                  src={
                    locale === "en"
                      ? "/Assets/icons/circle-flags_us.webp"
                      : "/Assets/icons/AR.webp"
                  }
                  alt="flag"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
                <span className="text-sm font-medium">
                  {locale === "en" ? "EN" : "AR"}
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <button
                    onClick={() => changeLocale(locale === "en" ? "ar" : "en")}
                    className="flex items-center w-full px-3 py-2 hover:bg-gray-100 space-x-2"
                  >
                    <Image
                      src={
                        locale === "en"
                          ? "/Assets/icons/AR.webp"
                          : "/Assets/icons/circle-flags_us.webp"
                      }
                      alt="flag"
                      width={20}
                      height={20}
                      className="w-6 h-6"
                    />
                    <span className="text-sm font-medium">
                      {locale === "en" ? "AR" : "EN"}
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Search + Profile */}
            <Image
              src="/Assets/icons/iconoir_search.webp"
              alt="search-logo"
              width={24}
              height={24}
              className="w-7 h-7"
            />
            <Image
              src="/Assets/icons/Frame 3383.webp"
              alt="profile-logo"
              width={24}
              height={24}
              className="w-7 h-7"
            />

            {/* Join as Pro (desktop) */}
            <button className="hidden xl:flex bg-[#F2F4F7] items-center text-[#3B3B3B] py-3 px-4 rounded text-sm hover:bg-gray-200 transition">
              <Image
                src="/Assets/icons/Vector.webp"
                alt="pro-logo"
                width={20}
                height={20}
                className="w-5 h-5 mx-2"
              />
              {t("joinPro")}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (links only) */}
        {menuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-6">
            <a href="#" className="block">
              {t("services")}
            </a>
            <a href="#" className="block">
              {t("ideaBook")}
            </a>
            <a href="#" className="block">
              {t("professionals")}
            </a>
            <a href="#" className="block">
              {t("shopProducts")}
            </a>
            <button className="w-full flex justify-center items-center bg-[#F2F4F7] text-[#3B3B3B] py-3 rounded hover:bg-gray-200 transition">
              <Image
                src="/Assets/icons/Vector.webp"
                alt="pro-logo"
                width={20}
                height={20}
                className="w-5 h-5 mx-2"
              />
              {t("joinPro")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
