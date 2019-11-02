import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,  
  TextInput,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ImageBackground } from 'react-native'

export default  class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
      header:null
    };
    state = {
      //   user:'',
         username: '',
         password: ''
      //   isLoggingIn: false,
      //   message: ''
       };
  
    render() {
      return (

        <ScrollView style={[styles.backgroundColor]}>
         <View>     
                     
            <View style={[styles.container2]}>
                
                  <View style={[styles.hflex]}> 
                    <Icon name="user-ninja" size={30} color="#4d5454" />               
                    <TextInput style={[styles.inputbox]}
                      placeholder="Enter Userame or Phone Number"
                      placeholderTextColor="#9a73ef"
                        underlineColorAndroid="transparent"                        
                        numberOfLines = {1}
                        borderBottomColor='#3e3a42'
                        onChangeText={(username) => this.setState({ username })}
                      />
                    </View>
                <View style={[styles.hflex]}> 
                  <Icon name="key" size={30} color="#4d5454" /> 
                    <TextInput style={[styles.inputbox,{marginTop:15}]}
                    placeholder="Enter your password"
                    placeholderTextColor="#9a73ef"                   
                      underlineColorAndroid="transparent"                        
                      numberOfLines = {1}
                      secureTextEntry={true}
                      onChangeText={(username) => this.setState({ password })}
                    />
                 </View>
             </View>
             <View style={[styles.container3]}>
              <TouchableOpacity style={styles.loginButton} onPress={this._homePage}>
                          
                            <Text >login</Text>
                           
              </TouchableOpacity>
              <View style={[styles.horizontalFlex]}>
                <Text>Havent registered yet?</Text>
                <TouchableOpacity onPress={this._registerPage}>
                            <View >
                              <Text style={[styles.text,{marginLeft:15}]}>Sign Up</Text>
                              </View>
                </TouchableOpacity>
              </View>
          </View>
        {/* </ImageBackground> */}
          </View>
       </ScrollView>
      );
    }
    _homePage = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Home');
    };
    _registerPage = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Register');
    };
  }          
               
  
          
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //  alignItems: 'center',
    //  justifyContent: 'center',
      backgroundColor:'#60a370',
    //  height:'100%',
     // width:'100%'
    },
    backgroundColor:{
      backgroundColor:'#91dbb0'

    },
    verticalFlex:{
      //    flex:1,
          display:'flex',
          flexDirection:"column",
      //    height:20
      },    
  horizontalFlex:{
  //    flex:1,
      display:'flex',
      flexDirection:"row",
      height:60,
      width:'100%',
      marginTop:60,
      justifyContent:'center',
      alignItems:'baseline'          
          },
    hflex:{
      flexDirection:"row",
      height:60,
      alignItems:'baseline',
      justifyContent:'center',
      width:280,
      borderBottomWidth:2
    },
    image:{
      width:140,
      height:140,
      marginTop:30,
      justifyContent:'center',
      marginLeft:100
    },
    img:{
      width:'100%',
      height:'100%'
    },
    text: {
      color: '#4d5454',
      fontWeight: 'bold',
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
     
     },
    
    container2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height:350,
      width:'100%',
      marginTop:60
    //  borderBottomColor:'#079126',
    //  backgroundColor:'70#60a370'
    },    
    container3: {
      flex: 1,
      alignItems: 'center',
    //  justifyContent: 'center',
      height:170,
      width:'100%',
      marginTop:10
    //  borderBottomColor:'#079126',
    //  backgroundColor:'70#60a370'
    },    
    inputbox:{
      width:250,
      height:40,     
      marginTop:10,
      marginLeft:15             
    },
    loginButton:{         
      marginTop:0,
      width:280,
      height:45,
      borderRadius:20,
      marginLeft:0,
      backgroundColor:'#d1e6d7',
      justifyContent:'center',
      alignItems:'center'
  },
  position2: {
    marginLeft:0,
    fontSize:20

  }
  
  });