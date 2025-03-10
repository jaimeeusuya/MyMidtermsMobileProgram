import React, { useState } from "react";
import {Text, View, TextInput, Button, ImageBackground, SafeAreaView, Image , TouchableOpacity} from "react-native";

import {style} from "../styles/AdminLoginStyle";

import Buttons from "../Assets/Components/buttons";

const MemberLoginScreen = ({ navigation }) => {

    const memberLinkPress = () => {
        navigation.navigate("MemberLoginScreen")
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(

        // no point in wrapping yung buong screen ng imagebackground kasi di naman kayo gumamit ng background image
        <ImageBackground>

            <SafeAreaView style={style.container}>

                <Image 
                    style={style.imageContainer}
                    source = {require("../Assets/GAPLogo.png")}
                />

                <Text style={style.appTitle}>
                    GAP Administrator
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

{/* okay lang to but again mas okay if iisang login nalang then i rread ng backend niyo if admin ba or member ang nag login */}
                <Text>
                    Looking for Member Login? {' '}
                    <TouchableOpacity
                        onPress = {memberLinkPress}
                    >
                        {/* di pantay click here */}
                        <Text style={style.link}>Click Here</Text>
                    </TouchableOpacity>
                </Text>


            </SafeAreaView>

        </ImageBackground>
    );

}

export default MemberLoginScreen

