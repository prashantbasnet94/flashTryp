/**
 * @format
 */

import  React from 'react';
import {AppRegistry,View,Text} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Nav from './src/components/Nav';


import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const TabScreens = createBottomTabNavigator(
    {
        tabBarComponent: props =>
            <TabBarComponent
                {...props}
                style={{ borderTopColor: '#605F60' }}
            />,
    },
);


const App1 = () => {
    return(
        <View>

            <Nav  />
            <TabScreens/>
         </View>

    )
}

AppRegistry.registerComponent(appName, () => Nav);
