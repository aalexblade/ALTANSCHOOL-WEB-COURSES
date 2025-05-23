import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, setMessage, resetForm } from '../../redux/followUsSlice';

function FollowUs() {
  const dispatch = useDispatch();
  const { name, email, message } = useSelector((state) => state.followUs);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    dispatch(resetForm());
  };

  return (
    <section
      className="bg-[#f1f1f1] flex flex-col sm:items-center sm:px-[59px] md:flex-row md:px-[91px] md:justify-between lg:px-[170px] xl:px-[274px] xl:justify-between"
      style={{ fontFamily: 'var(--font-family)' }}
    >
     
      <div className="flex flex-col mb-10 md:mb-0">
      
        <h2
          className="
            font-bold text-black
            sm:text-[20px] sm:text-center sm:tracking-[0.15em]
            md:text-[32px] md:text-left md:tracking-[0.15em]
            lg:text-[32px] lg:text-left lg:tracking-[0.15em]
            xl:text-[48px] xl:text-left xl:tracking-[0.15em]
            mb-6
          "
        >
          FOLLOW US
        </h2>

    
        <form
          onSubmit={handleSubmit}
          className="
            flex flex-col items-center
            sm:items-center
            md:items-start
            lg:items-start
            xl:items-start
          "
        >
       
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            required
            className="follow-us__input
              border-4 border-[#8e9a82] rounded-[10px]
              text-black font-normal
              placeholder:text-black placeholder:font-normal placeholder:text-[15px]
              sm:w-[257px] sm:h-[81px] sm:mb-4
              md:w-[436px] md:h-[63px] md:mb-4 md:text-[20px]
              lg:w-[561px] lg:h-[81px] lg:mb-4 lg:text-[20px]
              xl:w-[617px] xl:h-[121px] xl:mb-4 xl:text-[36px]
              px-4
            "
          />

       
          <input
            type="email"
            placeholder="Enter a valid email address"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            required
            className="
            follow-us__input
              border-4 border-[#8e9a82] rounded-[10px]
              text-black font-normal
              placeholder:text-black placeholder:font-normal placeholder:text-[15px]
              sm:w-[257px] sm:h-[81px] sm:mb-4
              md:w-[436px] md:h-[63px] md:mb-4 md:text-[20px]
              lg:w-[561px] lg:h-[81px] lg:mb-4 lg:text-[20px]
              xl:w-[617px] xl:h-[121px] xl:mb-4 xl:text-[36px]
              px-4
            "
          />

         
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
            required
            className="
            follow-us__textarea
              border-4 border-[#8e9a82] rounded-[10px]
              text-black font-normal
              placeholder:text-black placeholder:font-normal placeholder:text-[15px]
              sm:w-[257px] sm:h-[130px] sm:mb-6
              md:w-[436px] md:h-[101px] md:mb-6 md:text-[20px]
              lg:w-[561px] lg:h-[130px] lg:mb-6 lg:text-[20px]
              xl:w-[617px] xl:h-[194px] xl:mb-6 xl:text-[36px]
              px-4 resize-none
            "
          />

       
          <button
            type="submit"
            className="
              bg-[#8e9a82] text-white font-normal
              rounded-[10px]
              sm:w-[257px] sm:h-[47px] sm:text-[15px] sm:tracking-[0.15em]
              md:w-[436px] md:h-[45px] md:text-[20px] md:tracking-[0.15em]
              lg:w-[205px] lg:h-[59px] lg:text-[20px] lg:tracking-[0.15em]
              xl:w-[371px] xl:h-[88px] xl:text-[36px] xl:tracking-[0.15em]
              text-center
              cursor-pointer
              transition-colors duration-300 hover:bg-[#7b8970]
            "
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div
        className="
          sm:w-[243px] sm:h-[345px]
          md:w-[302px] md:h-[429px]
          lg:w-[439px] lg:h-[624px]
          xl:w-[302px] xl:h-[429px]
          bg-cover bg-center rounded-md
          "
        style={{ backgroundImage: "url('/src/assets/images/followUs/followUs.jpg')" }}
      />
    </section>
  );
}

export default FollowUs;
