import React, { useState } from "react";
import {Text, View, TextInput, Button, ImageBackground, SafeAreaView, Image} from "react-native";

import {style} from "../styles/MemberLoginStyle";

const MemberLoginScreen = () => {

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
                    <Button
                        style={style.buttonDesign}
                        title="Log in"
                    />

                    <Button 
                        title="Sign up"
                    />
                </View>


            </SafeAreaView>

        </ImageBackground>
    );

}

export default MemberLoginScreen

