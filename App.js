import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DasboardContainer from "./container/DasboardContainer";
import Navigator from "./navigation/Navigator";
import Lists from "./component/Lists";
import FormContainer from "./container/FormContainer";
import FormCustomer from "./component/customer/FormCustomer";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      {/*<Navigator/>*/}
      {/*<DasboardContainer/>*/}
      {/*<Lists/>*/}

      <FormCustomer/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
});
