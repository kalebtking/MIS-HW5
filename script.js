// displaying the greeting based on time of day
function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "";

    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    document.getElementById("greeting").innerText = greeting;
}

// calculating age
function calculateAge() {
    const birthYear = document.getElementById("birthYear").value;
    const currentYear = new Date().getFullYear();
    if (birthYear) {
        const age = currentYear - birthYear;
        document.getElementById("age-result").innerText = `You are ${age} years old.`;
    } else {
        document.getElementById("age-result").innerText = "Please enter a valid birth year.";
    }
}

// toggling theme
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

// validating birth year 
function validateInput() {
    const birthYear = document.getElementById("birthYear").value;
    if (birthYear < 1900 || birthYear > new Date().getFullYear()) {
        alert("Please enter a valid year between 1900 and the current year.");
        return false;
    }
    return true;
}

// initializing the page
function initializePage() {
    displayGreeting();
    document.getElementById("birthYear").addEventListener("input", validateInput);
}

// running initializePage function on page load
window.onload = initializePage;
