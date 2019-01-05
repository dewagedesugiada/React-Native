import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator,Button} from 'react-native';
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
})

