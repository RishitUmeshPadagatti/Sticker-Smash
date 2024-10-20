import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

interface Props {
    onPressFunction: () => void
}

export default function AddPictureButton({ onPressFunction }: Props) {
    const currentTheme = useColorScheme() || "light";

    return (
        <TouchableOpacity onPress={onPressFunction} style={[{backgroundColor: Colors[currentTheme].buttonBackground}, styles.mainButton]}>
            <Ionicons name="image-outline" size={28} color={Colors[currentTheme].text} />
            <ThemedText style={styles.addPictureText}>Add a picture</ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
    },
    addPictureText: {
        fontSize: 20,
    }
})