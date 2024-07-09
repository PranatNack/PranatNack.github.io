// JavaScript for Language Switching
const enBtn = document.getElementById("en-btn");
const thBtn = document.getElementById("th-btn");
const aboutEn = document.getElementById("about-section-en");
const aboutTh = document.getElementById("about-section-th");
const expEn = document.getElementById("experience-section-en");
const expTh = document.getElementById("experience-section-th");
const skillEn = document.getElementById("skills-en");
const skillTh = document.getElementById("skills-th");
const portEn = document.getElementById("portfolio-en");
const portTh = document.getElementById("portfolio-th");
const contEn = document.getElementById("contact-en");
const contTh = document.getElementById("contact-th");
const bubbles = document.querySelectorAll(".bubble");
const tl = gsap.timeline({ repeat: -1 }); // ทำให้เคลื่อนไหววนไปเรื่อยๆ

const scrollToTopBtn = document.getElementById("scroll-to-top");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

gsap.from("header img", { duration: 1, y: -100, opacity: 0 });
gsap.from("header h1, header h2", { duration: 1, delay: 0.5, y: -50, opacity: 0 });

// English Skills Chart
const ctxEn = document.getElementById('skillsChart').getContext('2d');
const gradientEn = ctxEn.createLinearGradient(0, 0, 0, 400);
gradientEn.addColorStop(0, 'rgba(255, 99, 132, 0.2)');
gradientEn.addColorStop(1, 'rgba(255, 99, 132, 0.8)');
const skillsChartEn = new Chart(ctxEn, {
  type: 'radar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Java', 'C#','.Net framework','Postman', 'SQL', 'NoSQL'],
    datasets: [{
      label: 'Skill Level',
      data: [85, 85, 70, 50, 50, 30, 70, 50, 50, 70, 70],
      backgroundColor: gradientEn,
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      pointHoverBorderWidth: 2,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowBlur: 10,
      borderDash: [5, 5]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: { beginAtZero: true }
    },
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    animation: {
      duration: 2000,
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  }
});

// Thai Skills Chart
const ctxTh = document.getElementById('skillsChartTh').getContext('2d');
const gradientTh = ctxTh.createLinearGradient(0, 0, 0, 400);
gradientTh.addColorStop(0, 'rgba(255, 99, 132, 0.2)');
gradientTh.addColorStop(1, 'rgba(255, 99, 132, 0.8)');
const skillsChartTh = new Chart(ctxTh, {
  type: 'radar',
  data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Java', 'C#','.Net framework','Postman', 'SQL', 'NoSQL'],
      datasets: [{
        label: 'ระดับทักษะ',
        data: [85, 85, 70, 50, 50, 30, 70, 50, 50, 70, 70],
        backgroundColor: gradientTh,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        pointHoverBorderWidth: 2,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10,
        borderDash: [5, 5]
      }]
  },
  options: {
      scale: {
          ticks: { beginAtZero: true }
      },
      legend: {
          labels: {
              fontColor: 'white'
          }
      },
      animation: {
          duration: 2000,
          // easing: 'easeInOutQuart'
      },
      elements: {
          line: {
              tension: 0.4
          }
      }
  }
});




// Function to add bubble animation
function addBubbleAnimation() {
  bubbles.forEach((bubble) => {
    const delay = Math.random() * 5;
    gsap.to(bubble, {
        opacity: 1,
        y: -50,
        scale: 1,
        duration: 1,
        delay: delay,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    });
});
}

// Function to remove bubble animation
function removeBubbleAnimation() {
  bubbles.forEach((bubble) => {
    gsap.killTweensOf(bubble);
    gsap.to(bubble, {
        opacity: 0,
        y: 0,
        scale: 0,
        duration: 0.5,
        ease: 'power1.inOut'
    });
});
}

// Event listeners for language buttons
// Event listeners for language buttons
enBtn.addEventListener("click", () => {
  aboutEn.classList.remove("hidden");
  aboutTh.classList.add("hidden");
  expEn.classList.remove("hidden");
  expTh.classList.add("hidden");
  skillEn.classList.remove("hidden");
  skillTh.classList.add("hidden");
  portEn.classList.remove("hidden");
  portTh.classList.add("hidden");
  contEn.classList.remove("hidden");
  contTh.classList.add("hidden");
  removeBubbleAnimation();
});

