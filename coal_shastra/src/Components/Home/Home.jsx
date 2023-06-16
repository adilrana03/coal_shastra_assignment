// import Notfound from './Components/State_API/NotFound';
import MarketTab from '../MarketTab/MarketTab';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import SubmitForm from '../SubmitForm/SubmitForm';
import PricingDetails from '../PricingDetails/PricingDetails';
import { useState } from 'react';
import Dialogue from '../Dialogue/Dialogue';
import Contact from '../Contract/Contract';




function Home() {
        const [state, setState] = useState(false);

        const data1= {
                name:"IOANNIS",
                weight:5906,
                add:"IOANNIS, San Nicolas, abc contract, US COAL, ChandraPur-HLC-2",
                bid_p:0.00,
                f_p:"****",
                l_match:0.00
        }
        const data2= {
                name:"TEST EAUCTION 6750 NAR",
                weight:6750,
                add:"Test Vassel eAuction 6750 NAR",
                bid_p:0.00,
                f_p:"****",
                l_match:0.00
        }
        const data3= {
                name:"MV SAMJOHN SOLIDARITY",
                weight:6968,
                add:"MV SAMJOHN SOLIDARITY",
                bid_p:12505.00,
                f_p:11995,
                l_match:14840.00
        }
        return (
                <>
                        <div className='Home' style={{ textAlign: "center", alignItems: "center" }}>
                                <div style={{ display: "flex", marginBottom: "70px", marginLeft: "-500px", marginTop: "10px" }}>
                                        <Filter style={{ marginLeft: "-500px" }} />
                                        <Search />
                                </div>
                                <div style={{ marginLeft: "10px", display: "flex", width: "100%" }}>
                                        <div style={{}}>
                                                <Contact data={data1} />
                                                <Contact data= {data2}/>
                                                <Contact data={data3} />
                                        </div>
                                        <div style={{ marginLeft: "20px" }}>
                                                <PricingDetails />
                                        </div>
                                </div >
                                <div style={{ marginLeft: "550px", marginRight: "-880px" }} >
                                        {
                                                state ? <Dialogue data={setState} /> : <SubmitForm data={setState} />
                                        }
                                </div>
                        </div>
                </>
        );
}

export default Home;
