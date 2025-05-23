import React from 'react';
import { useSelector } from 'react-redux';
import { selectTitle, selectText, selectImages } from '../../redux/newCollectionSlice';

const NewCollection = () => {
  const title = useSelector(selectTitle);
  const text = useSelector(selectText);
  const images = useSelector(selectImages);

  return (
    <section className="bg-[#faf9f8] py-10 px-4 font-[var(--font-family)] text-black">
      {/* Заголовок */}
      <h2
        className="text-center font-normal tracking-[0.15em]
        text-[20px] md:text-[32px] lg:text-[32px] xl:text-[48px]"
      >
        {title}
      </h2>

      {/* Картинки */}
      <div className="flex justify-center gap-4 overflow-hidden mt-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-[#f1f1f1] rounded-t-[170px] shrink-0
            w-[177px] h-[179px]
            md:w-[261px] md:h-[263px]
            lg:w-[338px] lg:h-[344px]
            xl:w-[502px] xl:h-[506px]"
          >
            <img
              src={img}
              alt={`New collection item ${index + 1}`}
              className="w-full h-full object-cover rounded-t-[170px]"
            />
          </div>
        ))}
      </div>

      {/* Текст під картинками */}
      <p
        className="mt-10 text-center font-normal tracking-[0.15em]
  text-[15px] md:text-[32px] lg:text-[32px] xl:text-[40px]
  px-[125px] md:px-[205px] lg:px-[286px] xl:px-[161px]"
      >
        {text}
      </p>
    </section>
  );
};

export default NewCollection;
