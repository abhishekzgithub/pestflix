import ServiceDetails from '../components/ServiceDetails';
import React, { Component } from 'react';
import { servicePricingList } from '../data/servicePricingList';

export default class ServiceDetailsScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
          category:servicePricingList[0]
        }
      }
    render(){
        return(
            <ServiceDetails serviceCategory={this.state.category}/>
        )
    }
}