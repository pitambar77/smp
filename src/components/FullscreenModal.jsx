import React, { useEffect, useState } from 'react';
import { FaTimes  } from 'react-icons/fa';
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";


const FullscreenModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mounting
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 bg-opacity-90 flex items-center justify-center">
      <button
        className="absolute top-5 right-5 text-white text-2xl"
        onClick={onClose}
      >
        <FaTimes />
      </button>

      <button
        className="absolute left-5 text-white text-5xl"
        onClick={onPrev}
      >
        <IoMdArrowDropleft />
      </button>

      <img
        src={images[currentIndex]}
        alt={`fullscreen-img-${currentIndex + 1}`}
        className={`max-h-[90vh] max-w-[90vw] object-contain transition-all duration-500 ease-in-out transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />

      <button
        className="absolute right-5 text-white text-5xl"
        onClick={onNext}
      >
        <IoMdArrowDropright />
      </button>
    </div>
  );
};

export default FullscreenModal;
