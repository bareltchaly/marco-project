/**loader */
var loader = '<div style="" id="ctn-preloader" class="ctn-preloader"> <div class="loading loading07"><span data-text="M">M</span><span data-text="U">U</span><span data-text="L">L</span><span data-text="A">A</span><span data-text="S">S</span><span data-text="I">I</span></div></div>'
$('body').append(loader);
$(window).on('load', function () {
    setTimeout(removeLoader, 2400); //wait for page load PLUS two seconds.

    AOS.refresh();
});
function removeLoader() {
    $("#ctn-preloader").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $("#ctn-preloader").remove(); //makes page more lightweight
    });
}

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== SCROLL REVEAL ANIMATION ====================*/
 const sr = ScrollReveal({
     origin: 'top',
     distance: '30px',
     duration: 2000,
     reset: true
 });

 sr.reveal(`.home__data, .home__img,
             .about__data, .about__img,
             .services__content, .count__content,.slider-wrapper,
             .card, .u-img,
             .contact__data, .contact__button,
             .footer__content`, {
     interval: 200
 })
counter   
var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-target');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 6000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }

});
/**owl-carousel  */
const responsive = {
    0 :{
        items:1
    },
    960 :{
        items: 2
    }
};
$('.slider-wrapper .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    animateOut: 'fadeOut',
    nav: false,
    dots: true,
    responsive: responsive
});