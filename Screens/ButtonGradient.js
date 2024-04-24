import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <LinearGradient 
                colors={['#A93EFD', '#D73EFD']} 
                style={[styles.button, styles.linearGradient]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.text}>Ingresar</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
    },
    button: {
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        borderRadius: 30,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

