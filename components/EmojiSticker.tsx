import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

interface Props {
    address: string,
    x: number,
    y: number,
}

const initialImageSize = 45;

export default function EmojiSticker({ address, x, y }: Props) {
    const scaleImage = useSharedValue(initialImageSize)
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== initialImageSize*2){
                scaleImage.value = scaleImage.value * 2;
            } else {
                scaleImage.value = initialImageSize;
            }
        })
    
    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        }
    })

    const drag = Gesture.Pan().onChange(event => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    })

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                }
            ]
        }
    })

    return (
        <GestureDetector gesture={drag}>
        <Animated.View style={[containerStyle, {position: 'absolute', top: x, left: y}]}>
            <GestureDetector gesture={doubleTap} >
                <Animated.Image
                    source={address}
                    resizeMode={'contain'}
                    style={[imageStyle, { width: initialImageSize, height: initialImageSize }]}
                />
            </GestureDetector>
        </Animated.View>
        </GestureDetector>
    )
}