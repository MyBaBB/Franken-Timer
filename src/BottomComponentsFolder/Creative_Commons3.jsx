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
    <div className="fixed bottom-0 left-4  z-50">
      <button
        className={`rounded bg-gray-800 px-2 text-[10px] text-orange-400 text-opacity-90
         hover:bg-gray-700 ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Credits
      </button>

      {isOpen && (
        <div className="mt-2 rounded bg-gray-900/50 p-2 text-center text-white shadow-md">
          <hr className="my-1 opacity-50" />
          <a
            href="(https://skfb.ly/6XOnU)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] z-50 font-thin text-orange-400 hover:text-blue-400"
          >
            Eyeball Parts
          </a>
          <hr className="my-1 opacity-50" />
        </div>
      )}
    </div>
  );
};

export default Credits;
