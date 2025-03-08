import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


import MemberLoginScreen from "./src/screens/MemberLoginScreen"

const Stack = createStackNavigator();


const App = () => {
  return (
    <SafeAreaProvider
      style={{
        flexGrow: 1,
      }}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MemberLoginScreen"
            screenOptions={{headerShown: false}}>

            <Stack.Screen name="MemberLoginScreen" component={MemberLoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
