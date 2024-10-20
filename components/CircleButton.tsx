import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

interface Props {
    iconName: keyof typeof Ionicons.glyphMap,
    onPressFunction: () => void
}

export default function CircleButton({iconName, onPressFunction}: Props) {
    const currentTheme = useColorScheme() || "light";

    return (
        <TouchableOpacity style={[{backgroundColor: Colors[currentTheme].background, borderColor: Colors[currentTheme].text}, styles.container]} onPress={onPressFunction}>
            <Ionicons name={iconName} size={53} color={Colors[currentTheme].text} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderColor: 'white',
        borderWidth: 2,
        borderRadius: 1000,
        padding: 10,
    },
})