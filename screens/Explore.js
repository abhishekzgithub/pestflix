import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import ServiceItem from "../components/Service";

export default class ExploreScreen extends React.Component {

    renderSearch=()=>{
        return(
            <Searchbar
                placeholder="Search"
                //onChangeText={onChangeSearch}
                //value={searchQuery}
                />
        )
    }
    renderExploreScreen=()=>{
        return(
            <View >
                <ServiceItem item="Termite Control"/>
                <ServiceItem item="Pest Control"/>
                <ServiceItem item="Cockroach Control"/>
                <ServiceItem item="Rodent Control"/>
                <ServiceItem item="Mosquito Control"/>
                <ServiceItem item="Insect Control"/>
            </View>
        )
    }


    render(){
        return(
        <View style={styles.container}>
            {this.renderSearch()}
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
