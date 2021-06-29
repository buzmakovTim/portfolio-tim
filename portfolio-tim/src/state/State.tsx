import React from 'react';
import { v1 } from 'uuid';
import swift from './../img/skills/swift.png'
import react from './../img/skills/react.png'
import jsts from './../img/skills/jsts.png'
import csharp from './../img/skills/csharp.png'
import java from './../img/skills/java.png'
import html from './../img/skills/html.png'
import checkWeight from './../img/checkWeight.png'
import todoList from './../img/todoList.png'
import socialNetwork from './../img/socialNetwork.png'
import otherProject from './../img/otherProject.png'


export type SkillType = {
    title: string;
    level: 0 | 1 | 3 | 4 | 5;
    imageUrl: string
}
export type ProjectType = {
    id: string,
    title: string,
    descriptionOne: string,
    descriptionTwo: string,
    descriptionThree: string,
    descriptionFour: string,
    descriptionFive: string,
    imageUrl: string,
    websiteLink: string,
    githubPage: string, 
}

export type StateType = {
    skills: SkillType[],
    projects: ProjectType[]
}

const State : StateType = {
    
    skills: [
        {
            title: 'REACT',
            level: 4,
            imageUrl: react,
        },
        {
            title: 'JS/TS',
            level: 4,
            imageUrl: jsts,
        },
        {
            title: 'C#',
            level: 4,
            imageUrl: csharp,
        },
        {
            title: 'SWIFT',
            level: 3,
            imageUrl: swift,
        },
        {
            title: 'HTML/CSS',
            level: 4,
            imageUrl: html,
        },
        {
            title: 'JAVA',
            level: 3,
            imageUrl: java,
        },
    ],
    projects: [
        {
            id: v1(),
            title: 'Weight Check App (at Purdys Chocolate)',
            descriptionOne: 'This application currently inuse on the production floor at Purdys chocolate Ltd.',
            descriptionTwo: 'The application reading and validating the output data from packing line scales (scales are connected through serial port), and writing it into Excel file. Also the app monitoring weight and alerting the end users if product is over or underweight as well as sending email to the production supervisors office regarding issues on the line. Capturing and monitoring running efficiency',
            descriptionThree: 'This project was done by myself from initial idea, getting business requirements, designing, writing code, testing till implementing it in the production.',
            descriptionFour: 'Application written on C#',
            descriptionFive: 'Please check out Git Repository by clicking icon below',
            imageUrl: checkWeight,
            websiteLink: '',
            githubPage: 'https://github.com/buzmakovTim/scale-project-purdys',
        },
        {
            id: v1(),
            title: 'Social Network',
            descriptionOne: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionTwo: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionThree: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionFour: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionFive: 'Some Description about this project. It will be much more information. Bla Bla bla',
            imageUrl: socialNetwork,
            websiteLink: '',
            githubPage: 'https://github.com/buzmakovTim/social-network-typescript',
        },
        {
            id: v1(),
            title: 'TodoLists',
            descriptionOne: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionTwo: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionThree: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionFour: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionFive: 'Some Description about this project. It will be much more information. Bla Bla bla',
            imageUrl: todoList,
            websiteLink: 'https://buzmakovtim.github.io/toDoList/',
            githubPage: 'https://github.com/buzmakovTim/toDoList',
        },
        {
            id: v1(),
            title: 'Other Project',
            descriptionOne: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionTwo: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionThree: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionFour: 'Some Description about this project. It will be much more information. Bla Bla bla',
            descriptionFive: 'Some Description about this project. It will be much more information. Bla Bla bla',
            imageUrl: otherProject,
            websiteLink: '',
            githubPage: '',
        },
    ]

}

export default State;