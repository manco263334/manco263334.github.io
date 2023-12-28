const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

img1.addEventListener("click", () => {
    for(let i = 1; i <= 3; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro1");
    section.classList.remove("hidden");
    section.classList.add("active");
});

img2.addEventListener("click", () => {
    for(let i = 1; i <= 3; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro2");
    section.classList.remove("hidden");
    section.classList.add("active");
});

img3.addEventListener("click", () => {
    for(let i = 1; i <= 3; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro3");
    section.classList.remove("hidden");
    section.classList.add("active");
});