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
//import{ScrollView} from 'react-native-gesture-handler'

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
       displayacoountForm = (text) => {   
        var data = [{
          value: 'male',
        }, {
          value: 'Female',
        }, {
          value: 'Hemai',
        }];
        switch (text) {
          case 'User':
            return (
              <View>
              <TextInput 
                  style={[styles.inputbox,{marginTop:10}]}               
                    placeholder="Put UserId"                    
                    //    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    onChangeText={password => this.setState({ password })}
                  />
              <Dropdown  
                  bgColor={'white'}                                
                  label='Choose gender'
                  data={data}
                />
                 <DatePicker
                        style={{marginTop:5,width:250}}
                        bgColor={'white'}
                        date={this.state.date}
                        mode="date"
                        placeholder="Select Date of birth"
                        format="YYYY-MM-DD"
                        minDate="2000-01-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginLeft: 36
                          }
                          // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                      />             
              </View>
            );
          case 'Doctor':
            return (
              <View>
                  <TextInput 
                  style={[styles.inputbox,{marginTop:10}]}               
                    placeholder="Enter License no"                    
                    //    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    onChangeText={password => this.setState({ password })}
                  />
                  <TextInput 
                  style={[styles.inputbox,{marginTop:10}]}               
                    placeholder=" Put Speciality"                    
                    //    underlineColorAndroid="transparent"
                    numberOfLines={1}
                    onChangeText={password => this.setState({ password })}
                  />
                  
                    <Dropdown
                        bgColor={'white'}                                                      
                        label='Choose gender'
                        data={data}
                      /> 
                    
                    <DatePicker
                        style={{marginTop:5,width:200}}
                        bgColor={'white'}
                        date={this.state.date}
                        mode="date"
                        placeholder="Select Date of birth"
                        format="YYYY-MM-DD"
                        minDate="2000-01-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginLeft: 36
                          }
                          // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                      />             
                  </View>
            );
          case 'Clinic':
            return (
              <TextInput
                style={[styles.inputbox]}
                placeholder="Enter clinic pan no."
                //    underlineColorAndroid="transparent"
                numberOfLines={1}
                onChangeText={phn => this.setState({ phn })}
              />
            );
          default:
            return undefined
        }
      };
       
    render() {
      var data = [["User","Doctor", "Clinic"]]
      
      return (
        <ScrollView style={[{backgroundColor:'#60a370'}]}>
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
                  borderBottomColor='#3e3a42'
                  onChangeText={(username) => this.setState({ username })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="Enter username"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  borderBottomColor='#3e3a42'
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
                  borderBottomColor='#3e3a42'
                  onChangeText={(username) => this.setState({ userno })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="put you password"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  borderBottomColor='#3e3a42'
                  onChangeText={(username) => this.setState({ userno })}
                />
                <TextInput style={[styles.inputbox,{marginTop:10}]}
                placeholder="confirm password"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  borderBottomColor='#3e3a42'
                  onChangeText={(username) => this.setState({ userno })}
                />
                
                </View>
                <View style={[styles.container3]}>
                <Text>create account as:</Text>
                 <View style={{height: 10,width:200}} />
                  <DropdownMenu
                  //  style={[styles.dropwowncontainer]}
                    bgColor={'white'}
                    tintColor={'#666666'}
                    activityTintColor={'green'}
                    // arrowImg={}      
                    // checkImage={}   
                    // optionTextStyle={{color: '#333333'}}
                    // titleStyle={{color: '#333333'}} 
                    // maxHeight={300} 
                    handler={(selection, row) => this.setState({text: data[selection][row]})}
                    data={data}
                  >
          
                    <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                      
                        {this.displayacoountForm(this.state.text)}
                          
                    </View>
          
                  </DropdownMenu>
                  </View>
                <TouchableOpacity style={styles.loginButton} onPress={this._homePage}>               
                          
                            <Text >Submit</Text>
                           
              </TouchableOpacity>
              <View style={[styles.horizontalFlex]}>
                <Text>Already have an account??</Text>
                <TouchableOpacity onPress={this._registerPage}>
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
      this.props.navigation.navigate('Home');
    };
  }
 

  const styles = StyleSheet.create({
    text: {
      color: '#4d5454',
      fontWeight: 'bold',
      fontSize: 25
     
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
      backgroundColor:'#60a370',
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
      backgroundColor:'#ffffff' ,
      borderRadius:20,
      textDecorationLine:'underline' ,          
    },
  });