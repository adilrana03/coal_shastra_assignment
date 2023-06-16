import React from 'react'
import './Contract.css';
import { HiShare } from "react-icons/hi";
import { IoMdDownload } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import { GiUsaFlag } from 'react-icons/gi'
import { MdLocationOn } from 'react-icons/md'
import { RiShipLine } from 'react-icons/ri'

const Contact = ({data}) => {
        return (
                <>
                        <div className='main-div'>
                                <div className='upper-div'>
                                        <div>
                                                <h3>{data.name}</h3>
                                        </div>
                                        <div style={{ margin: "10px" }}>
                                                <HiShare style={{ marginRight: "20px" }} />
                                                <IoMdDownload style={{ marginRight: "20px", color: "blue" }} />
                                                <AiFillStar style={{ marginRight: "20px", color: "gold" }} />
                                        </div>
                                </div>



                                <div className='mid-div'>
                                        <div style={{ display: "flex", alignItems: "center",  }}>
                                                <GiUsaFlag style={{ color: "red",  marginBottom:"-35px",marginRight: "-20px" }} />
                                                <p>United States |</p>
                                        </div>
                                        <div style={{ display: "flex", marginRight: "30px", alignItems: "center" }}>
                                                <MdLocationOn style={{ marginRight: "-20px",  marginBottom:"-35px" }} />
                                                <p>Tuna Port |</p>
                                        </div>
                                        <div>
                                                <p>{data.wight} (Kcal/kg)</p>
                                        </div>
                                </div>


                                <div style={{ display: "flex", alignItems: "center", marginLeft: "20px", marginTop: "-20px", marginBottom: "-30px" }}>
                                        <RiShipLine style={{ marginRight: "10px" }} />
                                        <h4>{data.add}</h4>
                                </div>


                                <div className='btm-div' style={{ display: "flex" }}>
                                        <div>
                                                <h4> Best Buys/MT</h4>
                                                <h3>{data.bid_p}.00</h3>
                                        </div>
                                        <div>
                                                <h4> Best Seller/MT</h4>
                                                <h3>{data.f_p}</h3>
                                        </div>
                                        <div>
                                                <h4> Last Match</h4>
                                                <h3>{data.l_match}.00</h3>
                                        </div>
                                </div>

                        </div>
                </>



        )
}

export default Contact