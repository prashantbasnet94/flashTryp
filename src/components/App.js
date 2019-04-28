import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import  {createStore} from 'redux';


cons App2 = () => {
    return (
        <Provider store = {createStore}>
            <View />
        </Provider>

    )
}
