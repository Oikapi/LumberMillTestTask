import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


var careerArr = [
    {
        name : "Олег Воробьёв",
        jobTitle : "Прораб",
        infoArr : [
            "В Компании с 2018 года. Начал с позиции плотника в строительной бригаде.",
            "В течение года работы Олег стал бригадиром и был приглашён в офис Компании на должность штатного Производителя строительных работ. ",
            "На данный момент в Его подчинении находятся 9 строительных бригад. Олег вносит весомый вклад в итоговый результат Компании, а это реализация 100 объектов в год!",
    ]}
    , 
    {
        name : "Даниил Басенков",
        jobTitle : "Менеджер по снабжению",
        infoArr : [
            "В декабре 2018 года заступил на должность Менеджера отдела продаж.",
            "После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.",
            "Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика."
    ]}, 
    {
        name : "Мария Обухова",
        jobTitle : "Руководитель финансовой службы",
        infoArr : [
            "В декабре 2018 года заступил на должность Менеджера отдела продаж.",
            "После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.",
            "Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчик",
    ]
    }
]

var swiper = new Swiper(".career__swiper", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-career-pagination",
    bulletActiveClass: "career__pagination__bullet-active",
    bulletClass: "career__pagination__bullet",
    renderBullet: function (index, className) {
        let div = document.createElement("div")
        div.classList.add(className)
        let name = document.createElement("b")
        name.innerText = careerArr[index].name
        let jobTitle =document.createElement("snan")
        jobTitle.textContent = careerArr[index].jobTitle
        div.appendChild(name);
        div.appendChild(jobTitle)
        let ul=document.createElement('ul');
        console.log(careerArr[index].infoArr.length)
        for(let i = 0; i < careerArr[index].infoArr.length;i++){
            let li=document.createElement('li');
            let p = document.createElement("span");
            p.textContent = careerArr[index].infoArr[i];
            li.appendChild(p)
            // li.textContent = careerArr[index].infoArr[i];
            console.log(careerArr[index].infoArr[i])
            ul.appendChild(li);
        }
        div.appendChild(ul)
    console.log(className)  
        // return '<span class="' + className + '">' + (careerArr[index].name) + '</span>';
        return div.outerHTML
        
      },
  },
});