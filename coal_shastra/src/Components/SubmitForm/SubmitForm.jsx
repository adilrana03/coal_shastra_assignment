// import React, { useState } from 'react'
// import style from './Submit.module.css';
// import { AiFillStar, AiOutlinePlus } from 'react-icons/ai';
// import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'





import React,{useState} from 'react'
import {Stack, TextField,Typography, Box,InputAdornment, MenuItem, Button, colors} from '@mui/material';
import {Checkbox} from '@mui/material';
import { grey } from '@mui/material/colors';
            
const SubmitForm = ({data}) => {
   const  initialData={
      vs:'',
      qt:'',
      op:'',
      pt:'',
      ad:'',
      bl:'',
      npd:'',
      ld:'',
      ex:'',
      add:'',
   }
   const  [state, setState]= useState(initialData);
   const  [formData, setformData]= useState('');

   console.log(state);

   const handleClick = () => {
      console.log(state)
      setformData(state);
      console.log(formData);
      data(true);
      localStorage.setItem("op",state.op);
      localStorage.setItem("qt",state.qt);
      localStorage.setItem("vs",state.vs);
      localStorage.setItem("pt",state.pt);
      localStorage.setItem("ad",state.ad);
      localStorage.setItem("bl",state.bl);
      localStorage.setItem("npd",state.npd);
      localStorage.setItem("ld",state.ld);
      localStorage.setItem("ex",state.ex);
      localStorage.setItem("add",state.add);

   }


  return (
    <Stack spacing={4}  width='48%' style={{padding:"30px 0px 40px 20px", boxShadow:"0 0 3px grey"}}>
      <Stack direction='row' spacing={8} >
         <Typography>Buy</Typography>
         <Typography  style={{color:"blue", textDecoration:"unline"}}>Sell</Typography>
      </Stack>
      <hr width="95%" />
        <Stack direction='col' spacing={4}  >
           {/* <label htmlFor="">Vassels</label> */}
           <TextField size='small' required label='Vassel(s)' select style={{width:"35%", marginRight:"20px"}} 
           value={state.vs}
           onChange={(e) => 
           setState({...state, vs:e.target.value})}
           helperText={!state.vs ? 'Required ' : ""}
           >
            <MenuItem value='1' label='1' >1</MenuItem>
            <MenuItem value='2' label='2' >2</MenuItem>
            <MenuItem value='3' label='3'>3</MenuItem>
           </TextField>

           <TextField type='number' size='small' required label='Quantity' InputProps={{
            endAdornment:<InputAdornment position='end'>MT</InputAdornment>
           }} 
           style={{width:"25%",marginRight:"20px"}}
           value={state.qt}
           onChange={(e) => {
            setState({...state, qt:e.target.value})
            localStorage.setItem("qt",e.target.value);
         }}
           helperText={!state.qt ? 'Required ' : ""}
           />
           <TextField size='small' type='number' required label='Offer Price' InputProps={{
            endAdornment:<InputAdornment position='end'>INR/MT</InputAdornment>
           }}
           style={{width:"25%"}}
           value={state.op}
           onChange={(e) => {
           setState({...state, op:e.target.value})
           localStorage.setItem("op",e.target.value);
         }
         }
           helperText={!state.op ? 'Required ' : ""}
           />
        </Stack>



        <Stack direction='row' spacing={2}  >
           <TextField size='small' required label='Payment Term' select style={{width:"30%"}}
           value={state.pt}
           onChange={(e) => {
           setState({...state, pt:e.target.value})
           localStorage.setItem("pt",e.target.value);
         }}
           helperText={!state.pt ? 'Required' : ""}
           >   
           <MenuItem value="Cash & Carry" label='Cash & Carry'>Cash & Carry</MenuItem>
           <MenuItem value="Loan" label="Loan">Loan</MenuItem>
           </TextField>


           <TextField size='small' type='number' required label='Advance' InputProps={{
            endAdornment:<InputAdornment position='end'>%</InputAdornment>
           }}
           style={{width:"25%"}}
           value={state.ad}
           onChange={(e) => {
           setState({...state, ad:e.target.value})
           localStorage.setItem("ad",e.target.value);

         }}
           helperText={!state.ad ? 'Required ' : ""}/>
           <TextField size='small' type='number' required label='Balance' InputProps={{
            endAdornment:<InputAdornment position='end'>%</InputAdornment>
           }}
           style={{width:"24%"}}
           value={state.bl}
           onChange={(e) => {
           setState({...state, bl:e.target.value})
           localStorage.setItem("bl",e.target.value);

         }}
           helperText={!state.bl ? 'Required ' : ""}
           />
        </Stack>



        <Stack direction='row' spacing={2} >
           <TextField size='small' type='number' required label='No of Payment days' InputProps={{
            endAdornment:<InputAdornment position='end'>Days</InputAdornment>

           }}
           
           value={state.npd}
           onChange={(e) => {
           setState({...state, npd:e.target.value})
           localStorage.setItem("npd",e.target.value);

         }}
           helperText={!state.npd ? 'Required ' : ""}
           />
           <TextField size='small' type='number' required label='Lifting Days' 
           value={state.ld}
           onChange={(e) => {
           setState({...state, ld:e.target.value})
           localStorage.setItem("ld",e.target.value);

         }}
           helperText={!state.ld ? 'Required ' : ""}
           />
           <TextField size='small'  required label='Expiry'
           value={state.ex}
           onChange={(e) => {
              setState({...state, ex:e.target.value})
              localStorage.setItem("ex",e.target.value);

            }}

           helperText={!state.ex ? 'Required ' : ""}
            />
        </Stack>

        <Stack width='46%'>
         <TextField size='small' label='Address' value={state.add}
           onChange={(e) => {
           setState({...state, add:e.target.value})
           localStorage.setItem("add",e.target.value);

         }}
           helperText={!state.add ? 'Required ' : ""}>
         </TextField>
        </Stack>

        <Stack direction='row' spacing={32}>
         <Box >
             <Typography>Make Your Listing Hot ?</Typography>
             <Checkbox defaultChecked style={{marginLeft:"-150px"}}/>
         </Box>


         <Box >
            <Typography >Posting Your Listing On ?</Typography>
            <Box style={{display:"flex", alignItem:"center" }}>
            <Box direction='col' style={{display:"flex", alignItem:"center" }}>
             <Checkbox defaultChecked style={{color:"grey",}} />
             <Typography>Coal Shastra</Typography>
            </Box>

            <Box style={{display:"flex", alignItem:"center"}}>
             <Checkbox defaultUnChecked />
             <Typography>Brand Store</Typography>
            </Box>
         </Box>
         </Box>
        </Stack>

        <Stack style={{marginLeft:"-600px"}}>
         <Typography style={{color:"blue"}}> + Add Special Comment</Typography>
        </Stack >
          <Stack width='35%'>
            {
            (state.vs).length <= 0  || (state.qt).length <= 0 || (state.op).length <= 0 || (state.pt).length <= 0 || (state.ad).length <= 0  || (state.bl).length <= 0 || (state.npd).length <= 0 || (state.ex).length <= 0  || (state.add).length <= 0 ?
            <Button disabled variant='contained' width='30%'>Submit Your Product</Button>
            :
               <Button onClick={handleClick} variant='contained' width='30%'>Submit Your Product</Button>
            }
          </Stack>
    </Stack>
  )
}

