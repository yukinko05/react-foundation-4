import React from "react";

type HeaderProps = {
  title: string;
  backgroundImage: string;
};

const Header = ({ title, backgroundImage }: HeaderProps) => {
  return (
    <div>
      <header
        className="relative w-full h-48 sm:h-60 md:h-72 lg:h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold shadow-lg mb-5">{title}</h1>
      </header>
    </div>
  )
}

export default Header;