import React from "react";
import {
  TouchableOpacity,Text,Alert,
} from "react-native";
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {

    const handlePress = () => {
        Alert.alert("Yo!","Whats Up!");
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <MainLayout>
            <Text>Incredible ToDo List Application</Text>
            <Text>Version 1.0</Text>
            <TouchableOpacity onPress={handlePress}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Harnoor Dhindsa</Text>
            </TouchableOpacity>
            <Text>
            Current Date: {formattedDate}, Current Time: {formattedTime}
            </Text>
        </MainLayout>
    );
}

export default AboutScreen;