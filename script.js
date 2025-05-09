const body = (document.querySelector("body").style.overflow = "hidden");

document.querySelector("body").addEventListener("mouseenter", function () {
  document.getElementById("pointer").style.display = "block";
});

document.querySelector("body").addEventListener("mouseleave", function () {
  document.getElementById("pointer").style.display = "none";
});

window.addEventListener("mousemove", (dets) => {
  gsap.to("#pointer", {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.7,
    ease: "back.out",
  });
});

// image hover
// document
//   .querySelector(".carousel-item a img")
//   .addEventListener("mouseenter", function () {
//     gsap.to("#pointer", {
//       scale: 4,
//     });
//   });

// document
//   .querySelector(".carousel-item a img")
//   .addEventListener("mouseleave", function () {
//     gsap.to("#pointer", {
//       scale: 1,
//     });
//   });

function navBar() {
  document.querySelector(".icon").addEventListener("click", function () {
    gsap.to(".social_links", {
      right: 0,
      duration: 0.6,
      opacity: 1,
    });
  });
  document.querySelector(".cross").addEventListener("click", function () {
    gsap.to(".social_links", {
      right: -1000,
      duration: 0.6,
      opacity: 1,
    });
  });
}

function getDateAndTime() {
  const DateAndTime = document.querySelector(".date_time");
  const date = new Date();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata",
    hour12: true,
  };

  const dataTime = date.toLocaleDateString("en-IN", options);

  DateAndTime.textContent = dataTime;
}

function startLoadingTextAnime() {
  gsap.from(".first_half h1", {
    x: 1000,
    opacity: 0,
    duration: 5,
    delay: 0.5,
    ease: "elastic.out(1, 0.3)",
  });

  gsap.from(".second_half h3", {
    x: -1000,
    opacity: 0,
    duration: 5,
    delay: 0.5,
    ease: "elastic.out(1, 0.3)",
  });
}

function endLoadingTextAnime() {
  gsap.to(".first_half h1", {
    x: -1000,
    opacity: 0,
    duration: 5,
    delay: 5,
    ease: "back.out",
    display: "none",
  });

  gsap.to(".second_half h3", {
    x: 1000,
    opacity: 0,
    duration: 5,
    delay: 5,
    ease: "back.out",
    display: "none",
  });
}

function loadingAnimeComplete() {
  gsap.to(".first_half", {
    y: -150,
    delay: 6.5,
    duration: 2,
    display: "none",
    opacity: 0,
  });

  gsap.to(".second_half", {
    y: 150,
    delay: 6.5,
    duration: 2,
    display: "none",
    opacity: 0,
  });
}

function homeSocialIconsAnime() {
  gsap.from(".social_icons a", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    ease: "back.out",
    delay: 8,
  });
}

function homeSocialLinksAnime() {
  gsap.from(".social_links", {
    scale: 0,
    duration: 2,
    delay: 8,
    overflowY: "hidden",
    opacity: 0,
    stagger: 0.2,
  });
}

function greetAndTimeAnime() {
  gsap.from(".greet", {
    y: 150,
    duration: 1,
    delay: 8,
    opacity: 0,
  });

  gsap.from(".date_time", {
    y: 150,
    duration: 1,
    delay: 9,
    opacity: 0,
  });
}

function homeTextAnime() {
  gsap.from(".home_text", {
    scale: 1000,
    duration: 5,
    delay: 6.5,
  });
}

// ======= ABOUT SECTION ======= //
gsap.from(".about_loading_container h1", {
  y: 200,
  opacity: 0,
  duration: 1.2,
  delay: 0.7,
});

gsap.from(".about_loading_container .ri-arrow-right-line", {
  x: -1000,
  duration: 3,
  delay: 1.4,
  opacity: 1,
});

gsap.to(".about_loading_container .ri-arrow-right-line", {
  x: 2000,
  duration: 3,
  delay: 1.4,
  opacity: 1,
  display: "none",
});

gsap.to(".about_loading_container h1", {
  y: -200,
  opacity: 0,
  duration: 1.5,
  delay: 2.8,
});

gsap.to(".about_loading_container", {
  y: -2000,
  duration: 1.8,
  delay: 4,
});

gsap.from(".about_img", {
  x: -1000,
  duration: 2,
  opacity: 0,
  delay: 4.5,
  ease: "elastic.out",
});

gsap.from(".about_para", {
  x: 1000,
  duration: 2,
  opacity: 0,
  delay: 4.5,
  ease: "elastic.out",
});

// ======= PROJECT SECTION ====== //
gsap.from(".project_loading_container h1", {
  y: 200,
  opacity: 0,
  duration: 1.2,
  delay: 0.7,
});

gsap.from(".project_loading_container .ri-arrow-right-line", {
  x: -1000,
  duration: 3,
  delay: 1.4,
  opacity: 1,
});

gsap.to(".project_loading_container .ri-arrow-right-line", {
  x: 2000,
  duration: 3,
  delay: 1.4,
  opacity: 1,
  display: "none",
});

gsap.to(".project_loading_container h1", {
  y: -200,
  opacity: 0,
  duration: 1.5,
  delay: 2.8,
});

gsap.to(".project_loading_container", {
  y: -2000,
  duration: 1.8,
  delay: 4,
});

gsap.from(".project_heading h1", {
  y: -1000,
  duration: 1.5,
  delay: 4.5,
  ease: "elastic.out",
});

gsap.from(".carousel", {
  y: 1000,
  duration: 1.5,
  delay: 4.5,
  ease: "elastic.out",
});

//  ====== CONTACT SECTION ====== //
gsap.from(".contact_loading_container h1", {
  y: 200,
  opacity: 0,
  duration: 1.2,
  delay: 0.7,
});

gsap.from(".contact_loading_container .ri-arrow-right-line", {
  x: -1000,
  duration: 3,
  delay: 1.4,
  opacity: 1,
});

gsap.to(".contact_loading_container .ri-arrow-right-line", {
  x: 2000,
  duration: 3,
  delay: 1.4,
  opacity: 1,
  display: "none",
});

gsap.to(".contact_loading_container h1", {
  y: -200,
  opacity: 0,
  duration: 1.5,
  delay: 2.8,
});

gsap.to(".contact_loading_container", {
  y: -2000,
  duration: 1.8,
  delay: 4,
});

gsap.from(".contact_form h1", {
  opacity: 0,
  scale: 1,
  duration: 3,
  delay: 5,
});

gsap.from(".contact_img img", {
  x: 1000,
  duration: 1,
  delay: 4.2,
});

gsap.from(".contact_form form", {
  y: 1000,
  duration: 1,
  delay: 4.2,
});

startLoadingTextAnime();
endLoadingTextAnime();
loadingAnimeComplete();
homeSocialIconsAnime();
homeSocialLinksAnime();
greetAndTimeAnime();
getDateAndTime();
homeTextAnime();
navBar();
carouselEffect();
imageHover();
