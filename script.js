//TODO 📗 Module 5. Logic and Control Flow - Lesson 02.02: Challenge


//TODO  📝 Step 4: Project Challenge – “Smart Assistant: Daily Planner”

//* 🎯 Objective:
//  Write a JavaScript function that behaves like a smart personal assistant, helping the user plan their day based on:
//  • The day of the week
//  • The weather
//  • Whether the user is working or off

//* 🔧 Inputs You Should Simulate:
//  • day – e.g., "Monday", "Saturday"
//  • weather – e.g., "sunny", "rainy", "snowy"
//  • isWorkingDay – true or false

//* 🧠 Logic You Must Implement:
//  Weekday (isWorkingDay === true):
//  • If it’s sunny: "Pack your lunch and walk to work."
//  • If it’s rainy: "Take an umbrella and drive to work."
//  • If it’s snowy: "Work from home if possible."
//  Weekend (isWorkingDay === false):
//  • If it’s sunny: "Perfect day for a picnic!"
//  • If it’s rainy: "Maybe visit a museum."
//  • If it’s snowy: "Stay in and watch movies."

//* 📌 Challenge Conditions:
//  • Use if, else if, and else statements.
//  • Include at least one nested condition.
//  • Use clear and meaningful output messages (console.log).
//  • Avoid deeply nested pyramids by using return early or simplifying logic if possible.

//* 🧾 Stretch Goals (Optional):
//  • Allow "cloudy" as a weather type and handle it.
//  • Include hour of the day and change suggestions (e.g., “good morning”, “good evening”).
//  • Return a summary of the full recommendation, not just console output.

//* 📦 Final Deliverables:
//  • A function named dailyPlanner(day, weather, isWorkingDay)
//  • A complete set of conditionals handling all expected inputs
//  • Clean and readable code with meaningful messages


//! Solution

const workingDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weekend = ["Saturday", "Sunday"];
const weather = ["sunny", "rainy", "snowy", "windy", "foggy", "cloudy", "hail", "sleety", "thunder", "lightning"];
const isWorkingDay = true;

const validDays = [...workingDay, ...weekend];
const validWeather = ["sunny", "rainy", "snowy", "windy", "foggy", "cloudy", "hail", "sleety", "thunder", "lightning"];

const now = new Date();
const currentHour = now.getHours();
const currentHourString = currentHour.toString().padStart(2, '0') + ':00';
const today = now.toLocaleString('en-US', { weekday: 'long' });

function dailyPlanner(day, weather, isWorkingDay) {
    if (!validDays.includes(day) || !validWeather.includes(weather)) {
        console.log("Invalid day or weather input.");
        return;
    }
    
    if (isWorkingDay === true) {
        if (currentHour < 12) {
            console.log("Good Morning!");
        } else if (currentHour < 18) {
            console.log("Good Afternoon!");
        } else {
            console.log("Good Evening!");
        }
        
        if (weather === "sunny") {
            console.log("Pack your lunch and walk to work.");
        } else if (weather === "rainy") {
            console.log("Take an umbrella and drive to work.");
        } else if (weather === "snowy") {
            console.log("Work from home if possible.");
        }
    } else if (isWorkingDay === false) {
        if (weather === "sunny") {
            console.log("Perfect day for a picnic!");
        } else if (weather === "rainy") {
            console.log("Maybe visit a museum.");
        } else if (weather === "snowy") {
            console.log("Stay in and watch movies.");
        }
    }
}

dailyPlanner(today, "sunny", workingDay.includes(today));