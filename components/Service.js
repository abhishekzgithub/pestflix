import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';


export default class ServiceCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          item: this.props.item,
        }
      }

    
    renderExploreScreen=()=>{
        return(
            <TouchableOpacity onPress={()=>alert("hi")} >
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title 
                        title={this.state.item}
                    />
                </Card>
            </TouchableOpacity>
        )
    }
    render(){
        return(
        <View >
            {this.renderExploreScreen()}
        </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card:{
    // width:"120px",
    // height:"120px"
  }
});
