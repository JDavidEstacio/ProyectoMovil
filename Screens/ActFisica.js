import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PhysicalActivityScreen() {
  const [selectedActivity, setSelectedActivity] = useState('Ninguna'); // Inicialmente seleccionamos "Ninguna"

  const handleActivityChange = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectText}>¿CUÁL ES TU ACTIVIDAD FÍSICA?</Text>

      <ScrollView
        contentContainerStyle={{ paddingVertical: 10 }} // Separación menor entre las opciones
        showsVerticalScrollIndicator={false}
      >
        {['Ninguna', 'Principiante', 'Intermedia', 'Buena', 'Avanzada'].map((activity) => (
          <TouchableOpacity
            key={activity}
            style={[
              styles.activityButton,
              {
                backgroundColor: selectedActivity === activity ? '#D73EFD' : '#EDE7F6',
                borderColor: 'gray',
              }, 
            ]}
            onPress={() => handleActivityChange(activity)}
          >
            <Text
              style={[
                styles.activityText,
                { fontSize: 24, color: selectedActivity === activity ? 'white' : 'black' }, 
              ]}
            >
              {activity}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => console.log('Anterior')}>
          <LinearGradient
            colors={['#BA68C8', '#D73EFD']} 
            style={styles.customButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.customButtonText}>Anterior</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Siguiente')}>
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
  activityButton: {
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5, 
    borderWidth: 2,
  },
  activityText: {
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
