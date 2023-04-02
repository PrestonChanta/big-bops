/*
  Name: searchBar.js
  Description: Create an artist bio
  Programmer's name: Eric Zhuo, Bayley Duong, Preston Chanta, William Hecht, Andrew Hughes
  Date: 2/12/2023
  Date revised: 4/1/2023
  Preconditions: Requires User to press a Search button, pushing data forwards to database & retreving
  Postconditions: Returns a biography of said pressed searched person
  Errors: no errors
  Side effects: no side effects
  invariants: no invariants
  any known faults: no known faults
*/

import {React, useContext, useState, useEffect} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { ColorSchemeContext } from '../context';
import SearchBar from "../components/searchBar";
import { auth, dataBase } from '../firebase';
import {collection, addDoc, doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";

function Artists({ route, navigation}){
    function navBack(){
        navigation.navigate( 'searchPage' );
    }
    const bee = '';
    let barry = require( '../img/temp2.png' );
    let backstreet = require( '../img/temp3.png' );
    let img = backstreet;

    const [colorScheme, setColorScheme] = useContext(ColorSchemeContext);
    const [artistName, setName ] = useState( JSON.stringify(route.params) );
    const [biography, setBio ] = useState( bee );

    useEffect( () => {
        console.log( artistName );
        if( JSON.parse(artistName) == "Barry B. Benson" ){
            img = barry;
        } else {
            img = backstreet;
        }
        const docRef = doc( dataBase, "Artists", JSON.parse(artistName) );
        onSnapshot( docRef, ( doc ) => {
            console.log( doc.data() );
            setBio( doc.get( "Bio" ) );
        })
    });

    const styles = StyleSheet.create({
        profileBack: {
            padding: 0,
            width: '100%',
            backgroundColor: colorScheme.primaryColor, //'crimson',
            height: 150,
        },
        backButton: {
            marginTop: 100,
            width: 50,
            height: 50,
            backgroundColor: 'blue',
        },
        bioAlign: {
            alignItems: 'center',
            margin: 100,
        },
        icon: {
            resizeMode: 'stretch',
            width: 140,
            height: 140,
            borderRadius: 5,
            marginTop: -170,
        },
        bioDetails: {
            marginTop: 50,
            fontSize: 20,
        },
        nameTitle: {
            marginTop: 10,
            fontSize: 35,
            fontWeight: 'bold',
        },
        bioText: {
            fontSize: 20,   
        }
    });

    return(
        <SafeAreaView>
        <View style={ styles.profileBack }>
            <Pressable style = { styles.backButton } onPress = { navBack }>
            </Pressable>
        </View>
        <View style = { styles.bioAlign }>
            <Image source = { img } style = { styles.icon }>
            </Image>
            <Text style = { styles.nameTitle }> {JSON.parse(artistName)} </Text>
            <View style = { styles.bioDetails }>
                <Text style = { styles.bioText }>
                    {biography}
                </Text>
            </View>
        </View>
        </SafeAreaView>
    );
}

export default Artists;