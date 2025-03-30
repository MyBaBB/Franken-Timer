// eslint-disable-next-line no-unused-vars
import React from "react";
<<<<<<< HEAD
 

 
 
 
import EasterPage from "./PagesFolder/EasterPage/EasterComponents/EasterMain";
=======


import Main from "./main"

import EasterPage from "./PagesFolder/EasterPage/EasterComponents/Easter.jsx";
>>>>>>> b8c806f01068167614096b2dcee607e5c54f63ab
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <main>
        <Router>
          <Routes>
          
            <Route path="/" element={<EasterPage/>} />
         
         
            <Route path="/*" element={<EasterPage />} />
            <Route path="/EasterPage" element={<EasterPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};
export default App;
