import React from 'react'
import style from './Skill.module.css'


export const Skill = (props) => {

    return (
        <div className={style.skill}>
            
                <div className={style.icon}>
                    <img src={props.image} />
                </div>
                <div className={style.title}>
                    <h2>{props.title}</h2>
                </div>
                
                <div className={style.description}>
                    {props.description}
                </div>
            
            
        </div>
    )
}