import React, {useState,useEffect, ReactNode } from 'react';

interface Category {
    id:number,
    planName: string;
    color: any;
    description:string;
    icon: ReactNode; // This will allow any valid React element
  }


export const diets:any = [
    {
        id:1,
        name:"Fruits",
        color:"#f2d1dc",
        img:require(`../../assets/fruits.png`),
    },
    {
        id:2,
        name:"Diary",
        color:"#fad495",
        img:require(`../../assets/diary.png`),
    }, 
    {
        id:3,
        name:"Protein",
        color:"#84b59f",
        img:require(`../../assets/meat.png`),
    },
    {
        id:4,
        name:"Vegetables",
        color:"#eeedff",
        img:require(`../../assets/vegetables.png`),
    },
    
]

// export const categories:any = [
//     {
//         id:1,
//         planName:'Nutrition Plan' ,
//         color: "#e36414",
//         description:" Consuming a variety of foods from all food groups to ensure a balanced intake of nutrients.",
//         icon: "food-turkey",
//         prompt:`Create a detailed nutrition plan for a ${userData.age}-year-old, ${userData.weight} lbs, ${userData.height} ft person with a goal of ${userData.goals}. Avoid ${userData.allergies}. Include meal times with  image of the meal, food items images, and calorie counts.`
//     },
//     {
//         id:2,
//         planName:'Workout Plan' ,
//         color:"#386641",
//         description:" Activities such as running, cycling, swimming, or brisk walking to improve heart health.",
//         icon:'weight-lifter'
//     },
//     {
//         id:3,
//         planName:'Water Intake Plan' ,
//         color:"#0466c8",
//         description:"Ensuring adequate water intake throughout the day to stay hydrated.",
//         icon:'cup-water'
//     },
//     {
//         id:4,
//         planName:'Meditation Plan' ,
//         color:"#5a189a",
//         description:"Regular practice of mindfulness or meditation to reduce stress and increase mental clarity.",
//         icon:'meditation'
//     },
//     {
//         id:5,
//         planName:'Sleep Plan' ,
//         color:"#9a031e",
//         description:"Going to bed and waking up at the same time every day to regulate the body’s internal clock",
//         icon:'sleep'
//     }
// ]