import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll'
import { ProjectType } from '../../state/State'
import style from './ProjectDetailed.module.css'
import github from './../../img/github.png'
import web from './../../img/web.png'
import arrowBack from './../../img/arrowBack.png';

type ProjectDitailedPropsType = {
    project: ProjectType
}

export const ProjectDetailed: React.FC<ProjectDitailedPropsType> = ({project}) => {

    const backToMyProjects = () => {
        return ( 
        <div className={style.back}>
            
        <Link to='myProjects'
                            spy={true}
                            smooth={true}
                            offset={-55}
                            duration={500}
                            >
            <NavLink to={'/'}>
            <img className={style.arrowBack} src={arrowBack} alt="" />
            </NavLink>
        </Link>
        </div>
        )
    }



    // alert('ProjectDitailed Called!')
    return (
        <div>

        {/* Back button */}
        {backToMyProjects()}
        
        
        {/* Container */}
        <div className={style.container}>
            

            <div className={style.title}>
                <h2>{project.title}</h2>
            </div>
            
            {/* Image */}
            <img src={project.imageUrl} />

{/* Description  start*/}

            {/* Description One */}
            <div className={style.descriptionOne}>
                <span>{project.descriptionOne}</span>
            </div>

            {/* Description Two */}
            <div className={style.description}>
                <span>{project.descriptionTwo}</span>
            </div>
            
            {/* Description Three */}
            <div className={style.description}>
                <span>{project.descriptionThree}</span>
            </div>

            {/* Description Four */}
            <div className={style.description}>
                <span>{project.descriptionFour}</span>
            </div>

            {/* Description Five */}
            <div className={style.descriptionFive}>
                <span>{project.descriptionFive}</span>
            </div>

            

{/* Description  end*/}

            {/* Links for Git or WebPage start*/}
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

        {/* Back button */}
        {backToMyProjects()}
        </div>
    )
}
