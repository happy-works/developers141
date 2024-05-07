//Navigation bar
const container = document.querySelector(".container");
const items = document.querySelector(".items");
const hamburgerOpen = document.querySelector(".hamburger-open");
const hamburgerClose = document.querySelector(".hamburger-close");

hamburgerOpen.addEventListener("click", () => {
  items.style.display = "block";
  items.style.paddingTop = "50px";
  items.style.paddingRight = "0px";
  container.style.height = "50%";
  hamburgerOpen.style.display = "none";
  hamburgerClose.style.display = "block";
  hamburgerClose.style.marginTop = "30px";
});
hamburgerClose.addEventListener("click", () => {
  items.style.display = "none";
  container.style.height = "15%";
  hamburgerClose.style.display = "none";
  hamburgerOpen.style.display = "flex";
});

//Testimonials

const data = [
  {
    id: 1,
    name: "Seenivasan",
    job: "CEO Infosys",
    img: "https://randomuser.me/api/portraits/men/24.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolorum impedit? Sunt dicta hic magni?",
  },
  {
    id: 2,
    name: "Vengataesan",
    job: "UI Designer",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea labore magni, unde sequi numquam quasi dele.",
  },
  {
    id: 3,
    name: "Vikram",
    job: "Video Editor",
    img: "https://randomuser.me/api/portraits/men/81.jpg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolorum impedit? Sunt dicta hic magni?",
  },
  {
    id: 4,
    name: "Ajith Kumar",
    job: "Web Dev",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officiis earum voluptatum illum dolore.",
  },
];
const img = document.querySelector("#pic");
const btnNext = document.querySelector("#btn-right");
const btnPrevious = document.querySelector("#btn-left");
const name = document.querySelector("#name");
const role = document.querySelector("#role");
const text = document.querySelector("#text");

let index = 0;
window.addEventListener("DOMContentLoaded", function () {
  const testimonial = data[0];
  loadTestimonial(testimonial);
});
function loadTestimonial(data) {
  img.src = data.img;
  name.textContent = data.name;
  role.textContent = data.job;
  text.innerHTML = data.text;
}

btnNext.addEventListener("click", function () {
  index++;
  if (index > data.length - 1) {
    index = 0;
  }
  loadTestimonial(data[index]);
});
btnPrevious.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = data.length - 1;
  }
  loadTestimonial(data[index]);
});

//scroll property
const PostListContainer = document.querySelector(".posts-container");
const progressbar = document.querySelector(".progress-bar");

window.onscroll = function () {
  handlescroll();
};
function handlescroll() {
  const getscrollfromtop =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percentageAlreadyscroll = (getscrollfromtop / height) * 100;
  progressbar.style.width = `${percentageAlreadyscroll}%`;
}

//Typed JS
var typed = new Typed("#element", {
  strings: [
    "Welcome to the World of Developers141",
    "&amp; Have a view of our astonishing works",
  ],
  typeSpeed: 100,
  loop: true,
});

AOS.init();

//Counting numbers

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 20000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
