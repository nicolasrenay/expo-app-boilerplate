import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Stack } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const LAUREL_SIZE = width * 0.12; // Adjusted to 12% of screen width
const BUTTON_WIDTH = 350;

export default function IntroScreen() {
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <ThemedText style={styles.title}>Welcome to NoVice</ThemedText>
          <ThemedText style={styles.subtitle}>
            Your new dedicated safe space to{'\n'}quit porn
          </ThemedText>
        </View>

        <View style={styles.content}>
          <View style={styles.statContainer}>
            <Image 
              source={require('../../assets/images/laurel.png')}
              style={[styles.laurel, styles.rightLaurel]}
              resizeMode="contain"
            />
            <View style={styles.statContent}>
              <ThemedText style={styles.statNumber}>96%</ThemedText>
              <ThemedText style={styles.statLabel}>Satisfaction{'\n'}score</ThemedText>
            </View>
            <Image 
              source={require('../../assets/images/laurel.png')}
              style={[styles.laurel, styles.leftLaurel]}
              resizeMode="contain"
            />
          </View>

          <View style={styles.statContainer}>
            <Image 
              source={require('../../assets/images/laurel.png')}
              style={[styles.laurel, styles.rightLaurel]}
              resizeMode="contain"
            />
            <View style={styles.statContent}>
              <ThemedText style={styles.scienceTitle}>Science</ThemedText>
              <ThemedText style={styles.scienceLabel}>based{'\n'}approach</ThemedText>
            </View>
            <Image 
              source={require('../../assets/images/laurel.png')}
              style={[styles.laurel, styles.leftLaurel]}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}>
              <ThemedText style={styles.buttonText}>Let's go</ThemedText>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity>
            <ThemedText style={styles.loginText}>
              You already have an account?
            </ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 48,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 48,
    includeFontPadding: false,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    opacity: 0.6,
    textAlign: 'center',
    lineHeight: 28,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 64,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  statContent: {
    alignItems: 'center',
    minWidth: 140,
  },
  laurel: {
    width: LAUREL_SIZE,
    height: LAUREL_SIZE * 1.5,
    tintColor: '#FFD700',
    opacity: 0.7,
  },
  leftLaurel: {
    transform: [{ scaleX: -1 }],
  },
  rightLaurel: {
    transform: [{ scaleX: 1 }],
  },
  statNumber: {
    fontSize: 48,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
    includeFontPadding: false,
    textAlign: 'center',
    lineHeight: 58,
  },
  statLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    opacity: 0.6,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 4,
  },
  scienceTitle: {
    fontSize: 40,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
    includeFontPadding: false,
    textAlign: 'center',
    lineHeight: 48,
  },
  scienceLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    opacity: 0.6,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 4,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 24,
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    borderRadius: 100,
    width: BUTTON_WIDTH,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    opacity: 0.6,
  },
}); 