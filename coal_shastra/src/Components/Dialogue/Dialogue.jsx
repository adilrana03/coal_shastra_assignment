import React from 'react'

const Dialogue = ({data}) => {


        let vs = localStorage.getItem("vs");
        let qt = localStorage.getItem("qt");
        let op = localStorage.getItem("op");
        let pt = localStorage.getItem("pt");
        let ad = localStorage.getItem("ad");
        let bl = localStorage.getItem("bl");
        let npd = localStorage.getItem("npd");
        let ld = localStorage.getItem("ld");
        let ex = localStorage.getItem("ex");
        let add = localStorage.getItem("add");


        const handleClick = () => {
          data(false)
        }

  return (
    <div style={{border:"1px solid black", boxShadow:"0 0 10px black"}}>
      <div>
        <button style={{padding:"20px", fontSize:"30px"}} onClick={handleClick}>X</button>
      </div>
      <div>

        <h3>Vassels  : {vs}</h3>
        <h3>Quantity   : {qt}</h3>
        <h3>Offer    : {op}</h3>
        <h3>Payment Terms   : {pt} </h3>
        <h3>Advance   : {ad} </h3>
        <h3>Balance   : {bl} </h3>
        <h3>No. of Payment Days   : {npd}</h3>
        <h3> Lifting Days   : {ld} </h3>
        <h3>Expiry   : {ex} </h3>
        <h3>Address   : {add}</h3>
      </div>
    </div>
  )
}

export default Dialogue