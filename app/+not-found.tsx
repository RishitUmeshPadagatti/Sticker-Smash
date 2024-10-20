import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
    return <View style={styles.mainContainer}>
        <Text style={styles.text}>Route Not Available</Text>
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    }
})