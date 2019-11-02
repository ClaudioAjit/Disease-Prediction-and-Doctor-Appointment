import React from 'react';
import {
  ScrollView,
  Text,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import DropdownMenu from 'react-native-dropdown-menu';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'


export default class Register extends React.Component {
  
    static navigationOptions = {
      title: 'Lots of features here',
      header:null
    };
    state = {
      //   user:'',
         text:'',
        // password: '',
      //   isLoggingIn: false,
      //   message: ''
       };
      
    render() {
     // var data = [["User","Doctor", "Clinic"]]
      
      return (
        <ScrollView style={[{backgroundColor:'#91dbb0'}]}>
        <View style={styles.container}>  
          <View style={[styles.container1]}>
             <Image
                style={[styles.image]}
                source={require('./createacc.png')}
                />
                <Text style={[styles.text]}> create yor account</Text>
            </View>
            <View style={[styles.container2]}>
              <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter your Name"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  
                  onChangeText={(username) => this.setState({ username })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter username"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  
                  onChangeText={(username) => this.setState({ userno })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter Address"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  borderBottomColor='#3e3a42'
                  onChangeText={(username) => this.setState({ useraddress })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter contact no."
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  borderBottomColor='#3e3a42'
                  onChangeText={(username) => this.setState({ userno })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter E-mail"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  
                  onChangeText={(username) => this.setState({ userno })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="put you password"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  secureTextEntry={true}
                  onChangeText={(username) => this.setState({ userno })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="confirm password"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  secureTextEntry={true}
                  onChangeText={(username) => this.setState({ userno })}
                />
                
                </View>
                
                <TouchableOpacity style={styles.loginButton} onPress={this._homePage}>               
                          
                            <Text >Submit</Text>
                           
              </TouchableOpacity>
              <View style={[styles.horizontalFlex]}>
                <Text>Already have an account??</Text>
                <TouchableOpacity onPress={this._loginPage}>
                            <View >                           
                              <Text style={[styles.text,{marginLeft:15}]}>Sign In</Text>
                              </View>
                </TouchableOpacity>             
              
              </View>
          
        </View>
      </ScrollView>
      );
    }
  
    _homePage = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('HomeScreen');
    };
  
   _loginPage = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('SignIn');
  };
}
 

  const styles = StyleSheet.create({
    text: {
      color: '#4d5454',
      fontWeight: 'bold',
      fontSize: 20
     
     },
    container: {      
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',    
      
      
    },
    horizontalFlex:{
      //    flex:1,
          display:'flex',
          flexDirection:"row",
          height:40,
          width:'100%',
          marginTop:60,
          justifyContent:'center',
          alignItems:'baseline'          
              },
              hflex:{
                flexDirection:"row",
                height:60
              },
    container1: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height:150,
      width:'100%',
    //  borderBottomColor:'#079126',
      backgroundColor:'#819986'
    },
    dropwowncontainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height:350,
     // width:'60%',
    //  borderBottomColor:'#079126',
      backgroundColor:'#ffffff'
    },
    image:{
      width:90,
      height:90
    }, 
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
    container2: {      
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // height:300,
      width:'100%',
    //  borderBottomColor:'#079126',
    //  backgroundColor:'70#60a370'
    },  
    container3: {
      backgroundColor:'#60a370',
      flex: 1,
    //  alignItems: 'center',
    //  justiyContent: 'center',
      height:280,
      marginTop:5,
      width:'70%',
    //  borderBottomColor:'#079126',
    //  backgroundColor:'#60a370'
    },    
    inputbox:{
      width:250,
      height:40,     
      marginTop:10,
      marginLeft:15,
      borderBottomWidth:2             
    },
  });