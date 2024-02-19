import React from 'react';
import { Text, View } from 'react-native';
import { sum2Number, substract2Number } from '../utilies/Caculation';
// component = fuction
// create a variable which reference to a function
const WelcomeScreen = (props) => {
    const { x, y } = props
    const { person } = props
    const { name, age, email} = person
    const { products } = props
    return <View>
        <Text> Value of x = {x}, Value of y = {y} </Text>
        <Text> Name : {name}, Age: {age}, Email: {email} </Text>
        {products.map(product => 
            <Text> {product.name}, {product.price}</Text>)}
        <Text> x + y = {sum2Number(x,y)}</Text>
        <Text> x - y = {substract2Number(x,y)}</Text>
    </View>
}
export default WelcomeScreen