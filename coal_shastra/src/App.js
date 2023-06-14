// import Notfound from './Components/State_API/NotFound';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Contact from './Components/Contract/Contract';
import MarketTab from './Components/MarketTab/MarketTab';
import Filter from './Components/Filter/Filter';
import Search from './Components/Search/Search';
import SubmitForm from './Components/SubmitForm/SubmitForm';
import PricingDetails from './Components/PricingDetails/PricingDetails';





function App() {


  return (
    <>
      <div className='App' style={{textAlign:"center", alignItems:"center"}}>
        <MarketTab />
        <div style={{ display: "flex", justifyContent:"space-between" , marginBottom:"100px"}}>
          <Filter />
          <Search />
        </div>
        <div style={{marginLeft:"30PX", display:"flex"}}>
          <div style={{width:"30%"}}>

        <Contact />
        <Contact />
        <Contact />
          </div>

        </div>

          <div>
        <PricingDetails />

          </div>

        <SubmitForm />

      </div>
    </>
  );
}

export default App;
