import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';


export default class Service extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          title: this.props.item, 
          searchText: null,
        }
      }

    
    renderExploreScreen=()=>{
        return(
            <TouchableOpacity onPress={()=>alert("hi")}>
                <Card>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title 
                        title={this.state.title}
                    />
                </Card>
            </TouchableOpacity>
        )
    }
    render(){
        return(
        <View style={styles.container}>
            {this.renderExploreScreen()}
        </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
