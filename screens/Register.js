import React from 'react';
import { Button, TextInput, IconButton } from 'react-native-paper';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
//import { ScrollView } from 'react-native-web';

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

    setUsername=(email)=>{
      this.setState({email})
    }
    setPassword=(password)=>{
      this.setState({password})
    }
    setConfirmPassword=(confirmPassword)=>{
      this.setState({confirmPassword})
    }
    setEmail=(email)=>{
      this.setState({email})
    }
    setPhone=(phone)=>{
      this.setState({phone})
    }
    handleLoginButton=()=>{
      return alert(this.state.email)
    }
    handleSingUpButton=()=>{
      return alert(this.state.email)
    }

    renderScreen=()=>{
        return(
            <SafeAreaProvider >
                <ScrollView 
                  style={styles.container}
                  //edges={['right', 'bottom', 'left','right']}
                  >
                  <Text style={styles.welcomeback}>Welcome To ServiceLo</Text>
                  <TextInput  label="Email" 
                              mode="outlined" 
                              onChangeText={this.setUsername}
                              style={styles.textinput}
                              value={this.state.email}>
                  </TextInput>
                  <TextInput 
                    label="User Name" 
                    mode="outlined"
                    onChangeText={this.setUsername}
                    style={styles.textinput}
                    value={this.state.username}>
                </TextInput>
                <TextInput 
                    label="Phone" 
                    mode="outlined"
                    onChangeText={this.setPhone}
                    style={styles.textinput}
                    value={this.state.phone}>
                </TextInput>
                  <TextInput label="Password" 
                            mode="outlined"
                            secureTextEntry
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
                  <Button onPress={this.handleSingUpButton} style={styles.loginbutton}>
                    <Text style={styles.logintextStyle}>Register</Text>
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
            </SafeAreaProvider>
        )
    }
    render(){
    return this.renderScreen();
  }
  
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    //border:"solid black",
    //alignItems:"space-evenly",
    //justifyContent:"space-evenly",
    padding:19,
    paddingTop:10,
    margin:25,
    // flex: 1,
    // backgroundColor: '#fff',
    color:"black"
    
  },
  welcomeback:{
    //flex:1,
    padding:10,
    //position: "absolute",
    //width: "242px",
    //height: "30px",
    //left: "30px",
    //top: "100px",
    //fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 30,
    /* identical to box height, or 100% */
    //color: "#1A1D1E",
  },
  textinput:{
    margin:15,
    //padding:5,
    //backgroundColor: "#FFFFFF",
  },
  forgotpassword:{
    padding:10,
    //fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    /* identical to box height, or 100% */
    //textColor: "black"
    //"#6A6A6A",
  },
  loginbutton:{
    flex:1,
    paddingTop:10,
    padding:10,
    margin:12,
    backgroundColor: "#4CA6A8",
    //borderRadius: 12,
    
  },
  logintextStyle:{
    //fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    color:"black"
    //lineHeight: 35,
  },
  orcontinuewith:{
    padding:10,
    flex:1,
    display:"flex",
    justifyContent: "center",
    //fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 19,
    lineHeight: 16,
    color: "#6A6A6A",
  },
  button:{
    color: "black",
    //borderRadius: 12,
  },
  sns:{
    ////border:"solid black",
    flex:1,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "center",
    padding:10,
  },

  newusercreateaccount:{
    
    //fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 26,
    /* identical to box height, or 162% */
    textAlign: "center",
    color:"black"
  },
  loginfooter:{
    //fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    color:"black"
  }

});
