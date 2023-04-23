
function videoAnimation() {
    var intro = document.querySelector('.intro')
    var video = intro.querySelector('video')


    var controller = new ScrollMagic.Controller()
    var scene = new ScrollMagic.Scene({
        duration: 80000,
        triggerElement: intro,
        triggerHook: 0,

    })
        .setPin(intro)
        .addTo(controller)


    //Video Animation
    let accelamount = .5;
    let scrollpos = 0;
    let delay = 0;


    scene.on('update', e => {
        console.log(e.scrollPos / 1000)
        scrollpos = e.scrollPos / 1000
    })

    setInterval(() => {
        delay += (scrollpos - delay) * accelamount;
        video.currentTime = delay
    }, 310.8);


}

videoAnimation() 

function swiperJs() {

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click',
            (e) => {
                e.preventDefault()
                document.querySelector(a.getAttribute('href')).scrollIntoView({
                    behavior: "smooth"
                })
            })
    })

}
swiperJs()

function snapScroll() {
    t = gsap.timeline()

    t.to(".two", {
        scrollTrigger: {
            trigger: ".two",
            start: "top top",
            end: "bottom top",
            scrub: 5,
            pin: true
        },
        x: "-306%"
    })

    gsap.to(".text-ls", {
        scrollTrigger: {
            trigger: "",
            scroller: "",
            start: "",
            scrub: 5,
        },
        top: "-100%"
    })


}

snapScroll()

/* what be learn from this project 
play video with scroll 
how to use scroll magic 
revision of gsap 
smoth scroll slider 

*/