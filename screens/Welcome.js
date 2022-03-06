import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class WelcomeScreen extends React.Component {

    renderWelcomeScreen=()=>{
        return(
            <View>
                <Button title="Login/Signup"></Button>
                <Button title="Explore the app" color={"green"} ></Button>
            </View>
        )
    }


    render(){
    return this.renderWelcomeScreen();
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
