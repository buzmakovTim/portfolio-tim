import React from 'react'
import style from './Skills.module.css'
import { Skill } from './skill/Skill'
import swift from './../img/skills/swift.png'
import react from './../img/skills/react.png'
import jsts from './../img/skills/jsts.png'
import csharp from './../img/skills/csharp.png'
import java from './../img/skills/java.png'
import html from './../img/skills/html.png'

export const Skills = () => {

    return (
        <div className={style.skills} id='skills'>
            <div className={style.container}>
                
                {/* Title */}
                <div className={style.title}>
                    <h2>Skills</h2>
                </div>
                
                
                <div className={style.skillsContainer}>
                    
                    <Skill title={'REACT'} image={react} level={4}/>    
                    
                    <Skill title={'JS/TS'} image={jsts} level={4}/>    
                    
                    <Skill title={'C#'} image={csharp} level={4}/> 

                    <Skill title={'SWIFT'} image={swift} level={2}/>    
                    
                    <Skill title={'HTML/CSS'} image={html} level={4}/>    
                    
                    <Skill title={'JAVA'} image={java} level={3}/>     
                    
                </div>
            </div>
            
        </div>
    )
}