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
                    
                    <Skill title={'REACT'} image={react} description={'Descriptino bla bla bla'}/>    
                    
                    <Skill title={'JS/TS'} image={jsts} description={'Descriptino bla bla blkj gle lejrg lekrjgl la'}/>    
                    
                    <Skill title={'C#'} image={csharp} description={'Descriptino bla bla bla'}/> 

                    <Skill title={'SWIFT'} image={swift} description={'Descriptino bla bla bla'}/>    
                    
                    <Skill title={'HTML/CSS'} image={html} description={'Descriptino bla bla blkj gle lejrg lekrjgl la'}/>    
                    
                    <Skill title={'JAVA'} image={java} description={'Descriptino bla bla bla'}/>     
                    
                </div>
            </div>
            
        </div>
    )
}