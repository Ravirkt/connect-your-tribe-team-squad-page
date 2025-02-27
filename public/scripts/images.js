/**
 * @file imagest.js
 * @description Dit script zorgt ervoor dat de studentkaart wordt geflipt. 
 * Het maakt gebruik van GSAP voor animaties en ondersteunt zowel desktop als mobiel.
 * @author Fatima El Hilali
 */


document.addEventListener("DOMContentLoaded", function () {
    // Selecteer alle elementen met de klasse "student"
    const students = document.querySelectorAll(".student");

    students.forEach((student) => {
        // Selecteer het binnenste element 
        const studentInner = student.querySelector(".student-inner");

        //  voor een  3D-effect
        student.style.perspective = "1000px"; 

        // Luister naar een klik op de student-kaart
        student.addEventListener("click", function () {
            // Toggle de "flipped" klasse (voegt toe of verwijdert)
            const isFlipped = student.classList.toggle("flipped");

            // Gebruik GSAP om de animatie soepel te maken
            gsap.to(studentInner, {
                rotationY: isFlipped ? 180 : 0, // Flip naar 180° of terug naar 0°
                duration: 0.8, // Duur van de animatie in seconden
                ease: "elastic.out(1, 0.5)", // Voegt een lichte bounce toe voor een mooi effect
                scale: isFlipped ? 1.08 : 1, // Iets vergroten bij flip voor extra impact
            });
        });
    });
});


// HEART LIKE BUTTON
// 1) Select the elements
const heartBtn = document.getElementById('heart-btn');
const heartCount = document.getElementById('heart-count');
let heartCountAmount = 0;

// 2) Add an event listeren to it
heartBtn.addEventListener('click', () => {
    // 3) Add the event
    heartCountAmount++;
    heartCount.innerText = likeCount;
});



