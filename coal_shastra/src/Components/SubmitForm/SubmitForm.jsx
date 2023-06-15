import React from 'react'
import style from './Submit.module.css';
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
// import {AiOutlinePlus}

const SubmitForm = () => {
        return (
                <div className={style.main_div}>
                        <div className={style.top_div} style={{ display: "flex" }}  >
                                <h3>Buy</h3>
                                <h3>Sell</h3>
                        </div>
                        <hr />

                        <div className={style.mid_div}>
                                <div>
                                        <h3>Vassel(s)<AiFillStar className={style.star} /></h3>
                                        <select style={{ padding: "10px 10px 10px 300px" }} id="" disabled="disabled"></select>
                                </div>
                                <div>
                                        <h3>Quantity<AiFillStar className={style.star} /></h3>
                                        <input type="text" id="" placeholder='700  MT' />
                                </div>
                                <div>
                                        <h3>offer Price<AiFillStar className={style.star} /></h3>
                                        <input type="text" id="" placeholder='11000  INR/MT' />
                                </div>
                        </div>



                        <div className={style.mid_div}>
                                <div>
                                        <h4>Payment Terms<AiFillStar className={style.star} /></h4>
                                        <select style={{ padding: "12px 35px " }} id="" disabled="disabled">
                                                <option value="">Cash & Carry</option>
                                                <option value="">A</option>
                                        </select>
                                </div>
                                <div>
                                        <h4>Advance<AiFillStar className={style.star} /></h4>
                                        <input type="text" id="" placeholder='30                          %' />
                                </div>
                                <div>
                                        <h4>Balance<AiFillStar className={style.star} /></h4>
                                        <input type="text" id="" placeholder='70                          %' />
                                </div>
                        </div>
                        <div className={style.mid_div}>
                                <div>
                                        <h4>No. of Payment Days <AiFillStar className={style.star} /></h4>
                                        <input type="text" placeholder='15                     Days' />
                                </div>
                                <div>
                                        <h4>Lifting Days<AiFillStar className={style.star} /></h4>
                                        <input type="text" id="" placeholder='15       ' />
                                </div>
                                <div>
                                        <h4>Expiry<AiFillStar className={style.star} /></h4>
                                        <input type="text" id="" placeholder='70                          %' />
                                </div>
                        </div>


                        <div className={style.btm_div}>
                                <h4>Address<AiFillStar className={style.star} /></h4>
                                <input style={{ padding: "10px", marginRight: "50px", background: "verylightgrey", width: "400px", marginLeft:"-350px" }} type="text" id="" placeholder='Tuna Port, kutch, Gujrat, 370365       🖊  ' />
                        </div>




                        <div  className={style.lw_div}>
                                <div >
                                        <h3>Making Yourself Hot?</h3>
                                        <div>
                                                <ImCheckboxChecked style={{color:"blue", marginRight:"20px"}}/>
                                                <h3>HOT 🔥</h3>
                                        </div>

                                </div>
                                <div>
                                        <h3>Posting Your Listing On?</h3>
                                        <div style={{display:"flex",alignItems:"center"}}>
                                                <ImCheckboxChecked style={{color:"lightgrey", marginRight:"10px"}} />
                                                <h3>CoalShastra</h3>
                                                <ImCheckboxUnchecked style={{color:"lightgrey", marginRight:"20px", marginLeft:"20px"}}/>
                                                <h3>Brand Store</h3>
                                        </div>
                                </div>
                        </div>

                        <div style={{display:"flex",alignItems:"center", color:"blue", marginLeft:"30px"}}> 
                                <AiOutlinePlus/>
                                <h3>Add Special Comments</h3>
                        </div>


                        <div className={style.last_div}>
                                <h3 style={{color:"white", textAlign:"center"}}>SUBMIT YOUR PRODUCT</h3>
                        </div>



                </div>
        )
}

export default SubmitForm