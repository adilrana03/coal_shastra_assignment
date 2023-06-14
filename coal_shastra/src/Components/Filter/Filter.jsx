import React from 'react'
import style from './Filter.module.css'


const Filter = () => {
        return (
                <div className={style.maindiv}>
                        <div >
                                <div>
                                        <h5>Currency</h5>
                                        <select name="" id="" className={style.select} >
                                                <option value="" >INR</option>
                                        </select>
                                </div>

                        </div>
                        <div>
                                <div>
                                        <h5>Payment Methods</h5>
                                        <select name="" id="" className={style.select}>
                                                <option id={style.pay} value="">Payment Methods</option>
                                        </select>
                                </div>

                        </div>
                        <div>
                                <div>
                                        <h5>Lifting Days</h5>
                                        <input type="number" id={style.input} placeholder='Lifting Days' className={style.select} />
                                </div>

                        </div>

                        <div>
                                <p>Clear All</p>
                        </div>


                </div>
        )
}

export default Filter