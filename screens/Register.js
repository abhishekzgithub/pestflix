import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class RegisterScreen extends React.Component {

    renderRegisterScreen=()=>{
        return(
            <View>
                <TextInput placeholder="Email"></TextInput>
                <TextInput placeholder="Phone"></TextInput>
                <TextInput placeholder="Password"></TextInput>
                <TextInput placeholder="Confirm Password"></TextInput>
                <Button title="Register"></Button>
                <Button title="Login"></Button>
                
            </View>
        )
    }


    render(){
    return this.renderRegisterScreen();
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
