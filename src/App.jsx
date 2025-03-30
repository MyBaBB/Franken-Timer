import React from "react";
import Main from "./Main.jsx";
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
            {/* <Route path="/" element={<Zenith />} />
            <Route path="/*" element={<Zenith />} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/*" element={<Main/>} />
        
            <Route path="/*" element={<Navigate to="/" />} />
            
             
            {/* <Route path="/EasterPage" element={<EasterPage />} /> */}
      

          </Routes>
        </Router>
      </main>
    </div>
  );
};
export default App;
