const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
}

let navigation = document.getElementById('navigationTop');
let navigationBurger = document.getElementById('navigationBurger');
let navigationMenu = document.getElementsByClassName('navigationTop__menu')[0].cloneNode(true);
let navigationContact = document.getElementsByClassName('navigationTop__contact')[0].cloneNode(true);
document.getElementById('navigationTop__mobile').appendChild(navigationContact);
document.getElementById('navigationTop__mobile').appendChild(navigationMenu);


if (window.innerWidth < 992) {
    navigation.classList.add('mobile');
}
window.addEventListener('resize', () => {
    if (window.innerWidth < 992) {
        navigation.classList.add('mobile');
    }
    else {
        navigation.classList.remove('mobile');
        navigation.classList.remove('open');
        navigationBurger.classList.remove('is-active');
    }
}, false)
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        navigation.style.padding = '15px'
    }
    else {
        navigation.style.padding = '30px 15px'
    }
})


navigationBurger.addEventListener('click', () => {
    if (navigation.classList.contains('open')) {
        navigation.classList.remove('open');
        navigationBurger.classList.remove('is-active');
    }
    else {
        navigation.classList.add('open');
        navigationBurger.classList.add('is-active');
    }

}, false)

let goUpButton = document.getElementById('goUpButton');
goUpButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
})