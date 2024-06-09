

export function accardion(mainContaierClass ,buttonMoreClass, buttonActiveClass, detailsClass,){
    const vacancies = document.querySelectorAll("."+ mainContaierClass);
    console.log("123")
    for (let vacancy of vacancies) {
        vacancy.querySelector("."+buttonMoreClass).addEventListener("click", function() {
        var panel = vacancy.querySelector("."+detailsClass);
        var button = vacancy.querySelector("."+buttonMoreClass)
        button.classList.toggle(buttonActiveClass)
    
        if (panel.style.maxHeight === "") {
            panel.style.maxHeight = panel.scrollHeight + "px"
            panel.style.transition = "max-height 0.5s ease-in-out, opacity 0.5s cubic-bezier(0, 1.25, 0.32, 0.25)"
            } else {
            panel.style.maxHeight = null
            panel.style.transition = "max-height 0.5s ease-in-out, opacity 0.5s cubic-bezier(0, 0, 0.88, 1.66)"
            }
    });
    }
}
