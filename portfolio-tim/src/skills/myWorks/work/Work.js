import React from 'react'
import style from './Work.module.css'

export const Work = (props) => {

    return (
        <div className={style.work}>
               {/* <img src={props.image}></img> */}
               
               <div className={style.hideTitle}>
                    <h2>Todo List</h2>
               </div>
               
               
        </div>
    )
}