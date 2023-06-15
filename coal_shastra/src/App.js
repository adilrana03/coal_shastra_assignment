// import Notfound from './Components/State_API/NotFound';
import Contact from './Components/Contract/Contract';
import MarketTab from './Components/MarketTab/MarketTab';
import Filter from './Components/Filter/Filter';
import Search from './Components/Search/Search';
import SubmitForm from './Components/SubmitForm/SubmitForm';
import PricingDetails from './Components/PricingDetails/PricingDetails';
import { useState } from 'react';





function App() {


  const [state, setState]= useState(false);

  
  return (
    <>
      <div className='App' style={{ textAlign: "center", alignItems: "center" }}>
        <MarketTab />
        <div style={{ display: "flex", marginBottom: "70px", marginLeft:"-500px", marginTop:"10px" }}>
          <Filter  style={{marginLeft:"-500px"}}/>
          <Search />
        </div>
        <div style={{ marginLeft: "10px", display: "flex", width:"100%" }}>
          <div style={{ }}>
            <Contact />
            <Contact />
            <Contact />
          </div>
          <div style={{ marginLeft:"20px"}}>
            <PricingDetails />
          </div>

        </div >

         <SubmitForm />
        
        
      </div>
    </>
  );
}

export default App;
