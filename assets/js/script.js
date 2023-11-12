/*--------Snow Effect--------- */
// Dynamically create snowflakes
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    const numSnowflakes = 50; // Adjust the number of snowflakes as desired

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snow');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        snowContainer.appendChild(snowflake);
    }
}

// Call the function to create snowflakes when the page loads
window.addEventListener('load', createSnowflakes);

// Optional: Specify start and end dates for the snow animation
const startDate = new Date('2023-11-31'); // Adjust the start date
const endDate = new Date('2024-12-31'); // Adjust the end date

// Check if the current date is within the range of start and end dates
function isWithinDateRange(date, start, end) {
    return date >= start && date <= end;
}

// Hide snow animation if it's not within the specified date range
function hideSnowAnimationIfNotInDateRange() {
    const currentDate = new Date();
    const snowContainer = document.querySelector('.snow-container');

    if (!isWithinDateRange(currentDate, startDate, endDate)) {
        snowContainer.style.display = 'none';
    }
}

// Call the function to check the date range and hide snow animation if necessary
hideSnowAnimationIfNotInDateRange();


// -----Sticky Navigation Menu JS Code------

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click" , function() {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    });
}

// Mail Sender
const hireMeButton = document.getElementById('hireMeButton');

hireMeButton.addEventListener('click', function() {
    const senderEmail = 'binaradulsara021@gmail.com';
    const subject = encodeURIComponent('Hiring Inquiry');
    const mailtoUrl = `mailto:${senderEmail}?subject=${subject}`;
    window.open(mailtoUrl);
});



