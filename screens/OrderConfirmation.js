import React from "react";
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default class OrderConfirmationScreen extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
        
        };
    }

    renderScreen=()=>{
        return(
            <View>
                <Text>Reference id: 1234567890</Text>
                <Text>Booking Successful</Text>
                <Card style={styles.container}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Title 
                            title="Pest Control"
                            //subtitle="Card Subtitle" 
                            //left={LeftContent}
                            />
                        <Text>Price: Rs 850</Text>
                    <Card.Actions>
                        <Button onPress={()=>{alert("Remove")}}><Text>Remove</Text></Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.container}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Title 
                            title="Pest Control"
                            //subtitle="Card Subtitle" 
                            //left={LeftContent}
                            />
                        <Text>Price: Rs 850</Text>
                    <Card.Actions>
                        <Button onPress={()=>{alert("Remove")}}><Text>Remove</Text></Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.container}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Title 
                            title="Pest Control"
                            //subtitle="Card Subtitle" 
                            //left={LeftContent}
                            />
                        <Text>Price: Rs 850</Text>
                    <Card.Actions>
                        <Button onPress={()=>{alert("Remove")}}><Text>Remove</Text></Button>
                    </Card.Actions>
                </Card>
            <Text>Total Payable Amount: 3x850=2550</Text>
            <Text>Scheduled Date and Time</Text>
            <Text>07 March, 2022 | 03:00 PM - 04:00 PM</Text>
            <Text>Customer Details</Text>
            <Text>Abhishek Kumar</Text>
            <Text>Phone Number: 7277905904</Text>
            <Text>abcdefghklmn, bangalore, karnataka - 801503</Text>




            <Button><Text>Go to Order</Text></Button>
            <Button><Text>Go to Home</Text></Button>

            </View>
        )
    }
    render(){
        return this.renderScreen()
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
  