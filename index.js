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

        navigators[index].classList.add("selected-navigator")
        for (i in navigators) {
            if (i != index) navigators[i].classList.remove("selected-navigator")
        }
    })
})


experience.forEach((item, index) => {
    item.addEventListener("click", () => {
        experienceState = index;

        experienceTitle[index].classList.add("selected-experience")
        for (i in experienceTitle) {
            if (i != index) experienceTitle[i].classList.remove("selected-experience")
            experienceContent.innerHTML = experienceText[index]
        }
    })
})
