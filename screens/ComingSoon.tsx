import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

export default function ComingSoon({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/anm-1-coming-soon-animation.json')}
        autoPlay
        loop
        style={styles.lottie}
      />

      {/* Coming Soon Text */}
      <Text style={styles.heading}>Coming Soon!</Text>
      <Text style={styles.subText}>
        We're working hard to bring you something amazing. Stay tuned! 🚀
      </Text>

      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    alignItems: 'center',     // Center all items horizontally
    justifyContent: 'center', // Center all items vertically
    padding: 20,
  },
  lottie: {
    width: width * 0.7,       // 70% of the screen width
    height: 300,              // Adjust height for larger size
    marginBottom: 30,         // More space between the animation and text
  },
  heading: {
    fontSize: 34,             // Increase font size for the heading
    fontWeight: 'bold',
    color: '#FFD700',         // Golden color for the heading
    textAlign: 'center',
    marginBottom: 20,         // Space between heading and subtext
  },
  subText: {
    fontSize: 18,             // Increase font size slightly
    color: '#D3D3D3',         // Light grey color for subtext
    textAlign: 'center',      // Center text
    marginBottom: 40,         // Space between subtext and button
    paddingHorizontal: 20,    // Add padding to prevent text overflow
  },
  backButton: {
    backgroundColor: '#FFD700', // Golden button background
    paddingVertical: 15,        // Vertical padding
    paddingHorizontal: 50,      // Horizontal padding
    borderRadius: 25,           // Rounded corners
    alignItems: 'center',       // Center the text
  },
  backButtonText: {
    color: '#000',              // Black text on the button
    fontSize: 16,
    fontWeight: 'bold',
  },
});
