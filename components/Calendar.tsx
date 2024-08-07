/** @format */

// import * as React from "react";
// import { SafeAreaView, StatusBar } from "react-native";
// import {
// 	IAppointment,
// 	IAvailableDates,
// 	TimeSlotPicker,
// } from "@dgreasi/react-native-time-slot-picker";
// import { useState, useEffect } from "react";
// import moment from "moment";

// const availableDates: IAvailableDates[] = [
// 	{
// 		date: "2023-08-17T21:00:00.000Z", // new Date().toISOString()
// 		slotTimes: ["08:00-09:00", "09:00-10:00"], // Array<string> of time slots
// 	},
// 	{
// 		date: "2023-08-18T21:00:00.000Z",
// 		slotTimes: [], // No availability
// 	},
// 	{
// 		date: "2023-08-19T21:00:00.000Z",
// 		slotTimes: ["08:00-09:00", "09:00-10:00"],
// 	},
// ];

// export default function Calendar() {
// 	const [dateOfAppointment, setDateOfAppointment] =
// 		useState<IAppointment | null>(null);

// 	useEffect(() => {

// 	}, [availableDates]);

// 	const generateWeekSlots = () => {
// 		const today = moment();
// 		const endOfWeek = today.clone().endOf("week");
// 		const slotTimes = ["08:00-09:00", "09:00-10:00"];

// 		return Array.from(
// 			{ length: endOfWeek.diff(today, "days") + 1 },
// 			(_, index) => {
// 				const date = today.clone().add(index, "days");
// 				return {
// 					date: date.toISOString(),
// 					slotTimes,
// 				};
// 			}
// 		);
// 	};

// 	const slots = generateWeekSlots();
// 	const slotTimes: any = "08:00-09:00";

// 	return (
// 		<SafeAreaView>
// 			<StatusBar backgroundColor="transparent" barStyle="dark-content" />
// 			<TimeSlotPicker
// 				availableDates={slots}
// 				setDateOfAppointment={setDateOfAppointment}
// 			/>
// 		</SafeAreaView>
// 	);
// }

import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import {
	IAppointment,
	IAvailableDates,
	TimeSlotPicker,
} from "@dgreasi/react-native-time-slot-picker";
import { useEffect, useState } from "react";
import moment from "moment";

const availableDates: IAvailableDates[] = [
	{
		day: moment(), // new Date().getDate()
		slotDate: "Fri Aug 18 2023", // new Date().toDateString()
		slotTimes: ["08:00-09:00", "09:00-10:00"], // Array<string> of time slots
	},
	{
		day: 19,
		slotDate: "Sat Aug 19 2023",
		slotTimes: [], // No availability
	},
	{
		day: 20,
		slotDate: "Sun Aug 20 2023",
		slotTimes: ["08:00-09:00", "09:00-10:00"],
	},
];

export default function App() {
	const [dateOfAppointment, setDateOfAppointment] =
		useState<IAppointment | null>(null);

	useEffect(() => {
		// Contains the selected time slot in the following format
		// {"appointmentDate": "Fri Aug 18 2023", "appointmentTime": "18:00-19:00"}
		console.log("Date of appointment updated: ", dateOfAppointment);
	}, [dateOfAppointment]);

	const generateWeekSlots = () => {
		const today = moment();
		const endOfWeek = today.clone().endOf("week");
		const slotTimes = ["08:00-09:00", "09:00-10:00"];

		return Array.from(
			{ length: endOfWeek.diff(today, "days") + 1 },
			(_, index) => {
				const date = today.clone().add(index, "days");
				return {
					date: date.toISOString(), // Assuming IAvailableDates expects a string for date
					slotTimes,
				};
			}
		);
	};

	const weekSlots = generateWeekSlots().map((slot) => ({
		...slot,
		date: slot.date as string,
		slotTimes: slot.slotTimes as string[],
	}));

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<TimeSlotPicker
					availableDates={availableDates}
					setDateOfAppointment={setDateOfAppointment}
				/>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flexDirection: "column",
	},
});
