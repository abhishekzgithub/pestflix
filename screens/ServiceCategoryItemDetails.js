import React, { Component } from 'react';
import { servicePricingList } from '../data/servicePricingList';
import ServiceCategoryItemDetails from '../components/ServiceCategoryItemDetails';

export default class ServiceCategoryItemDetailsScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
          category:servicePricingList[0]
        }
      }
    render(){
        return(
            <ServiceCategoryItemDetails serviceCategory={this.state.category}/>
        )
    }
}