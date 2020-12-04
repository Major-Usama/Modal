import React from 'react';
import { StyleSheet, Text, View ,Platform,StatusBar, Image, ImageBackground, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator,EvilIcons } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons,Octicons,Feather,AntDesign,Fontisto,FontAwesome} from '@expo/vector-icons'
import ImageOverlay from "react-native-image-overlay";


//Card Images
import Image1 from './assets/p1.jpg'
import Image2 from './assets/p2.jpg'
import Image3 from './assets/p3.jpg'
import Image4 from './assets/p4.jpg'
import Image5 from './assets/p5.jpg'
import Image6 from './assets/p6.jpg'

//History Tab
function History() {
  return (
    <View style={styles.container}>
      <Text>History</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//Group Tab
function Group() {
  return (
    <View style={styles.container}>
      <Text>Group</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//Item Tab
function Item({title,subTitle,image}){
  return (
      
             <View>
           <ImageBackground source={image} style={styles.cardOverlay}> 
            
  <Text style={styles.cardText}>{title}</Text>
             <View style={styles.cardContainer}>
                
  <Text style={styles.cardText2}>{subTitle}</Text>
             </View>
           
           </ImageBackground>

           <View style={styles.cardBottom}>
           <Fontisto name="hipchat" size={17} color="black" />
           <Feather name="phone-call" size={18} color="black" />
           <MaterialCommunityIcons name="video-outline" size={20} color="black" />
           <FontAwesome name="ellipsis-h" size={20} color="black" />
           </View>

           </View>

           

  )
}
//ItemOverlay
function ItemOverlay({title,subTitle,image}){
  return (
      
             <View>
               <View style={{width:180, height:200,backgroundColor:'black',}}>
           <ImageOverlay source={image} containerStyle={{width:180,
    height:200,
    justifyContent:'flex-end',
    alignItems:'center',
    elevation:2,}}> 


           <View style={{marginBottom:60,}}>
           <AntDesign name="lock1" size={16} color="white" />
           <Text style={{color:"#ffffff",fontSize:14,marginHorizontal:-5}}>Lock</Text>
           </View>
            
  <Text style={styles.cardText}>{title}</Text>
             <View style={styles.cardContainer}>
                
  <Text style={styles.cardText2}>{subTitle}</Text>
             </View>
           
           </ImageOverlay>

           </View>

           <View style={styles.cardBottom}>
           <Fontisto name="hipchat" size={17} color="black" />
           <Feather name="phone-call" size={18} color="black" />
           <MaterialCommunityIcons name="video-outline" size={20} color="black" />
           <FontAwesome name="ellipsis-h" size={20} color="black" />
           </View>

           </View>

           

  )
}



function Contact() {
 
  return (
    <View style={{
      flex:1
      //paddingTop:Platform.OS==="android" ? StatusBar.currentHeight :0
    }}>
      
      <StatusBar backgroundColor="#4296C9" />
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

        <View style={{width:60,height:60,backgroundColor:"#4296C9",alignItems:"center",justifyContent:'center'}}>
          <Image source={require('./assets/p2.jpg')} style={{width:40,height:40,borderRadius:20}}/>

        </View>

        <View style={{flex:1,height:45,borderWidth:1,borderColor:"black",
        flexDirection:'row',alignItems:'center',borderRadius:5,marginHorizontal:10}}>
        <Fontisto name="search" size={16} color="gray" style={{marginLeft:10}}/>
        <Text style={{paddingLeft:15,fontSize:15,color:'gray'}}>Search</Text>

        </View>

         <View>
         <AntDesign name="deleteusergroup" size={28} color="black" style={{
           marginHorizontal:5
         }} />
         </View>


      </View>

     
        <ScrollView >
        <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:12,marginTop:12}}>
        <ItemOverlay
         title="John William"
         subTitle="Love is life and life is family"
         image={Image2}
         />

        <Item
         title="Adam Wasser"
         subTitle="Enjoying Vacation"
         image={Image1}
         />

        </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
        <Item
         title="John William"
         subTitle="Love is life and life is family"
         image={Image3}
         />

        <Item
         title="Jonathan Carington"
         subTitle="Text me , don't call me"
         image={Image4}
         />

        </View>


        <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
        <Item
         title="Jonathan Carington"
         subTitle="Love is life and life is family"
         image={Image5}
         />

        <Item
         title="Adam Wasser"
         subTitle="Enjoying Vacation"
         image={Image6}
         />

        </View>
        </ScrollView>
      
    </View>
  );
}
function Team() {
  return (
    <View style={styles.container}>
      <Text>Team</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function Alert() {
  return (
    <View style={styles.container}>
      <Text>Alert</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName={Contact}
      tabBarOptions={{
        activeBackgroundColor:'#164663',
        activeTintColor:'#fff',
        inactiveTintColor:'#164663'
      }}>
      <Tab.Screen 
      name="History" 
      component={History} 
      options={{
      tabBarIcon: ({ color, size , focused}) =>( <Octicons name="history" size={20} color={color}  />)
      }}
      />
      <Tab.Screen 
      name="Group" 
      component={Group}
      options={{
      tabBarIcon: ({ color, size , focused}) =>( <Feather name="users" size={20} color={color} />)
      }}
      />
      <Tab.Screen name="Contact" component={Contact}
      options={{
      tabBarIcon: ({ color, size , focused}) =>( <AntDesign name="user" size={20} color={color} />)
      }}
      />
      <Tab.Screen name="Team" component={Team} 
      options={{
      tabBarIcon: ({ color, size , focused}) =>(<Fontisto name="hipchat" size={20} color={color} />)
      }}
      />
      <Tab.Screen name="Alert" component={Alert} 
      options={{
      tabBarIcon: ({ color, size , focused}) =>( <MaterialCommunityIcons name="bell-outline" size={(size-2)} color={color} />)
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardText:
  {
    color:'white',
    fontWeight:'bold',
    position:'absolute',
    bottom:20,
    zIndex:2
    
    
  },

  cardText2:
  {
    color:'white',
    marginBottom:4,
    fontSize:12.5
    
    
    
  },

  cardContainer:
  {
    width:'100%',
    height:40,
    backgroundColor:'black',
    opacity:0.5,
    justifyContent:'flex-end',
    alignItems:'center'
  },

  cardOverlay:{

    width:180,
    height:200,
    justifyContent:'flex-end',
    alignItems:'center',
    elevation:2,
  },

  cardBottom:
  {
    width:180,
    height:40,
    elevation:2,
    backgroundColor:'#ffffff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  }
});