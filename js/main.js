const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const dropdownicon = document.querySelector(".menu-icon");

let c = 0;
function menu() {
    if (c % 2 == 0) {
        dropdownicon.classList.remove("bi-chevron-down");
        dropdownicon.classList.add("bi-chevron-up");
        document.querySelector('.lang-menu').className = "lang-menu menu-enabled";
        document.querySelector('.responsive-menu').className = "responsive-menu open";
        c++;
    } else {
        dropdownicon.classList.remove("bi-chevron-up");
        dropdownicon.classList.add("bi-chevron-down");
        document.querySelector('.lang-menu').className = "lang-menu menu-disabled";
        document.querySelector('.responsive-menu').className = "responsive-menu";
        c++;
    }
}

const container = document.querySelector('.container');
const header = document.querySelector('header');
const up = document.querySelector('.up');
document.addEventListener('scroll', () => {
    if (document.scrollingElement.scrollTop >= 1) {
        header.style.display = 'none';
        up.style.display = 'block';
    } else {
        header.style.display = 'flex';
        up.style.display = 'none';
    }
});