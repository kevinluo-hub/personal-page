import React from 'react'
import Skill from './Skill'
import skillsData from '../data/skillsData'

export default function Skills() {
    const skillCards = skillsData.data.map(x => <Skill img={x.image} title={x.title} text={x.text}/>)
    return (
        <div className='skills'>
            {skillCards}
        </div>
    )
}