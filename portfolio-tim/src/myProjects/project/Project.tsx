import React from 'react'
import { ProjectType } from '../../state/State'
import style from './Project.module.css'

type ProjectPropsType = {
    project: ProjectType;
}

export const Project: React.FC<ProjectPropsType> = ({project}) => {

    return (
        <div className={style.work}>
            <img src={project.imageUrl}></img>
        </div>
    )
}