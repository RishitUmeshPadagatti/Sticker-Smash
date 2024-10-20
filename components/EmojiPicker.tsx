import React from "react"
import { Modal, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native"
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
    children: React.ReactNode,
    showModal: boolean,
    setShowModal: (showModal: boolean) => void
}

export default function EmojiPicker({ children, showModal, setShowModal }: Props) {
    const currentTheme = useColorScheme() || "light";

    return <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={[{ backgroundColor: Colors[currentTheme].emojiModalBackground }, styles.modalContainer]}>
            <TouchableOpacity onPress={() => setShowModal(false)}>
                <Ionicons name="close-outline" size={28} color={Colors[currentTheme].text} />
            </TouchableOpacity>
            {children}
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        height: '30%',
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 10,
        display: 'flex',
        gap: 10,
    },
})