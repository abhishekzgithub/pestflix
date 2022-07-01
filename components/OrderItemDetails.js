import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList,ScrollView, Linking } from 'react-native';
import { Button,  Title, Paragraph, Searchbar, IconButton, List, Card, Divider, DataTable } from 'react-native-paper';

export default class OrderItemDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          category:this.props.serviceCategory,
          item: this.props.item,
          description: this.props.description,
          addToCartArray:[]
        }
      }
    addToCart=(index)=>{
        this.setState(prevState=>({
            addToCartArray:[...prevState.addToCartArray,index]
        }))
    }
    removeFromCart=(index)=>{
        this.setState(prevState=>({
            addToCartArray:prevState.addToCartArray.filter(array=>array!=index)
        }))
    }
    modifyCart=(index)=>{
        if(this.state.addToCartArray.includes(index))
        {
            this.removeFromCart(index)
        }else{
            this.addToCart(index)
        }
    }

    renderItem=(litre,price, index=0)=>(
        <View style={styles.cardcontainer} key={index}>
            <Text style={styles.cardlitretext} onClick={()=>alert(litre)}>{litre+" Litre"}</Text>
            <Text style={styles.cardpricetext}>{"Rs. "+price}</Text>
            <IconButton 
                style={styles.cardbutton}
                icon={this.state.addToCartArray.includes(index)?"plus-circle":"minus-circle"}
                color="black"
                onPress={this.modifyCart.bind(this,index)}
                />
        </View>
        )
    
    renderAddress=()=>{
        return(<View style={styles.addresscardcontainer}>
            <Button
                //style={styles.addresscardtext}
                //icon="google-maps"
                color="blue"
                //onPress={}
                >
                 <Text style={styles.addresscardtext}>#524587</Text>
                </Button>
            <Text style={styles.addresscardtext}>Tyrone Mitchell</Text>
            <Text style={styles.addresscardtext}>Right Joy Pvt Ltd.</Text>
            <Button
                style={styles.cardbutton}
                icon="google-maps"
                color="blue"
                //onPress={}
                >
                1534, Single Street, USA
                </Button>
        </View>
        )
    }
    renderOrderSummary=()=>{
        return(
            <View style={styles.datatable}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title textStyle={styles.datatableTextStyle}>Order Summary</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>Subtotal</DataTable.Cell>
                        <DataTable.Cell numeric>Rs. 159</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Est. Tax</DataTable.Cell>
                        <DataTable.Cell numeric>Rs. 237</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Total</DataTable.Cell>
                        <DataTable.Cell numeric textStyle={styles.datatableTextStyle}>Rs. 237</DataTable.Cell>
                    </DataTable.Row>
                    </DataTable>
                </View>
        )
    }
    renderBottomButton=()=>{
        return(<View style={styles.buttonContainerStyle}>
            <Button 
            mode="contained"
            >Cancel Booking</Button>
        </View>)
    }

    render(){
        const litrevsprice=this.state.category.services[2].litrevsprice
        console.log(litrevsprice)
        return(
            <ScrollView>
                {litrevsprice.map((item,index)=>this.renderItem(item.litre,item.price,index))}
                <Divider/>
                {this.renderAddress()}
                <Divider/>
                {this.renderOrderSummary()}
                <Divider/>
                {this.renderBottomButton()}
                <Divider/>
                <Divider/>
            </ScrollView>
        );
    }
  
}

const styles = StyleSheet.create({
  cardcontainer: {
    display:"flex",
    flexDirection:"row",
    alignItems: "center",
    alignContent:"flex-end",
    //border:"solid black",
    margin:10,
    padding:10,
  },
  buttonContainerStyle:{
      padding:10,
      margin:10,
  },
  datatableTextStyle:{
    fontWeight: "800",
  },
  datatable:{
    margin:10,
    padding:10,
    //border:"solid black",
    //borderRadius:10,
  },
  addresscardcontainer:{
      //flex:1,
    display:"flex",
    flexDirection:"column",
    alignItems: "flex-start",
    alignContent:"flex-start",
    justifyContent:"space-evenly",
    //border:"solid black",
    //borderRadius:10,
    margin:10,
    padding:10,

  },
  addresscardtext:{
      //flex:1,
      paddingLeft:41,

  },
  cardbutton:{
      padding:0,
      margin:0,
  },
  cardlitretext:{
      flex:1,
  },
  cardImage:{
    width:100,
    height:100,
    position:"absolute",//"inherit"
  },
  card:{
    // display:"flex",
    // flexDirection:"row",
    //border:"solid black"
    // width:"120px",
    // height:"120px"
  }
});
