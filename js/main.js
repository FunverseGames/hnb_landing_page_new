window.onload = function () {
    try {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        var tab = url.searchParams.get("tab");
        if (tab === "story" || tab === "patch") {
            document.getElementById(tab + "-button").click();
        } else {
            document.getElementById("defaultOpen").click();
        }
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}


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

const wepBtn1 = document.querySelector(".wepbtn-1");
const wepBtn2 = document.querySelector(".wepbtn-2");
const wepBtn3 = document.querySelector(".wepbtn-3");
const wepText1 = document.querySelector(".wep-1");
const wepText2 = document.querySelector(".wep-2");
const wepText3 = document.querySelector(".wep-3");
wepBtn1.addEventListener("click", () => {
    wepText1.classList.toggle("wep-active");
    wepText2.classList.remove("wep-active");
    wepText3.classList.remove("wep-active");
});

wepBtn2.addEventListener("click", () => {
    wepText1.classList.remove("wep-active");
    wepText2.classList.toggle("wep-active");
    wepText3.classList.remove("wep-active");
});

wepBtn3.addEventListener("click", () => {
    wepText1.classList.remove("wep-active");
    wepText2.classList.remove("wep-active");
    wepText3.classList.toggle("wep-active");
});



// haberler tab 
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("blog-list-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" list-active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " list-active";
}

