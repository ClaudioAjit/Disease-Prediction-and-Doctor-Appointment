import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Setting extends React.Component {
    static navigationOptions = {
        title: 'Your Account Setting',
      //  header:null
      };
    render() {
        return (
            <View style={styles.container}>
                 <View style={[styles.container1]}>
                    <Image
                        style={[styles.image]}
                        source={require('./walll.jpg')}
                        /> 
                     <Icon name="key" size={30} color="#4d5454" /> 
                     <Text style={[styles.edit]}>Edit</Text>                   
                </View>
                <Text style={[styles.text]}> Configure your acount</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    edit:{
      color: '#4d5454',
      fontWeight: 'bold',
      fontSize: 20

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:150,
        width:'100%',
      //  borderBottomColor:'#079126',
        backgroundColor:'#91dbb0',
        flexDirection:'row',
        borderRadius:100
}
});