import React from "react";
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import ServiceOrderSummary from '../components/ServiceOrderSummary';

export default class OrderSummaryScreen extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
        
        };
    }

    
    render(){
        return (
            <View>
                <ServiceOrderSummary/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection:"row",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  