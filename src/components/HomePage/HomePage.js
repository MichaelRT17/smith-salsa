import React from 'react';
import DrawButton from '../DrawButton';
import { Parallax } from 'react-parallax';
import salsa from '../../images/Salsa.jpeg';
import './home-page.css';

function HomePage() {
    return (
        <div>
            <Parallax
                blur={1}
                strength={200}
                // bgImage={require('../../images/Salsa.jpeg')}
                bgImageAlt="salsa"
            >
                <div style={{ height: '600px'}} /> 
            </Parallax>
            {/* <img src={salsa} alt='salsa' className='main-salsa-image' /> */}
            <DrawButton buttonName='Order' />
            <div style={{ height: '600px'}} /> 
            <DrawButton buttonName='About Us' destination='about-us'/>
        </div> 
    )
}

export default HomePage;