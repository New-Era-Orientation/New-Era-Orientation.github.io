import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center max-w-4xl mx-auto">
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient-x">
        Cùng nhau thủ khoa Tin học
      </h2>
      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        Nơi chia sẻ kiến thức, kinh nghiệm và cùng nhau thủ khoa môn Tin học.
      </p>
    </section>
  );
};

// FIX: Add missing default export for the Hero component.
export default Hero;
