import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Card extends Component {
  render() {
    const data = this.props;
    console.log(data && data);
    return (
      <View
        style={{
          flexDirection: 'row',
          height: deviceHeight / 6,
          width: deviceWidth - 10,
          borderRadius: 10,
          margin: 5,
          overflow: 'hidden',
          elevation: 3,
        }}
      >
        <View
          style={{
            width: 50,
            backgroundColor: 'yellow',
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 14,
          }}
        >
          <Text style={{ fontWeight: '700' }}>{data && data.id}</Text>
          <Text style={{ fontWeight: '500' }}>{data && data.name}</Text>
          <Text style={{ fontWeight: '400' }}>{data && data.date}</Text>
        </View>
      </View>
    );
  }
}

export default Card;
