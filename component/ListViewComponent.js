import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator,Button, TouchableOpacity} from 'react-native';
import {getCustomer} from "../service/CustomerService";


export default class ListViewComponent extends  Component {
    constructor(props){
        super(props)

    }

    render() {

        return (
            <View style={styles.container}>

                <ScrollView>
                    {
                        this.props.customers.map((data, index) => (
                            <View key = { data.customerNumber} style={styles.item}>
                                <Text>
                                    {data.firstName}
                                </Text>
                                {/*<TouchableOpacity*/}
                                {/*style = {styles.submitButton}*/}
                                {/*onPress={() => data.customerNumber}*/}
                                {/*>*/}
                                {/*<Text style = {styles.submitButtonText}> Delete </Text>*/}
                                {/*</TouchableOpacity>*/}

                            </View>
                        ))
                    }
                </ScrollView>

                   

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 7,
        paddingTop: 22
    },
    item: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        padding : 20,
        margin : 2,
        borderColor :'#7CE25A',
        backgroundColor : '#2a4944',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#51b8ff',
        padding: 10,
        marginTop: 25,
        marginLeft: 15,
        marginRight : 15,
        height: 40,
        borderRadius: 10
    },
    submitButtonText:{
        color: 'white',
        textAlign: 'center',
    },
})

