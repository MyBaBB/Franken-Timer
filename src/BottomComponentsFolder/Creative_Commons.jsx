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

            {/* Tooltip */}
            <div className="pointer-events-none absolute -left-24 -top-20 w-48 rounded bg-gray-800/90 p-2 text-[10px] text-white opacity-0 shadow-lg transition-opacity duration-300 hover:opacity-100">
              <p className="leading-tight">
                “Holy Cross (game ready asset)” by Aparicio Silva 3D licensed
                under Creative Commons Attribution.
              </p>
              <a
                href="https://skfb.ly/oNnAu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline"
              >
                View Asset
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Credits;
