/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import WelcomeScreen from './screens/WelcomeScreen';
import welcome from './screens/welcom';

let product = [
    {
        name : 'samsung galaxy note 10',
        price: 199.42
    },
    {
        name : 'Iphone pro max 15',
        price: 150.52
    }
]
AppRegistry.registerComponent(appName, () => welcome);
/*
AppRegistry.registerComponent(appName, 
    () => () => <WelcomeScreen 
                    x={1} y={2} 
                    person = {{
                        name : 'Nguyen Duc Huy',
                        age : 24,
                        email: 'huymywork1908@gmail.com'
                    }}
                    products={product}
                    />);
*/
