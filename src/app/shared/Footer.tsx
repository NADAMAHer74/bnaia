"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const socials = [
    { src: "/Assets/icons/fa-brands_facebook.webp", alt: "facebook" },
    {
      src: "/Assets/icons/entypo-social_linkedin-with-circle.webp",
      alt: "linkedin",
    },
    { src: "/Assets/icons/Frame 2609782.webp", alt: "instagram" },
  ];

  const paymentOptions = [
    { src: "/Assets/images/footer/Group 9333.webp", alt: "E-Wallets" },
    { src: "/Assets/images/footer/Group 9334.webp", alt: "COD" },
    { src: "/images/souhoola.png", alt: "Souhoola" },
    { src: "/images/instapay.png", alt: "Instapay" },
    { src: "/Assets/images/footer/IMG-20220620-WA0002.webp", alt: "ValU" },
    { src: "/Assets/images/footer/images (3).webp", alt: "Forsa" },
    { src: "/Assets/images/footer/images (2).webp", alt: "Aman" },
    { src: "/Assets/images/footer/Group 9331 - Copy.webp", alt: "Visa" },
  ];

  return (
    <footer
      className={`bg-gray-100 relative text-gray-700 w-full   ${
        locale === "ar" ? "text-right" : "text-left"
      }`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Socials */}
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            alt="Bnaia Logo"
            width={120}
            height={40}
          />
          <p className="text-sm">{t("copyright")}</p>
          <div className="flex space-x-4 rtl:space-x-reverse">
            {socials.map((s, i) => (
              <a key={i} href="#">
                <Image src={s.src} alt={s.alt} width={40} height={40} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop by Category */}
        <div>
          <h4 className="font-bold text-blue-800 mb-3">{t("shopTitle")}</h4>
          <ul className="space-y-2 text-sm">
            {t.raw("categories").map((item: string, i: number) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-blue-800 mb-3">{t("servicesTitle")}</h4>
          <ul className="space-y-2 text-sm">
            {t.raw("services").map((item: string, i: number) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources + Legal */}
        <div>
          <h4 className="font-bold text-blue-800 mb-3">
            {t("resourcesTitle")}
          </h4>
          <ul className="space-y-2 text-sm mb-6">
            {t.raw("resources").map((item: string, i: number) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <h4 className="font-bold text-blue-800 mb-3">{t("legalTitle")}</h4>
          <ul className="space-y-2 text-sm">
            {t.raw("legal").map((item: string, i: number) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Payment */}
        <div>
          <h4 className="font-bold text-blue-800 mb-3">{t("contactTitle")}</h4>
          <ul className="space-y-2 text-sm mb-6">
            {t.raw("contact").map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h4 className="font-bold text-blue-800 mb-3">{t("paymentTitle")}</h4>
          <div className="flex flex-wrap items-center gap-3">
            {paymentOptions.map((pay, i) => (
              <Image
                key={i}
                src={pay.src}
                alt={pay.alt}
                width={50}
                height={30}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-800 text-white text-center py-4 text-sm">
        {t("copyright")}
      </div>
    </footer>
  );
}
