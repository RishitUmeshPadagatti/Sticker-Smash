import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ThemedView style={{flex: 1}}>
    <SafeAreaView style={{flex: 1}}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerShown: false,
        }} />
        <Stack.Screen name="+not-found" options={{
          headerShown: false,
        }} />
      </Stack>
    </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
})