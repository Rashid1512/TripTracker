import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

function DrawerFirstScreen({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: isEnabled ? 'black' : 'white',
            }}>
            <View
                style={{
                    backgroundColor: 'black',
                    width: '95%',
                    height: 150,
                    alignSelf: 'center',
                    marginTop: 10,
                }}>
                <Text
                    style={{
                        color: 'white',
                        marginTop: 30,
                        marginLeft: 10,
                        fontSize: 15,
                    }}>
                    Your balance is
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={{
                            color: 'white',
                            marginLeft: 15,
                            fontSize: 15,
                            marginTop: 20,
                        }}>
                        Rs
                    </Text>
                    <Text style={{ color: 'white', fontSize: 35, marginLeft: 10 }}>
                        0
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: 'red',
                        width: '90%',
                        height: 40,
                        alignSelf: 'center',
                        marginTop: 10,
                        top: 20,
                        borderRadius: 2,
                    }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Recharge') }}>
                        <Text
                            style={{
                                color: 'white',
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}>
                            TAP TO RECHARGE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '98%', alignItems: 'flex-end', marginTop: 30 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Stack3') }}>
                    <Text style={{ color: 'red' }}>View more</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontWeight: 'bold' }}>DATA</Text>
                    <View
                        style={{
                            height: 100,
                            width: 100,
                            borderColor: 'lightgray',
                            borderWidth: 3,
                            borderRadius: 50,
                        }}></View>
                    <Text style={{ fontWeight: 'bold' }}>Per MB</Text>
                </View>

                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontWeight: 'bold' }}>CALLS</Text>
                    <View
                        style={{
                            height: 100,
                            width: 100,
                            borderColor: 'lightgray',
                            borderWidth: 3,
                            borderRadius: 50,
                        }}></View>
                    <Text style={{ fontWeight: 'bold' }}>Per 60 s</Text>
                </View>

                <View
                    style={{
                        // borderColor: 'lightgray',
                        // borderWidth: 1,
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontWeight: 'bold' }}>SMS</Text>
                    <View
                        style={{
                            height: 100,
                            width: 100,
                            borderColor: 'lightgray',
                            borderWidth: 3,
                            borderRadius: 50,
                        }}></View>
                    <Text style={{ fontWeight: 'bold' }}>Per</Text>
                </View>
            </View>
            <View
                style={{
                    width: '100%',
                    borderColor: 'lightgray',
                    borderWidth: 1,
                    marginTop: 20,
                }}></View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 30,
                }}>
                <View style={{ marginTop: 50 }}>
                    <Text>Packages</Text>
                </View>

                <View
                    style={{
                        borderColor: 'lightgray',
                        borderWidth: 1,
                        height: 80,
                    }}></View>
                <View style={{ marginTop: 50 }}>
                    <Text>Daily Rewards</Text>
                </View>

                <View
                    style={{
                        borderColor: 'lightgray',
                        borderWidth: 1,
                        height: 80,
                    }}></View>

                <View style={{ marginTop: 50 }}>
                    <Text>Make Your Bundle</Text>
                </View>

                <View
                    style={{
                        borderColor: 'lightgray',
                        borderWidth: 1,
                        height: 80,
                    }}></View>

                <View style={{ marginTop: 50 }}>
                    <Text>More</Text>
                </View>
            </View>
            <View
                style={{
                    borderColor: 'lightgray',
                    borderWidth: 3,
                    marginTop: 10,
                }}></View>


            <View
                style={{
                    borderColor: 'lightgray',
                    borderWidth: 3,
                    marginTop: 150,
                }}></View>
            <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>SPECIAL OFFERS RS.1/-</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'red', marginLeft: 180 }}>View more</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
export default DrawerFirstScreen