import React, { useState } from "react";
import {Text, View, TextInput, Button, ImageBackground, SafeAreaView, Image , TouchableOpacity} from "react-native";

import {style} from "../styles/MemberLoginStyle";

import Buttons from "../Assets/Components/buttons";

const MemberLoginScreen = ({navigation}) => {

    const adminLinkPress = () => {
        navigation.navigate("AdminLoginScreen");
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(

        <ImageBackground>

            <SafeAreaView style={style.container}>

                <Image 
                    style={style.imageContainer}
                    source = {require("../Assets/GAPLogo.png")}
                />

                <Text style={style.appTitle}>
                    GAP One
                </Text>

                <TextInput 
                    value={username}
                    placeholder="Enter Username"
                    onChangeText = {(text) => setUsername (text)}
                    style={style.TextInput}
                />

                <TextInput 
                    value={password}
                    placeholder="Enter Password"
                    onChangeText = {(text) => setPassword (text)}
                    secureTextEntry = {true}
                    style={style.TextInput}
                />

                <View style={style.buttonsContainer}>

                    <Buttons.PrimaryButton 
                        title="Log in"
                    />

                </View>

                <Text>
                    Looking for Admin Login? {' '}
                    <TouchableOpacity
                        onPress={adminLinkPress}
                    >
                        <Text 
                            style={style.link}
                        >
                            Click Here

                        </Text>
                    </TouchableOpacity>
                </Text>


            </SafeAreaView>

        </ImageBackground>
    );

}

export default MemberLoginScreen

