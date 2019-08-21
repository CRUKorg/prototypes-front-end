import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-cruk.eu.auth0.com',
  clientId: 'YOUR_CLIENT_ID'
});

export default () => {
  const [session, setSession] = useState({});
  const handlePress = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'Native',
        audience: `https://dev-cruk.eu.auth0.com/`,
        connection: 'apple',
      });

      console.log(credentials);
      setSession(credentials);
    } catch (err) {
      console.error(err);
      setSession({});
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Auth0 Demo!</Text>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={handlePress}
        underlayColor='#fff'>
        <Text style={styles.loginText}>Sign In With Auth0</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  loginScreenButton:{
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#008080',
    borderRadius:4,
    borderWidth: 1,
    borderColor: '#008080',
    textAlign: 'center',
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10,
  }
});
