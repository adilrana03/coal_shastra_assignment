// import Notfound from './Components/State_API/NotFound';
import Contact from './Components/Contract/Contract';
import MarketTab from './Components/MarketTab/MarketTab';
import Filter from './Components/Filter/Filter';
import Search from './Components/Search/Search';
import SubmitForm from './Components/SubmitForm/SubmitForm';
import PricingDetails from './Components/PricingDetails/PricingDetails';
import { useState } from 'react';
import Dialogue from './Components/Dialogue/Dialogue';
import { Route, Routes } from 'react-router-dom'
import Page from './Components/PageNotFound/Page';
import Home from './Components/Home/Home';
import Indo from './Components/Pages/Indo';
import Wcl from './Components/Pages/Wcl';
import Vizag from './Components/Pages/Vizag';
import Usaun from './Components/Pages/Usaun';
import Nmangpt from './Components/Pages/Nmangpt';
import Fav from './Components/Pages/Fav';
import MCL from './Components/Pages/MCL';










function App() {
  const [state, setState] = useState(false);


  return (
    <>
      <div className='App' style={{ textAlign: "center", alignItems: "center" }}>
        <MarketTab />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MCL' element={<MCL />} />
          <Route path='/VIZAG' element={<Vizag />} />
          <Route path='/INDO' element={<Indo />} />
          <Route path='/NMANGPT' element={<Nmangpt />} />
          <Route path='/USAN' element={<Usaun />} />
          <Route path='/FAV' element={<Fav />} />
          <Route path='/WCL' element={<Wcl />} />
        </Routes>


      </div>
    </>
  );
}

export default App;
