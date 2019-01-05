import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Lists extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://10.0.2.2:8080/customer/list')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.values,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.username}, {item.lastName}</Text>}
                    keyExtractor={({customerNumber}, index) => customerNumber}
                />
            </View>
        );
    }
}
