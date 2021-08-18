import React from 'react'
import style from './Skills.module.css'
import { Skill } from './skill/Skill'
import { Fade } from "react-awesome-reveal";

import { SkillType } from '../state/State'
import { Separator } from '../common/Components/Separator';


type SkillsPropsType = {
    skills: SkillType[]
}

export const Skills = (props: SkillsPropsType) => {


    const skills = props.skills.map( skill => {
        return (
            <>    
                <Fade direction='up'>
                    <Skill skill={skill}/>
                </Fade>
                
            </>
        )
    })

    return (
        
        <div className={style.skills} id='skills'>
            <div className={style.container}>
                {/* Title */}
                <div className={style.title}>
                    <Fade direction='left'>
                        
                        <h2>Skills</h2>
                        <Separator />
                        
                    </Fade>
                    
                </div>
                <div className={style.skillsContainer}>
                    
                    {/* Skills */}
                    {skills}

                </div>
                
            </div>
        </div>
    )
}