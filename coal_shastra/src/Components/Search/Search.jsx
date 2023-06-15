import React from 'react'
import { BsSearch } from 'react-icons/bs'
import style from "./Search.module.css";

const Search = () => {
  return (
    <div className={style.main}>
      <div>
        <input style={{padding:"15px 50px 15px 10px" , marginLeft:"-10px"}} type="text" placeholder='🔍 Search by Vassel, Type, etc...' />
      </div>
    </div>
  )
}

export default Search