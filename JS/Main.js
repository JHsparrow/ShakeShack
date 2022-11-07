const but1 = document.querySelector(".button1");
const but2 = document.querySelector(".button2");
const but3 = document.querySelector(".button3");
const myS1 = document.querySelector(".swiper1");
const myS2 = document.querySelector(".swiper2");
const myS3 = document.querySelector(".swiper3");
const myS4 = document.querySelector(".swiper4");
const backbt1 = document.querySelector("#bt1");
const backbt2 = document.querySelector("#bt2");
const backbt3 = document.querySelector("#bt3");

// 첫번째 스와이퍼
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  loop: true,
  grabCursor: true,
});

// 두번째 스와이퍼 디폴트값 (스와이퍼 4번)
var swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  speed: 2000,
  grabCursor: true,
  // longSwipes: false,
  init: true,
});

// 스와이퍼 클릭 이벤트

but1.addEventListener("click", function () {
  myS1.style.display = "block";
  but1.style.color = "white";
  myS2.style.display = "none";
  but2.style.color = "black";
  myS3.style.display = "none";
  but3.style.color = "black";
  myS4.style.display = "none";

  var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    // loopAdditionalSlides : 1,
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 2000,
    grabCursor: true,
    init: true,
  });
});

but2.addEventListener("click", function () {
  myS1.style.display = "none";
  but1.style.color = "black";
  myS2.style.display = "block";
  but2.style.color = "white";
  myS3.style.display = "none";
  but3.style.color = "black";
  myS4.style.display = "none";

  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    // loopAdditionalSlides : 1,
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 2000,
    grabCursor: true,
    init: true,
  });
});

but3.addEventListener("click", function () {
  myS1.style.display = "none";
  but1.style.color = "black";
  myS2.style.display = "none";
  but2.style.color = "black";
  myS3.style.display = "block";
  but3.style.color = "white";
  myS4.style.display = "none";

  var swiper3 = new Swiper(".mySwiper3", {
    loop: true,
    // loopAdditionalSlides : 1,
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 2000,
    grabCursor: true,
    init: true,
  });
});

// but1.addEventListener("mouseover", function () {});
