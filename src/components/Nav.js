import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AlbumList from './AlbumList';
import Favourite from './Favourite';


class HomeScreen extends React.Component {
    render() {
        return (
        <View style={{paddingTop: 30, width:null,justifyContent: 'center', alignItems: 'center' }}>
                 <AlbumList/>
        </View>
    );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

class FavouriteScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Favourite: { screen: FavouriteScreen },
    Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);
