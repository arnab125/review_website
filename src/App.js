
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar"
import Home from "./Components/Home";
import Reviews from "./Components/Reviews";
import Dashboard from "./Components/Dashboard";
import Faq from "./Components/Blog";
import NotFound from "./Components/NotFound";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path ="/reviews" element={<Reviews />}></Route>
        <Route path ="/dashboard" element={<Dashboard />}></Route>
        <Route path ="/blog" element={<Faq />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;