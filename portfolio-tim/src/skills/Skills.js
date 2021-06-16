import React from 'react'
import style from './Skills.module.css'
import { Skill } from './skill/Skill'

export const Skills = () => {

    return (
        <div className={style.skills}>
            <div className={style.container}>
                
                {/* Title */}
                <div className={style.title}>
                    <h2>Skills</h2>
                </div>
                
                
                <div className={style.skillsContainer}>
                    
                    <Skill title={'REACT'} description={'Descriptino bla bla bla'}/>    
                    
                    <Skill title={'JS/TS'} description={'Descriptino bla bla blkj gle lejrg lekrjgl la'}/>    
                    
                    <Skill title={'C#'} description={'Descriptino bla bla bla'}/> 

                    <Skill title={'SWIFT'} description={'Descriptino bla bla bla'}/>    
                    
                    <Skill title={'HTML/CSS'} description={'Descriptino bla bla blkj gle lejrg lekrjgl la'}/>    
                    
                    <Skill title={'JAVA'} description={'Descriptino bla bla bla'}/>     
                    
                </div>
            </div>
            
        </div>
    )
}