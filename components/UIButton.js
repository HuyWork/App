import React from "react"
import { Text, TouchableOpacity } from "react-native"

function UIButton(props) {
    return <TouchableOpacity style={{
        flexDirection: 'row',
        borderWidth: 1,
        height: 45,
        borderColor: 'white',
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }}>

        <Text style={{
            color: 'white',
            fontSize: 16
        }}> Infuencer </Text>
    </TouchableOpacity>
}
export default UIButton