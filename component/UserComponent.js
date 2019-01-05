import  React, {Component} from 'react'
import  {View, Text, StyleSheet, TouchableOpacity,TextInput, Button} from 'react-native';
import ShowForm from "./ShowForm";

export default  class  UserComponent extends  Component{
    constructor(props){
        console.log('User COmponent constructor  dipanggil');
        super(props)
        this.state = {
            user : {
                firstname : '',
                gender : ''
            }
        }
    }

    show =() => {
        let u = this.state.user;
        u.firstname = this.props.user.firstname;
        u.gender = this.props.user.gender;

        this.setState( {u});

    }

    render() {
        console.log('UserComponent render  dipanggil');
        return(
            <View style = {styles.container}>
                <Text style={styles.paragraf} >
                    FirstName
                </Text>
                <TextInput style = {styles.input }
                           value = {this.props.user.firstname}
                           placeholder = " Firtsname "
                           placeholderTextColor = "gray"
                           autoCapitalize = "none"
                           onChangeText = {(text)=>(this.props.handleUsernameText(text))}
                />

                <Text style={styles.paragraf} >
                    Gender
                </Text>
                <TextInput style = {styles.input}
                           value={this.props.user.gender}
                           placeholder = " Gender"
                           placeholderTextColor = "gray"
                           autoCapitalize = "none"
                           onChangeText={(tul)=>(this.props.handleGenderText(tul))}
                />

                {/*<Button title={"save"}*/}
                {/*onPress={()=> this.show(this.props.user.firstname, this.props.user.gender) }/>*/}

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={()=> this.show() }
                >
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

                <ShowForm user={this.state.user} />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex : 1,

    },
    input: {
        marginLeft: 15,
        marginRight : 15,
        height: 40,
        borderColor: '#6EC180',
        borderWidth: 1,
        borderRadius:10
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

    paragraf: {
        marginLeft: 15,
        marginBottom : 5,
        marginTop : 2,
        color : '#336699',
        marginRight : 15,
    }

});
