const navigators = document.querySelectorAll("[data-nav]");
const experience = document.querySelectorAll("[data-experience]");
const experienceTitle = document.querySelectorAll("[data-experience-title]");
const experienceContent = document.querySelector("[data-experience-content]")

const width = window.innerWidth;
let experienceState = 0

const experienceText = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    "Molestiae possimus eum rerum dolores rem deserunt nam reiciendis saepe cum.",
    "Et ea beatae nulla harum suscipit asperiores ab at veniam odio.",
    "teste 4",
]

navigators.forEach((item, index) => {
    item.addEventListener("click", () => {
        document.documentElement.scrollLeft = index * width
    })
})

experience.forEach((item, index) => {
    item.addEventListener("click", () => {
        experienceState = index;
        if (experienceTitle[index] === experienceState) {
            experienceTitle[index].classList.add("red")
        } else {
            experienceTitle[index].classList.remove("red")
        }



        experienceContent.innerHTML = experienceText[index]
    })
})