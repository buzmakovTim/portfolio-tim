import React from 'react'
import style from './Skill.module.css'


export const Skill = (props) => {

    return (
        <div className={style.skill}>
            
                <div className={style.icon}>

                </div>
                <h2>{props.title}</h2>
                <div>
                    {props.description}
                </div>
            
            
        </div>
    )
}