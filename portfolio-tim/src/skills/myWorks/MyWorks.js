import React from 'react'
import style from './MyWorks.module.css'
import { Work } from './work/Work'
import checkWeight from './../../img/checkWeight.png'
import todoList from './../../img/todoList.png'
import socialNetwork from './../../img/socialNetwork.png'
import otherProject from './../../img/otherProject.png'

export const MyWork = () => {

    return (
        <div className={style.myWorks}>
               
               <div className={style.container}>
                    <div className={style.title}>
                        <h2>My Projects</h2>
                    </div>
                    <div className={style.works}>
                        
                        <Work image={checkWeight}/>
                        <Work image={socialNetwork}/>
                        <Work image={todoList}/>
                        <Work image={otherProject}/>
                        

                    </div>
               </div>
               
        </div>
    )
}