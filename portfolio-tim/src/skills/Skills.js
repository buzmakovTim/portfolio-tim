import React from 'react'
import style from './Skills.module.css'
import { Skill } from './skill/Skill'

export const Skills = () => {

    return (
        <div className={style.skills}>
            <div className={style.container}>
                <h2>Skills</h2>
                
                <div className={style.skilsContainer}>
                    
                    <Skill title={'JS'} description={'Descriptino bla bla bla'}/>    
                    
                    <Skill title={'JS'} description={'Descriptino bla bla blkj gle lejrg lekrjgl la'}/>    
                    
                    <Skill title={'JS'} description={'Descriptino bla bla bla'}/> 

                    <Skill title={'JS'} description={'Descriptino bla bla bla'}/>    
                    
                    <Skill title={'JS'} description={'Descriptino bla bla blkj gle lejrg lekrjgl la'}/>    
                    
                    <Skill title={'JS'} description={'Descriptino bla bla bla'}/>     
                    
                </div>
            </div>
            
        </div>
    )
}