import React from 'react'
import kluo from '../images/kluo.jpeg'

export default function About({collapse}) {
    return (
        <div className={`about ${collapse ? "center" : "flex"}`}>
            <img src={kluo} alt="Kevin Luo Profile" className="profile-pic" /> 
            <div className="about-text">
                <p className='title'>A Little More About Myself...</p>
                <p> Hello World! I am a new Computer Science graduate from the University of Massachusetts Amherst. 
                    I have experience in different areas, including machine learning, data analysis, frontend development and more. 
                    Outside of technology, I am deeply passionated in fitness. One of my life goal is to have my own fitness brand.
                    Currently, I am working at Optum, contributing to their goal of making the health care system better for everyone.
                </p>
            </div>
        </div>
    )
}