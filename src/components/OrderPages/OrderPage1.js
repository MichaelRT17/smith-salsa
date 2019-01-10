import React from 'react';
import DrawButton from '../DrawButton';
import './order-page.css';

function OrderPage1() {
    return (
        <div>
            <form className='order-form'>
                <h1 className='form-title'>Fancy Text Inputs</h1>
                <div className=''>
                    <input type='text' required/>
                    <label>First Name</label>
                </div>
                <div className=''>
                    <input type='text' required/>
                    <label>Last Name</label>
                </div>
                <div className=''>
                    <input type='text' required/>
                    <label>Email Address</label>
                </div>
                <div className=''>
                    <input type='text' required/>
                    <label>Email Confirm</label>
                </div>
                <button className='form-button'>Submit</button>
            </form>
            OrderPage1
            <DrawButton buttonName='Schedule Delivery' destination='order/2' />
        </div> 
    )
}

export default OrderPage1;