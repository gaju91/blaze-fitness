import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'; // Add Image for the logo
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/anm-2-fitness-animation.json')}
        autoPlay
        loop
        style={styles.lottie}
      />

      {/* Welcome Text with Logo in between */}
      <View style={styles.contentContainer}>
        <View style={styles.logoTextContainer}>
          <Text style={styles.welcomeText}>Blaze</Text>
          <Image
            source={require('../assets/mobile-logo.png')} // Your logo image here
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Fitness</Text>
        </View>
        <Text style={styles.subText}>Get ready to flex those digital muscles! 💪</Text>
      </View>

      {/* Button with Golden Gradient */}
      <TouchableOpacity onPress={() => navigation.navigate('ComingSoon')}>
        <LinearGradient
          colors={['#FFD700', '#FFA500']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Start Your Journey 🚀</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Footer Branding */}
      <Text style={styles.footerText}>Made with ❤️ by ⚡️Latent Coders | Oⁿ 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',  // Black background
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  lottie: {
    width: width * 0.8,
    height: 250,
    marginTop: 50,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoTextContainer: {
    flexDirection: 'row',    // Align the logo and text in a horizontal row
    alignItems: 'center',    // Vertically align the logo with the text
    marginBottom: 10,        // Space between logo-text and subText
  },
  logo: {
    width: 40,               // Adjust logo size
    height: 40,              // Adjust logo size
    marginHorizontal: 10,    // Space between the words "Blaze" and "Fitness"
    tintColor: '#FFD700',    // Golden tint color (optional if it works with PNG)
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',        // White text for the title
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: '#D3D3D3',        // Light grey for the subtext
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 40,
    elevation: 5,
  },
  buttonText: {
    color: 'black',           // Black text on golden button
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
  },
});
