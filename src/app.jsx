// eslint-disable-next-line no-unused-vars
import React from "react";


import Main from "./main"

import EasterPage from "./PagesFolder/EasterPage/EasterComponents/Easter.jsx";
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
          
            <Route path="/" element={<Main />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/*" element={<Main />} />
            <Route path="/EasterPage" element={<EasterPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};
export default App;
