import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import  Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends Component{
  render(){

    return( 
          <View style = {styles.container}>
            <Text>HomeScreen</Text>
          </View>
    );
  }
}



class ExamScreen extends Component {
  render(){

    return( 
          <View style = {styles.container}>
            <Text> ExamScreen TabBarNavigator</Text>
          </View>
    );
  }
}


class PaperScreen extends Component {
  render(){

    return( 
          <View style = {styles.container}>
            <Text>Paper TabBarNavigator</Text>
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
  Home:{screen:HomeScreen,
      navigationOptions:{
      TabBarLabel:'Home',
      tabBarIcon: ({tintColor}) =>(<Icon name='ios-home' color={tintColor}size={26}/>) 
      }},

      Exam:{screen:ExamScreen,
        navigationOptions:{
          TabBarLabel:'Quick', 
            tabBarIcon: ({tintColor}) =>(<Icon name='ios-paper' color={tintColor}size={26}/>) 
              }},
              
              
      Paper:{screen:PaperScreen,
        navigationOptions:{
          TabBarLabel:'PassPapers',
            tabBarIcon: ({tintColor}) =>(<Icon name='md-paper' color={tintColor}size={26}/>) 
                  }}, 

  Setting:{screen:SettingScreen,
    navigationOptions:{
      TabBarLabel:'Setting',
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
     alignItems:'center'
   }
   
});  
