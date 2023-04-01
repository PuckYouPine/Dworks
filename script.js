window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    
    if (window.pageYOffset > 50) {
    header.classList.add("active");
    } else {
    header.classList.remove("active");
    }
    });