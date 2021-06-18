import React from 'react'
import style from './MyProjects.module.css'
import { Project } from './project/Project'
import checkWeight from './../img/checkWeight.png'
import todoList from './../img/todoList.png'
import socialNetwork from './../img/socialNetwork.png'
import otherProject from './../img/otherProject.png'

export const MyProjects = () => {

    return (
        <div className={style.myWorks} id='myProgects'>
               
               <div className={style.container}>
                    <div className={style.title}>
                        <h2>My Projects</h2>
                    </div>
                    <div className={style.works}>
                        
                        <Project image={checkWeight}/>
                        <Project image={socialNetwork}/>
                        <Project image={todoList}/>
                        <Project image={otherProject}/>
                        

                    </div>
               </div>
               
        </div>
    )
}