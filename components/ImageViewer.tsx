import { Image } from "expo-image";
import { Dimensions, StyleSheet } from "react-native";

interface Props {
    placeholderImage?: string, 
    sourceImage?: string 
}

export default function ImageViewer({placeholderImage, sourceImage}: Props) {
    const { width } = Dimensions.get('window')
    const aspectRatio = 4 / 3;
    const imageWidth = width * 0.90;
    const imageHeight = imageWidth * aspectRatio;

    const currentImageSource = sourceImage ? {uri: sourceImage} : placeholderImage;

    return (
        <Image
            source={currentImageSource}
            style={[{ width: imageWidth, height: imageHeight }, styles.image]}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 10,
    }
})