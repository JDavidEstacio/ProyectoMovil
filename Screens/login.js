import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ImageBackground, StatusBar, Alert } from 'react-native';
import ButtonGradient from './ButtonGradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imagen1 from '../assets/imagen1.png';

import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(appFirebase);

const { height } = Dimensions.get('window');

export default function Login(props) {
    // Estado para almacenar el correo electrónico y la contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Función para el inicio de sesión
    const logeo = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Iniciando sesión', 'Accediendo...');
            props.navigation.navigate('AfterLogin');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos')
        }
    };

    const [isLogin, setIsLogin] = useState(true);

    const toggleView = () => {
        setIsLogin(!isLogin);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.topSection}>
                <ImageBackground
                    source={require('../assets/imagen1.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.overlay}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => setIsLogin(true)}>
                                <Text style={[styles.headerText, isLogin && styles.active]}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setIsLogin(false)}>
                                <Text style={[styles.headerText, !isLogin && styles.active]}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.titulo}>Bienvenido!</Text>
                        <Text style={styles.subtitle}>{isLogin ? 'Ingresa a tu cuenta' : 'Regístrate'}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.bottomSection}>
                <View style={styles.bottomContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Correo"
                        placeholderTextColor="#fff"
                        onChangeText={(text) => setEmail(text)}
                    />
                    {!isLogin && (
                        <>
                            <TextInput
                                style={styles.smallTextInput}
                                placeholder="Nombre de usuario"
                                placeholderTextColor="#fff"
                                onChangeText={(text) => setEmail(text)}
                            />
                            <TextInput
                                style={styles.smallTextInput}
                                placeholder="Contraseña"
                                placeholderTextColor="#fff"
                                secureTextEntry={true}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TextInput
                                style={styles.smallTextInput}
                                placeholder="Confirmar Contraseña"
                                placeholderTextColor="#fff"
                                secureTextEntry={true}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </>
                    )}
                    {isLogin && (
                        <>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Contraseña"
                                placeholderTextColor="#fff"
                                secureTextEntry={true}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity style={styles.olvidoContraContainer}>
                                <Text style={styles.olvidoContra}>Olvidaste tu contraseña</Text>
                            </TouchableOpacity>
                        </>
                    )}
                    <TouchableOpacity style={styles.buttonContainer} onPress={logeo}>
                    <ButtonGradient onPress={logeo} text={isLogin ? 'Iniciar Sesión' : 'Registrarse'} />
                    </TouchableOpacity>
                    {!isLogin && (
                        <TouchableOpacity style={styles.switchContainer} onPress={toggleView}>
                            <Text style={styles.switchText}>¿Ya tienes una cuenta? Inicia sesión aquí</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    topSection: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: height * 0.5,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        marginRight: 20,
        opacity: 0.5,
    },
    active: {
        opacity: 1,
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bottomContainer: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
        width: '100%',
    },
    titulo: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 20,
    },
    textInput: {
        width: '100%',
        height: 60,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        fontSize: 20,
        color: '#fff',
    },
    smallTextInput: {
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        fontSize: 16,
        color: '#fff',
    },
    olvidoContraContainer: {
        marginBottom: 20,
    },
    olvidoContra: {
        fontSize: 16,
        color: '#fff',
        textDecorationLine: 'underline',
    },
    switchContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    switchText: {
        fontSize: 16,
        color: '#fff',
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 'auto',
        marginBottom: 20,
    },
});
