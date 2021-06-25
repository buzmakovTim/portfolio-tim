import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProjectType } from '../../state/State'
import style from './ProjectDetailed.module.css'
import github from './../../img/github.png'
import web from './../../img/web.png'

type ProjectDitailedPropsType = {
    project: ProjectType
}

export const ProjectDetailed: React.FC<ProjectDitailedPropsType> = ({project}) => {

    // alert('ProjectDitailed Called!')
    return (
        <>
        {/* Back */}
        <div className={style.back}>
        <NavLink to={'/'}>{'<< Back'}</NavLink>
        </div>
        
        {/* Container */}
        <div className={style.container}>
            
            

            <div className={style.title}>
                <h2>{project.title}</h2>
            </div>
            
            {/* Image */}
            <img src={project.imageUrl} />

            {/* Description */}
            <div className={style.description}>
                <span>{project.descriptionLong}</span>
            </div>

            {/* Links start*/}
            <div className={style.links}>
                
                
            {
                project.githubPage !== '' ? 
             
                <div className={style.block}>
                    <a target="blank" href={project.githubPage}>
                        <img src={github} />
                    </a>
                </div>
                : ''
            }
            {
                project.websiteLink !== '' ? 
             
                <div className={style.block}>
                    <a target="blank" href={project.websiteLink}>
                        <img src={web} />
                    </a>
                </div>
                : ''
            }
            </div>
            {/* Links ends*/}

        </div>
        
        </>
    )
}


    // id: string,
    // title: string,
    // descriptionShort: string,
    // descriptionLong: string,
    // imageUrl: string,
    // websiteLink: string,
    // githubPage: string, 