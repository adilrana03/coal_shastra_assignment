import React from 'react';
import './Market.css';

import { AiFillStar } from 'react-icons/ai'



const MarketTab = () => {
        return (
                <div>
                        <div className='market-div'>
                                <div style={{display:"flex", alignItems:"center"}}>
                                        <AiFillStar style={{marginRight:"15px"}}/>
                                        <h3>FAV</h3>
                                </div>
                                <div>

                                        <h3 style={{color:"blue"}}>USAGUJ</h3>
                                </div>
                                <div>

                                        <h3>WCL</h3>
                                </div>
                                <div>

                                        <h3>MCL</h3>
                                </div>
                                <div>

                                        <h3>VIZAGPT</h3>
                                </div>
                                <div>

                                        <h3>INDOGUJ</h3>
                                </div>
                                <div>

                                        <h3>NMANGPT</h3>
                                </div>
                                <div>

                                        <h3>USAUN</h3>
                                </div>
                                <div>

                                        <h3>USAM</h3>
                                </div>
                                <div>

                                        <h3>ECL</h3>
                                </div>
                                <div>

                                        <h3>ENNKAPT</h3>
                                </div>

                        </div>
                </div>
        )
}

export default MarketTab