import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMenuItems, selectTitle } from '../../redux/headerSlice';

const Header = () => {
  const title = useSelector(selectTitle);
  const menuItems = useSelector(selectMenuItems);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#faf9f8] font-serif text-black font-normal text-base">
      <div className="max-w-[1366px] mx-auto px-4 lg:px-[144px] xl:px-[177px] h-16 flex items-center justify-between relative">

        {/* Логотип зліва */}
        <div className="font-serif font-normal text-base md:text-base lg:text-base xl:text-logo text-text">{title}</div>

        {/* Текст меню справа — сховано на мобілці, видно з планшета */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.label.toLowerCase()}`}
              className="hover:text-[#8E9A82] focus:text-[#8E9A82] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Бургер-меню справа — видно тільки на мобілці */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'close menu' : 'open menu'}
          className="md:hidden text-3xl z-20"
          style={{ position: 'relative', right: 0 }}
        >
          {isOpen ? '×' : '☰'}
        </button>

        {/* Мобільне меню */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#faf9f8] py-4 z-10">
            <nav className="flex flex-col items-center space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.label.toLowerCase()}`}
                  className="text-base hover:text-[#8E9A82] focus:text-[#8E9A82] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
