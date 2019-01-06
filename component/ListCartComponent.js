import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';

export default class ListCartComponent extends Component  {

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <View style={styles.cards}>
                <Text>{this.props.data.username} </Text>
                        <FlatList
                            data={this.props.dataCustomer}
                            renderItem={({item}) =>
                                <Text style={styles.item}>
                                    {item.Name} -> {item.Type} -> {item.Brand}
                                </Text>
                            }

                            keyExtractor={({Name}, index) => Name}
                        />

            </View>
        )
    }

}

const  styles = StyleSheet.create({
    item : {
        flex:1,
        backgroundColor : '#fff567',
        padding: 10,
        paddingBottom : 10,
        margin:2,
        borderColor :'#11A366',
        borderWidth: 1,
        borderRadius: 5

    },
    cards : {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'

    }

})
