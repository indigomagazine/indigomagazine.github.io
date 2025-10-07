import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import VisualArtsPage from './pages/VisualArtsPage';
import AboutPage from './pages/AboutPage';
import CreativePage from './pages/CreativePage';
import KismetPage from './pages/KismetPage';
import NOTPage from './pages/NOTPage';
import OtherworldlyPage from './pages/OtherworldlyPage';
import ReminiscencePage from './pages/ReminiscencePage';
import LadyOfTheCastle from './pages/articles/LadyOfTheCastle';
import Judas from './pages/articles/Judas';
import Ephemeral from './pages/articles/Ephemeral';
import GiveMeASign from './pages/articles/GiveMeASign';
import IKnowTheEnd from './pages/articles/IKnowTheEnd';
import KismetArticle from './pages/articles/KismetArticle';
import Metamorphosis from './pages/articles/Metamorphosis';
import MeteorShower from './pages/articles/MeteorShower';
import Saboteur from './pages/articles/Saboteur';
import WhatRemainsOfAStar from './pages/articles/WhatRemainsOfAStar';
import AirItOut from './pages/articles/AirItOut';
import Disconnect from './pages/articles/Disconnect';
import QuietDevourment from './pages/articles/QuietDevourment';
import EchoSystems from './pages/articles/EchoSystems';
import InTheWind from './pages/articles/InTheWind';
import LaQuinta from './pages/articles/LaQuinta';
import Amsterdam from './pages/articles/Amsterdam';
import HeLovesMe from './pages/articles/HeLovesMe';
import BlueSlumber from './pages/articles/BlueSlumber';
import Dystheism from './pages/articles/Dystheism';
import Reflections from './pages/articles/Reflections';
import ThisThatDrivesUs from './pages/articles/ThisThatDrivesUs';
import ToBeHuman from './pages/articles/ToBeHuman';
import ToBeOrNotToBe from './pages/articles/ToBeOrNotToBe';
import TheRestaurant from './pages/articles/TheRestaurant';
import YaKnowWhatIMiss from './pages/articles/YaKnowWhatIMiss';
import YoursAndMine from './pages/articles/YoursAndMine';
import HHM from './pages/articles/HHM';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/visualarts" element={<VisualArtsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/creative" element={<CreativePage />} />
          <Route path="/kismet" element={<KismetPage />} />
          <Route path="/NOT" element={<NOTPage />} />
          <Route path="/otherworldly" element={<OtherworldlyPage />} />
          <Route path="/reminiscence" element={<ReminiscencePage />} />
          
          {/* Article Routes */}
          <Route path="/articles/kismet/theladyofthecastle" element={<LadyOfTheCastle />} />
          <Route path="/articles/kismet/judas" element={<Judas />} />
          <Route path="/articles/kismet/ephemeral" element={<Ephemeral />} />
          <Route path="/articles/kismet/giveMeASign" element={<GiveMeASign />} />
          <Route path="/articles/kismet/iknowtheend" element={<IKnowTheEnd />} />
          <Route path="/articles/kismet/kismetarticle" element={<KismetArticle />} />
          <Route path="/articles/kismet/metamorphosis" element={<Metamorphosis />} />
          <Route path="/articles/kismet/meteorShower" element={<MeteorShower />} />
          <Route path="/articles/kismet/saboteur" element={<Saboteur />} />
          <Route path="/articles/kismet/whatRemainsOfAStar" element={<WhatRemainsOfAStar />} />
          <Route path="/articles/NOT/airitout" element={<AirItOut />} />
          <Route path="/articles/NOT/Disconnect" element={<Disconnect />} />
          <Route path="/articles/NOT/quietdevourment" element={<QuietDevourment />} />
          <Route path="/articles/NOT/echosystems" element={<EchoSystems />} />
          <Route path="/articles/NOT/inthewind" element={<InTheWind />} />
          <Route path="/articles/NOT/laQuinta" element={<LaQuinta />} />
          <Route path="/articles/reminiscence/amsterdam" element={<Amsterdam />} />
          <Route path="/articles/reminiscence/helovesme" element={<HeLovesMe />} />
          <Route path="/articles/reminiscence/therestaurant" element={<TheRestaurant />} />
          <Route path="/articles/reminiscence/yaknowwhatimiss" element={<YaKnowWhatIMiss />} />
          <Route path="/articles/reminiscence/yoursandmine" element={<YoursAndMine />} />
          <Route path="/articles/otherworldly/BlueSlumber" element={<BlueSlumber />} />
          <Route path="/articles/otherworldly/Dystheism" element={<Dystheism />} />
          <Route path="/articles/otherworldly/reflections" element={<Reflections />} />
          <Route path="/articles/otherworldly/Thisthatdrivesus" element={<ThisThatDrivesUs />} />
          <Route path="/articles/otherworldly/ToBeHuman" element={<ToBeHuman />} />
          <Route path="/articles/otherworldly/Tobeornottobe" element={<ToBeOrNotToBe />} />
          <Route path="/articles/misc/hhm" element={<HHM />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;