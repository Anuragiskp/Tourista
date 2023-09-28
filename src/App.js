import Homepage from './Components/Hompage';
import News from './Components/News';
import Health from './Components/Health';
import About from './Components/About';
import Contact from './Components/Contact';
import TouristPlace from './Components/TouristPlace';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KommunicateChat from './chat';
// import './index.css';

function App() {

  const [siteInfo, setSiteInfo] = React.useState({});
  console.log(siteInfo);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage setSiteInfo = {setSiteInfo}/>} />
      </Routes>
      <Routes>
        <Route path="/news" element={<News />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/health" element={<Health />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path={"/site/" + siteInfo.city} element={<TouristPlace siteInfo = {siteInfo}/>} />
      </Routes>  
      <KommunicateChat/>
    </BrowserRouter>
  );
}

export default App;