export default SubmitForm;


    // const [state, setState] = useState({
    //     vassels: "",
    //     quantity: "",
    //     offerPrice: "",
    //     PaymentTerms: "",
    //     Advance: "",
    //     Balance: "",
    //     NoOfPaymentDays: "",
    //     LiftingDays: "",
    //     Expiry: "",
    //     Address: "",
    // })
    // const [formData, setFormData] = useState(state);

    // const [errors, setError] = useState(false);


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormData(state);
    //     console.log(formData)
    //     let q = formData.quantity;
    //     let op = formData.offerPrice;
    //     let ad = formData.Advance;
    //     let bl = formData.Balance;
    //     let pd = formData.NoOfPaymentDays
    //     let ld = formData.LiftingDays
    //     // let ex = formData.Expiry;
    //     let add = formData.Address;


    //     if (q.length > 0 && op.length > 0 && ad.length > 0 && bl.length > 0 && pd.length > 0 && ld.length > 0 && add.length > 0) {
    //         setError(false);
    //         alert("Quantity = " + formData.quantity + "OfferPrice= " + formData.offerPrice + "Payment Term = " + formData.PaymentTerms + "Advance = " + formData.Advance + "   Balace =  " + formData.Balance + "No of Payment days = " + formData.NoOfPaymentDays + "Lifting Days =  " + formData.LiftingDays + "   Expiry = " + formData.Expiry + "  Address =  " + formData.Address)

    //     }
    //     else {
    //         alert("PLS fill all the fields");
    //         setError(true);
    //     }
    // }







    // <div>
    /* <form action="">
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
                </form> */
                // </div>
                
                
               
            
       