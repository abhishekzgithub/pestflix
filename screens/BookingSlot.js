import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform, SafeAreaView,ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import { en, registerTranslation, DatePickerModal } from 'react-native-paper-dates';
import {RenderFooter} from "../components/CartFooter";
import {bookingSlotData} from "../data/bookingslotdata";

registerTranslation('en', en)

export default class BookingSlotScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        date: null,
        open:false,
        slot:null,
        };
    }
    setSlot=(slot)=>{
        console.log(slot)
        this.setState({slot})
    }
    onConfirmSingle=(dateSelected)=>{
        console.log(dateSelected)
        
        if(dateSelected.date){
            this.setState(dateSelected)
            this.onDismissSingle()
        }
        else{
            return null;
        }
    }
    onDismissSingle=()=>{
        this.setState({open:!this.state.open})
    }

    renderScreen=()=>{
        //console.log(this.state.dateSelected.date)
        return(
            <ScrollView >
                <Text style={styles.slotheaderlabelstyle}>When do you want the service?</Text>
                <Button
                    labelStyle={styles.slotlabelstyle}
                    onPress={this.onDismissSingle}
                    mode="contained"
                    >
                    {this.state.date?this.state.date.toDateString():"Select date"}
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
                        saveLabel="Save Date" // optional
                        // uppercase={false} // optional, default is true
                        label="Select date" // optional
                        animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
                    />
                </Button>
                <Text style={styles.slotheaderlabelstyle}>Select Visit Time Slot</Text>
                {
                    bookingSlotData.map((item,index)=>{
                        return(
                        <Card key={index} 
                        >
                            <Card.Title title={Object.keys(item)[0]} />
                            <Card.Actions  style={styles.slotcontainer}>
                                {
                                    Object.values(item).map((val,index)=>{
                                        return(
                                            val.map((slot, indx)=>{
                                                return(
                                                    <View key={indx}>
                                                    <Button 
                                                        onPress={this.setSlot.bind(this, slot)} 
                                                        mode={this.state.slot==slot?"contained":"outlined"}
                                                        labelStyle={styles.slotlabelstyle}
                                                        >
                                                        {slot}
                                                        </Button>
                                                        </View>
                                                )
                                            })
                                        )
                                    })
                                }
                            </Card.Actions>
                        </Card>
                        )
                    })
                }
            </ScrollView>
        )
    }
    render(){
        console.log(this.state)
        return(
        <SafeAreaView style={styles.container}>
            {this.renderScreen()}
            <RenderFooter price={2300}/>
        </SafeAreaView>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex",
    flexDirection:"column",
    backgroundColor: '#fff',
  },
  slotcontainer:{
    flex:1,  
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    //gap:"17px",
  },
  slotlabelstyle:{
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
  },
  slotheaderlabelstyle:{
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color:"#474747"
  }

});
