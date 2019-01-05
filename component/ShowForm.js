import React, {Component} from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

export default class ShowForm extends  Component {
    constructor(props){
     
        super(props)
        

    }

  

    render() {
        
        return (
            <View style={styles.ShowForm}>
                <Text>
             {this.props.user.firstname} is {this.props.user.gender}
                </Text>
            </View>




        )
    }
}

const styles = StyleSheet.create({

    ShowForm: {
        flex:1,
        backgroundColor : '#fffbf5',
        elevation: 2,
        margin : 50,
        borderColor :'#0db5e2',
        borderWidth: 1,
        borderRadius: 30

    },



});
