let toggleMobileMenu = document.getElementById("toggle-mobile-menu");
let nav = document.getElementsByTagName("nav")[0];


toggleMobileMenu.addEventListener('click', function(){
    nav.classList.toggle('active')
})

