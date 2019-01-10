import React from 'react';
import DrawButton from '../DrawButton';
import { Parallax } from 'react-parallax';
// import salsa from '../../images/Salsa.jpeg';
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
                <div style={{ height: '500px'}} /> 
            </Parallax>
            {/* <img src={salsa} alt='salsa' className='main-salsa-image' /> */}
            <DrawButton buttonName='Order' destination='order/1' />
            <div className='content'>
                <div className='container'>
                    <ul className='list'>
                        <li className='item'>"We need more!"</li>
                        <li className='item'>"It's perfectly fresh."</li>
                        <li className='item'>"Buy this salsa. Please."</li>
                        <li className='item'>"Best salsa EVER!"</li>
                    </ul>
                </div>
            </div>
            <DrawButton buttonName='About Us' destination='about-us'/>
        </div> 
    )
}

export default HomePage;