import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class Camera extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Camera',
    };
  };
  state = {};

  onRead = e => {
    const data = e.data;
    // const bool = data.includes('name');
    this.props.navigation.navigate('Record', { data: data, error: false });

    // if (bool) {
    //   const qrData = data;
    //   this.props.navigation.navigate('Record', { data: qrData, error: false });
    // } else {
    //   this.props.navigation.navigate('Record', { data: null, error: true });
    // }
  };

  render() {
    return <QRCodeScanner cameraProps={{ captureAudio: false }} onRead={this.onRead} />;
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Camera;
