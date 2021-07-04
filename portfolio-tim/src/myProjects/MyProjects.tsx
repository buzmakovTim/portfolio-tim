import React, { useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { ProjectType } from '../state/State'
import style from './MyProjects.module.css'
import { Project } from './project/Project'
import { ProjectDetailed } from './project/ProjectDetailed'

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

        <NavLink to={`/${project.id}`} onClick={() => setProject(project)}>
            <Project project={project}/>
        </NavLink>
        </div>

    })

    const projectsToDisplay = () => {
        return (
        // <div className={style.myWorks} id='myProgects'>
               
        // <div className={style.container}>
        //      <div className={style.title}>
        //          <h2>My Projects</h2>
        //      </div>
             <div className={style.projects}>
                 
                 {projectsComponents}
                 

             </div>
        // </div>
        
        // </div> 
        )}

    

    return (  
        <div>
            <div className={style.myProjects} id='myProgects'>
               
               <div className={style.container}>
                    <div className={style.title}>
                        <h2>My Projects</h2>
                    </div>
            {/* {projectsToDisplay()} */}
            <Route exact path={'/'} render={ ()=> projectsToDisplay()}/>
            <Route exact path={`/${projectToDisplayDetails.id}`} render={ ()=> <ProjectDetailed project={projectToDisplayDetails}/>}/>
            </div>
        
        </div> 
        
        
        </div>
    )
}