/** @format */

import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import IconSearch from "react-native-vector-icons/EvilIcons";
import { categories } from "../Dashboard/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Categories() {
	const [text, setText] = useState("");
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
						<View style={styles.cardsWrapper}>
							{categories.map((image: any) => (
								<View
									style={{
										width: "48%",
										height: 250,
										borderRadius: 10,
										marginBottom: 10,
										padding: 10, // Add spacing between rows
										backgroundColor: `${image.color}`,
										// Shadow for iOS
										shadowColor: "rgba(100, 100, 111, 0.2)",
										shadowOffset: { width: 0, height: 7 },
										shadowOpacity: 0.29,
										shadowRadius: 7,
										// Shadow for Android
										elevation: 7,
									}}
									key={image.id}>
									<View>
										<Text style={styles.cardText}>{image.planName} </Text>
									</View>
									<View>
										<Text style={styles.cardDescription}>
											{" "}
											{image.description}{" "}
										</Text>
									</View>
									<View style={styles.cardBodyIcon}>
										<Text>
											<MaterialCommunityIcons
												name={image.icon}
												size={64}
												color="white"
											/>
										</Text>
									</View>
									{/* <Image source={image.img} style={styles.picture} /> */}
								</View>
							))}
						</View>
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
		padding: 10,
		marginTop: 12,
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
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginBottom: 42,
	},
	cardsWrapper: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
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
