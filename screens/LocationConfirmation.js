import React from "react";
import { StyleSheet, Text, View, TextInput, Platform, TouchableOpacity, Alert } from 'react-native';
import MapView from 'react-native-web-maps';
import MapView1 from 'react-native-maps';

export default class LocationConfirmationScreen extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            location:null,
        };
    }
    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const location = JSON.stringify(position);
            console.log(location)
            this.setState({ location });
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      };

    renderScreen=()=>{
        console.log(this.state.location)
        return(
        <View 
        //style={styles.container}
        >
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text 
          //style={styles.welcome}
          >Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
      </View>
        )
        
    }

    render(){
        return this.renderScreen()
    }

}