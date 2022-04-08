import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform, SafeAreaView,ScrollView , FlatList} from 'react-native';
import { Button, Card, Title, Paragraph, Searchbar,  } from 'react-native-paper';
import { en, registerTranslation, DatePickerModal } from 'react-native-paper-dates';
import {bookingSlotData} from "../data/bookingslotdata";

registerTranslation('en', en)

export default class BookingSlotScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        date: new Date(),
        open:false,
        slot:null,
        };
    }
    setSlot=(slot)=>{
        this.setState({slot})
    }
    onConfirmSingle=(dateSelected)=>{
        
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

    getNext3Month=()=>{
        const deltamonth=3;
        const now = new Date();
        return(
            new Date(now.getFullYear(), now.getMonth() + deltamonth, now.getDate()+1)
        )
    }
    renderSelectDate=()=>{
        return(
            <ScrollView >
                <Button
                    labelStyle={styles.slotlabeldatepickerstyle}
                    onPress={this.onDismissSingle}
                    mode="contained"
                    color="pink"
                    style={styles.selectDateContainer}
                    >
                <Text >
                    {this.state.date?this.state.date.toDateString():"Select date"}
                </Text>
                <DatePickerModal
                    
                    locale="en"
                    mode="single"
                    visible={this.state.open}
                    onDismiss={this.onDismissSingle}
                    date={this.state.dateSelected}
                    onConfirm={this.onConfirmSingle}
                    validRange={{
                    startDate: new Date(),//2021, 1, 2),  // optional
                    endDate : this.getNext3Month(), //new Date(2022,6,1), // optional
                    disabledDates: [new Date(), this.getNext3Month()] // optional
                    }}
                    // onChange={} // same props as onConfirm but triggered without confirmed by user
                    saveLabel="Save Date" // optional
                    // uppercase={false} // optional, default is true
                    label="Select date" // optional
                    animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
                />
                </Button>
            </ScrollView>
        )
    }

    renderScreen=()=>{
        return(
            <ScrollView style={styles.screenContainer}>
                <Text style={styles.slotheaderlabelstyle}>When do you want the service?</Text>
                {this.renderSelectDate()}
                <Text style={styles.slotheaderlabelstyle}>Select Visit Time Slot</Text>
                {
                    bookingSlotData.map((item,index)=>{
                        return(
                        <Card key={index}
                              style={styles.cardcontainer}
                        >
                            <Card.Title title={Object.keys(item)[0]} />
                            <Card.Actions  style={styles.slotcontainer}>
                                {
                                    Object.values(item).map((val,index)=>{
                                        return(
                                            val.map((slot, indx)=>{
                                                return(
                                                    <Button
                                                        key={indx}
                                                        onPress={this.setSlot.bind(this, slot)} 
                                                        mode={this.state.slot==slot?"contained":"outlined"}
                                                        labelStyle={styles.slotlabelstyle}
                                                        style={styles.slotbuttonStyle}
                                                        color="pink"
                                                        >
                                                        {slot}
                                                        </Button>
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
        return(
        <SafeAreaView style={styles.container}>
            {this.renderScreen()}
        </SafeAreaView>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex",
    flexDirection:"column",
    margin:15,
    padding:15,
  },
  
  screenContainer:{
      display:"flex",
      flexDirection:"column",
      alignContent:"space-around",
      
      border:"solid black",
  },
  slotheaderlabelstyle:{
    flex:1,
    padding:15,
  fontFamily: "Roboto",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: 19,
  letterSpacing: 0,
  textAlign: "left",
}
  ,
  selectDateContainer:{
      padding:10,
      margin:10,
  },
  cardcontainer:{
    //flex:1, //donot use it
    display:"flex",
    //alignItems:"center",
    alignContent:"space-around",
    justifyContent:"space-around",
},
  slotcontainer:{
    flex:1,
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    //alignContent:"space-evenly",
    //gap:"17px",
    border:"solid black",
  },
  slotlabelstyle:{
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    color:"black",
  },
  slotlabeldatepickerstyle:{
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    color:"black",
  },
  slotbuttonStyle:{
    margin:10,
  },
  

});
