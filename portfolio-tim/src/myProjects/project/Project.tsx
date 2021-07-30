import React from 'react'
import { ProjectType } from '../../state/State'
import style from './Project.module.css'

type ProjectPropsType = {
    project: ProjectType;
}

export const Project: React.FC<ProjectPropsType> = ({project}) => {

    


    return (
        <div className={style.work}>
            
            {/* style={backGround} */}
            <div className={style.photoDiv}>
 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                <img src={project.imageUrl}></img>
                <div className={style.viewButton}>Click to View</div>               

            </div>

            <h3>{project.title}</h3>
            {/* <span>{project.descriptionFour}</span> */}

        </div>
    )
}