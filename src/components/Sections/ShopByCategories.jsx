import React from 'react';
import { useSelector } from 'react-redux';

const ShopByCategories = () => {
  const { title, images } = useSelector((state) => state.shopByCategories);

  return (
    <section className="flex flex-col items-center bg-white">
      {/* Заголовок */}
      <h2
        className="
        font-[var(--font-family)] font-normal text-black tracking-[0.15em] text-center
        text-[20px] md:text-[32px] lg:text-[32px] xl:text-[48px]
        mt-8 mb-6
      "
      >
        {title}
      </h2>

      {/* Ряд з 4-х картинок */}
      <div
        className="
        flex justify-center gap-[6px] mb-4
        w-full max-w-full md:max-w-[1076px] lg:max-w-[1472px] xl:max-w-[2140px]
      "
      >
        {[1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src={images[i]}
            alt={`Category ${i}`}
            className={`
              object-cover
              w-[133px] h-[136px]
              md:w-[269px] md:h-[274px]
              lg:w-[368px] lg:h-[389px]
              xl:w-[517px] xl:h-[528px]
            `}
          />
        ))}
      </div>

      {/* Одна велика картинка */}
      <img
        src={images[5]}
        alt="Category Large"
        className={`
          "w-full h-auto object-cover bg-[#f1f1f1]
          w-[375px] h-[89px]
          md:w-[999px] md:h-[184px]
          lg:w-[1366px] lg:h-[262px]
          xl:w-[1920px] xl:h-[355px]
          mb-8
        `}
      />
    </section>
  );
};

export default ShopByCategories;
