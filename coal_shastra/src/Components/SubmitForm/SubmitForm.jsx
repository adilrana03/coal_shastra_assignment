import React, { useState } from 'react'
import style from './Submit.module.css';
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

const SubmitForm = () => {

        const [state, setState] = useState({
                vassels: "",
                quantity: "",
                offerPrice: "",
                PaymentTerms: "",
                Advance: "",
                Balance: "",
                NoOfPaymentDays: "",
                LiftingDays: "",
                Expiry: "",
                Address: "",
        })
        const [formData, setFormData] = useState(state);

        const [errors, setError] = useState(false);


        const handleSubmit = (e) => {
                e.preventDefault();
                setFormData(state);
                console.log(formData)
                let q = formData.quantity;
                let op = formData.offerPrice;
                let ad = formData.Advance;
                let bl = formData.Balance;
                let pd = formData.NoOfPaymentDays
                let ld = formData.LiftingDays
                // let ex = formData.Expiry;
                let add = formData.Address;


                if (q.length > 0 && op.length > 0 && ad.length > 0 && bl.length > 0 && pd.length > 0 && ld.length > 0 && add.length > 0) {
                        setError(false);
                        alert("Quantity = " + formData.quantity + "OfferPrice= " + formData.offerPrice + "Payment Term = " + formData.PaymentTerms + "Advance = " + formData.Advance + "   Balace =  " + formData.Balance + "No of Payment days = " + formData.NoOfPaymentDays + "Lifting Days =  " + formData.LiftingDays + "   Expiry = " + formData.Expiry + "  Address =  " + formData.Address)

                }
                else {
                        alert("PLS fill all the fields");
                        setError(true);
                }
        }







        return (
                <div className={style.main_div}>
                        <form action="">
                                <div className={style.top_div} style={{ display: "flex" }}  >
                                        <h3>Buy</h3>
                                        <h3>Sell</h3>
                                </div>
                                <hr />

                                <div className={style.mid_div}>
                                        <div>
                                                <h3>Vassel(s)<AiFillStar className={style.star} /></h3>
                                                <select style={{ padding: "10px 10px 10px 300px" }} id="" disabled="disabled"
                                                        onChange={(e) => {
                                                                setState({
                                                                        ...state,
                                                                        Vassels: e.target.value,
                                                                });

                                                        }}>

                                                </select>
                                        </div>
                                        <div>
                                                <h3>Quantity<AiFillStar className={style.star} /></h3>
                                                <input type="text" id="" placeholder='700  MT'
                                                        // value={state.quantity}
                                                        onChange={(e) => {
                                                                var a = e.target.value
                                                                if (a.length < 2) {
                                                                        console.log("aaaaaaaaaaaaaaaaa")
                                                                }
                                                                setState({
                                                                        ...state,
                                                                        quantity: e.target.value,
                                                                });
                                                        }} required />
                                        </div>
                                        <div>
                                                <h3>offer Price<AiFillStar className={style.star} /></h3>
                                                <input type="text" required placeholder='11000  INR/MT'
                                                        //  value={state.offerPrice}
                                                        onChange={(e) => {
                                                                setState({
                                                                        ...state,
                                                                        offerPrice: e.target.value,
                                                                });
                                                        }} />
                                        </div>
                                </div>



                                <div className={style.mid_div}>
                                        <div>
                                                <h4>Payment Terms<AiFillStar className={style.star} /></h4>
                                                <select style={{ padding: "12px 35px " }} id="" disabled="disabled">
                                                        <option value={state.PaymentTerms} >Cash & Carry</option>
                                                </select>
                                        </div>
                                        <div>
                                                <h4>Advance<AiFillStar className={style.star} /></h4>
                                                <input type="text" required placeholder='30                          %'
                                                        onChange={(e) => {
                                                                setState({
                                                                        ...state,
                                                                        Advance: e.target.value,
                                                                });
                                                        }} />
                                        </div>
                                        <div>
                                                <h4>Balance<AiFillStar className={style.star} /></h4>
                                                <input type="text" id="" placeholder='70                          %'
                                                        required onChange={(e) => {
                                                                setState({
                                                                        ...state,
                                                                        Balance: e.target.value,
                                                                });
                                                        }} />
                                        </div>
                                </div>
                                <div className={style.mid_div}>
                                        <div>
                                                <h4>No. of Payment Days <AiFillStar className={style.star} /></h4>
                                                <input type="text" placeholder='15                     Days'
                                                        // value={state.NoOfPaymentDays}
                                                        required
                                                        onChange={(e) => {
                                                                setState({
                                                                        ...state,
                                                                        NoOfPaymentDays: e.target.value,
                                                                });
                                                        }} />
                                        </div>
                                        <div>
                                                <h4>Lifting Days<AiFillStar className={style.star} /></h4>
                                                <input type="text" id="" placeholder='15       '
                                                        //  value={state.LiftingDays}
                                                        onChange={(e) => {
                                                                setState({
                                                                        ...state,
                                                                        LiftingDays: e.target.value,
                                                                });
                                                        }} required />
                                        </div>
                                        <div>
                                                <h4>Expiry<AiFillStar className={style.star} /></h4>
                                                <input type="text" id="" placeholder='70                          %'
                                                        //  value={state.Expiry}
                                                        required
                                                        onChange={(e) => {
                                                                setState({
                                                                        ...state,
                                                                        Expiry: e.target.value,
                                                                });
                                                        }} />
                                        </div>
                                </div>


                                <div className={style.btm_div}>
                                        <h4>Address<AiFillStar className={style.star} /></h4>
                                        <input style={{ padding: "10px", marginRight: "50px", background: "verylightgrey", width: "400px", marginLeft: "-350px" }} type="text" id=""
                                                placeholder='Tuna Port, kutch, Gujrat, 370365       🖊  '
                                                required
                                                // value={state.Address}
                                                onChange={(e) => {
                                                        setState({
                                                                ...state,
                                                                Address: e.target.value,
                                                        });
                                                }} />
                                </div>




                                <div className={style.lw_div}>
                                        <div >
                                                <h3>Making Yourself Hot?</h3>
                                                <div>
                                                        <ImCheckboxChecked style={{ color: "blue", marginRight: "20px" }} />
                                                        <h3>HOT 🔥</h3>
                                                </div>

                                        </div>
                                        <div>
                                                <h3>Posting Your Listing On?</h3>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                        <ImCheckboxChecked style={{ color: "lightgrey", marginRight: "10px" }} />
                                                        <h3>CoalShastra</h3>
                                                        <ImCheckboxUnchecked style={{ color: "lightgrey", marginRight: "20px", marginLeft: "20px" }} />
                                                        <h3>Brand Store</h3>
                                                </div>
                                        </div>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", color: "blue", marginLeft: "30px" }}>
                                        <AiOutlinePlus />
                                        <h3>Add Special Comments</h3>
                                </div>


                                <div >
                                        {
                                                errors ? <h4>Please fill all the fiels</h4> : ""
                                        }
                                        <button className={style.btn} onClick={handleSubmit}>SUBMIT YOUR PRODUCT</button>
                                </div>
                        </form>
                </div>
        )
}

export default SubmitForm