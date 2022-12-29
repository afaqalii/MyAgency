const menuItems = document.querySelector(".menu__items")
const menuBars = document.querySelector(".menuBar")
const menuBar = document.querySelectorAll(".bar")
const menuItem = document.querySelectorAll(".menu_item")

menuBars.addEventListener("click", () => {
menuItems.classList.toggle("menu__itemsActive")
menuBars.classList.toggle("menuBarActive")
menuBar.forEach(bar => {
    bar.classList.toggle("activated")
})
});
menuItem.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.classList.remove("menu__itemsActive")
        menuBars.classList.remove("menuBarActive")
         menuBar.forEach(bar => {
            bar.classList.remove("activated")
        })  
    })
})
// menuBarActive

$(".service-one").click(() => {
    $(".service-body-one").toggle("hide")
})

$(".service-two").click(() => {
    $(".service-body-two").toggle("hide")
})

$(".service-three").click(() => {
    $(".service-body-three").toggle("hide")
})

$(".service-four").click(() => {
    $(".service-body-four").toggle("hide")
})