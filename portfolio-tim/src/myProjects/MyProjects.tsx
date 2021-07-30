import React, { useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { ProjectType } from '../state/State'
import style from './MyProjects.module.css'
import { Project } from './project/Project'
import { ProjectDetailed } from './project/ProjectDetailed'
import {Link} from 'react-scroll'

type MyProjectsPropsType = {
    projects: ProjectType[]
}

export const MyProjects: React.FC<MyProjectsPropsType> = ({projects}) => {

    const[projectToDisplayDetails, setProject] = useState<ProjectType>(projects[0])


    // const setPath = (project: ProjectType) => {

    //     setProject(project)
    //     alert(projectToDisplayDetails.id);
    // }

    const projectsComponents = projects.map( (project) => {

        return <div className={style.navLink}>

                <Link
                    to='myProgects'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    >
                        <NavLink to={`/${project.id}`} onClick={() => setProject(project)}>
                            <Project project={project}/>
                        </NavLink>
                        
                    </Link>
                    
        </div>

    })

    const projectsToDisplay = () => {
        return (

             <div className={style.projects}>
                 
                 {projectsComponents}
            
             </div>

        )}

    

    return (  
        <div>
            <div className={style.myProjects} id='myProgects'>
               
                <div className={style.container}>
                    
                    <div className={style.title}>
                        <h2>My Projects</h2>
                    </div>
                    
                    <Route exact path={'/'} render={ ()=> projectsToDisplay()}/>
                    <Route exact path={`/${projectToDisplayDetails.id}`} render={ ()=> <ProjectDetailed project={projectToDisplayDetails}/>}/>
                </div>
        
        </div> 
        
        
        </div>
    )
}