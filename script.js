var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 3000, // Cambia de imagen cada 3 segundos
        disableOnInteraction: false, // Continúa el autoplay aunque el usuario interactúe
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
});

//efecto de pantalla

const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

function createConfetti() {
    for (let i = 0; i < 170; i++) {  // 🔹 Cambia la cantidad de confeti
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 7 + 3, // 🔹 Tamaño de las partículas
            speed: Math.random() * 5 + 3, // 🔹 Velocidad de caída
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            angle: Math.random() * 360,
            spin: Math.random() * 5 - 2.5,  // 🔹 Velocidad de rotación
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    confetti.forEach((particle, index) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.y += particle.speed;
        particle.angle += particle.spin;

        if (particle.y > canvas.height) {
            confetti[index] = {
                x: Math.random() * canvas.width,
                y: -10,
                size: Math.random() * 7 + 3,
                speed: Math.random() * 5 + 3,
                color: `hsl(${Math.random() * 360}, 100%, 70%)`,
                angle: Math.random() * 360,
                spin: Math.random() * 4 - 2
            };
        }
    });

    requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();
