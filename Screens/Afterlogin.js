import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AfterLogin = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  const handleCustomButtonPress = () => {
    console.log('Siguiente presionado');
    
    navigation.navigate('Edad'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CUÉNTANOS SOBRE TI</Text>
      <Text style={styles.subtitle}>¿CUÁL ES TU GÉNERO?</Text>

      <View style={styles.genderContainer}>
        <TouchableOpacity
          onPress={() => handleGenderSelection('Male')}
          style={styles.genderButton}
        >
          <Image
            source={require('../assets/masculino.png')} 
            style={styles.genderIcon}
          />
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleGenderSelection('Female')} style={styles.genderButton}>
          <Image
            source={require('../assets/femenino.png')} 
            style={styles.genderIcon}
          />
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      {selectedGender && (
        <TouchableOpacity
          onPress={handleCustomButtonPress}
          style={styles.customButton} 
        >
          <Text style={styles.customButtonText}>Continuar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#EDE7F6', 
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#000', 
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000', 
  },
  genderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  genderButton: {
    marginBottom: 10,
    alignItems: 'center',
  },
  genderIcon: {
    width: 70,
    height: 70,
  },
  genderText: {
    textAlign: 'center',
    color: '#000',
  },
  customButton: {
    backgroundColor: '#BA68C8', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20, 
  },
  customButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AfterLogin;
