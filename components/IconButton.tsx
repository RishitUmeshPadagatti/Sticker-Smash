import { StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

interface Props {
    iconName: keyof typeof Ionicons.glyphMap,
    iconLabel: string,
    onPressFunction: () => void
}

export default function IconButton({ iconName, iconLabel, onPressFunction }: Props) {
    const currentTheme = useColorScheme() || "light";

    return (
        <TouchableOpacity style={styles.container} onPress={onPressFunction}>
            <Ionicons name={iconName} size={33} color={Colors[currentTheme].text} />
            <ThemedText style={styles.text}>{iconLabel}</ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
    }
})