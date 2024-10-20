import React, { useState } from "react";
import { ThemedText } from "./ThemedText";
import { FlatList, StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import { Image } from "expo-image";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";
import { selectedEmojisInterface } from "@/constants/interfaces";

interface Props {
    emojis: string[],
    selectedEmojis: selectedEmojisInterface[]
    setSelectedEmojis: (selectedEmojis: selectedEmojisInterface[]) => void,
}

export default function EmojiList({ emojis, selectedEmojis, setSelectedEmojis }: Props) {
    const currentTheme = useColorScheme() || 'light';

    const onPress = (address: string) => {
        const newEmoji = {
            address: address,
            x: 100,
            y: 100,
        }
        setSelectedEmojis([...selectedEmojis, newEmoji ])
    }

    return <View style={styles.container}>
        <FlatList
            horizontal={true}
            data={emojis}
            style={{ backgroundColor: Colors[currentTheme].emojiModalBackground }}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPress(item)}>
                    <Image source={item} style={styles.image} />
                </TouchableOpacity>
            )}
        ></FlatList>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 13,
    },
    image: {
        width: 130,
        height: 130,
        marginHorizontal: 10,
    }
})