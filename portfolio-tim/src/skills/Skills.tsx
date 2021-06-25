import React from 'react'
import style from './Skills.module.css'
import { Skill } from './skill/Skill'

import { SkillType } from '../state/State'

type SkillsPropsType = {
    skills: SkillType[]
}

export const Skills = (props: SkillsPropsType) => {


    const skills = props.skills.map( skill => {
        return (
            <>    
                <Skill skill={skill}/>
            </>
        )
    })

    return (
        
        <div className={style.skills} id='skills'>
            <div className={style.container}>
                {/* Title */}
                <div className={style.title}>
                    <h2>Skills</h2>
                </div>
                <div className={style.skillsContainer}>
                    
                    {/* Skills */}
                    {skills}

                </div>
                
            </div>
        </div>
    )
}