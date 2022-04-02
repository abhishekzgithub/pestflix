import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph, List } from 'react-native-paper';
import { Grid, Box } from 'theme-ui';
import { serviceList } from '../data/serviceList';

export default class ServiceDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          title: this.props.item, 
          searchText: null,
          service:serviceList[1],
        }
      }
      renderFooter=()=>{
        return(
          <View 
            //sx={styles.footerContainer}
            style={styles.footerContainer}
            >
            <View style={styles.footerleftpart}>
              <Text>Pest Service</Text>
              <View></View>
              <Text>Rs. {this.state.service.price}</Text>
            </View>
            <Button
              onPress={()=>{alert("forgot pwd?")}}
              mode="outlined"
              color="white"
              
              contentStyle={styles.footerButtonContentStyle}
              style={styles.footerContainerButtonStyle}
              >
              Book Now
            </Button>
          </View>
        )
      }
      renderScreen=()=>{
        return(
          <SafeAreaView>
            <ScrollView >
            <List.Section style={styles.liststyle}>
              <List.Subheader>{this.state.service.details[0]}</List.Subheader>
              {
                this.state.service.details.slice(1,).map((item,index)=>{
                  return(
                    <Box  key={index}
                      //style={{alignSelf: 'baseline'}}
                     //width={["400px"]}
                     >
                    <List.Item 
                        style={styles.listitemstyle}
                        titleStyle={styles.listtext} 
                        title={item} 
                        left={() => <List.Icon icon="check-circle" color="green" />} 
                        >
                      </List.Item>
                    </Box>
                  )

                })
              }
              {
                this.state.service.details.slice(1,).map((item,index)=>{
                  return(
                    <Box  key={index}
                      //style={{alignSelf: 'baseline'}}
                     //width={["400px"]}
                     >
                    <List.Item 
                        style={styles.listitemstyle}
                        titleStyle={styles.listtext} 
                        title={item} 
                        left={() => <List.Icon icon="check-circle" color="green" />} 
                        >
                      </List.Item>
                    </Box>
                  )

                })
              }
              
            </List.Section>
          </ScrollView>
          {this.renderFooter()}
          <View style={styles.staticposition}></View>
          </SafeAreaView>
        )
      }

    render(){
        return(
        <View style={styles.container}>
            {/* {this.renderServiceDetails()} */}
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
    backgroundColor: '#E5E5E5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  liststyle: {
    flex:1,
    //flexWrap:"wrap",
    marginVertical: 10,
    flexDirection: 'column',
    //overflow:"hidden",
    //justifyContent: 'space-between',
    //border:"solid black",
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
    //border:"solid green",
    alignSelf: 'baseline',
    //whiteSpace:"normal",
    //wordWrap: "break-word"
  },
  listitemstyle:{
    flex:1,
    //flexWrap:"wrap",
    //border:"solid pink"
  },
  footerContainer:{
    //flex:1,
    display:"flex",
    flexDirection:"row",
    //border:"solid inherit",
    justifyContent:"space-evenly",
    paddingLeft:"25px",
    paddingRight:"25px",
    height:"50px",
  },
  footerleftpart:{
    flex:1,
    display:"flex",
    //border:"solid blue",
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
    borderRadius: 4,
  }
});
