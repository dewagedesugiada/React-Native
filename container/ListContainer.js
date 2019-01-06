import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ListCartComponent from "../component/ListCartComponent";

export default class ListContainer extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            Customers : {
                Id : '345682',
                username : ' Bendot',
                age : 30,
                cars : [
                    {
                        Name:'Pajero',
                        Type : 'suv',
                        Brand : 'Mitsubishi'
                    },
                    {
                        Name:'Fortuner',
                        Type : 'suv',
                        Brand : 'Toyota'
                    }
                ]
            }
        }
    }

    render() {
        return(
            <View style={styles.boxs}>
                <ListCartComponent data={this.state.Customers} dataCustomer={this.state.Customers.cars} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    boxs : {
        flex : 1,
        backgroundColor: "#326362"
    }
})