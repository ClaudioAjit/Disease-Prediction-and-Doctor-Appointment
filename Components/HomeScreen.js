import React from 'react';
import { Button,Image,ImageBackround,TextInput,ScrollView } from 'react-native';
import {
    View,
    StyleSheet,
    Dimensions,   
    TouchableOpacity,
    Platform,
    Text,
  } from 'react-native';
  
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends React.Component {   
  static navigationOptions = {
    title: 'Doctor Appointnment',
    headerRight: <Icon name="wallet" size={30} color="#4d5454" />     
  //  header:null
  };
  state = {    
       searchengine: ''   
     };
    
    render() {
        return (
          <ScrollView style={[{backgroundColor:'#91dbb0'}]}>
           <View style={[styles.wholecontainer]}>
             <View style={[styles.searchengineContainer]}>
              <View style={[styles.hflex]}> 
                    <Icon name="search" size={30} color="#4d5454" />               
                    <TextInput style={[styles.inputbox]}
                      placeholder="Search for doctor,clinicor diseases"
                      placeholderTextColor="#9a73ef"
                      //  underlineColorAndroid="transparent"                        
                      //  numberOfLines = {1}
                        borderBottomColor='#3e3a42'
                        onChangeText={(username) => this.setState({ username })}
                      />
                    </View> 
                </View> 
                <Text style={[styles.text]}>What you looking for?</Text>
              <View style={[styles.container1]}>
                
                <View style={[styles.hflex]}>
                  <TouchableOpacity style={[styles.vflex]}>
                  <Icon name="calendar-check" size={30} color="#4d5454" style={[styles.image]} /> 
                  <Text> Make Appointment</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.vflex]}>
                  <Icon name="frown" size={30} color="#4d5454" style={[styles.image]}/>
                  <Text> Go for disease prediction</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.hflex]}>
                  <TouchableOpacity style={[styles.vflex]}>
                  <Icon name="comment" size={30} color="#4d5454" style={[styles.image]}/>
                  <Text>Consult with your doctor</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.vflex]}>
                  <Icon name="tablets" size={30} color="#4d5454" style={[styles.image]} /> 
                  <Text>Medicines and heallth</Text>

                  </TouchableOpacity>


                </View>
                <View style={[styles.hflex]}>
                  <TouchableOpacity style={[styles.vflex]}>
                  <Icon name="calendar-alt" size={30} color="#4d5454" style={[styles.image]}/> 
                  <Text>Reminder</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.vflex]} 
                  onPress={this._setting}
                  >
                  <Icon name="user-cog" size={30} color="#4d5454" style={[styles.image]}/> 
                  <Text>Account setting</Text>
                  </TouchableOpacity>
                </View>
              </View> 
              <Text style={[styles.text1]}>Find doctors in top specialist</Text>
              <ScrollView
               horizontal={true}>  
              <View style={[styles.container2]}>

                <TouchableOpacity style={[styles.vflex]}>
                <Icon name="tooth" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Dentists</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]}>
                <Icon name="allergies" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Dermatologist</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]}>
                <Icon name="brain" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Neurologist</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]}>
                <Icon name="heartbeat" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Cardiologist</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]}>
                <Icon name="cannabis" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Medicine</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.vflex]}>
                <Icon name="bone" size={30} color="#4d5454" style={[styles.image]}/> 
                <Text>Orthopedic</Text> 
                </TouchableOpacity>
                
              </View>
             </ScrollView>
             <View style={[styles.container3]}>
               <Text>Help</Text>
               <Text>policy</Text>

             </View>
           </View> 
        </ScrollView>
           );
          }
          _setting = async () => {
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Setting');
          };
      } 
      const styles = StyleSheet.create({
        hflex:{
          flexDirection:"row",
          flex:1,
          justifyContent:'center',
          alignItems:'baseline' ,
          marginLeft:10
        },
        backgroundColor:{
          backgroundColor:'#91dbb0'
    
        },
        text: {
          color: '#4d5454',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop:35,
         
         },
         text1: {
          color: '#4d5454',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop:10,
         
         },
        vflex:{
          flexDirection:"column",
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          marginLeft:15,
         justifyContent:'center'
        },
        wholecontainer:{
          backgroundColor:'#91dbb0',
          width:'100%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'
        },
        inputbox:{
          width:230,
          height:40,     
          marginTop:10,
          marginLeft:15,
          backgroundColor:'#ebf2ee'            
        },
        searchengineContainer:{
          width:295,
          height:60,
          alignItems:'baseline',
          justifyContent:'center',          
          borderRadius:20,
          backgroundColor:'#ebf2ee' ,
          marginTop:40,
          marginLeft:40,
          
        },
        container1: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height:250,
          width:'100%',
          marginTop:10,
        //  borderBottomColor:'#079126',
          backgroundColor:'#d1e6d7'
        }, 
        container2: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height:70,
          width:'100%',
          marginTop:10,
        //  borderBottomColor:'#079126',
          backgroundColor:'#d1e6d7',
          flexDirection:'row'
        }, 
        container3: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height:150,
          width:'100%',
          marginTop:10,
        //  borderBottomColor:'#079126',
          backgroundColor:'#95a198'
        }, 
        image:{
          width:40,
          height:40,
          marginLeft:20,
          marginTop:10
          
        }   
    });
        

          
      

 
