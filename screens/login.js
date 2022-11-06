/*
  Name: login.js
  Description: Makes the login page be able to navigated to with button taps from the user
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 10/11/2022
  Date revised: 10/12/2022
  Preconditions: Importing react components 
  Postconditions: Creates the login page from the imported components
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/
import { React, useState, useContext } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext, LoginContext, UserContext } from '../context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

//creates two functions that would navigate to either the home page or the sign up page
function Login({navigation}){
    //Retrieves the current app color scheme
    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [loginInfo, setLogins] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);

    function handleLog(){
        signInWithEmailAndPassword( auth, email, password )
        .then( ( re ) => {
            navH();
        })
        .catch( ( re ) => {
            console.log( re );
        })
    }

    function navH(){
        navigation.navigate('homePage');
    }

    function navS(){
        navigation.navigate('signupPage');
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //CSS style sheet for the page to make it look red with bold fonts
    const styles = StyleSheet.create({
        parent: {
            height: '100%',
            width: '100%',
            backgroundColor: colorScheme.backgroundColor,
        },
        center: {
            flex: 1,
            alignItems: 'center',
        },
        input: {
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'white',
            padding: 5,
            margin: 5,
            width: 300,
        },
        loginBut: {
            width: 150,
            height: 35,
            marginTop: 25,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'darkred',
        },
        signupBut: {
            marginTop: 25,
            alignItems: 'center',
        },
        textL: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 16,
        },
        textS: {
            fontWeight: 'bold',
            color: 'blue',  
            fontSize: 12,
        },
        iconCont: {
            height: '45%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        Icon: {
            width: 150,
            height: 150,
        }
    })

    //creates two buttons that would allow the user to interact with to navigate to either the home page or the sign up page
    //Also creates two text inputs, one for a username and one for a password. The password utilizes secure text entry to hide the text
    return(
        <View style = {styles.parent}>
            <View style = { styles.iconCont }>
                <Image source = { require ( '../img/BigBops.png' ) }
                       style = { styles.Icon }></Image>
            </View>
            <View style = {styles.center}>
                <TextInput 
                    style = {styles.input}
                    placeholder = 'Email'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    onChangeText={(val) => setEmail(val)}
                />
                <TextInput 
                    style = {styles.input}
                    placeholder = 'Password'
                    placeholderTextColor = {styles.input.placeholderTextColor}
                    secureTextEntry={true}
                    onChangeText={(val) => setPassword(val)}
                />
                <Pressable style = { styles.loginBut } onPress = { handleLog }>
                    <Text style = { styles.textL }> Login </Text>
                </Pressable>
                <Pressable style = {styles.signupBut } onPress = { navS } >
                    <Text style = { styles.textS }> Don't have a account?</Text>
                    <Text style = { styles.textS }> Signup </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Login