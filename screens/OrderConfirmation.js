import React, { Component } from 'react';
import OrderItemDetails from '../components/OrderItemDetails';
import { servicePricingList } from '../data/servicePricingList';

export default class OrderConfirmationItemDetailsScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
          category:servicePricingList[0]
        }
      }
    render(){
        return(
            <OrderItemDetails serviceCategory={this.state.category}/>
        )
    }
}

  