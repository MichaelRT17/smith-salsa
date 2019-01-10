import React from 'react';
import DrawButton from '../DrawButton';
import './order-page.css';

function OrderPage3() {
    return (
        <div>
            <form className='order-form'>
                <h1 className='form-title'>Contact Information</h1>
                <div className='question'>
                    <input type='text' required className='info-input' />
                    <label className='question-label'>First Name</label>
                </div>
                <div className='question'>
                    <input type='text' required className='info-input'/>
                    <label className='question-label'>Last Name</label>
                </div>
                <div className='question'>
                    <input type='text' required className='info-input'/>
                    <label className='question-label'>Email Address</label>
                </div>
                <div className='question'>
                    <input type='text' required className='info-input'/>
                    <label className='question-label'>Phone Number</label>
                </div>
                {/* <h1 className='form-title'>Location</h1> */}
                <div className='question'>
                    <input type='text' required className='info-input'/>
                    <label className='question-label'>Address 1</label>
                </div>
                <div className='question'>
                    <input type='text' required className='info-input'/>
                    <label className='question-label'>Address 2</label>
                </div>
                <div className='question'>
                    <input type='text' required className='info-input'/>
                    <label className='question-label'>City</label>
                </div>
                <div className='question'>
                    <input type='text' required className='info-input'/>
                    <label className='question-label'>State</label>
                </div>
                <div className='question'>
                    <input type='text' required className='info-input'/>
                    <label className='question-label'>Zip Code</label>
                </div>
                <DrawButton buttonName='Complete Order' destination='' />
            </form>
        </div> 
    )
}

export default OrderPage3;