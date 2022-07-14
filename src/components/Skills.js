import React from 'react'
import Skill from './Skill'
import skillsData from '../data/skillsData'
import Slider from 'react-slick'


export default function Skills() {
    const settings = {
    slidesToScroll: 1,
    slidesToShow: 4,
    speed: 500,
    responsive: [
        {
            breakpoint: 750,
            settings: {
            slidesToShow: 1
            }
        },
        {
            breakpoint: 1100,
            settings: {
            slidesToShow: 2
            }
        },
        {
            breakpoint: 1600,
            settings: {
            slidesToShow: 3
            }
        }
    ]
    };

    const skillCards = skillsData.data.map(x => <Skill img={x.image} title={x.title} text={x.text}/>)
    return (
        <div className='skills'>
            <Slider {...settings}>{skillCards}</Slider>
        </div>
    )
}
