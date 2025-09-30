"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Slider from "react-slick";
import { useLocale } from "next-intl";

import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  const coursalImages = [
    {
      id: 1,
      src: "/Assets/images/home/Rectangle 1.webp",
    },
    {
      id: 2,
      src: "/Assets/images/home/Rectangle 1.webp",
    },
    {
      id: 3,
      src: "/Assets/images/home/Rectangle 1.webp",
    },
  ];

  const pros = [
    {
      id: 1,
      src: "/Assets/icons/icons8-customer-support-100.webp",
      titleEn: "24/7 Customer Support",
      titleAr: "دعم عام 24/7",
    },
    {
      id: 2,
      src: "/Assets/icons/icons8-easy-100.webp",
      titleEn: "Easy Return Policy",
      titleAr: "سياسة استرجاع سهلة",
    },
    {
      id: 3,
      src: "/Assets/icons/icons8-price-96.webp",
      titleEn: "Best Price Guarantee",
      titleAr: "ضمان سعر أفضل",
    },
    {
      id: 4,
      src: "/Assets/images/home/Group 9338.webp",
      titleEn: "Guaranteed Quality by Bnaia",
      titleAr: "الجودة المضمنة من قبل بناية",
    },
  ];

  const slickSliderHeaderData = [
    {
      id: 1,
      src: "/Assets/images/home/SBR-Bonding-Agent_1.webp",
      titleEn: "Building Material",
      titleAr: "مواد البناء",
    },
    {
      id: 2,
      src: "/Assets/images/home/bob2024_home-dan-gordon-landscape-architects.webp",
      titleEn: "Landscape",
      titleAr: " المناطق البيئية",
    },
    {
      id: 3,
      src: "/Assets/images/home/SBR-Bonding-Agent_2.webp",
      titleEn: "Construction Chemicals",
      titleAr: "كيميائات البناء",
    },
    {
      id: 4,
      src: "/Assets/images/home/GB-01.webp",
      titleEn: "Gypsum Board",
      titleAr: "بورد الجبس",
    },
    {
      id: 5,
      src: "/Assets/images/home/215-2154423_transparent-pipes-clipart-plumbing-items-image-png-png 1.webp",
      titleEn: "Plumbing",
      titleAr: "تكييف",
    },
    {
      id: 6,
      src: "/Assets/images/home/shutterstock_2103623756-electrical-supplies.webp",
      titleEn: "Electirical",
      titleAr: "الكهرباء",
    },
    {
      id: 7,
      src: "/Assets/images/home/518 1.webp",
      titleEn: "Bath & Kitchen",
      titleAr: "مطابخ وحمامات",
    },
    {
      id: 8,
      src: "/Assets/images/home/entry-doors-with-textured-glass.webp",
      titleEn: "Doors",
      titleAr: "ابواب",
    },
    {
      id: 9,
      src: "/Assets/images/home/istockphoto-492201907-612x612.webp",
      titleEn: "Tools",
      titleAr: "أدوات",
    },
  ];

  const servicesData = [
    {
      id: 1,
      src: "/Assets/images/home/Component 83.webp",
      titleEn: "Engineering Offices",
      titleAr: "مكاتب التقنية",
    },
    {
      id: 2,
      src: "/Assets/images/home/Rectangle 84.webp",
      titleEn: "Specialized Contractors",
      titleAr: "مقاولات خاصة",
    },
    {
      id: 3,
      src: "/Assets/images/home/Rectangle 85.webp",
      titleEn: "Specialized Technicians",
      titleAr: "فنيون خاصة",
    },
    {
      id: 4,
      src: "/Assets/images/home/Rectangle 86.webp",
      titleEn: "Smart Home",
      titleAr: "بيت سمارت",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const locale = useLocale();
  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slickSliderHeaderData.map((data) => (
          <div key={data.id} data-index={data.id} className="py-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-15 h-15 flex items-center justify-center">
                <Image
                  src={data.src}
                  alt={data.titleEn}
                  width={100}
                  height={96}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium">
                {locale === "en" ? data.titleEn : data.titleAr}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-[56vh] md:h-[80vh]"
      >
        {coursalImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                className="block w-full h-full"
                alt={`Slide ${image.id}`}
                fill
                style={{ objectFit: "cover" }}
                priority={image.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* benfits section  */}
      <div className="flex justify-ceneter text-md  items-center">
        {pros.map((pro) => (
          <div
            key={pro.id}
            className="flex  items-center justify-center space-x-4 w-1/4 py-12"
          >
            <Image
              src={pro.src}
              alt={pro.titleEn}
              width={100}
              height={100}
              className="w-10 h-10"
            />
            <p className=" text-[#3B3B3B] font-bold text-base">
              {locale === "en" ? pro.titleEn : pro.titleAr}
            </p>
          </div>
        ))}
      </div>

      <div className="">
        {/* get order price section */}
        <div className=" flex items-center  justify-center">
          <div className="flex items-center justify-between bg-[#F2F4F7] w-[90%] rounded-lg shadow-md">
            {/* Left content */}
            <div className="flex flex-col items-start justify-center space-y-9 w-2/3 px-20 py-12">
              <h1 className="text-6xl text-black font-bold w-3/4">
                {t("getOrderTitle")}{" "}
              </h1>
              <h1 className="text-7xl text-[#0057B7] font-bold">
                {t("signUpDetails")}{" "}
              </h1>
              <p className="text-lg text-gray-500 w-11/12 mt-10">
                {t("getOrderDescription")}
              </p>
              <button className="bg-[#0057B7] text-white text-xl py-4 px-20 rounded-md hover:bg-gray-100 hover:text-[#0057B7] transition">
                {t("requestQuotation")}
              </button>
            </div>

            {/* Right image */}
            <div className="w-1/2 h-full flex items-center justify-center">
              <Image
                src="/Assets/images/home/Component 97.webp"
                alt="Image"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* services section */}
        <div className="py-40 ">
          <h1 className="text-5xl pb-20 text-[#3B3B3B] text-start px-20 ">
            {t("servicesTitle")}{" "}
          </h1>
          <div className="flex items-center justify-center relative px-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center justify-center space-y-6 text-center w-1/4 py-12"
              >
                <Image
                  src={service.src}
                  alt={service.titleEn}
                  width={260}
                  height={120}
                  className="object-contain"
                />
                <p className="text-[#3B3B3B] text-3xl text-center max-w-[150px]">
                  {locale === "en" ? service.titleEn : service.titleAr}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* shop by activity section */}

        <div className="py-40 flex items-center justify-center">
          <div className="flex items-stretch justify-between w-[90%] rounded-lg bg-[#DAE5F3]">
            {/* Left text section */}
            <div className="flex flex-col items-start justify-center space-y-9 w-1/2 px-20 py-12 text-[#0057B7]">
              <h1 className="text-6xl font-bold w-3/4">
                {t("shopByActivityTitle")}
              </h1>
              <p className="text-lg font-semibold text-[#3B3B3B]">
                {t("shopByActivityDescription")}{" "}
              </p>
              <button className="text-[#0057B7] text-3xl py-4 rounded-md hover:bg-gray-100 hover:text-[#0057B7] flex items-center justify-start transition">
                {t("shopNow")}
                <span>
                  <ArrowRight className="mx-2 " size={50} />
                </span>
              </button>
            </div>

            {/* Middle  images */}
            <div className="flex flex-col w-5/12">
              <div className="flex-1">
                <Image
                  src="/Assets/images/home/unsplash_i4Gq0UbG3LI (1).webp"
                  alt="Image"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="flex-1">
                <Image
                  src="/Assets/images/home/unsplash_i4Gq0UbG3LI (2).webp"
                  alt="Image"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full "
                />
              </div>
            </div>

            {/* Right single image */}
            <div className="w-5/12 flex">
              <Image
                src="/Assets/images/home/unsplash_i4Gq0UbG3LI.webp"
                alt="Image"
                width={500}
                height={800}
                className="object-cover w-full h-full rounded-e-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
