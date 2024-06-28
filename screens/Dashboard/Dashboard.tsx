/** @format */

import React, { useState } from "react";
import {
	StyleSheet,
	SafeAreaView,
	Text,
	View,
	TextInput,
	Image,
	ScrollView,
	FlatList,
} from "react-native";
import { diets } from "./data";
import Icon from "react-native-vector-icons/FontAwesome";
import IconBell from "react-native-vector-icons/Ionicons";
import IconSearch from "react-native-vector-icons/EvilIcons";
import IconArrowRight from "react-native-vector-icons/AntDesign";

function Dashboard() {
	const [text, setText] = useState("");

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<View style={styles.banner}>
					<View style={styles.profileHeadDash}>
						<View style={styles.userImage}>
							<Icon name="user-o" size={30} color="#000" />
						</View>
						<View>
							<Text>Hello Jerome</Text>
							<Text style={styles.textGreeting}>Good Morning</Text>
						</View>
					</View>
					<View style={styles.notificationCircle}>
						<IconBell name="notifications-outline" size={25} color="#000" />
					</View>
				</View>
				<View style={styles.searchBar}>
					<TextInput
						style={styles.searchInput}
						placeholder="Search your Diet Nutrition"
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
				<View style={styles.articleBar}>
					{/* <View> */}
					<View style={styles.articleBarView}>
						<View>
							<Text style={styles.textArticle}>Articles</Text>

							<Text style={styles.textArticleBody}>
								Nutrition the healthy diet for a better life
							</Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={styles.textArticleFooter}>Read more</Text>
								<IconArrowRight
									name="arrowright"
									style={{
										marginLeft: 4,
										marginTop: 2,
									}}
									size={18}
									color="#762a0c"
								/>
							</View>
						</View>
					</View>
					<View style={styles.imageView}>
						<Image
							source={require(`../../assets/nutrition.png`)}
							style={styles.image}
						/>
					</View>
				</View>
				<View style={styles.categoryLine}>
					<Text style={styles.categoryText}> Category</Text>
					<Text style={styles.categorySmallText}>See all</Text>
				</View>
				<View style={styles.flatListView}>
					<ScrollView
						horizontal={true}
						// style={styles.scrollView}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.contentContainer}>
						{diets.map((image: any) => (
							<View style={{ flexDirection: "column" }}>
								<View
									style={{
										width: 130,
										height: 130,
										borderRadius: 10,
										marginBottom: 8,
										backgroundColor: `${image.color}`,
									}}
									key={image.name}>
									<Image source={image.img} style={styles.picture} />
								</View>
								<Text style={styles.categoriesBoxName}>{image.name}</Text>
							</View>
						))}
					</ScrollView>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Dashboard;

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
		justifyContent: "space-evenly",
		backgroundColor: "#fff",
	},
	banner: {
		width: "100%",
		height: 100,
		display: "flex",
		backgroundColor: "white",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	scrollView: {
		marginTop: 20,
	},
	flatListView: {
		width: "100%",
		height: 200,
		gap: 9,
	},

	categoriesBoxName: {
		fontSize: 17,
		fontWeight: "600",
		textAlign: "center",
		color: "#000",
	},
	picture: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	profileHeadDash: {
		flex: 1,
		width: "50%",
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		backgroundColor: "white",
	},
	userImage: {
		width: 50,
		height: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		borderWidth: 3,
		borderColor: "#fb5607",
		backgroundColor: "white",
	},
	textGreeting: {
		fontSize: 22,
		fontWeight: "600",
	},
	notificationCircle: {
		width: 40,
		height: 40,
		borderRadius: 50,
		borderWidth: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#000",
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
	articleBar: {
		width: "100%",
		height: 150,
		borderRadius: 8,
		padding: 10,
		backgroundColor: "#ffe594",
		flexDirection: "row",
		marginBottom: 14,
	},
	articleBarView: {
		width: "66%",
	},
	articleBarOtherView: {
		width: "32%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	imageView: {
		width: "34%",
		height: "100%",
	},
	textArticle: {
		fontSize: 14,
		paddingBottom: 7,
		textTransform: "uppercase",
		letterSpacing: 3,
		color: "#762a0c",
	},

	textArticleBody: {
		fontSize: 22,
		fontWeight: "500",
		paddingBottom: 37,
		color: "#762a0c",
	},
	textArticleFooter: {
		fontSize: 14,
		fontWeight: "500",
		color: "#762a0c",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	categoryLine: {
		width: "100%",
		height: 30,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	categoryText: {
		fontSize: 18,
		fontWeight: "600",
		color: "#000",
	},
	categorySmallText: {
		fontSize: 12,
		fontWeight: "200",
		color: "#000",
	},
});
