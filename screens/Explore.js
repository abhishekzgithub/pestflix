import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { Button, TextInput, IconButton, Searchbar, Avatar } from 'react-native-paper';
import ServiceItem from "../components/Service";
import { Grid, Box } from 'theme-ui';
import {serviceList} from '../data/serviceList.js';
import LocationPicker from '../components/LocationPicker'

const RenderAvatar=()=>{
    return(<View style={styles.avatar}>
            <Avatar.Icon size={54} icon="account" />
    </View>)
}

const RenderNameLocation=(props)=>{
    return(<View style={styles.namelocation}>
        <Text>Current Location</Text>
        <LocationPicker/>
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
            name:"Kamal",
            offer: [
                {
                  id: 1,
                  image:
                    'https://picsum.photos/700',
                },
                {
                  id: 2,
                  image:
                    'https://picsum.photos/701',
                },
                {
                  id: 3,
                  image:
                    'https://picsum.photos/702',
                },
                {id: 4, image: 'https://picsum.photos/703'},
                {
                  id: 5,
                  image:
                    'https://picsum.photos/704',
                },
              ],
          
        };
      }
    renderBanner=()=>{
        return(
            <View style={styles.bannerContainer}>
            <FlatList
                data={this.state.offer}
                horizontal
                renderItem={({item, index}) => (
                    <View
                    style={styles.banner}
                    >
                    <Image
                        style={styles.cover}
                        source={{
                            uri: item.image,
                        }}
                    />
                    </View>
                    
                )}
               keyExtractor={item => item.id}
                />
            </View>
        )
    }
    
    onChangeSearch=(searchQuery)=>{
        this.setState({searchQuery})
    }
    renderSearch=()=>{
        return(
            <Searchbar
                placeholder="Search for service"
                onChangeText={this.onChangeSearch}
                value={this.state.searchQuery}
                style={styles.searchBar}
                />
        )
    }
    renderExploreScreen=(searchQuery)=>{
        return(
            
            <Grid 
            //gap={2}
             columns={[2, '1fr 2fr']}
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
                {/* <RenderAvatar/> */}
            </View>
            {this.renderSearch()}
            {this.renderBanner()}
                
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
    height: 200,
    width: 336,
    //backgroundColor: "gold",
    margin: 10,
    //border:"solid black",
  },
  bannerContainer:{
    display:"flex",
    alignItems:"space-around"
  },
  offerItem: {
    display: 'flex',
    maxHeight: 200,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    }
},
    cover: {
        width: '100%',
        height: 200,
        borderRadius: 15,
      },
});
