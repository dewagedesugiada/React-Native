import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FormContainer from "../container/FormContainer";
import ListViewComponent from "./ListViewComponent";
import TopNavBarComponent from "../container/DasboardContainer";

export default class ContentComponent extends  Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.Content}>

                <FormContainer/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Content: {
        flex : 9,
        backgroundColor : '#336699',
        flexDirection: 'column'

    },

});
