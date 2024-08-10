/** @format */

import React, { useState, useEffect } from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import IconSearch from "react-native-vector-icons/EvilIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type HomeScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"DetailScreen"
>;

function Categories({ navigation }: any) {
	const [text, setText] = useState("");
	const [user, setUser] = useState<any>();
	const screenWidth = Dimensions.get("window").width;
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

	const categories: any = [
		{
			id: 1,
			planName: "Nutrition Plan",
			color: "#e36414",
			description:
				" Consuming a variety of foods from all food groups to ensure a balanced intake of nutrients.",
			icon: "food-turkey",
			prompt: `Create only a detailed nutrition plan and not a sport plan for a ${user?.age}-year-old, ${user?.weight} lbs, ${user?.height} ft person with a goal of ${user?.goal}. Avoid ${user?.allergies}. Include meal times with  image of the meal, food items images, and calorie counts. `,
		},
		{
			id: 2,
			planName: "Workout Plan",
			color: "#386641",
			description:
				" Activities such as running, cycling, swimming, or brisk walking to improve heart health.",
			icon: "weight-lifter",
			prompt: `Create only a workout plan and not diet plan for a ${user?.age}-year-old, ${user?.weight} lbs, ${user?.height} ft person with a goal of ${user?.goal}. Avoid ${user?.allergies}. Include workout times with  image of the workout, and calorie counts. `,
		},
		{
			id: 3,
			planName: "Water Intake Plan",
			color: "#0466c8",
			description:
				"Ensuring adequate water intake throughout the day to stay hydrated.",
			icon: "cup-water",
			prompt: `Create only a detailed Water Intake Plan and not a diet plan for a ${user?.age}-year-old, ${user?.weight} lbs, ${user?.height} ft person with a goal of ${user?.goal}. Avoid ${user?.allergies}. Include water intake times.`,
		},
		{
			id: 5,
			planName: "Sleep Plan",
			color: "#9a031e",
			description:
				"Going to bed and waking up at the same time every day to regulate the body’s internal clock",
			icon: "sleep",
			prompt: `Create only a well detailed sleep Plan for a ${user?.age}-year-old, ${user?.weight} lbs, ${user?.height} ft person with a goal of ${user?.goal}. Avoid ${user?.allergies}. Include sleep times with  image of the sleeping well and positions. `,
		},
		{
			id: 4,
			planName: "Meditation Plan",
			color: "#5a189a",
			description:
				"Regular practice of mindfulness or meditation to reduce stress and increase mental clarity.",
			icon: "meditation",
			prompt: `Create only a well detailed Meditation Plan for a ${user?.age}-year-old, ${user?.weight} lbs, ${user?.height} ft person with a goal of ${user?.goal}. Avoid ${user?.allergies}. Include meditation times with  image of the meditations and different techniques and when to apply them using the calendar. `,
		},
		// {
		// 	id: 4,
		// 	planName: "Sex Plan",
		// 	color: "#780000",
		// 	description:
		// 		"Consistent engagement in a personalized intimacy plan to enhance connection, boost satisfaction, and strengthen your relationship",
		// 	icon: "robot-love",
		// 	prompt: `Create only a well detailed Sex Plan for a ${user?.age}-year-old, ${user?.weight} lbs, ${user?.height} ft person with a goal of ${user?.goal}. Avoid ${user?.allergies}. Include sex times, sex positions to help in my health.`,
		// },
		{
			id: 4,
			planName: "Therapy Plan",
			color: "#003566",
			description:
				"Consistent engagement in a personalized therapy plan to enhance emotional well-being and achieve lasting mental health improvements.",
			icon: "brain",
			prompt: `Create only a well detailed Therapy Plan for a ${user?.age}-year-old, ${user?.weight} lbs, ${user?.height} ft person with a goal of ${user?.goal}. Avoid ${user?.allergies}. Include Therapy times for your mental health.`,
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<View style={styles.titleHead}>
					<Text style={styles.titleText}>Categories</Text>
				</View>
			</View>
			<View style={styles.searchBar}>
				<TextInput
					style={styles.searchInput}
					placeholder="Search Category"
					onChangeText={setText}
					value={text}
					secureTextEntry={false}
					maxLength={20}
					autoFocus={true}
				/>

				<IconSearch
					name="search"
					size={25}
					color="#6c757d"
					style={styles.iconSearch}
				/>
			</View>
			<ScrollView>
				<View style={styles.flatListView}>
					<ScrollView
						horizontal={false}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.cardsContainer}>
						{categories.map((category: any) => (
							<TouchableOpacity
								key={category.id}
								onPress={() =>
									navigation.navigate("DetailScreen", { category })
								}>
								<View
									style={{
										width: (screenWidth - 30) / 2,
										height: 250,
										borderRadius: 10,
										padding: 10,
										backgroundColor: `${category.color}`,
										shadowColor: "rgba(100, 100, 111, 0.2)",
										shadowOffset: { width: 0, height: 7 },
										shadowOpacity: 0.29,
										shadowRadius: 7,
										elevation: 7,
									}}>
									<View>
										<Text style={styles.cardText}>{category.planName} </Text>
									</View>
									<View>
										<Text style={styles.cardDescription}>
											{" "}
											{category.description}{" "}
										</Text>
									</View>
									<View style={styles.cardBodyIcon}>
										<Text>
											<MaterialCommunityIcons
												name={category.icon}
												size={64}
												color="white"
											/>
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
			</ScrollView>
		</View>
	);
}

export default Categories;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		marginTop: 10,
		marginBottom: 30,
		padding: 10,
		backgroundColor: "white",
	},
	contentContainer: {
		paddingVertical: 20,
		flexDirection: "row",
		gap: 20,
		backgroundColor: "#fff",
	},
	cardsContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8,
	},
	titleHead: {
		marginTop: 26,
	},
	titleText: {
		fontWeight: "bold",
		fontSize: 26,
	},
	searchBar: {
		width: "100%",
		height: 45,
		marginBottom: 14,
		borderRadius: 10,
		flexDirection: "row",
		backgroundColor: "#e9ecef",
		paddingHorizontal: 8,
	},
	searchInput: {
		width: "90%",
		height: "100%",
		borderRadius: 10,
		paddingHorizontal: 8,
	},
	iconSearch: {
		paddingTop: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	flatListView: {
		// flexDirection: "row",
		flexWrap: "wrap",
		// backgroundColor: "yellow",
		// justifyContent: "space-between",
		marginBottom: 42,
	},
	cardsWrapper: {
		// display: "flex",
		backgroundColor: "teal",
		// flexDirection: "row",
		// flexWrap: "wrap",
		// justifyContent: "space-between",
	},
	cardText: {
		color: "white",
		fontSize: 20,
		paddingTop: 12,
		fontWeight: "bold",
		textAlign: "center",
	},
	cardBodyIcon: {
		width: "100%",
		paddingTop: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	cardDescription: {
		color: "white",
		paddingTop: 12,
		fontSize: 12,
		textAlign: "center",
	},
});
