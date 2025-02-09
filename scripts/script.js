if (window.location.pathname.endsWith('preview.html')) {
    console.log('Need to wait');

    setTimeout(function () {
        console.log('setting window location');
        window.location.href = "welcome.html";
    }, 5000);
}

// Ride Data
const rides = [
    {
        name: "Standard",
        seats: 4,
        price: 7.50,
        time: "11:20 AM",
        distance: "3min",
        icon: "🚗"
    },
    {
        name: "Premium",
        seats: 4,
        price: 10.50,
        time: "11:10 AM",
        distance: "5min",
        icon: "🚙"
    },
    {
        name: "Economy",
        seats: 4,
        price: 5.50,
        time: "11:15 AM",
        distance: "10min",
        icon: "🚕"
    },
    {
        name: "Family",
        seats: 6,
        price: 11.50,
        time: "11:10 AM",
        distance: "5min",
        icon: "🚐"
    },
    {
        name: "Motorbike",
        seats: 1,
        price: 2.50,
        time: "11:01 AM",
        distance: "2min",
        icon: "🏍️"
    }
];

let selectedRide = null;

// Function to display rides
function displayRides() {
    const ridesList = document.getElementById("rides");

    rides.forEach(ride => {
        const rideItem = document.createElement("div");
        rideItem.classList.add("ride-item");

        rideItem.innerHTML = `
            <div class="icon">${ride.icon}</div>
            <div class="details">
                <div class="type">${ride.name} <i class="fas fa-user"></i> ${ride.seats}</div>
                <div class="info">${ride.time} ${ride.distance} away</div>
            </div>
            <div class="price">$${ride.price.toFixed(2)}</div>
        `;

        // Handle ride selection
        rideItem.addEventListener("click", function () {
            document.querySelectorAll(".ride-item").forEach(item => item.classList.remove("selected"));
            rideItem.classList.add("selected");
            selectedRide = ride.name;
            document.getElementById("continueBtn").disabled = false;
        });

        ridesList.appendChild(rideItem);
    });
}

// Load rides when the page loads
window.onload = function () {
    displayRides();
    document.getElementById("continueBtn").disabled = true;
};

const APIKEY = "67a1c1bec5f8d4f0d1e4d4fb";
const API_BASE_URL = "https://intergratedproject-9649.restdb.io/rest/accounts";

document.addEventListener("DOMContentLoaded", function () {

    // Fetch all accounts
    function getAccounts() {
        fetch(API_BASE_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache",
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log("Accounts:", data);
        })
        .catch(error => console.error("Error fetching accounts:", error));
    }

    // Handle sign up
    document.getElementById("submit").addEventListener("click", function (e) {
        e.preventDefault();

        const username = document.getElementById("signupUsername").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const areaCode = document.getElementById("areaCode").value.trim(); // Get area code
        const phonenumber = document.getElementById("signupNumber").value.trim();

        const number = `${areaCode}${phonenumber}`;
    
        if (!username || !password || !areaCode || !phonenumber) {
            alert("Invalid input. Please check your details.");
            return;
        }

        if (!/^\+\d{1,4}$/.test(areaCode)) {
            alert("Invalid area code. It must start with a '+' and contain 1-4 digits.");
            return;
        }

        const jsondata = { username, password, number };
        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache",
            },
            body: JSON.stringify(jsondata),
        };

        fetch(API_BASE_URL, settings)
        .then(response => response.json())
        .then(data => {
            console.log("Account Created:", data);
            alert("Signup successful!");
            document.getElementById("signupForm").reset();
            getAccounts();
            window.location.href = "index.html"; // Redirect after login
        })
        .catch(error => {
            console.error("Error creating account:", error);
            alert("Failed to create account. Please try again.");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    // Handle login
    document.getElementById("loginForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        const query = `?q={"username":"${username}","password":"${password}"}`;
        const url = `${API_BASE_URL}${query}`;

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": APIKEY,
                    "Cache-Control": "no-cache",
                },
            });

            const data = await response.json();

            if (data.length > 0) {
                alert("Login successful!");
                localStorage.setItem("token", data[0]._id); // Store session token
                window.location.href = "index.html"; // Redirect to homepage
            } else {
                alert("Invalid username or password.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again.");
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const ratingInputs = document.querySelectorAll('.rating input');
    const ratingText = document.getElementById('ratingText');
    const starLabels = document.querySelectorAll('.rating label i');

    // Define the rating descriptions
    const ratingDescriptions = {
        1: "Terrible",
        2: "Bad",
        3: "Average",
        4: "Good",
        5: "Excellent"
    };

    // Add event listeners to the rating inputs
    ratingInputs.forEach((input, index) => {
        input.addEventListener('change', () => {
            const selectedRating = input.value;

            // Update the rating text
            ratingText.textContent = `${ratingDescriptions[selectedRating]}`;

            // Update the stars to filled (fas fa-star) for selected and previous stars
            starLabels.forEach((star, starIndex) => {
                if (starIndex <= index) {
                    star.classList.remove('far'); // Remove outline class
                    star.classList.add('fas');   // Add filled class
                } else {
                    star.classList.remove('fas'); // Remove filled class
                    star.classList.add('far');    // Add outline class
                }
            });
        });
    });
});