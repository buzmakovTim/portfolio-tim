import React from 'react'
import { SkillType } from '../../state/State'
import style from './Skill.module.css'

type SkillPropsType = {
    skill: SkillType;
}

export const Skill: React.FC<SkillPropsType> = ({skill}) => {

    const skillLevel = () => {

        let colored = "";
        let white = "";

        for(let i = 1; i <= 5; i++){
            if(i <= skill.level){
                colored += ' * '
            } else {
                white += ' * '
            }
        }


        return (
            <div>
                <span className={style.black}>{colored}</span>
                <span className={style.grey}>{white}</span>
            </div>
        )
    }



    return (
        <div className={style.skill}>
            
                <div className={style.icon}>
                    <img src={skill.imageUrl} />
                </div>
                <div className={style.title}>
                    <h2>{skill.title}</h2>
                </div>
                
                <div className={style.description}>
                    {skillLevel()}
                </div>
            
            
        </div>
    )
}