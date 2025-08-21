const test = document.getElementById("test")
const body = document.getElementById("body")

width = window.innerWidth;
alert(test)

test.addEventListener("click", () => {
    document.documentElement.scrollLeft += width
})
