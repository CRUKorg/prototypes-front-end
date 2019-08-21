import React from 'react';
import { Button, Text, View } from 'react-native';

export default ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile</Text>
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate('News')}
    />
  </View>
);
