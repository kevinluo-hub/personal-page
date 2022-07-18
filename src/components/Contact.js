import React from "react";
import contactData from '../data/contactData'

export default function Contact() {
    const contacts = contactData.data.map(x => <a href={x.link} target="_blank" rel='noreferrer' className="menu-item">{x.name}</a>)
    return (
        <div className="flex contact">
            {contacts}
        </div>
    )
}