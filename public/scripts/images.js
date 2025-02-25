document.addEventListener("DOMContentLoaded", function () {
    const students = document.querySelectorAll(".student");
  
    students.forEach((student) => {
        const studentInner = student.querySelector(".student-inner");
        const studentImage = student.querySelector(".student-front img");
  
        // Flip-effect met GSAP
        student.addEventListener("click", function () {
            if (!this.classList.contains("flipped")) {
                gsap.to(studentInner, {
                    rotationY: 180,
                    scale: 1.05,
                    duration: 0.6,
                    ease: "expo.inOut"
                });
                this.classList.add("flipped");
            } else {
                gsap.to(studentInner, {
                    rotationY: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "expo.inOut"
                });
                this.classList.remove("flipped");
            }
        });
  
  
    });
  });
  