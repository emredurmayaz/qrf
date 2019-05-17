import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import Button from '../component/Button';
// import * as firebase from 'firebase';
import _ from 'lodash';

class Record extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Record',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
      ),
    };
  };
  state = {
    getData: [],
    getDrug: [],
    qrData: {},
    arr: [],
    name: '',
    date: '',
  };

  async componentDidMount() {
    if (this.props.navigation.state.params && this.props.navigation.state.params.error) {
      alert('Qr code uyumlu değildir.');
      return;
    }

    const qrData =
      this.props.navigation.state.params && this.props.navigation.state.params.data
        ? this.props.navigation.state.params.data
        : null;
    this.setState({ qrData });

    const a = qrData.split('"');

    const name = a[1];
    const date = a[3];
    this.setState({ name, date });

    // const array = [];
    // const products = firebase.database().ref('products');
    // products.on('value', snapshot => {
    //   snapshot.forEach(obj => {
    //     let drug = {};
    //     drug.id = obj.key;
    //     drug.name = obj.toJSON().name;
    //     drug.date = obj.toJSON().date;

    //     array.push(drug);
    //   });
    // });

    // this.setState({ getData: array });
  }
  async _handlePress() {
    var body = {
      name: this.state.name && this.state.name,
      expiredDate: this.state.date && this.state.date,
    };
    const veri = await fetch('http://192.168.1.45:3042/api/Drug/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).catch(err => alert(err));

    if (veri.status === 200) {
      Alert.alert('Başarılı', 'Veri Gönderilmiştir', [
        { text: 'OK', onPress: () => this.props.navigation.navigate('Home') },
      ]);
    }
    // Get a key for a new Post.
    // var newPostKey = firebase
    //   .database()
    //   .ref()
    //   .child('products')
    //   .push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
  }

  render() {
    console.log('====================================');
    console.log(this.state.getData);
    console.log('====================================');
    return (
      <View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }}>
          <Text style={{ margin: 20 }}> {this.state.name}</Text>
          <Text style={{ margin: 20 }}> {this.state.date}</Text>
        </View>

        <Button color="blue" onPress={() => this._handlePress()} title="KAYDET" />
      </View>
    );
  }
}

export default Record;
