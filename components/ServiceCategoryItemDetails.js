import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList,ScrollView } from 'react-native';
import { Button,  Title, Paragraph, Searchbar, IconButton, List, Card } from 'react-native-paper';

export default class ServiceCategoryItemDetails extends React.Component {

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
            <Text style={styles.cardlitretext}>{litre+" Litre"}</Text>
            <Text style={styles.cardpricetext}>{"Rs. "+price}</Text>
            <IconButton 
                style={styles.cardbutton}
                icon={this.state.addToCartArray.includes(index)?"minus-circle":"plus-circle"}
                color="black"
                onPress={this.modifyCart.bind(this,index)}
                />
        </View>
        )

    render(){
        const litrevsprice=this.state.category.services[2].litrevsprice
        console.log(this.state.addToCartArray)
        return(
            <ScrollView>
                {litrevsprice.map((item,index)=>this.renderItem(item.litre,item.price,index))}
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
    //justifyContent:"center",


    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cardlitretext:{
      flex:1,
  },
  cardImage:{
    width:100,
    height:100,
    position:"absolute"//"inherit"
  },
  card:{
    // display:"flex",
    // flexDirection:"row",
    //border:"solid black"
    // width:"120px",
    // height:"120px"
  }
});
