import AddPictureButton from "@/components/AddPictureButton";
import ImageViewer from "@/components/ImageViewer";
import { ThemedText } from "@/components/ThemedText";
import { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import { selectedEmojisInterface } from "@/constants/interfaces";
import * as MediaLibrary from 'expo-media-library'
import { captureRef } from "react-native-view-shot";

const PlaceholderImage = require("../../assets/images/background-image.png")

export default function Index() {
	const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
	const currentTheme = useColorScheme() || 'light';
	const [status, requestPermission] = MediaLibrary.usePermissions();
	const imageRef = useRef()

	if (status === null){
		requestPermission()
	}

	const [showOptions, setShowOptions] = useState<boolean>(false)
	const [showModal, setShowModal] = useState<boolean>(false)

	const [emojis] = useState<string[]>([
		require("../../assets/images/emoji1.png"),
		require("../../assets/images/emoji2.png"),
		require("../../assets/images/emoji3.png"),
		require("../../assets/images/emoji4.png"),
		require("../../assets/images/emoji5.png"),
		require("../../assets/images/emoji6.png"),
	])
	const [selectedEmojis, setSelectedEmojis] = useState<selectedEmojisInterface[]>([])
	

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			// allowsEditing: true,
			quality: 1,
		})

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri)
			setShowOptions(true)
		} else {
			alert("You did not select any image")
		}
	}

	const useThisInsteadOnPressFunction = () => {
		setShowOptions(true)
	}

	const resetImage = () => {
		setShowOptions(false)
		setSelectedEmojis([])
	}

	const addSticker = () => {
		setShowModal(true)
	}

	const saveImage = async () => {
		try {
			const localUri = await captureRef(imageRef, {
				quality: 1,
			})

			await MediaLibrary.saveToLibraryAsync(localUri);
			if (localUri){
				alert("Saved");
			}
		} catch (error) {
			alert("Unable to save image")
			requestPermission()
			console.log(error)
		}
	}

	return (
		<GestureHandlerRootView style={[{backgroundColor: Colors[currentTheme].background}, styles.mainContainer]}>
			<View ref={imageRef} style={styles.imageContainer} collapsable={false}>
					<ImageViewer placeholderImage={PlaceholderImage} sourceImage={selectedImage} />
					{selectedEmojis.map((emoji, index) => {
						return (
							<EmojiSticker 
								address={emoji.address} 
								key={index}
								x={emoji.x}
								y={emoji.y} 
							/>
						)
					})}
			</View>

			{
				(!showOptions) ? (
					<View style={styles.addPictureContainer}>
						<AddPictureButton onPressFunction={pickImage} />
						<TouchableOpacity onPress={useThisInsteadOnPressFunction}>
							<ThemedText>Use this instead?</ThemedText>
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.optionsRow}>
						<IconButton
							iconName="refresh"
							iconLabel="Reset"
							onPressFunction={resetImage}
						/>

						<CircleButton
							iconName="add-outline"
							onPressFunction={addSticker}
						/>

						<IconButton
							iconName="arrow-down-circle-outline"
							iconLabel="Save"
							onPressFunction={saveImage}
						/>
					</View>
				)
			}

			<EmojiPicker showModal={showModal} setShowModal={setShowModal}>
				<EmojiList emojis={emojis} selectedEmojis={selectedEmojis} setSelectedEmojis={setSelectedEmojis} />
			</EmojiPicker>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		gap: 30,
		paddingVertical: 25,
		alignItems: 'center',
	},
	imageContainer: {
		marginBottom: 15,
	},
	addPictureContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 15,
	},
	optionsRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 50,
	}
})