import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function HeightSelectionScreen() {
  const [selectedHeight, setSelectedHeight] = useState(130); // Inicialmente seleccionamos 130 cm
  const navigation = useNavigation();

  const handleHeightChange = (height) => {
    setSelectedHeight(height);
  };

  const handleNext = () => {
    navigation.navigate('ActFisica'); 
  };

  const handlePrevious = () => {
    navigation.navigate('Edad'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectText}>¿CUÁL ES TU ESTATURA?</Text>

      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }} 
        showsVerticalScrollIndicator={false}
      >
        {[...Array(71).keys()].map((height) => (
          <TouchableOpacity
            key={height}
            style={[
              styles.heightButton,
              { 
                backgroundColor: selectedHeight === height + 130 ? '#BA68C8' : '#EDE7F6',
                borderColor: 'gray',
              }, 
            ]}
            onPress={() => handleHeightChange(height + 130)}
          >
            <Text
              style={[
                styles.heightText,
                { fontSize: 24, color: selectedHeight === height + 130 ? 'white' : 'black' },
                
              ]}
            >
              {height + 130} cm
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevious}>
          <LinearGradient
            colors={['#BA68C8', '#D73EFD']} 
            style={styles.customButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.customButtonText}>Anterior</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext}>
          <LinearGradient
            colors={['#BA68C8', '#D73EFD']} 
            style={styles.customButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.customButtonText}>Siguiente</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDE7F6', 
  },
  selectText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', 
  },
  heightButton: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5, 
    borderWidth: 2,
  },
  heightText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20, 
  },
  customButton: {
    backgroundColor: '#BA68C8', 
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  customButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
