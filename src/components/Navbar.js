//import
import React from 'react';
import {View, Text} from 'react-native';
 import Section from './Section';

//create component
const Navbar = () => {

    return (
        <View style ={style.viewStyle}>
        <Section param={"Home"}/>
        <Section param={"Flash"}/>
        <Section param={"Favourites"}/>
        </View>

    );
};

const style = {
    viewStyle : {
        flexDirection: 'row',
        backgroundColor: 'F8F8F8',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 60,
        paddingTop: 300,
        borderColor: '#000',
        //borderOffset: { width: 10, height: 10 },
        //shadowOpacity: 1
        borderWidth: 0.5,
        borderRadius: 4

    }
}


//export
export default Navbar;
