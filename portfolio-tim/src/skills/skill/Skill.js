import React from 'react'
import style from './Skill.module.css'


export const Skill = (props) => {

    const skillLevel = () => {

        let colored = "";
        let white = "";

        for(let i = 1; i <= 5; i++){
            if(i <= props.level){
                colored += ' * '
            } else {
                white += ' * '
            }
        }


        return (
            <div>
                <span className={style.blue}>{colored}</span>
                <span className={style.white}>{white}</span>
            </div>
        )
    }



    return (
        <div className={style.skill}>
            
                <div className={style.icon}>
                    <img src={props.image} />
                </div>
                <div className={style.title}>
                    <h2>{props.title}</h2>
                </div>
                
                <div className={style.description}>
                    {skillLevel()}
                </div>
            
            
        </div>
    )
}