//Логіка роботи слайдера в секції Products

const firstProductRef = document.querySelector(".js-oil");
const secondProductRef = document.querySelector(".js-clay");
const thirdProductRef = document.querySelector(".js-paste");

const prevBtnRef = document.querySelector(".js-prev");
const nextBtnRef = document.querySelector(".js-next");

let currentSlide = 1;
const isMobile = window.innerWidth < 1040;
console.log(isMobile);

prevBtnRef.addEventListener("click", onPrevBtnClick);
nextBtnRef.addEventListener("click", onNextBtnClick);

function onPrevBtnClick() {
  // логіка для мобілки
  //кнопка прев
  if (isMobile) {
    //коли показаний перший елемент, кнопка prev ховає перший і показує третій
    if (currentSlide === 1) {
      firstProductRef.style.display = "none";
      thirdProductRef.style.display = "block";
      currentSlide = 3;
      return;
    }
    //коли показаний другий елемент, кнопка prev ховає другий і показує перший
    if (currentSlide === 2) {
      secondProductRef.style.display = "none";
      firstProductRef.style.display = "block";
      currentSlide = 1;
      return;
    }
    //коли показаний третій елемент, кнопка prev ховає третій і показує другий
    if (currentSlide === 3) {
      thirdProductRef.style.display = "none";
      secondProductRef.style.display = "block";
      currentSlide = 2;
      return;
    }
  }

  // логіка для таблетки і вище
  //кнопка прев
  if (!isMobile) {
    //коли показаний перший елемент
    if (firstProductRef.classList.contains("js-first")) {
      //навішує стиль js-first на третій елемен(знімає його з першого)
      thirdProductRef.classList.add("js-first");
      firstProductRef.classList.remove("js-first");
      //js-second на перший елемент(знімає його з другого)
      firstProductRef.classList.add("js-second");
      secondProductRef.classList.remove("js-second");
      // js-third на другий елемент(знімає його з третього)
      secondProductRef.classList.add("js-third");
      thirdProductRef.classList.remove("js-third");
      return;
    }
    //коли показаний другий елемент
    if (secondProductRef.classList.contains("js-first")) {
      //навішує стиль навішує стиль js-first на перший елемен(знімає його з другого)
      firstProductRef.classList.add("js-first");
      secondProductRef.classList.remove("js-first");
      //js-second на другий елемент(знімає його з третього)
      secondProductRef.classList.add("js-second");
      thirdProductRef.classList.remove("js-second");
      //js-third на третій елемент(знімає його з першого)
      thirdProductRef.classList.add("js-third");
      firstProductRef.classList.remove("js-third");
      return;
    }
    //коли показаний третій елемент, ,
    if (thirdProductRef.classList.contains("js-first")) {
      //навішує стиль js-first на другий елемен(знімає його з третього)
      secondProductRef.classList.add("js-first");
      thirdProductRef.classList.remove("js-first");
      //js-second на третій елемент(знімає його з першого)
      thirdProductRef.classList.add("js-second");
      firstProductRef.classList.remove("js-second");
      //js-third на перший елемент(знімає його з другого)
      firstProductRef.classList.add("js-third");
      secondProductRef.classList.remove("js-third");
      return;
    }
  }
}

function onNextBtnClick() {
  // логіка для мобілки
  //кнопка некст
  if (isMobile) {
    //коли показаний перший елемент, кнопка next ховає перший і показує другий
    if (currentSlide === 1) {
      firstProductRef.style.display = "none";
      secondProductRef.style.display = "block";
      currentSlide = 2;
      return;
    }
    //коли показаний другий елемент, кнопка next ховає другий і показує третій
    if (currentSlide === 2) {
      secondProductRef.style.display = "none";
      thirdProductRef.style.display = "block";
      currentSlide = 3;
      return;
    }
    //коли показаний третій елемент, кнопка next ховає третій і показує перший
    if (currentSlide === 3) {
      thirdProductRef.style.display = "none";
      firstProductRef.style.display = "block";
      currentSlide = 1;
      return;
    }
  }

  // логіка для таблетки і вище
  //кнопка некст
  if (!isMobile) {
    //коли показаний перший елемент
    if (firstProductRef.classList.contains("js-first")) {
      //навішує стиль js-first на другий елемент(знімає його з першого)
      secondProductRef.classList.add("js-first");
      firstProductRef.classList.remove("js-first");
      //js-second на третій елемент(знімає його з другого)
      thirdProductRef.classList.add("js-second");
      secondProductRef.classList.remove("js-second");
      //js-third на перший елемент(знімає його з третього)
      firstProductRef.classList.add("js-third");
      thirdProductRef.classList.remove("js-third");
      return;
    }
    //коли показаний другий елемент
    if (secondProductRef.classList.contains("js-first")) {
      //навішує стиль js-first на третій елемент(знімає його з другого)
      thirdProductRef.classList.add("js-first");
      secondProductRef.classList.remove("js-first");
      //js-second на перший елемент(знімає його з третього)
      firstProductRef.classList.add("js-second");
      thirdProductRef.classList.remove("js-second");
      //js-third на другий елемент(знімає його з першого)
      secondProductRef.classList.add("js-third");
      firstProductRef.classList.remove("js-third");
      return;
    }
    //коли показаний третій елемент
    if (thirdProductRef.classList.contains("js-first")) {
      //навішує стиль js-first на перший елемен(знімає його з третього)
      firstProductRef.classList.add("js-first");
      thirdProductRef.classList.remove("js-first");
      //js-second на другий елемент(знімає його з першого)
      secondProductRef.classList.add("js-second");
      firstProductRef.classList.remove("js-second");
      //js-third на третій елемент(знімає його з другого)
      thirdProductRef.classList.add("js-third");
      secondProductRef.classList.remove("js-third");
      return;
    }
  }
}
