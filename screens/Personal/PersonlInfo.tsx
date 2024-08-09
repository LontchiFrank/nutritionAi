/** @format */

import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Button,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
	PersonalInfo: undefined;
	Main: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;
// "Welcome"

type Props = {
	navigation: WelcomeScreenNavigationProp;
};
interface FormEvent {
	target: {
		value: string;
	};
}

const PersonalInfo: React.FC<Props> = ({ navigation }) => {
	const [data, setData] = useState<any | null>("");
	const [input, setInput] = useState<string>("");
	const [formData, setFormData] = useState<any>({
		personName: "",
		age: "",
		weight: "",
		goal: "",
		gender: "",
		height: "",
		allegies: "",
	});
	// const [gender, setGender] = useState();
	const { personName, age, gender, weight, height, goal, allegies } = formData;

	useEffect(() => {
		// Load data from AsyncStorage when the component mounts
		loadName();
	}, []);

	const loadName = async () => {
		try {
			const storedName = await AsyncStorage.getItem("data");
			if (storedName !== null) {
				setData(storedName);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const saveName = async () => {
		try {
			await AsyncStorage.setItem("data", JSON.stringify(formData));
			setData(formData);
			console.log("saved in async storage", formData);
			setInput(""); // Clear the input field
		} catch (error) {
			console.error(error);
		}
	};

	const clearName = async () => {
		try {
			await AsyncStorage.removeItem("data");
			setData(null);
		} catch (error) {
			console.error(error);
		}
	};

	const [selectedValue, setSelectedValue] = useState("value1");

	const items = [
		{ label: "Male", value: "male" },
		{ label: "Female", value: "female" },
	];

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome, {personName || "Guest"}</Text>
			<Text style={{ marginBottom: 9 }}>
				Form must be completed immediately
			</Text>
			<View
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-start",
						paddingLeft: 20,
						paddingBottom: 8,
					}}>
					<Text>Name:</Text>
				</View>
				<TextInput
					style={styles.input}
					placeholder="Enter your weight"
					value={personName}
					onChangeText={(e: any) => setFormData({ ...formData, personName: e })}
				/>
			</View>
			<View
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-start",
						paddingLeft: 20,
						paddingBottom: 8,
					}}>
					<Text>Age:</Text>
				</View>
				<TextInput
					style={styles.input}
					placeholder="Enter your weight"
					value={age}
					onChangeText={(e: any) => setFormData({ ...formData, age: e })}
				/>
			</View>
			<View
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-start",
						paddingLeft: 20,
						paddingBottom: 8,
					}}>
					<Text>Weight:</Text>
				</View>
				<TextInput
					style={styles.input}
					placeholder="e.g 154 lbs"
					value={weight}
					onChangeText={(e: any) => setFormData({ ...formData, weight: e })}
				/>
			</View>

			<View
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-start",
						paddingLeft: 20,
						paddingBottom: 8,
					}}>
					<Text>Height:</Text>
				</View>
				<TextInput
					style={styles.input}
					placeholder="E.g 6'1 ft6'3 "
					value={height}
					onChangeText={(e: any) => setFormData({ ...formData, height: e })}
				/>
			</View>
			<View
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-start",
						paddingLeft: 20,
						paddingBottom: 10,
					}}>
					<Text>Gender:</Text>
				</View>
				<View
					style={{
						width: "90%",
						marginBottom: 7,
						borderWidth: 1,
						borderRadius: 12,
						borderColor: "gray",
						padding: 10,
					}}>
					<RNPickerSelect
						onValueChange={(value) =>
							setFormData({ ...formData, gender: value })
						}
						items={items}
						value={gender}
					/>
				</View>
			</View>
			<View
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-start",
						paddingLeft: 20,
						paddingBottom: 10,
					}}>
					<Text>Goal:</Text>
				</View>
				<TextInput
					multiline
					style={styles.textArea}
					placeholder="E.g want to loose weight"
					value={goal}
					onChangeText={(e: any) => setFormData({ ...formData, goal: e })}
				/>
			</View>
			<View
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-start",
						paddingLeft: 20,
						paddingBottom: 10,
					}}>
					<Text>Allegies:</Text>
				</View>
				<TextInput
					multiline
					style={styles.textArea}
					placeholder="Enter your weight"
					value={allegies}
					onChangeText={(e: any) => setFormData({ ...formData, allegies: e })}
				/>
			</View>
			<View style={styles.buttons}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						saveName(), navigation.navigate("Main");
					}}>
					<Text style={styles.buttonText}>Continue</Text>
				</TouchableOpacity>
			</View>
		</View>
		// </View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f0f0f0",
		padding: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 12,
		paddingHorizontal: 8,
		marginBottom: 16,
		width: "90%",
	},
	textArea: {
		width: "90%",
		height: 40,
		borderRadius: 7,
		borderWidth: 1,
		marginBottom: 16,
		borderColor: "gray",
		padding: 10,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "80%",
	},
	// button: {
	// 	backgroundColor: "#007BFF",
	// 	padding: 10,
	// 	borderRadius: 5,
	// },
	// buttonText: {
	// 	color: "#fff",
	// 	fontSize: 16,
	// },
	button: {
		backgroundColor: "#762a0c",
		paddingVertical: 15,
		paddingHorizontal: 40,
		borderRadius: 25,
		marginVertical: 10,
		width: "90%",
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
	buttonOutline: {
		backgroundColor: "#ffffff",
		borderWidth: 2,
		borderColor: "#6200EE",
	},
	buttonTextOutline: {
		color: "#6200EE",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default PersonalInfo;
