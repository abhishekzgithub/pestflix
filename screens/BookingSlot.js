import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import { Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import { en, registerTranslation, DatePickerModal } from 'react-native-paper-dates';

registerTranslation('en', en)

export default class BookingSlotScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        dateSelected: null,
        open:false,
        };
    }

    onConfirmSingle=(dateSelected)=>{
        this.setState(dateSelected)
        this.onDismissSingle()

    }
    onDismissSingle=()=>{
        this.setState({open:!this.state.open})
    }

    renderScreen=()=>{
        console.log(this.state.date)
        return(
            <View >
                
                <Button onPress={this.onDismissSingle}><Text>Please select a date of service</Text>
                    <DatePickerModal
                        locale="en"
                        mode="single"
                        visible={this.state.open}
                        onDismiss={this.onDismissSingle}
                        date={this.state.dateSelected}
                        onConfirm={this.onConfirmSingle}
                        validRange={{
                        startDate: new Date(),//2021, 1, 2),  // optional
                        endDate : new Date(2022,6,1), // optional
                        disabledDates: [new Date()] // optional
                        }}
                        // onChange={} // same props as onConfirm but triggered without confirmed by user
                        // saveLabel="Save" // optional
                        // uppercase={false} // optional, default is true
                        label="Select date" // optional
                        animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
                    />
                </Button>
                <Text>Select Time</Text>
                <Card>
                    <Card.Title title="Morning" />
                    <Card.Actions>
                        <Button onPress={()=>{alert("Added")}}>08:00 AM - 09:00 AM</Button>
                        <Button onPress={()=>{alert("Added")}}>09:00 AM - 10:00 AM</Button>
                        <Button onPress={()=>{alert("Added")}}>10:00 AM - 11:00 AM</Button>
                        <Button onPress={()=>{alert("Added")}}>11:00 AM - 12:00 AM</Button>
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Title title="AfterNoon" />
                    <Card.Actions>
                        <Button onPress={()=>{alert("Added")}}>12:00 PM - 01:00 PM</Button>
                        <Button onPress={()=>{alert("Added")}}>01:00 AM - 02:00 PM</Button>
                        <Button onPress={()=>{alert("Added")}}>02:00 AM - 03:00 PM</Button>
                        <Button onPress={()=>{alert("Added")}}>03:00 AM - 04:00 PM</Button>
                        <Button onPress={()=>{alert("Added")}}>04:00 AM - 05:00 PM</Button>
                        
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Title title="Evening" />
                    <Card.Actions>
                        <Button onPress={()=>{alert("Added")}}>05:00 AM - 06:00 PM</Button>
                        <Button onPress={()=>{alert("Added")}}>06:00 AM - 07:00 PM</Button>
                    </Card.Actions>
                </Card>
                
            </View>
        )
    }


    render(){
        return(
        <View style={styles.container}>
            
            {this.renderScreen()}
            
        </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
