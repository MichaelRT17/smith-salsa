import React, { Component } from 'react';
import DrawButton from '../DrawButton';
import { connect } from 'react-redux';
import { orderQuantity } from '../../ducks/reducer';
import './order-page.css';

class OrderPage1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 0
        }
    }
    
    render() {
        return (
            <div>
                OrderPage1
                <DrawButton buttonName='Schedule Delivery' destination='order/2' />
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default OrderPage1;