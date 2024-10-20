import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabLayout() {
    const currentTheme = useColorScheme() || "light";

    return (
        <Tabs
            screenOptions={{
                headerShadowVisible: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 50,
                    // paddingTop: 2,
                    paddingBottom: 2,
                    backgroundColor: Colors[currentTheme].background,
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={27} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    headerShown: false,
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={27} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}