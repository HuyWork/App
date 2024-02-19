import React from "react"
import { Image, ImageBackground, Text, 
            View, TouchableOpacity } from "react-native"
import { images, icons } from "../constants"

function welcome(props) {
    return <View style={{
        flex: 1
    }}>
        <ImageBackground 
            source={images.background}
            resizeMode="cover"
            style={{
                flex: 1
        }}>
            <View style={{
                flex: 20
            }}>
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 5
                }}>
                    <Image style={{
                        height: 30,
                        width: 30,
                        tintColor: 'white',
                        marginStart: 10,
                        marginRight: 5
                    }}
                        source={icons.fire} />
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}> SEOCOMPANY.CO </Text>
                    <View style={{flex: 1}}></View>
                    <Image style={{
                        height: 20,
                        width: 20,
                        tintColor: 'white',
                        marginEnd: 10
                    }} 
                        source={icons.question}/>
                </View>
            </View>
            <View style={{
                flex: 30,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                        marginBottom: 5
                    }}> Welcome to</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}> SEOCOMPANY.CO</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                        marginTop: 5
                    }}> Please select your account type!</Text>
                </View>
            </View>
            <View style={{
                flex: 40
            }}>
                <TouchableOpacity style={{
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
            </View>
            <View style={{
                flex: 30
            }}>
            </View>
        </ImageBackground>
    </View>
}
export default welcome