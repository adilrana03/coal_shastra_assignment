import React from 'react'
import {BsSearch} from 'react-icons/bs'
import style from "./Search.module.css";

const Search = () => {
  return (
    <div className={style.main}>
        <div className={style.main2}>
                <BsSearch/>
        </div>
        <div>
                Search by Vassel, Type, etc...
        </div>
    </div>
  )
}

export default Search