thBtn.addEventListener("click", () => {
  aboutTh.classList.remove("hidden");
  aboutEn.classList.add("hidden");
  expTh.classList.remove("hidden");
  expEn.classList.add("hidden");
  skillTh.classList.remove("hidden");
  skillEn.classList.add("hidden");
  portTh.classList.remove("hidden");
  portEn.classList.add("hidden");
  contTh.classList.remove("hidden");
  contEn.classList.add("hidden");
  addBubbleAnimation();
});

addBubbleAnimation();

// Event listeners for language buttons hover effect
enBtn.addEventListener("mouseover", () => {
  enBtn.style.transform = "scale(1.1)";
  enBtn.style.backgroundColor = "#4facfe";
  enBtn.style.color = "#fff";
});
enBtn.addEventListener("mouseout", () => {
  enBtn.style.transform = "scale(1)";
  enBtn.style.backgroundColor = "transparent";
  enBtn.style.color = "white";
});

thBtn.addEventListener("mouseover", () => {
  thBtn.style.transform = "scale(1.1)";
  thBtn.style.backgroundColor = "#4facfe";
  thBtn.style.color = "#fff";
});
thBtn.addEventListener("mouseout", () => {
  thBtn.style.transform = "scale(1)";
  thBtn.style.backgroundColor = "transparent";
  thBtn.style.color = "white";
});

// Event listeners for skills list hover effect
document.querySelectorAll("ul li").forEach((item) => {
  item.addEventListener("mouseover", () => {
      item.style.transform = "translateY(-5px) scale(1.05)";
      item.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      item.style.backgroundColor = "#4facfe";
      item.style.color = "#fff";
  });
  item.addEventListener("mouseout", () => {
      item.style.transform = "translateY(0) scale(1)";
      item.style.boxShadow = "none";
      item.style.backgroundColor = "#f0f8ff";
      item.style.color = "#333";
  });
});

// Event listeners for project card hover effect
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseover", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
  });
  card.addEventListener("mouseout", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  });
});

// Event listeners for skill items hover effect
document.querySelectorAll("ul li").forEach((item) => {
  item.addEventListener("mouseover", () => {
      item.style.transform = "translateX(5px) scale(1.05)";
      item.style.backgroundColor = "#4facfe";
      item.style.color = "#ffffff";
      item.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  });
  item.addEventListener("mouseout", () => {
      item.style.transform = "translateX(0) scale(1)";
      item.style.backgroundColor = "#f0f8ff";
      item.style.color = "#333";
      item.style.boxShadow = "none";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
});
// Swiper for Project Images
document.addEventListener('DOMContentLoaded', function () {
  const images = [
    './src/image/img18.jpg',
    './src/image/img19.jpg',
    './src/image/img22.jpg',
    './src/image/img23.jpg',
    './src/image/img26.jpg',
    './src/image/img27.jpg',
    './src/image/img28.jpg',
    './src/image/img31.jpg',
    './src/image/img32.jpg',
    './src/image/img35.jpg',
    './src/image/img36.jpg',
    './src/image/img37.jpg',
    './src/image/img40.jpg',
    './src/image/img43.jpg',
    './src/image/img44.jpg',
  ];

  const loadImagesIntoSwiper = (swiperWrapperSelector) => {
    const swiperWrapper = document.querySelector(swiperWrapperSelector);

    if (swiperWrapper) {
      images.forEach((image) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${image}" alt="Project Image">`;
        swiperWrapper.appendChild(slide);
      });

      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    }
  };

  // Load images into Swiper for both English and Thai sections
  loadImagesIntoSwiper('#portfolio-en .swiper-wrapper');
  loadImagesIntoSwiper('#portfolio-th .swiper-wrapper');

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
  // Language switcher
  const switchLanguage = (lang) => {
    document.getElementById('portfolio-en').style.display = lang === 'en' ? 'block' : 'none';
    document.getElementById('portfolio-th').style.display = lang === 'th' ? 'block' : 'none';
  };

  // Example of how to switch language, e.g., using buttons
  document.getElementById('btn-en').addEventListener('click', () => switchLanguage('en'));
  document.getElementById('btn-th').addEventListener('click', () => switchLanguage('th'));
});

  




