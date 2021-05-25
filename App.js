/*import React, { Component } from 'react';
import { View, Text } from 'react-native';

import firebase from 'firebase/app';

const firebaseConfig = {
  
  authDomain: "firstreactproject-3a081.firebaseapp.com",
  projectId: "firstreactproject-3a081",
  storageBucket: "firstreactproject-3a081.appspot.com",
  messagingSenderId: "787295746675",
  appId: "1:787295746675:web:5a5b5518e331b013a50806"
};


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';

const Stack = createStackNavigator();


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}




export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }


  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>

        </View>

      )

    } if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>

            <Stack.Screen name='Landing' component={LandingScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen name='Register' component={RegisterScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen name='Login' component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>

      );
    }
    else {
      return (

        <View>
          <Text>
            user is loggedIn
            </Text>
        </View>
      )
    }



  }
}

export default App*/

import React from 'react'
import { SafeAreaView } from 'react-native'
import InstaStories from './components/instaStories/instaStories'

function App() {
  return (
    <SafeAreaView>
      <InstaStories />
    </SafeAreaView>
  )
}

export default App



