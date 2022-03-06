import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginScreen extends React.Component {

    renderLoginScreen=()=>{
        return(
            <View>
                <TextInput placeholder="Email"></TextInput>
                <TextInput placeholder="Password"></TextInput>
                <Button title="Login"></Button>
                <Button title="Register"></Button>
            </View>
        )
    }


    render(){
    return this.renderLoginScreen();
    // (
    //   <View style={styles.container}>
    //     <Text>Welcome</Text>
    //   </View>
    // );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
