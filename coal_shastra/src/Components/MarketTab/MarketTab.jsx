import React from 'react';
import './Market.css';
import { Link } from 'react-router-dom';

import { AiFillStar } from 'react-icons/ai'



const MarketTab = () => {
        return (
                <div>
                        <div className='market-div'>
                                <div style={{display:"flex", alignItems:"center"}}>
                                        <AiFillStar style={{marginRight:"15px"}}/>
                                        <Link to="/Fav">FAV</Link>
                                </div>
                                <div>

                                        <Link to='/' style={{color:"blue"}}>USAGUJ</Link>
                                </div>
                                <div>

                                        <Link to='/WCL'>WCL</Link>
                                </div>
                                <div>

                                        <Link to='/MCL'>MCL</Link>
                                </div>
                                <div>

                                        <Link to='/VIZAG'>VIZAGPT</Link>
                                </div>
                                <div>

                                        <Link to="/INDO">INDOGUJ</Link>
                                </div>
                                <div>

                                        <Link to='NMANGPT' >NMANGPT</Link >
                                </div>
                                <div>

                                        <Link to='USAN'>USAUN</Link >
                                </div>
                                <div>

                                        <Link to='USAM'>USAM</Link >
                                </div>
                                <div>

                                        <Link to='ECL'>ECL</Link >
                                </div>
                                <div>

                                        <Link to='ENNKAPT'>ENNKAPT</Link >
                                </div>

                        </div>
                </div>
        )
}

export default MarketTab