/** @format */

// /** @format */

// import React from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";

// // type Props = {
// // 	event: any;
// // 	renderItem: any;
// // };
// // { event, renderItem }: Props

// export const Calendar = () => {
// 	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// 	const timeSlots = [
// 		{ time: "8:00" },
// 		{ time: "9:00" },
// 		// ...
// 	];
// 	const events = [
// 		{
// 			startTime: "8:30",
// 			endTime: "9:15",
// 			title: "Create new style detail page",
// 		},
// 		// ...
// 	];
// 	const calculateEventTop = (startTime: any) => {
// 		// Assuming time slots are 30 minutes each and start at 8:00 AM
// 		const timeSlotHeight = 50; // Adjust based on your design
// 		const startTimeInMinutes = getTimeInMinutes(startTime); // Convert time to minutes
// 		const baseTime = 8 * 60; // Starting time in minutes
// 		const offset = (startTimeInMinutes - baseTime) * timeSlotHeight;
// 		return offset;
// 	};

// 	const getTimeInMinutes = (timeString: any) => {
// 		const [hours, minutes] = timeString?.split(":");
// 		return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
// 	};

// 	const renderDayHeader = ({ item }: any) => (
// 		<Text style={styles.dayHeader}>{item}</Text>
// 	);
// 	const renderTimeSlot = ({ item }: any) => (
// 		<Text style={styles.timeSlot}>{item.time}</Text>
// 	);
// 	const renderEvent = ({ item }: any) => (
// 		<View style={[styles.event, { top: calculateEventTop(item.startTime) }]}>
// 			{/* Event details */}
// 		</View>
// 	);

// 	return (
// 		<View style={styles.calendarContainer}>
// 			{/* Day headers */}
// 			<FlatList
// 				data={days}
// 				renderItem={renderEvent}
// 				horizontal
// 				keyExtractor={(item) => item}
// 			/>
// 			{/* Time slots and events */}
// 			{/* ... */}
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	// Your styles here
// 	dayHeader: {
// 		color: "#e9ecef",
// 	},
// 	timeSlot: {
// 		color: "#e9ecef",
// 	},
// 	event: {
// 		// Your event styles here, e.g.,
// 		position: "absolute",
// 		left: 0,
// 		height: 30, // Adjust height as needed
// 		backgroundColor: "blue", // Example color
// 	},
// 	calendarContainer: {
// 		width: "100%",
// 	},
// });

import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import {
	IAppointment,
	IAvailableDates,
	TimeSlotPicker,
} from "@dgreasi/react-native-time-slot-picker";
import { useState, useEffect } from "react";
import moment from "moment";

const availableDates: IAvailableDates[] = [
	{
		date: "2023-08-17T21:00:00.000Z", // new Date().toISOString()
		slotTimes: ["08:00-09:00", "09:00-10:00"], // Array<string> of time slots
	},
	{
		date: "2023-08-18T21:00:00.000Z",
		slotTimes: [], // No availability
	},
	{
		date: "2023-08-19T21:00:00.000Z",
		slotTimes: ["08:00-09:00", "09:00-10:00"],
	},
];

export default function Calendar() {
	const [dateOfAppointment, setDateOfAppointment] =
		useState<IAppointment | null>(null);

	useEffect(() => {});
	const generateWeekSlots = () => {
		const today = moment();
		const endOfWeek = moment().endOf("week");
		const slotTimes = ["08:00-09:00", "09:00-10:00"];
		const weekSlots = [];

		for (let date = today; date.isBefore(endOfWeek); date.add(1, "days")) {
			weekSlots.push({
				date: date.clone().startOf("day").toISOString(),
				slotTimes,
			});
		}

		return weekSlots;
	};
	const slots = generateWeekSlots();
	const slotTimes: any = "08:00-09:00";
	useEffect(() => {
		// Contains the selected date, time slot in the following format
		// {"appointmentDate": "2023-08-17T21:00:00.000Z", "appointmentTime": "18:00-19:00"}
		console.log("Date of appointment updated: ", slots);
	}, []);
	return (
		<SafeAreaView>
			<StatusBar backgroundColor="transparent" barStyle="dark-content" />
			<TimeSlotPicker
				availableDates={slots}
				setDateOfAppointment={setDateOfAppointment}
			/>
		</SafeAreaView>
	);
}
