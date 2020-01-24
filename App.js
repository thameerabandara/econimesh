import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import  Icon from 'react-native-vector-icons/Ionicons';





import Slideshows from './Sliders/SlideShows';
import QuizScreen from './Quiz/QuizScreen';

class HomeScreen extends Component{
  render(){

    return( 
      <View style = {styles.container}>
      <Slideshows/>   
    </View>
    );
  }
} 



class ExamScreen extends Component {    
  render(){

    return( 
      <View style = {styles.container}>
        <QuizScreen/>
       </View>
          
    );
  }
}


class PaperScreen extends Component {
  render(){

    return( 
          <View style = {styles.container}>
            <Text style={{fontSize:15, fontWeight:'bold', color:'blue'}}>අපොස උසස්පෙළ නව විෂය නිර්දේශය </Text>
          </View>
    );
  }
}


class SettingScreen extends Component {
  render(){

    return( 
          <View style = {styles.container}>
            <Text>Setting TabBarNavigator</Text>
          </View>
    );
  }
}

export default createMaterialBottomTabNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon: ({tintColor}) =>(<Icon name='ios-home' color={tintColor}size={26}/>) 
      }},

  Exam :{
        screen:ExamScreen,
        navigationOptions:{
          tabBarLabel:'Quick Exam', 
            tabBarIcon: ({tintColor}) =>(<Icon name='ios-paper' color={tintColor}size={26}/>) 
              }},
              
              
  Papers:{
        screen:PaperScreen,
        navigationOptions:{
          tabBarLabel:'Pass Papers',
            tabBarIcon: ({tintColor}) =>(<Icon name='md-paper' color={tintColor}size={26}/>) 
                  }}, 

  Setting:{
         screen:SettingScreen,
         navigationOptions:{
         tabBarLabel:'Setting',
      tabBarIcon: ({tintColor}) =>(<Icon name='ios-settings' color={tintColor}size={26}/>) 
      }},


         
},
{initialRouteName: 'Home',
 //order:['Home','Profile', 'Feed','Setting'],
activeTintColor:'#6059f7',
shifting:true})


const styles = StyleSheet.create({
   container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   }   
});  


