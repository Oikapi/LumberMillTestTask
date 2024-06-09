const vacancies = document.querySelectorAll(".vacancies__cards_each");
let i;

for (let vacancy of vacancies) {
    vacancy.querySelector(".vacancies__cards_each_more").addEventListener("click", function() {
    var panel = vacancy.querySelector(".vacancies__cards__each__details");
    var button = vacancy.querySelector(".vacancies__cards_each_more")
    button.classList.toggle("more__active")
  
    if (panel.style.maxHeight === "") {
        panel.style.maxHeight = panel.scrollHeight + "px"
        panel.style.transition = "max-height 0.5s ease-in-out, opacity 0.5s cubic-bezier(0, 1.25, 0.32, 0.25)"
        } else {
        panel.style.maxHeight = null
        panel.style.transition = "max-height 0.5s ease-in-out, opacity 0.5s cubic-bezier(0, 0, 0.88, 1.66)"
        }
  });
}