import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Redirect } from 'expo-router';

export default function Index() {
  // This will redirect to the signup page when the app starts
  return <Redirect href="/auth/signup" />;
}