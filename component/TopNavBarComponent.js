import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import  getCustomerList from '../service/CustomerService'
export default class TopNavBarComponent extends  Component {
    constructor(props){
        super(props)
        this.state ={ isLoading: true}
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.TopNav}>
                <View style={styles.triangle}>
                </View>
                <View style={styles.btn} >

                </View>
                <View style={styles.text} >
                    {/*<TouchableOpacity*/}
                        {/*style = {styles.submitButton}*/}
                        {/*onPress={() => navigate('User')}*/}
                    {/*>*/}
                        {/*<Text style = {styles.submitButtonText}> Form </Text>*/}
                    {/*</TouchableOpacity>*/}

                    <Button title={'data'} onPress={()=> {this.props.data()} }/>


                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    TopNav: {
        flex : 1,
        backgroundColor : '#11A366',
        elevation: 2,
        flexDirection: 'row',

    },
    triangle: {
        flex : 1,
        width: 50,
        height: 50,
        borderRadius : 50,
        backgroundColor: '#fff'

    },
    btn: {
      flex: 4
    },
    text : {
        flex :2,
        justifyContent: 'center'


    },
    submitButton: {
        backgroundColor: '#51b8ff',
        padding: 5,
        borderRadius: 10
    },
    submitButtonText:{
        color: 'white',
        textAlign: 'center',
    },

});
