import React from 'react';
import { View , Text} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import DasboardContainer from "../container/DasboardContainer";
import ContentComponent from "../component/ContentComponent";

class HomeScreen extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
               <DasboardContainer  navigation={this.props.navigation} />
            </View>
        );
    }
}

class UserScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ContentComponent/>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    User: UserScreen,
});

export default createAppContainer(TabNavigator);

