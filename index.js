///animation sec////
let timeline = gsap.timeline();

timeline.to('.image-wrap',{
    height:'450px',
    backgroundSize:'100%',
    duration:1.5,
    ease: "power4.inOut",
}).to(
    '.image-wrap',{
        height:'250px',
        duration:1.3,
        y:'0',
        ease: "power3.inOut",
    },1.5
)
.from('.big-name',{
    y:"1000px",
    duration:1.3,
     ease: "power3.inOut",
},1.8)
.from('.hide',{
    opacity: '0',
    duration:1.3,
    ease:"power3.inOut",
})

//////curser sec///
const curserCircle = document.querySelector(".curser-circle"),
curser = document.querySelectorAll(".curser")

function getYDistance(el){
    return(
        window.innerHeight - document.querySelector(el).getBoundingClientRect().top
    );
}


window.addEventListener('mousemove', (e)=>{
    let xPosition = e.clientX;
    let yPosition = e.clientY;
    console.log(xPosition,yPosition)
    curser.forEach(el=>{
        el.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))`;
    })
})

// scroll sec

const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height*1.3 ) + 1;
    shadow.style.height = `${scroll * 0.5 +10 }px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -100 + 5}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})

// slider

const bus = document.querySelector('.bus')
    const Figure = document.querySelectorAll('.bus>figure')
    const left = document.querySelector('.left')
    const right = document.querySelector('.right')
    const bullet = document.getElementById('bullet')
    let turn = 0
    bus.style.width = (Figure.length * 600) + 'px'

    // generation bullet///
    Figure.forEach((val) => {
        let li = document.createElement('li')
        bullet.appendChild(li)
    })
    // generation bullet///    
    const liBullet = document.querySelectorAll('#bullet>li')



    right.addEventListener('click', () => {
        left.style.left = '10px'
        if (turn < Figure.length - 1) {
            turn++
            if (turn == Figure.length - 1) {
                right.style.right = '-100px'
            }
        }
        activeBullet()

    })
    left.addEventListener('click', () => {
        right.style.right = '10px'
        if (turn > 0) {
            turn--
            if (turn == 0) {
                left.style.left = '-100px'
            }

        }
        activeBullet()
    })


    function activeBullet() {


        liBullet.forEach((val) => val.style.background = 'white')
        liBullet[turn].style.background = '#2d2d2d'
        /////////////////////////
        bus.style.transform = 'translateX(-' + (turn * 600) + 'px)'


    }

    liBullet.forEach((val, i) => {
        val.addEventListener('click', () => {
            turn = i
            activeBullet()

            if (i == 0) {
                left.style.left = '-100px'
            } else {
                left.style.left = '10px'

            }

            if (i == Figure.length - 1) {
                right.style.right = '-100px'
            }else{
                right.style.right = '10px'
            }
        })



    })
