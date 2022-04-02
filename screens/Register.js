import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
            <View>
                <TextInput 
                    label="User Name" 
                    mode="outlined"
                    onChangeText={this.setUsername}
                    style={styles.textinputusername}
                    value={this.state.username}>
                </TextInput>
                <TextInput 
                    label="Email Address" 
                    mode="outlined"
                    onChangeText={this.setEmail}
                    style={styles.textinputemail}
                    value={this.state.email}>
                </TextInput>
                <TextInput 
                    label="Phone" 
                    mode="outlined"
                    onChangeText={this.setPhone}
                    style={styles.textinputemail}
                    value={this.state.phone}>
                </TextInput>
                <TextInput 
                    label="Password" 
                    mode="outlined"
                    onChangeText={this.setPassword}
                    style={styles.textinputpassword}
                    value={this.state.password}>
                </TextInput>
                <TextInput 
                    label="Confirm Password" 
                    mode="outlined"
                    onChangeText={this.setConfirmPassword}
                    style={styles.textinputconfirmPassword}
                    value={this.state.confirmPassword}>
                </TextInput>
                <Button onPress={this.handleSingUpButton} style={styles.signup} color={"black"}>Sign up</Button>
                <Text style={styles.orcontinuewith}>Or Continue with</Text>
                  <IconButton 
                    icon="google-plus"
                    color="red"
                    style={styles.googleIcon}
                    >
                    Google
                  </IconButton>
                <Button style={styles.newuserlogint} 
                       color="black">
                {/* <Text>New User?</Text> */}
                Already Have Account? Log In</Button>
                
            </View>
        )
    }


    render(){
    return this.renderRegisterScreen();
  }
  
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom:"10%",
  },
  button:{
    position: "absolute",
    width: "335px",
    height: "54px",
    left: "20px",
    top: "412px",
    color: "black",
    borderRadius: 12,
  },
  textinputusername:{
    position: "absolute",
    width: "335px",
    height: "54px",
    left: "20px",
    top: "102px",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  textinputemail:{
    position: "absolute",
    width: "335px",
    height: "54px",
    left: "20px",
    top: "170px",
    backgroundColor: "#FFFFFF",
  },
  textinputpassword:{
    position: "absolute",
    width: "335px",
    height: "54px",
    left: "20px",
    top: "234px",
    backgroundColor: "#FFFFFF",
  },
  textinputconfirmPassword:{
    position: "absolute",
    width: "335px",
    height: "54px",
    left: "20px",
    top: "296px",
    backgroundColor: "#FFFFFF",
  },
  forgotpassword:{
    position: "absolute",
    width: "100%",
    height: 12,
    left: 20,
    top: 360,
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    /* identical to box height, or 100% */
    color: "black"
    //"#6A6A6A",
  },
  signup:{
    position: "absolute",
    width: "335px",
    height: "54px",
    left: "20px",
    top: "412px",
    backgroundColor: "#4CA6A8",
    borderRadius: 12,
  },
  orcontinuewith:{
    position: "absolute",
    width: "134px",
    height: "16px",
    left: "121px",
    top: "506px",

    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16,
    /* identical to box height, or 100% */


    color: "#6A6A6A",
  },
  welcomeback:{
    position: "absolute",
    width: "242px",
    height: "30px",
    left: "30px",
    top: "100px",
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 30,
    /* identical to box height, or 100% */
    color: "#1A1D1E",

  },
  newuserlogint:{
    position: "absolute",
    width: "100%",
    height: "26px",
    //left: "1px",
    right:"13px",
    top: "612px",
    //bottom:"122px",
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 26,
    /* identical to box height, or 162% */
    textAlign: "center",
    //color: "#6A6A6A",
    color:"black"
  },
  googleIcon:{
    position: "absolute",
    width: "60px",
    height: "60px",
    left: "129px",
    top: "520px",
    color:"red",
    backgroundColor: "#E9F4FF",
    borderRadius: 20,
  }

});

