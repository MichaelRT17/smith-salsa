import React from 'react';
import abbyAndPreston from '../../images/Abby-and-Preston.jpg';
import './about-page.css';

function AboutPage() {
    return (
        <div style={{color: 'black'}}>
            <img src={abbyAndPreston} alt='abby and preston, the owners' className='image-of-abby-and-preston' />
        </div> 
    )
}

export default AboutPage;