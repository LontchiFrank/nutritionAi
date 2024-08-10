/** @format */

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Calendar from "../../components/Calendar";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/types";
import * as GoogleGenerativeAI from "@google/generative-ai";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";

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
	const [user, setUser] = useState<any>();

	useEffect(() => {
		const loadName = async () => {
			try {
				const storedNameString = await AsyncStorage.getItem("data");
				const storedName = storedNameString
					? JSON.parse(storedNameString)
					: null;
				if (storedName !== null) {
					setUser(storedName); // Parse the stored data
				}
				console.log(storedName);
			} catch (error) {
				console.error(error);
			}
		};

		loadName();
	}, []);

	console.log(user?.age);

	const [dietPlan, setDietPlan] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const route = useRoute();
	const { category }: any = route.params;
	const API_KEY = "AIzaSyDGrq3xG8MJrtgyNeH81Ijga-_xz5R_R6U";

	const parseMealData = (text: string) => {
		const mealData: Array<{
			title: string;
			description: string;
			imageUrl: string | null;
		}> = [];

		// Split the input text into lines
		const meals = text.split("\n");

		meals.forEach((mealString) => {
			const imageRegex = /\[(?:.*?)\]\((https?:\/\/[^\s\)]+)\)/;
			const additionalImageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;

			// Split each meal string into lines
			const lines = mealString.split("\n");

			// Extract title and description, removing unwanted characters
			const title = lines[0]?.replace(/[\*\#]/g, "").trim();
			const description = lines[1]?.replace(/[\*\#]/g, "").trim();

			// Extract image URL from AI response or additional link
			const imageMatch = imageRegex.exec(mealString);
			const additionalImageMatch = additionalImageRegex.exec(mealString);
			const imageUrl = imageMatch
				? imageMatch[1]
				: additionalImageMatch
				? additionalImageMatch[2]
				: null;

			console.log(imageUrl);

			mealData.push({
				title: title || "",
				description: description || "",
				imageUrl,
			});
		});

		return mealData;
	};

	const handleGeneratePlan = async () => {
		try {
			setLoading(true);

			const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
			const model = genAI.getGenerativeModel({ model: "gemini-pro" });
			const prompt = category?.prompt;
			const result = await model.generateContent(prompt);

			const response = result.response;
			const text = response.text();
			// navigation.navigate("AItextScreen", { response: response.text() });
			const mealData = parseMealData(text);
			console.log(mealData);

			// Process the response to extract meal plans, timings, and food items
			setDietPlan(mealData);
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>My {category?.planName}</Text>

			{/* Add more details about the category here */}
			<ScrollView>
				<View style={{ paddingHorizontal: 20, paddingBottom: 35 }}>
					{/* User input fields    event={dietPlan} renderItem={renderItem}*/}
					<TouchableOpacity
						style={{
							padding: 14,
							borderRadius: 5,
							width: "45%",
							marginBottom: 10,
							backgroundColor: `${category.color}`,
						}}
						onPress={handleGeneratePlan}>
						<Text style={styles.buttonText}>Generate {category.planName}</Text>
					</TouchableOpacity>
					<View style={{ width: "100%" }}>
						{loading ? (
							<View style={styles.load}>
								{/* <LoadSVG style={{ width: "100%", height: "100%" }} /> */}
								<Image source={require("../../assets/load.svg")} />
								{/* <SvgUri width="200" height="200" svgXmlData={LoadSVG} /> */}
							</View>
						) : null}
					</View>
					<View>
						{Array.isArray(dietPlan) && dietPlan.length > 0 ? (
							<View>
								{dietPlan.map((meal, index) => (
									<View key={index} style={styles.mealContainer}>
										<Text style={styles.mealTitle}>{meal.title}</Text>
										<Text style={styles.mealDescription}>
											{meal.description}
										</Text>
										{meal.imageUrl && (
											<View>
												<Image
													source={{
														uri: `${meal.imageUrl}`,
													}}
													style={styles.mealImage}
												/>
											</View>
										)}
									</View>
								))}
							</View>
						) : loading ? (
							<View>
								<LottieView
									source={require("../../assets/Animation - 1723216806189.json")}
									autoPlay
									loop
									style={{
										width: "100%",
										height: 120,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								/>
								<Text style={{ textAlign: "center" }}> Loading...</Text>
							</View>
						) : (
							<Text>No {category.planName} available. Generate one below.</Text>
						)}
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginBottom: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		paddingHorizontal: 20,
		paddingTop: 18,
		marginBottom: 10,
	},
	generateButton: {
		padding: 14,
		borderRadius: 5,
		fontSize: 16,
		width: "40%",
		marginBottom: 10,
	},
	buttonText: {
		color: "white",
	},
	mealContainer: {
		width: "100%",
		backgroundColor: "#fff",
		paddingHorizontal: 10,
	},
	mealTitle: {
		fontSize: 16,
		// fontWeight: "700",
		color: "e36414",
	},
	mealDescription: {
		fontSize: 14,
	},
	mealImage: {
		width: "100%",
		height: 210,
	},
	load: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default DetailScreen;
