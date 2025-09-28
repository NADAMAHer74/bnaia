"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
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
      title: "24/7 Customer Support",
    },
    {
      id: 2,
      src: "/Assets/icons/icons8-easy-100.webp",
      title: "Easy Return Policy",
    },
    {
      id: 3,
      src: "/Assets/icons/icons8-price-96.webp",
      title: "Best Price Guarantee",
    },
    {
      id: 4,
      src: "/Assets/images/home/Group 9338.webp",
      title: "Guaranteed Quality by Bnaia",
    },
  ];

  return (
    <div className="relative w-full h-56 md:h-[42.5rem]">
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
        className="w-full h-full"
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

      <div className="flex justify-ceneter text-md  items-center">
        {pros.map((pro) => (
          <div
            key={pro.id}
            className="flex  items-center justify-center space-x-4 w-1/4 py-12"
          >
            <Image
              src={pro.src}
              alt={pro.title}
              width={100}
              height={100}
              className="w-10 h-10"
            />
            <p className=" text-[#3B3B3B] font-bold text-base">{pro.title}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center bg-[#F2F4F7] h-full">
        <div className=" flex flex-col items-start justify-center space-y-9 w-3/4 pl-20  ">
          <h1 className="text-6xl text-black font-bold w-3/4">
            {" "}
            Get Your Order Price Within An Hour.
          </h1>
          <h1 className="text-7xl text-[#0057B7] font-bold ">
            Sign Up Details,
          </h1>

          <p className="text-md text-gray-500 w-1/2 mb-25 mt-10">
            {" "}
            Are you unsure about pricing the order need for your homme
            finishing? sens us your order as image, Excel file, or PDF and we
            will get back to you with a quote.
          </p>

          <button className="bg-[#0057B7] text-white text-xl   py-4 px-18 rounded-md hover:bg-gray-100 transition">
            Request Quotation
          </button>
        </div>
        <div className="w-1/2 h-full ">
          <Image
            src="/Assets/images/home/Component 97.webp"
            alt="Image"
            width={500}
            height={100}
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
}
