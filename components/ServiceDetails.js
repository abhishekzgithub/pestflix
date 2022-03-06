import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';


export default class ServiceDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          title: this.props.item, 
          searchText: null,
        }
      }

    renderScreen=()=>{
        return(
            
                <Card>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title 
                        title={this.state.title}
                        subtitle="Card Subtitle" 
                        //left={LeftContent}
                        />
                    <Paragraph>Card content</Paragraph>
                    <Card.Actions>
                        <Button onPress={()=>{alert("Added")}}>Add</Button>
                        <Button>Remove</Button>
                    </Card.Actions>
                </Card>
            
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
