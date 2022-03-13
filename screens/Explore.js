import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { Button, TextInput, IconButton, Searchbar, Avatar } from 'react-native-paper';
import ServiceItem from "../components/Service";
import { Grid, Box } from 'theme-ui';
import {serviceList} from '../data/serviceList.js';

const RenderAvatar=()=>{
    return(<View style={styles.avatar}>
            <Avatar.Icon size={54} icon="account" />
    </View>)
}

const RenderNameLocation=(props)=>{
    return(<View style={styles.namelocation}>
        <Text>Hello {props.name}</Text>
        <Text>Mumbai, Maharashtra</Text>
    </View>)
}


const RenderBanner=()=>{
    return(
        <View style={styles.banner}>
            <ServiceItem />
        </View>
    )
}
export default class ExploreScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchQuery:"",
            name:"Kamal"
          
        };
      }
    onChangeSearch=(searchQuery)=>{
        this.setState({searchQuery})
    }
    renderSearch=()=>{
        return(
            <Searchbar
                placeholder="Search for pest service"
                onChangeText={this.onChangeSearch}
                value={this.state.searchQuery}
                style={styles.searchBar}
                />
        )
    }
    renderExploreScreen=(searchQuery)=>{
        return(
            <Grid gap={2} columns={[2, '1fr 2fr']}
                >
                    {
                        serviceList.map((item,index)=>{
                            if (searchQuery===""){
                                return(
                                    <Box bg="primary" key={index}><ServiceItem item={item.name}/></Box>
                                )
                            }
                            else if (item.name.toLowerCase().includes(searchQuery.toLowerCase())){
                                return(
                                    //console.log(it)
                                    <Box bg="primary" key={index}><ServiceItem item={item.name}/></Box>
                                )
                            }
                            
                        }
                            
                        )
                    }
                
            </Grid>
        )
    }


    render(){
        console.log(this.state.searchQuery)
        return(
        <View style={styles.container}>
            <View style={styles.header}>
                <RenderNameLocation name={this.state.name}/>
                <RenderAvatar/>
            </View>

            {this.renderSearch()}
            
            <RenderBanner/>
            {this.renderExploreScreen(this.state.searchQuery)}
        </View>
        );
    }
  
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        flexDirection:"row"
    },
  container: {
    display: "flex",
    flexDirection:"column",
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  namelocation:{
    flex:1,
    flexDirection:"column",
    alignItems: "flex-start",
    //padding: "0px",
    //position: "absolute",
    //width: "168.08px",
    //height: "44px",
    //left: "16px",
    //top: "12px",
    textShadowColor:"black",
    //border:"solid black"

  },
  avatar:{
      flex:1,
      alignItems: "flex-end",
//    position: "absolute",
    //width: "100%",
    //height: "44px",
    //left: "299px",
    //top: "38px",
    //border:"solid black"

  },
  searchBar:{
    flex:1
  },
  exploreScreen:{
      flex:1,
      flexDirection:"row",
      

  },
  banner:{
    // width: "328px",
    // height: "120px",
    // left: "16px",
    // top: "149px",
  }
});
