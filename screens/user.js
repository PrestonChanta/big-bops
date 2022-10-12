import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable } from 'react-native';

function User({navigation}){
    function navH(){
        navigation.navigate('homePage');
    }
    function navL(){
        navigation.navigate('loginPage');
    }

    return(
        <View style = {styles.parent}>
            <View style = {styles.butCont}>
                <Pressable style={styles.button} onPress={navH}>
                    <Text style={styles.text}> Home </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={navL}>
                    <Text style={styles.text}> Signout </Text>
                </Pressable>
            </View>
            <View style = {styles.center}>
                <Text>User</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '50%',
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

export default User