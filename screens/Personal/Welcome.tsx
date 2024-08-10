/** @format */

import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
	Welcome: undefined;
	PersonalInfo: undefined;
	Main: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
	navigation: WelcomeScreenNavigationProp;
};

const Welcome: React.FC<Props> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/appLogo.png")}
				style={{ width: "70%", height: "30%" }}
			/>
			<View style={styles.buttons}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("PersonalInfo")}>
					<Text style={styles.buttonText}>Continue</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Welcome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "80%",
	},
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
});
