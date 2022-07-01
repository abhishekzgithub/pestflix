import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Button, Card, Title, Paragraph,  ToggleButton } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


export default class ServiceOrderSummary extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    renderScreen=()=>{
        return(
            <View>
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
             <Button><Text>Confirm Order</Text></Button>

            </View>
        )
    }

    
    activeTab=()=>{
        return(<TouchableOpacity >
                    <View style={styles.ordercardcontainer}>
                        <View style={styles.orderstatusleft}>
                            <Text>#524587</Text>
                            <Text>Home Cleaner</Text>
                            <Text>22 Sep 21, 03:00-04:30PM</Text>    
                        </View>
                        <View style={styles.orderstatusright}>
                            <Text>Accepted</Text>
                            <Text>Rs 149</Text>
                        </View>
                    </View>
                    <View style={styles.ordercardcontainer}>
                        <View style={styles.orderstatusleft}>
                            <Text>#524587</Text>
                            <Text>Home Cleaner</Text>
                            <Text>22 Sep 21, 03:00-04:30PM</Text>    
                        </View>
                        <View style={styles.orderstatusright}>
                            <Text>Accepted</Text>
                            <Text>Rs 149</Text>
                        </View>
                    </View>
                    <View style={styles.ordercardcontainer}>
                        <View style={styles.orderstatusleft}>
                            <Text>#524587</Text>
                            <Text>Home Cleaner</Text>
                            <Text>22 Sep 21, 03:00-04:30PM</Text>    
                        </View>
                        <View style={styles.orderstatusright}>
                            <Text>Accepted</Text>
                            <Text>Rs 149</Text>
                        </View>
                    </View>
                </TouchableOpacity>)
    }

    renderTabs=()=>{
        return(
        <View>
            <Tab.Navigator>
            <Tab.Screen name="Active" 
            component={this.activeTab} 
            />
            <Tab.Screen name="Cancelled" 
                component={this.activeTab} 
                />
            <Tab.Screen name="Success" 
                component={this.activeTab} 
                />
            </Tab.Navigator>
        </View>
        )    
            }

    render(){
        return (
            <ScrollView>
                {this.renderTabs()}
            </ScrollView>
            
            )
    }
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection:"row",
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    ordercardcontainer:{
        //borderRadius:10,
        //border:"solid black",
        display:"flex",
        flexDirection:"row",
        //width:800,
        height:100,
        padding:10,
        margin:10,
        
        //alignContent:"space-around",
        //justifyContent:"space-around"
    },
    orderstatusleft:{
        flex:1,
        display:"flex",
        flexDirection:"column",
        //border:"solid black",
        alignItems:"flex-start",
        justifyContent:"space-between"
        
        
    },
    orderstatusright:{
        flex:1,
        display:"flex",
        flexDirection:"column",
        //border:"solid black",
        alignItems:"flex-end",
        justifyContent:"space-between",
        
    },
  });
  