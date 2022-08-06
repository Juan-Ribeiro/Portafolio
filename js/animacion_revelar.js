function revelar() {
    const reveals = document.querySelectorAll(".revelar");

    for (let i = 0; i < reveals.length; i++) {
        let alturaVentana = window.innerHeight;
        let elementoTop = reveals[i].getBoundingClientRect().top;
        let elementoVisible = 150;

        if (elementoTop < alturaVentana - elementoVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revelar);