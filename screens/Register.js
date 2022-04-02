import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { Button, TextInput, IconButton } from 'react-native-paper';

export default class RegisterScreen extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      username:"",
      phone:"",
      email:"",
      password:"",
      confirmPassword:""
    };
  }

  setUsername=(username)=>{
    this.setState({username})
  }
  setEmail=(email)=>{
    this.setState({email})
  }
  setPhone=(phone)=>{
    this.setState({phone})
  }
  setPassword=(password)=>{
    this.setState({password})
  }
  setConfirmPassword=(confirmPassword)=>{
    this.setState({confirmPassword})
  }
  handleSingUpButton=()=>{
    return alert(this.state.email)
  }
  renderRegisterScreen=()=>{
        return(
            <ScrollView style={styles.container}>
                <TextInput 
                    label="User Name" 
                    mode="outlined"
                    onChangeText={this.setUsername}
                    style={styles.textinput}
                    value={this.state.username}>
                </TextInput>
                <TextInput 
                    label="Email Address" 
                    mode="outlined"
                    onChangeText={this.setEmail}
                    style={styles.textinput}
                    value={this.state.email}>
                </TextInput>
                <TextInput 
                    label="Phone" 
                    mode="outlined"
                    onChangeText={this.setPhone}
                    style={styles.textinput}
                    value={this.state.phone}>
                </TextInput>
                <TextInput 
                    label="Password" 
                    mode="outlined"
                    onChangeText={this.setPassword}
                    style={styles.textinput}
                    value={this.state.password}>
                </TextInput>
                <TextInput 
                    label="Confirm Password" 
                    mode="outlined"
                    onChangeText={this.setConfirmPassword}
                    style={styles.textinput}
                    value={this.state.confirmPassword}>
                </TextInput>
                <Button onPress={this.handleSingUpButton} 
                        style={styles.signup} 
                        color={"black"}
                  >
                    <Text style={styles.signupText} >
                      Sign Up
                    </Text>
                  </Button>
                <Button 
                    onPress={this.handleSingUpButton}
                    style={styles.loginfooter} 
                    color="black">
                <Text>
                Already Have Account? Log In
                </Text>
                </Button>
            </ScrollView>
        )
    }
    render(){
    return this.renderRegisterScreen();
  }
  
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    //border:"solid black",
    padding:19,
    paddingTop:10,
    margin:25,
  },
  textinput:{
    margin:4,
    backgroundColor: "#FFFFFF",
  },
  signup:{
    flex:1,
    margin:15,
    height: "54px",
    backgroundColor: "#4CA6A8",
    borderRadius: 12,
  },
  signupText:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
  },
  loginfooter:{
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    color:"black"
  }

});

