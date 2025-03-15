import React, { useState } from "react";
import {Text, View, TextInput, SafeAreaView, Image, Alert, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from '../styles/MemberDashboardStyle';


const SampleScreen = ({ navigation }) => {

    const handleBackPress = () => {
        Alert.alert('Back Button Pressed', 'You can link this to navigation logic.');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Bar */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Icon name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Page Title</Text>

                <View style={styles.spacer} /> {/* For spacing balance */}
            </View>

            {/* Page Content */}
            <View style={styles.content}>
                <Text style={styles.welcomeText}>
                    Welcome to your new screen with a header bar!
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SampleScreen;