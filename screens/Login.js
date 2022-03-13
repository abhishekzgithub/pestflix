import React from 'react';
import { Button, TextInput, IconButton } from 'react-native-paper';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default class LoginScreen extends React.Component {

    constructor(props){
      super(props);
      this.state={
        email:"",
        password:"",
      };
    }

    setUsername=(email)=>{
      this.setState({email})
    }
    setPassword=(password)=>{
      this.setState({password})
    }
    handleLoginButton=()=>{
      return alert(this.state.email)
    }

    renderLoginScreen=()=>{
        return(
            <SafeAreaProvider style={styles.container}>
                <SafeAreaView 
                  edges={['right', 'bottom', 'left','right']}
                  
                  >
                <Text style={styles.welcomeback}>Welcome Back</Text>
                <TextInput  label="Email" 
                            mode="outlined" 
                            onChangeText={this.setUsername}
                            style={styles.textinputemail}
                            value={this.state.email}>
                </TextInput>
                <TextInput label="Password" 
                          mode="outlined"
                          secureTextEntry
                          onChangeText={this.setPassword}
                          style={styles.textinputpassword}
                          value={this.state.password}>
                </TextInput>
                <Button style={styles.forgotpassword} onPress={()=>{alert("forgot pwd?")}}>
                  <Text>Forgot Password?</Text></Button>
                <Button onPress={this.handleLoginButton} style={styles.loginbutton}>
                  Login
                </Button>
                <Text style={styles.orcontinuewith}>Or Continue with</Text>
                  <IconButton 
                    icon="google-plus"
                    color="red"
                    style={styles.googleIcon}
                    >
                    Google
                  </IconButton>
                <Button dark style={styles.newusercreateaccount}>
                {/* <Text>New User?</Text> */}
                New User? Create Account</Button>
              </SafeAreaView>
            </SafeAreaProvider>
        )
    }
    render(){
    return this.renderLoginScreen();
  }
  
}

const styles = StyleSheet.create({
  container: {
    // display:"flex",
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom:"10%",
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
  textinputemail:{
    position: "absolute",
    width: "335px",
    height: "54px",
    left: "20px",
    top: "218px",
    backgroundColor: "#FFFFFF",
  },
  textinputpassword:{
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
  loginbutton:{
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
  newusercreateaccount:{
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
    color: "#6A6A6A",
  },
  googleIcon:{
    position: "absolute",
    width: "60px",
    height: "60px",
    left: "129px",
    top: "552px",
    color:"red",
    backgroundColor: "#E9F4FF",
    borderRadius: 20,
  }

});
