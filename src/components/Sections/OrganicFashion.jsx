import React from 'react';
import { useSelector } from 'react-redux';

const OrganicFashion = () => {
  const { title, text, buttonText, images } = useSelector((state) => state.organicFashion);

  return (
    <section className="bg-[#faf9f8] px-4 py-8 font-[var(--font-family)] 
      lg:px-[144px] xl:px-[177px]">
    
      <h2 className="text-[30px] font-normal tracking-[0.15em] text-black text-center mb-8 md:hidden">
        {title}
      </h2>

      <div className="flex justify-between items-center md:hidden gap-[10px]">
        <div className="flex flex-col justify-center max-w-[60%] text-left">
          <p className="text-[14px] text-black mb-6">{text}</p>
          <button className="rounded-[59px] bg-[#8e9a82] text-white tracking-[0.15em] w-[151px] h-[31px] text-[13px]">
            {buttonText}
          </button>
        </div>

        <div className="w-[220px] h-[282px]">
          <img src={images.sm} alt="Organic Fashion" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="hidden md:flex md:flex-row md:justify-between md:items-center md:px-10 md:py-20">
        <div className="order-1 w-[320px] h-[330px] lg:w-[410px] lg:h-[422px] xl:w-[578px] xl:h-[596px]">
          <img
            src={images.md}
            alt="Organic Fashion"
            className="w-full h-full object-cover hidden md:block lg:hidden"
          />
          <img
            src={images.lg}
            alt="Organic Fashion"
            className="w-full h-full object-cover hidden lg:block xl:hidden"
          />
          <img
            src={images.xl}
            alt="Organic Fashion"
            className="w-full h-full object-cover hidden xl:block"
          />
        </div>

        <div className="order-2 max-w-[500px] text-left">
          <h2 className="text-[42px] xl:text-[90px] font-normal tracking-[0.15em] text-black">
            {title}
          </h2>
          <p className="mt-4 text-[20px] xl:text-[36px] text-black">{text}</p>
          <button
            className="mt-6 rounded-[59px] bg-[#8e9a82] text-white tracking-[0.15em]
            w-[227px] h-[42px] text-[20px]
            lg:w-[206px] lg:h-[55px]
            xl:w-[291px] xl:h-[77px]"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrganicFashion;
