import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function AgeSelectionScreen() {
  const [selectedAge, setSelectedAge] = useState(18); // Inicialmente seleccionamos la edad 18
  const navigation = useNavigation();

  const handleAgeChange = (age) => {
    setSelectedAge(age);
  };

  const handleNext = () => {
    navigation.navigate('Estatura'); // Navegar a la pantalla 'Estatura'
  };

  const handlePrevious = () => {
    navigation.navigate('AfterLogin'); // Regresar a la pantalla 'AfterLogin'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectText}>SELECCIONA TU EDAD</Text>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {[...Array(80).keys()].map((age) => (
          <TouchableOpacity
            key={age}
            style={[
              styles.ageButton,
              { backgroundColor: '#EDE7F6', borderColor: 'gray' }, 
            ]}
            onPress={() => handleAgeChange(age)}
          >
            <View style={styles.rectangle}>
              <Text
                style={[
                  styles.ageText,
                  { fontSize: selectedAge === age ? 34 : 24, color: 'black' }, 
                ]}
              >
                {age + 1}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.customButton}>
          <LinearGradient
            colors={['#BA68C8', '#BA68C8']}
            style={styles.buttonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.customButtonText}>Anterior</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} style={styles.customButton}>
          <LinearGradient
            colors={['#BA68C8', '#BA68C8']}
            style={styles.buttonGradient}
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
  scrollViewContent: {
    alignItems: 'center', 
  },
  ageButton: {
    borderRadius: 20, 
    width: 100, 
    height: 60, 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5, 
    borderWidth: 2,
  },
  rectangle: {
    width: 80,
    height: 40,
    backgroundColor: '#EDE7F6', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  ageText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30, 
  },
  customButton: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
