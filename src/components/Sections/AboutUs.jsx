import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectTitle,
  selectFirstText,
  selectSecondText,
  selectImage,
} from '../../redux/aboutUsSlice';

const AboutUs = () => {
  const title = useSelector(selectTitle);
  const firstText = useSelector(selectFirstText);
  const secondText = useSelector(selectSecondText);
  const image = useSelector(selectImage);

  return (
    <section className="bg-[#faf9f8] py-10 font-[var(--font-family)] text-black">
      {/* Mobile layout */}
      <div className="flex flex-col items-center text-center md:hidden px-[37px]">
        <h2 className="text-[20px] font-bold tracking-[0.15em]">{title}</h2>
        <p className="text-[16px] font-normal mt-4">{firstText}</p>
        <img src={image} alt="About us" className="w-[198px] h-[250px] object-cover mt-6" />
        <p className="text-[16px] font-normal mt-4">{secondText}</p>
        <button className="mt-6 border-[5px] border-[#8e9a82] rounded-[10px] text-[14px] tracking-[0.15em] w-[149px] h-[42px]">
          LEARN MORE
        </button>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex justify-center items-center gap-10 px-4 xl:px-40">
        <img
          src={image}
          alt="About us"
          className="hidden md:block object-cover
            md:w-[332px] md:h-[581px]
            lg:w-[417px] lg:h-[716px]"
        />
        <div className="flex flex-col justify-center text-left">
          <h2
            className="font-bold tracking-[0.15em]
            md:text-[32px] xl:text-[48px]"
          >
            {title}
          </h2>
          <p
            className="mt-4 font-normal text-black
            md:text-[20px] xl:text-[36px]"
          >
            {firstText}
          </p>
          <p
            className="mt-4 font-normal text-black
            md:text-[20px] xl:text-[36px]"
          >
            {secondText}
          </p>
          <button
            className="about-us__button
   border-5 border-borderGreen rounded-10px
    w-[149px] h-[42px]
    text-textBlack
    font-custom font-normal text-[14px]
    tracking-wider
    sm:w-[149px] sm:h-[42px]
    md:w-[194px] md:h-[46px] md:text-[20px]
    lg:w-[205px] lg:h-[59px]
    xl:w-[351px] xl:h-[88px]
          "
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
