function reveal() {
    let elements = document.querySelectorAll(".row");

    for (let i = 0; i < elements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = elements[i].getBoundingClientRect().top;
        let elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add("visible");
        }
    }
    
}

window.addEventListener("scroll", reveal);