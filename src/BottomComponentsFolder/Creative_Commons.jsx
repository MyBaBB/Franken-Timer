import { useState, useEffect } from "react";

const Credits = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsOpen(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 left-4 z-50 text-xs">
      <button
        className={`rounded bg-gray-800 px-2 py-1 text-[.5rem] text-white text-opacity-90 hover:bg-gray-700 ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
      >
        Credits
      </button>

      {isOpen && (
        <div className="relative mt-2">
          {/* Hover Target */}
          <div className="inline-block rounded bg-gray-900/50 p-2 text-center text-white shadow-md">
            <span className="text-[10px] font-thin opacity-80">
              &quot;EYE FREE MODEL 3D BY Oscar creativo" (https://skfb.ly/6XOnU) by OSCAR CREATIVO is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
            </span>

          
          </div>
        </div>
      )}
    </div>
  );
};

export default Credits;
