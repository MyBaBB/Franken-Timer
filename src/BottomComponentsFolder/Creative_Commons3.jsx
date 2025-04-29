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
    <div className="fixed bottom-4 right-4  z-50">
    <button
      className={`bg-gray-800 text-white text-opacity-90 px-2 text-[10px] rounded
         hover:bg-gray-700 ${isOpen ? 'hidden' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      Credits
    </button>

    {isOpen && (
      <div className="mt-2 bg-gray-900/50 text-white p-2 rounded shadow-md text-center">
       
        <hr  className="my-1 opacity-50"/>
        <a
          href="https://skfb.ly/oHKVD"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white  font-thin text-[10px] hover:text-blue-400"
        >
        War and Peace Helmet
        </a>
        <hr  className="my-1 opacity-50"/>
      </div>
    )}
  </div>
  );
};

export default Credits;