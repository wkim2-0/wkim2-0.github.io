document.querySelectorAll('div.form').forEach(function(el){
	el.addEventListener('click', function(){
		alert('Форма в разработке');	
	});
})

document.querySelectorAll("section#houses .galary-houses img").forEach(function(e) {
    e.addEventListener("click", function() {
        this.parentNode.insertBefore(this, this.parentNode.firstElementChild), console.log("test")
    })
});

var grab = document.querySelector("section#areas .galery"),
    dragging = !1,
    startX = 0,
    translateX = 0;

function touchCancel() {
    dragging = !1
}

function touchStart(e) {
    dragging = !0, startX = e.clientX || e.touches[0].pageX
}

function touchMove(e) {
    var t;
    dragging && (t = e.touches[0].pageX, (e = translateX + (t - startX)) <= 0 && grab.offsetWidth - window.screen.width >= Math.abs(e) && (grab.style.transform = "translateX(" + translateX + "px)", translateX = e), startX = t)
}

function mouseMove(e) {
    var t;
    dragging && (t = e.clientX, (e = translateX + (t - startX)) <= 0 && grab.offsetWidth - window.screen.width >= Math.abs(e) && (grab.style.transform = "translateX(" + translateX + "px)", translateX = e), startX = t)
}

function moveImg(e) {
    var t = document.querySelector("section#areas .galery > div:first-child").offsetWidth,
        o = new WebKitCSSMatrix(window.getComputedStyle(grab).transform),
        n = document.querySelector("section#areas .galery-wrap").offsetWidth;
    "next" == e ? (translateX = o.m41 - t, Math.abs(translateX) >= grab.offsetWidth - n && (translateX = -Math.abs(grab.offsetWidth) + n)) : "prev" == e && 0 <= (translateX = o.m41 + t) && (translateX = 0), grab.style.transition = ".5s", grab.style.transform = "translateX(" + translateX + "px)", setTimeout(function() {
        grab.style.transition = "0s"
    }, 500)
}
grab.addEventListener("mousedown", function(e) {
    touchStart(e)
}), document.addEventListener("mouseup", function() {
    touchCancel()
}), document.addEventListener("mousemove", function(e) {
    mouseMove(e)
}), grab.addEventListener("touchstart", function(e) {
    touchStart(e)
}), document.addEventListener("touchend", function() {
    touchCancel()
}), document.addEventListener("touchcancel", function() {
    touchCancel()
}), document.addEventListener("touchmove", function(e) {
    touchMove(e)
});






// Мой кастомный слайдер для блока "Акции" и подобных
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//swipe на слайдер для блока 'actions'
function swipe(selector) {
    const block = document.querySelector(selector)
    block.addEventListener('touchstart', handleTouchStart, false);
    block.addEventListener('touchmove', handleTouchMove, false);

    let x1 = null;

    function handleTouchStart(event) {
        x1 = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        if (!x1) {return false};

        let x2 = event.touches[0].clientX;
        let xDiff = x2 - x1; 

        if (xDiff > 0) {
            plusSlides(-1)
        } else {
            plusSlides(1)
        };

        x1 = null;
    }
};

swipe('section#actions .slideshow-container');







// Слайдер для блока "Команда"
    var grab = document.querySelector("section#team .about-container"),
    dragging = !1,
    startX = 0,
    translateX = 0;

    function touchCancel() {
        dragging = !1
    }

    function touchStart(e) {
        dragging = !0, startX = e.clientX || e.touches[0].pageX
    }

    function touchMove(e) {
        var t;
        dragging && (t = e.touches[0].pageX, (e = translateX + (t - startX)) <= 0 && grab.offsetWidth - window.screen.width >= Math.abs(e) && (grab.style.transform = "translateX(" + translateX + "px)", translateX = e), startX = t)
    }

    function mouseMove(e) {
        var t;
        dragging && (t = e.clientX, (e = translateX + (t - startX)) <= 0 && grab.offsetWidth - window.screen.width >= Math.abs(e) && (grab.style.transform = "translateX(" + translateX + "px)", translateX = e), startX = t)
    }

    function moveImg(e) {
        var t = document.querySelector("section#team .about-container > div:first-child").offsetWidth,
            o = new WebKitCSSMatrix(window.getComputedStyle(grab).transform),
            n = document.querySelector("section#team .about-body").offsetWidth;
        "next" == e ? (translateX = o.m41 - t, Math.abs(translateX) >= grab.offsetWidth - n && (translateX = -Math.abs(grab.offsetWidth) + n)) : "prev" == e && 0 <= (translateX = o.m41 + t) && (translateX = 0), grab.style.transition = ".5s", grab.style.transform = "translateX(" + translateX + "px)", setTimeout(function() {
            grab.style.transition = "0s"
        }, 500)
    }
    grab.addEventListener("mousedown", function(e) {
        touchStart(e)
    }), document.addEventListener("mouseup", function() {
        touchCancel()
    }), document.addEventListener("mousemove", function(e) {
        mouseMove(e)
    }), grab.addEventListener("touchstart", function(e) {
        touchStart(e)
    }), document.addEventListener("touchend", function() {
        touchCancel()
    }), document.addEventListener("touchcancel", function() {
        touchCancel()
    }), document.addEventListener("touchmove", function(e) {
        touchMove(e)
    });







//Шапка сайта
function byScroll(selectorMainBlock) {
    const mainBlock = document.querySelector(selectorMainBlock);

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let blockCenter = mainBlock.offsetHeight / 2;
        
        if (scrollTop > blockCenter) {
            document.querySelector('#header').classList.add('show')
        } else {
            document.querySelector('#header').classList.remove('show')
        };
    });
};
byScroll('#main-banner')





//Мобильное меню
function mobileMenu(selectorMenu, selectorMenuItem, selectorHamburger) {
    const menu = document.querySelector(selectorMenu),
          menuItem = document.querySelectorAll(selectorMenuItem),
          hamburger = document.querySelector(selectorHamburger);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header-mobile__hamburger_active');
        menu.classList.toggle('header-mobile__menu_active');
        document.body.classList.toggle('overflow-hidden')
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header-mobile__hamburger_active');
            menu.classList.toggle('header-mobile__menu_active');
            document.body.classList.toggle('overflow-hidden')
        })
    })
};

mobileMenu('#menu', '.header-mobile__item', '#hamburger')





//Модальное окно 
function showModal() {
    const modal = document.querySelector('#modal');
    const btns = document.querySelectorAll('.button');
    const close = document.querySelector('#close');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active')
            document.body.classList.add('overflow-hidden')
        })
    })

    close.addEventListener('click', () => {
        modal.classList.remove('active')
        document.body.classList.remove('overflow-hidden')
    })
}

showModal();




//simlpe slider
function sliders() {

    function useSlider(select){
        const slider = new ItcSimpleSlider(select + ' .itcss', {
            loop: true,
            autoplay: false,
            interval: 5000,
            swipe: true,
        });
    
        document.querySelector(select + ' .prev').onclick = () => {
            slider.prev();
        }
    
        document.querySelector(select + ' .next').onclick = () => {
            slider.next();
        }
    }
    
    useSlider('section#areas');
    useSlider('section#reviews');
    useSlider('section#news');
    if (window.screen.availWidth < 1135) {
        useSlider('section#media');
    }
    
};

sliders();


