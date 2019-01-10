import React from 'react';
import insIcon from '../images/instagram-logo.png';
import fbIcon from '../images/facebook-logo-button.png';
import twIcon from '../images/twitter-logo-button.png';
import './footer.css';

function Footer() {
    return (
        <div>
            <div className='social-media-icon-holder' >
                <img src={insIcon} alt='link to instagram' />
                <img src={fbIcon} alt='link to facebook' />
                <img src={twIcon} alt='link to twitter' />
            </div> 
        </div> 
    )
}

export default Footer;