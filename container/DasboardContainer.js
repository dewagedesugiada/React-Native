import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TopNavBarComponent from "../component/TopNavBarComponent";
import ListViewComponent from "../component/ListViewComponent";
import {getCustomer, PostCustomer} from "../service/CustomerService";

export default class DasboardContainer extends Component{
    constructor (props){
        console.log('Dashboard container constructor  dipanggil');
        super(props)
        this.getListCustomers = this.getListCustomers.bind(this)
        this.state = {
            customer : [],
            data : {
                firstName: "dewa",
                lastName: "gede",
                birthDate: "1997-1-10",
                username: "admin",
                password: "admin",
                phoneType: "android",
                phoneNumber: "088"
            }
        }


    }

     async getListCustomers  () {
        const res = await getCustomer();
        this.setState({customer: res.data.values})
    }

    postCustomer = async () => {
        await PostCustomer();

    }

    render(){
        console.log('Dashboard container render  dipanggil');
        return(
            <View style = {styles.Dashboard } >
                <Button title={'POST'} onPress={this.postCustomer}/>
                <TopNavBarComponent navigation={this.props.navigation} data={this.getListCustomers}/>
                <ListViewComponent customers={this.state.customer}  />
            </View>
        )
    }


    

}

const styles = StyleSheet.create({
    Dashboard: {
        flex : 1,
        backgroundColor : '#d6dbdc',


    }
});
