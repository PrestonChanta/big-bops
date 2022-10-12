/*
  Name: App.js
  Description: Creates the app for the user to see with buttons to interact with the different screens being the login page, sign up page, home page, user page, and the search page.
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/9/2022
  Date revised: 10/12/2022
  Preconditions: Importing react components 
  Postconditions: Creates app from imported components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import React from 'react';
import { userState, Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './screens/search';
import Home from './screens/home';
import User from './screens/user';
import Login from './screens/login';
import Signup from './screens/signup';


//create the app to export to expo website which can simulate the app on our phone when a QR is scanned
export default function App(){
  const Stack = createNativeStackNavigator();
//create the login page,sign up page, home page, user page, and search page with CSS style that would style it red with bold fonts
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "loginPage" 
          component = {Login} 
          options = {{
            title: 'Login',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }, 
            headerBackVisible: false,
            }}  
        />
        <Stack.Screen 
          name = "signupPage" 
          component = {Signup} 
          options = {{
            title: 'Signup',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }, 
            headerBackVisible: false,
            }}  
        />
        <Stack.Screen 
          name = "homePage" 
          component = {Home} 
          options = {{
            title: 'Home',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }, 
            headerBackVisible: false,
            }}  
          />
        <Stack.Screen 
          name = "userPage" 
          component = {User}
          options = {{
            title: 'Profile',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }, 
            headerBackVisible: false,
            }}  
          />
        <Stack.Screen 
          name = "searchPage" 
          component = {Search} 
          options = {{
            title: 'Profile',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }, 
            headerBackVisible: false,
            }}  
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});
