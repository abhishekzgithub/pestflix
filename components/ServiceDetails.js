import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Button } from 'react-native';
import {  Card, Title, Paragraph, List } from 'react-native-paper';
import { Grid, Box } from 'theme-ui';
import { serviceList } from '../data/serviceList';
import ServiceCategoryCard from './ServiceCategoryCard';

export default class ServiceCategoryDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          item: this.props.serviceCategory, 
        }
      }
      renderScreen=()=>{
        return(
          

          <ScrollView style={styles.serviceCategoryDetailContainer}>
            {
              this.state.item.services.map((element, index)=>{
                return(
                  <ServiceCategoryCard 
                    item={element.name}
                    description={element.description}
                    key={index}/>
                )
              })
            }
              
          </ScrollView>
        )
      }

    render(){
        return(
        <View style={styles.container}>
            {/* {this.renderServiceDetails()} */}
            {/* <Button 
              title="Go to Home" 
              onPress={()=>this.props.navigation.navigate("Home")} 
              
              /> */}
            {this.renderScreen()}
            
        </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",

    //width:"400px",
    //backgroundColor: '#E5E5E5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  serviceCategoryDetailContainer:{

  },
  liststyle: {
    flex:1,
    //flexWrap:"wrap",
    marginVertical: 10,
    flexDirection: 'column',
    //overflow:"hidden",
    //justifyContent: 'space-between',
    ////border:"solid black",
    //width:"500px"
    

  },
  listtext:{
    flex:1,
    flexWrap:"wrap",
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 14,
    //letterSpacing: "0em",
    textAlign: "left",
    ////border:"solid green",
    alignSelf: 'baseline',
    //whiteSpace:"normal",
    //wordWrap: "break-word"
  },
  listitemstyle:{
    flex:1,
    //flexWrap:"wrap",
    ////border:"solid pink"
  },
  footerContainer:{
    //flex:1,
    display:"flex",
    flexDirection:"row",
    ////border:"solid inherit",
    justifyContent:"space-evenly",
    paddingLeft:"25px",
    paddingRight:"25px",
    height:"50px",
  },
  footerleftpart:{
    flex:1,
    display:"flex",
    ////border:"solid blue",
    //gap:"3px",
  },
  staticposition:{
    flex:1,
    paddingBottom:"10%"
  },
  footerButtonContentStyle:{
    // put typography
    
  },
  footerContainerButtonStyle:{
    backgroundColor:"#304FFE",
    //borderRadius: 4,
  }
});
