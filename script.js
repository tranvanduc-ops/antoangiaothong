
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const topBtn = document.getElementById("topBtn");

// Mở và đóng menu
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Đóng menu sau khi chọn mục
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});

// Hiệu ứng xuất hiện khi cuộn trang
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}

// Nút quay lại đầu trang
window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
