import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

const AboutPage = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Developed by Rishit Umesh Padagatti</ThemedText>
      <ThemedText>using React Native and Expo</ThemedText>
    </ThemedView>
  )
}

export default AboutPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})