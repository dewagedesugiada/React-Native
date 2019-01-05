import React, {Component} from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import UserComponent from "../component/UserComponent";


export default class FormContainer extends  Component {
    constructor(props){
        super(props)
        this.state = {
            user : {
                firstname : 'Dewa',
                gender : 'Male'
            }

        }

    }

    handleUsername(tulisanya) {
        console.log(tulisanya);
        const text = {
            firstname : tulisanya,
            gender : this.state.user.gender
        }
       this.setState({user : text})
    }

    handleGender(gender){
        console.log(gender);
        this.setState({user:{...this.user, gender : gender}})

    }

    handleJos(data){
       this.setState({user:{...this.user,data}});

    }


    render() {
        return (
            <View style={styles.FormContainer}>

                <Text style={styles.paragraf} >Form user</Text>
                <View style={styles.circle} ></View>
                {/*<Image style={styles.logo} source={require('../assets/dev.png')} />*/}
                <UserComponent user={this.state.user} handleUsernameText={this.handleUsername.bind(this)} handleGenderText={this.handleGender.bind(this)} />

            </View>




        )
    }
}

const styles = StyleSheet.create({

    FormContainer: {
        flex:1,
        backgroundColor : '#fffbf5',
        elevation: 2,
        padding: 20,
        margin : 20,
        borderColor :'#0db5e2',
        borderWidth: 1,
        borderRadius: 20

    },
    logo: {
        height: 98,
        width: 98,
        marginHorizontal: 60
    },
    circle:{
        width: 80,
        height: 80,
        borderRadius : 100,
        backgroundColor: '#336699',
        marginHorizontal: 75
    },
    paragraf: {
        color : '#336699',
        fontWeight :'bold',
        fontSize :20,
        paddingBottom :10,
        textAlign: 'center'


    },


});
