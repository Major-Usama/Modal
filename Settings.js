import React,{useState} from 'react'
import { StyleSheet, Text,Image, View ,Platform,StatusBar,Switch} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {MaterialIcons} from'@expo/vector-icons'

export default function Settings() {

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(true);
    const [isEnabled3, setIsEnabled3] = useState(true);
    
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    return (
        
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
        <View style={styles.headerContainer} >
            <View style={styles.headerImagesContainer}>

                <Image source={require('./assets/logo.png')} />
                <Image style={styles.logoText} source={require('./assets/logotext.png')} />

            </View>
            <View style={styles.badgeContainer}>
            <MaterialIcons  name="notifications" size={22} color="#1c59cc"/>
            <View style={styles.badge}/>

            </View>
            
        </View>


        <View style={styles.profileContainer}>
        
        <View style={styles.profileCircle}>
            <MaterialIcons name="person" size={50} color="#fff"/>

        </View>

        <View style={styles.profileText}>
            <Text style={styles.justin}>Justimg Timberlake</Text>
            <Text style={styles.gmailText}>Justintim786@gmail.com</Text>
        </View>


        </View>


        
        <View style={styles.resetPasswordContainer}>
         <Text style={styles.resetText}>Reset Password</Text>
        </View>


        <View style={styles.notificationsContainerMain}>
        
        

        <View style={styles.notificationsContainer}>
        <Text style={styles.notification}>Notifications</Text>

            <View style={styles.upTimes}>
                <Text style={styles.uptimeText}>UpTime Notifications</Text>
                <Switch
                trackColor={{ false: "#ededed", true: "#81b0ff" }}
                thumbColor={isEnabled1 ? "#1c59cc" : "#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
            />


            </View>

            <View style={styles.upTimes}>
                <Text style={styles.uptimeText}>Down Time Notifications</Text>
                <Switch
                trackColor={{ false: "#ededed", true: "#81b0ff" }}
                thumbColor={isEnabled2 ? "#1c59cc" : "#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
            />


            </View>


            <View style={styles.upTimes}>
                <Text style={styles.uptimeText}>Response Time Notifications</Text>
                <Switch
                trackColor={{ false: "#ededed", true: "#81b0ff" }}
                thumbColor={isEnabled3 ? "#1c59cc" : "#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch3}
                value={isEnabled3}
            />


            </View>


           



        </View>

        
         
        </View>

        <View style={styles.deactivateTextContainer}>
         <Text style={styles.deactivateText}>Deactivate Paid Plan</Text>
        </View>

        <View style={styles.logoutBottom}>

             
             <Text style={styles.logoutText}>Log out</Text>
           

        </View>
        </View>
    )
}

const styles = StyleSheet.create({

container:
{
    paddingTop:Platform.OS==='android' ? StatusBar.currentHeight :0,
    width:wp('100%'),
    height:hp('100%'),
    backgroundColor:'#f7f7fc',
    
    
},

headerContainer:{

    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    padding:wp('5%'),
    backgroundColor:'#fff',
    
},
    


headerImagesContainer:
{
    flexDirection:'row',
    alignItems:'center',
    

},

logoText:
{
    marginLeft:wp('3%')
},

badgeContainer:
{
  flexDirection:'row',
  
  

},

badge:
{
    width:9,
    height:9,
    borderRadius:4.5,
    backgroundColor:'red',
    position:'absolute',
    left:wp('2.6%'),
    top:hp('.1.5%'),
    borderWidth:.8,
    borderColor:'#fff'

},

profileContainer:
{
    width:wp('88%'),
    height:hp('11%'),
    backgroundColor:'#fff',
    borderRadius:12,
    alignSelf:'center',
    marginTop:hp('2.5%'),
    flexDirection:'row',
    alignItems:'center',
    
    
     

},

profileCircle:
{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'#1c59cc',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:wp('5%')

},

justin:
{
    fontWeight:'bold',


},

gmailText:
{
  color:'#000',
  opacity:0.4
},

profileText:
{
  
    
    marginLeft:wp('3.5%'),
    marginBottom:hp('1%')


},

resetPasswordContainer:
{

    width:wp('88%'),
    height:hp('8%'),
    backgroundColor:'#fff',
    borderTopRightRadius:12,
    borderTopLeftRadius:12,
    alignSelf:'center',
    marginTop:hp('2.5%'),
    flexDirection:'row',
    alignItems:'center',

},

resetText:
{
    fontWeight:'bold',
    color:'#000',
    marginLeft:wp('6%'),



},


notificationsContainerMain:
{
    width:wp('88%'),
    height:hp('30%'),   
     backgroundColor:'#fff',
     alignSelf:'center',
     marginTop:hp('.5%'),
     alignItems:"center",
     justifyContent:'center',
     
  

},

notificationsContainer:
{
    marginTop:hp('-4%'),
    marginRight:wp('10%'),

    
 
   
    

},

notification:
{
    fontWeight:'bold',
    marginLeft:wp('11%')


},

upTimes:
{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:hp('2%'),
    width:wp('75%'),
    marginLeft:wp('11%')
    
    
},

uptimeText:
{
    fontSize:wp('4%'),
    color:'#1c59cc',
    

},

deactivateTextContainer:
{
    width:wp('88%'),
    height:hp('8%'),
    backgroundColor:'#fff',
    borderBottomRightRadius:12,
    borderBottomLeftRadius:12,
    alignSelf:'center',
    marginTop:hp('.5%'),
    flexDirection:'row',
    alignItems:'center',
},

deactivateText:
{

color:'red',
fontWeight:'bold',
marginLeft:wp('7.5%'),
},


logoutBottom:
{

    width:wp('90%'),
    height:hp('7%'),
    backgroundColor:'red',
    borderRadius:12,
    justifyContent:"center",
    alignItems:'center',
    alignSelf:'center',
    marginTop:hp('13%')
    



},

logoutText:
{
    color:'#fff',
    fontWeight:'bold',

}




})
