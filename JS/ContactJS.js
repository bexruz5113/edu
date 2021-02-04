
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
// 
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }