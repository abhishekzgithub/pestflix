import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button, Card, Title, Paragraph, Searchbar, IconButton } from 'react-native-paper';
import { List } from 'react-native-paper';
//import { Card } from 'theme-ui';

export default class ServiceCategoryCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          item: this.props.item,
          description: this.props.description,
        }
      }

    render(){
        return(
          <TouchableOpacity onPress={()=>alert("hi")} >
            <List.Item
              title={this.state.item}
              description={this.state.description}
              left={props => <Image 
                                style={styles.cardImage} 
                                source={{ uri: 'https://picsum.photos/700' }}
                              />
                }
              right={props => <IconButton 
                icon="arrow-right"
                color="grey"
                />}
            />
        </TouchableOpacity>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row"
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cardImage:{
    width:100,
    height:100,
    position:"inherit"
  },
  card:{
    // display:"flex",
    // flexDirection:"row",
    border:"solid black"
    // width:"120px",
    // height:"120px"
  }
});
