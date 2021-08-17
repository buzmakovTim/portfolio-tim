import React from 'react'
import { ProjectType } from '../../state/State'
import style from './Project.module.css'
import { Fade } from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';

type ProjectPropsType = {
    project: ProjectType;
}

export const Project: React.FC<ProjectPropsType> = ({project}) => {

    


    return (
        <div className={style.work}>
            <Fade>

            {/* style={backGround} */}
            <div className={style.photoDiv}>
 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                style={{ backgroundColor: 'black' }}>
                
                    <img src={project.imageUrl}></img>
                
            
            </Tilt>
                
                <div className={style.viewButton}>Click to View</div>               

            </div>

            <h3>{project.title}</h3>
            {/* <span>{project.descriptionFour}</span> */}
            {/* <span>{project.descriptionFour}</span> */}
            </Fade>
        </div>
    )
}