/** @format */

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { Calendar } from "react-native-calendars";
import Calendar from "../../components/Calendar";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/types";
import * as GoogleGenerativeAI from "@google/generative-ai";
import { ScrollView } from "react-native-gesture-handler";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "DetailScreen">;

type DetailScreenProps = {
	navigation: DetailScreenRouteProp;
};

const DetailScreen = ({ navigation }: DetailScreenProps) => {
	const [userData, setUserData] = useState({
		age: "24",
		weight: "147",
		height: "6",
		goals: "loosing weight",
		allergies: "pepper",
	});
	const [dietPlan, setDietPlan] = useState<any>(null);
	const route = useRoute();
	const { category }: any = route.params;
	const API_KEY = "AIzaSyDGrq3xG8MJrtgyNeH81Ijga-_xz5R_R6U";

	const handleGeneratePlan = async () => {
		const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
		const model = genAI.getGenerativeModel({ model: "gemini-pro" });
		const prompt = `Create a detailed nutrition plan for a ${userData.age}-year-old, ${userData.weight} lbs, ${userData.height} ft person with a goal of ${userData.goals}. Avoid ${userData.allergies}. Include meal times with images of the meal, food items images, and calorie counts.`;
		const result = await model.generateContent(prompt);
		const response = result.response;
		const text = response.text();
		console.log(text);
		// Process the response to extract meal plans, timings, and food items
		setDietPlan(text);
	};

	const renderItem = (day: any) => {
		const markedDates = dietPlan[day.dateString];
		if (markedDates) {
			return (
				<View>
					<Text>Meal: {markedDates.meal}</Text>
					<Text>Food: {markedDates.food}</Text>
				</View>
			);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>My {category?.planName}</Text>

			{/* Add more details about the category here */}
			<ScrollView>
				<View>
					{/* User input fields    event={dietPlan} renderItem={renderItem}*/}
					<TouchableOpacity
						style={styles.generateButton}
						onPress={handleGeneratePlan}>
						<Text style={styles.buttonText}>Generate Diet Plan</Text>
					</TouchableOpacity>
					{dietPlan && (
						<View>
							<Calendar />
							<Text>{dietPlan}</Text>
						</View>
					)}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
	},
	generateButton: {
		backgroundColor: "#e36414",
		padding: 14,
		borderRadius: 5,
		fontSize: 16,
		width: "40%",
		marginBottom: 10,
	},
	buttonText: {
		color: "white",
	},
});

export default DetailScreen;
