import React from 'react'
import style from './Project.module.css'

export const Project = (props) => {

    return (
        <div className={style.work}>
               <img src={props.image}></img>
{/*                  
               <div className={style.hideTitle}>
                    <h2>Todo List</h2>
               </div> */}
               
               
        </div>
    )
}