// eslint-disable-next-line no-unused-vars
import React from "react";
 

 
 
 
import EasterPage from "./PagesFolder/EasterPage/EasterComponents/EasterMain";
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
