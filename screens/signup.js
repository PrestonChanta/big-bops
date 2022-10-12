/*
  Name: signup.js
  Description: Makes the signup page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 10/12/2022
  Preconditions: Importing react components 
  Postconditions: Creates the signup page from the imported components provided by react native
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';
//create a function that would allow the user to navigate to the login page
function Signup({navigation}){
    function navL(){
        navigation.navigate('loginPage');
    }

    return(
        <View style = {styles.parent}>
            <View style = {styles.butCont}>
                <Pressable style={styles.button} onPress={navL}>
                    <Text style={styles.text}> Signup </Text>
                </Pressable>
            </View>
            <View style = {styles.center}>
                <Text>Signup</Text>
            </View>
        </View>
    );
}
//CSS style sheet for the page to make it look red with bold fonts
const styles = StyleSheet.create({
    parent: {
        height: '100%',
        width: '100%',
    },
    center: {
        flex: 1,
        alignItems: 'center'
    },
    butCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 0,
        elevation: 3,
        backgroundColor: 'darkred',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default Signup