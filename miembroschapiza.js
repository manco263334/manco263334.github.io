const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");

img1.addEventListener("click", () => {
    for(let i = 1; i <= 7; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro1");
    section.classList.remove("hidden");
    section.classList.add("active");
});

img2.addEventListener("click", () => {
    for(let i = 1; i <= 7; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro2");
    section.classList.remove("hidden");
    section.classList.add("active");
});

img3.addEventListener("click", () => {
    for(let i = 1; i <= 7; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro3");
    section.classList.remove("hidden");
    section.classList.add("active");
});

img4.addEventListener("click", () => {
    for(let i = 1; i <= 7; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro4");
    section.classList.remove("hidden");
    section.classList.add("active");
});

img5.addEventListener("click", () => {
    for(let i = 1; i <= 7; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro5");
    section.classList.remove("hidden");
    section.classList.add("active");
});

img6.addEventListener("click", () => {
    for(let i = 1; i <= 7; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro6");
    section.classList.remove("hidden");
    section.classList.add("active");
});

img7.addEventListener("click", () => {
    for(let i = 1; i <= 7; i++){
        const num = `miembro${i}`
        const section = document.getElementById(num);
        section.classList.add("hidden");
    }
    const section = document.getElementById("miembro7");
    section.classList.remove("hidden");
    section.classList.add("active");
});