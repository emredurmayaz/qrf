import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Alert, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Button from '../component/Button';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <Text> Camera </Text>
        </TouchableOpacity>
      ),
    };
  };
  state = {
    drugs: [],
    getDrug: [],
    qrData: {},
  };

  async componentDidMount() {
    const data = await fetch('http://192.168.1.45:3042/api/Drug/get', {
      method: 'GET',
    });
    const drugs = await data.json();

    await this.setState({ getDrug: drugs });

    // const products = await firebase.database().ref('products');
    // products.on('value', snapshot => {
    //   snapshot.forEach(obj => {
    //     let drug = {};
    //     drug.id = obj.key;
    //     drug.name = obj.toJSON().name;
    //     drug.date = obj.toJSON().date;

    //     this.state.drugs.push(drug);
    //   });
    // });
  }
  async _deleteProduct(id) {
    const body = { id: id };
    const res = await fetch('http://192.168.1.45:3042/api/Drug/delete', {
      method: 'PUT',
      body: JSON.stringify(body),
    }).catch(err => alert(err));

    if (res.status === 200) {
      Alert.alert('Ürün başarıyla silinmiştir!');
      await this.componentDidMount();
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <NavigationEvents
          onWillFocus={payload => this.componentDidMount()}
          //   onDidFocus={payload => console.log('did focus', payload)}
        />
        <FlatList
          data={this.state.getDrug}
          renderItem={({ item, index }) => (
            <View key={index} style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ color: 'black', margin: 15, fontSize: 15 }}>{item && item.name}</Text>
                <Text style={{ color: 'black', margin: 15, fontSize: 15 }}>{item && item.expiredDate}</Text>
              </View>
              <Button color="red" onPress={() => this._deleteProduct(item.id)} title="SİL" />
            </View>
          )}
        />
      </View>
    );
  }
}

export default Home;
