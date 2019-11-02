import React from 'react';

import { DrawerNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { Button,ImageBackround,TextInput,TouchableHighlight} from 'react-native';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    Text,
  } from 'react-native';
import Reminder from './Reminder';
import Setting from './Setting';
//import Setting from './Setting';


export default class Register extends React.Component {
  render() {
    // var data = [["User","Doctor", "Clinic"]]
     
     return (
       <View>
               <TouchableOpacity style={styles.loginButton} onPress={this._reminder}>              
                          
                            <Text >Reminder</Text>
                           
              </TouchableOpacity> 
               <TouchableOpacity style={styles.loginButton} onPress={this._reminder}>              
                          
               <Text >Setting</Text>
              
        </TouchableOpacity> 
        </View>
     );
  }
  _reminder = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Reminder');
  };
  _setting = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Setting');
  };
}
const styles = StyleSheet.create({
  loginButton:{         
    marginTop:60,
    width:300,
    height:45,
    borderRadius:20,
    marginLeft:0,
    backgroundColor:'#7d8077',
    justifyContent:'center',
    alignItems:'center'
},
});