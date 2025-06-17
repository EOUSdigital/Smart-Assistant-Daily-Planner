# Module 5 – Lesson 02: Conditional Statements and Nesting
## ✅ Final Project Solution – Smart Assistant: Daily Planner (with Time-Based Greeting)

---

## 🎯 Objective

Simulate a smart assistant that gives day-specific recommendations based on:
- The day of the week
- Weather conditions
- Whether it's a working day or not
- Time of day (for personalized greetings)

---

## 📥 Inputs

```javascript
const workingDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const weekend = ["Saturday", "Sunday"];
const validWeather = ["sunny", "rainy", "snowy", "windy", "foggy", "cloudy", "hail", "sleety", "thunder", "lightning"];

const now = new Date();
const currentHour = now.getHours();
const today = now.toLocaleString('en-US', { weekday: 'long' });
```

---

## 🧠 Function Logic

```javascript
function dailyPlanner(day, weather, isWorkingDay) {
    if (!validDays.includes(day) || !validWeather.includes(weather)) {
        console.log("Invalid day or weather input.");
        return;
    }

    if (isWorkingDay === true) {
        // Time-based greeting
        if (currentHour < 12) {
            console.log("Good Morning");
        } else if (currentHour < 18) {
            console.log("Good Afternoon");
        } else {
            console.log("Good Evening");
        }

        // Workday advice
        if (weather === "sunny") {
            console.log("Pack your lunch and walk to work.");
        } else if (weather === "rainy") {
            console.log("Take an umbrella and drive to work.");
        } else if (weather === "snowy") {
            console.log("Work from home if possible.");
        }
    } else {
        // Weekend advice
        if (weather === "sunny") {
            console.log("Perfect day for a picnic!");
        } else if (weather === "rainy") {
            console.log("Maybe visit a museum.");
        } else if (weather === "snowy") {
            console.log("Stay in and watch movies.");
        }
    }
}
```

---

## ✅ Final Function Call

```javascript
dailyPlanner(today, "sunny", workingDay.includes(today));
```

---

## 📌 Highlights

- Correct use of `if`, `else if`, and nested conditionals
- Logical input validation
- Dynamic greeting based on time of day
- Context-aware recommendations for working days vs weekends

---

## 🧾 Summary

This final version successfully brings together:
- Branching logic
- Real-world inputs
- Personalized behavior
- Clean, scalable structure

Excellent work!
