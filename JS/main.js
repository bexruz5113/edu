$('.carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.carousel-slide').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})
// 
var elSiteNav = document.querySelector('.siteNav');

document.addEventListener('scroll',function(){
            if(window.scrollY>300){
                elSiteNav.classList.add('siteNav-fixed');
                document.body.style.marginTop=elSiteNav.scrollHeight+ 'px';
            }
            else{
                elSiteNav.classList.remove('siteNav-fixed');
                document.body.style.marginTop='0';
            }
})
//  var elOpenNav = document.querySelector('.openbtn');
//  var elCloseNav = document.querySelector('.closebtn');

//  elOpenNav.addEventListener('click',function(){
//      document.add.style.width='100%';
//  })
//  elCloseNav.addEventListener('click',function(){
//      document.remove.style.
//  })

function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }