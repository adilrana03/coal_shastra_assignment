import React from 'react'
import { GiUsaFlag } from 'react-icons/gi'
import { MdLocationOn, MdDownload } from 'react-icons/md'
import { RiShipLine } from 'react-icons/ri'
import { BiSolidDownload, BsFillPersonFill } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { FaHandshake } from 'react-icons/fa'

import style from './Pricing.module.css'

const PricingDetails = () => {
        return (
                <>
                        <div style={{ width: "860px", marginLeft: "0px", marginRight:"0px" , boxShadow:" 0 0 2px gray"}}>
                                <div style={{ display: "flex", padding: "20px", marginLeft:"12px" }}>
                                        <div style={{ alignItems: "center", color: "grey" }}>
                                                <div>
                                                        <h3>MV SAMJOHN SOLIDARITY</h3>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center", color: "gray", marginRight: "15px", marginTop: "-50px" }}>
                                                        <GiUsaFlag style={{ color: "red", marginBottom: "-30px", marginRight: "-20px" }} />
                                                        <p>United States |</p>
                                                        <MdLocationOn style={{ marginRight: "-20px", marginBottom: "-30px" }} />
                                                        <p>Tuna Port |</p>
                                                        <p>6968 NAR(Kcal/kg)</p>
                                                </div>
                                        </div>


                                        <div style={{ display: "flex", alignItems: "center", marginTop: "-30px", marginLeft: "170px" }} >
                                                <div >
                                                        <p>Last Match</p>
                                                        <h3 style={{ color: "blue", fontWeight: "bolder" }}> 14840.00/MT</h3>
                                                </div>
                                        </div>
                                </div>
                                <div style={{ display: "flex", textDecoration: "underline", padding: "20px", marginTop: "-35px", marginLeft:"10px" }}>
                                        <MdDownload />
                                        Download Report
                                </div>
                                <div style={{ margin: "-25px 30px -80px -660px",justifyContent:"flex-start" }}>
                                        <h2>All Listing</h2>
                                </div>




                                <div style={{display:"flex", width:"100%", padding:"10px"}}>
                                        <div style={{width:"60%"}}>
                                                <div style={{ padding: "20px" }}>
                                                        <div style={{ display: "flex", marginLeft: "-30px" }}>
                                                                <p>Required Quantity</p>
                                                                <p style={{ marginLeft: "100px" }}>Buyers</p>
                                                        </div>
                                                        <hr />
                                                        <div style={{ marginBottom: "-30px" }}>
                                                                <h3>#31886 | <span>(Views)</span></h3>
                                                        </div>


                                                        <div style={{ display: "flex" }}>
                                                                <h3>1000 MT | </h3>
                                                                <h3 style={{ color: "green", marginLeft: "50px" }}>INR 12505.00 /MT  </h3>
                                                        </div>

                                                        <div style={{ display: "flex", marginTop: "-20px" }}>
                                                                <h3>30 Lifting Days | </h3>
                                                                <h3 style={{ marginLeft: "50px" }}>Credit (0 Days)  </h3>
                                                        </div>

                                                        <div style={{ display: "flex", alignItems: "center", marginTop: "-20px", marginBottom: "-30px" }}>
                                                                <RiShipLine style={{ marginRight: "10px" }} />
                                                                <h4>MV SAMJOHN SOLIDARITY</h4>
                                                        </div>


                                                        <div style={{ display: "flex" }}>
                                                                {/* <BsFillPersonFill /> */}
                                                                <h4>Buyers Info</h4>
                                                        </div>


                                                        <div style={{ display: "flex", marginBottom: "-35px" }}>
                                                                <div style={{ display: "flex", color: "red" }}>
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        5
                                                                </div>



                                                                <div style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
                                                                        <FaHandshake />
                                                                        5+ (Mutual References)
                                                                </div>

                                                        </div>
                                                        <p style={{ marginLeft: "-140px" }}>
                                                                50K+ TONS | 100+ Deals | 2+ Years
                                                        </p>
                                                        <hr />
                                                </div>

                                                <div style={{ padding: "20px" }}>
                                                        <div style={{ marginBottom: "-30px", marginTop: "-50px" }}>
                                                                <h3>#31886 | <span>(Views)</span></h3>
                                                        </div>


                                                        <div style={{ display: "flex" }}>
                                                                <h3>1000 MT | </h3>
                                                                <h3 style={{ color: "green", marginLeft: "50px" }}>INR 12505.00 /MT  </h3>
                                                        </div>

                                                        <div style={{ display: "flex", marginTop: "-20px" }}>
                                                                <h3>30 Lifting Days | </h3>
                                                                <h3 style={{ marginLeft: "50px" }}>Credit (0 Days)  </h3>
                                                        </div>

                                                        <div style={{ display: "flex", alignItems: "center", marginTop: "-20px", marginBottom: "-30px" }}>
                                                                <RiShipLine style={{ marginRight: "10px" }} />
                                                                <h4>MV SAMJOHN SOLIDARITY</h4>
                                                        </div>


                                                        <div style={{ display: "flex" }}>
                                                                {/* <BsFillPersonFill /> */}
                                                                <h4>Buyers Info</h4>
                                                        </div>


                                                        <div style={{ display: "flex", marginBottom: "-35px" }}>
                                                                <div style={{ display: "flex", color: "red", marginBottom: "-60px" }}>
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        5
                                                                </div>



                                                                <div style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
                                                                        <FaHandshake />
                                                                        5+ (Mutual References)
                                                                </div>

                                                        </div>
                                                        <p style={{ marginLeft: "-140px" }}>
                                                                50K+ TONS | 100+ Deals | 2+ Years
                                                        </p>
                                                </div>
                                        </div>
{/* -------------------------------------------------2nd Div Side SStart from Here---------------------------------------------------------------- */}

                                        <div style={{width:"60%", marginLeft:"0px"}}>

                                                <div style={{  padding: "20px" }}>
                                                        <div style={{ display: "flex", marginLeft: "-30px" }}>
                                                                <p>Required Quantity</p>
                                                                <p style={{ marginLeft: "100px" }}>Buyers</p>
                                                        </div>
                                                        <hr />


                                                        <div style={{ marginBottom: "-30px" }}>
                                                                <h3>#31886 | <span>(Views)</span></h3>
                                                        </div>


                                                        <div style={{ display: "flex" }}>
                                                                <h3>1000 MT | </h3>
                                                                <h3 style={{ color: "green", marginLeft: "50px" }}>INR 12505.00 /MT  </h3>
                                                        </div>

                                                        <div style={{ display: "flex", marginTop: "-20px" }}>
                                                                <h3>30 Lifting Days | </h3>
                                                                <h3 style={{ marginLeft: "50px" }}>Credit (0 Days)  </h3>
                                                        </div>

                                                        <div style={{ display: "flex", alignItems: "center", marginTop: "-20px", marginBottom: "-30px" }}>
                                                                <RiShipLine style={{ marginRight: "10px" }} />
                                                                <h4>MV SAMJOHN SOLIDARITY</h4>
                                                        </div>


                                                        <div style={{ display: "flex" }}>
                                                                {/* <BsFillPersonFill /> */}
                                                                <h4>Buyers Info</h4>
                                                        </div>


                                                        <div style={{ display: "flex", marginBottom: "-35px" }}>
                                                                <div style={{ display: "flex", color: "red" }}>
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        5
                                                                </div>



                                                                <div style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
                                                                        <FaHandshake />
                                                                        5+ (Mutual References)
                                                                </div>

                                                        </div>
                                                        <p style={{ marginLeft: "-135px" }}>
                                                                50K+ TONS | 100+ Deals | 2+ Years
                                                        </p>
                                                        <hr />
                                                </div>

                                                <div style={{ width: "90%", padding: "20px" }}>
                                                        <div style={{ marginBottom: "-30px", marginTop: "-50px" }}>
                                                                <h3>#31886 | <span>(Views)</span></h3>
                                                        </div>


                                                        <div style={{ display: "flex" }}>
                                                                <h3>1000 MT | </h3>
                                                                <h3 style={{ color: "green", marginLeft: "50px" }}>INR 12505.00 /MT  </h3>
                                                        </div>

                                                        <div style={{ display: "flex", marginTop: "-20px" }}>
                                                                <h3>30 Lifting Days | </h3>
                                                                <h3 style={{ marginLeft: "50px" }}>Credit (0 Days)  </h3>
                                                        </div>

                                                        <div style={{ display: "flex", alignItems: "center", marginTop: "-20px", marginBottom: "-30px" }}>
                                                                <RiShipLine style={{ marginRight: "10px" }} />
                                                                <h4>MV SAMJOHN SOLIDARITY</h4>
                                                        </div>


                                                        <div style={{ display: "flex" }}>
                                                                {/* <BsFillPersonFill /> */}
                                                                <h4>Buyers Info</h4>
                                                        </div>


                                                        <div style={{ display: "flex", marginBottom: "-35px" }}>
                                                                <div style={{ display: "flex", color: "red", marginBottom: "-60px" }}>
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        <AiFillStar />
                                                                        5
                                                                </div>



                                                                <div style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
                                                                        <FaHandshake />
                                                                        5+ (Mutual References)
                                                                </div>

                                                        </div>
                                                        <p style={{ marginLeft: "-130px" }}>
                                                                50K+ TONS | 100+ Deals | 2+ Years
                                                        </p>
                                                </div>



                                        </div>




                                </div>

                        </div>









                </>
        )
}

export default PricingDetails