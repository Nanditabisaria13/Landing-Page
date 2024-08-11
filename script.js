// mobile navigation

var menu = document.querySelector('.menu')
var navbar = document.querySelector('.mobile-nav')
var logo = document.querySelector('.logo')
var flag = 0

menu.addEventListener('click',()=>{
    if(flag==0){
        navbar.style.top=0
        flag = 1
    }
    else{
        navbar.style.top="-100%"
        flag = 0
    }
  
})

// animation

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    delay:500,
    interval:500
  };

ScrollReveal().reveal(".logo h4", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"50px",
    duration:2000
  })

  ScrollReveal().reveal(".menu i", {
    ...scrollRevealOption,
    origin:"right",
    distance:"50px",
    duration:2000,
    delay:1000
  })

  ScrollReveal().reveal(".nav-item a", {
    ...scrollRevealOption,
    origin:"right",
    distance:"50px",
    duration:2000,
    delay:1000
  })

  ScrollReveal().reveal(".main", {
    ...scrollRevealOption,
    opacity:0,
    distance:"50px",
    duration:2000,
    
  })

  ScrollReveal().reveal(".nav-item a", {
    ...scrollRevealOption,
    origin:"right",
    distance:"50px",
    duration:2000,
    delay:1500


  })

  ScrollReveal().reveal(".main-part1 h1", {
    ...scrollRevealOption,
     origin:"top",
    distance:"100px",
    duration:2000,
    
  })


  ScrollReveal().reveal(".main-part1 p", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"100px",
    duration:2000,
    delay:1200
  })

  ScrollReveal().reveal(".main-part1-button", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"100px",
    duration:2000,
    delay:1300
    
  })

  
  ScrollReveal().reveal(".trending-sec h3", {
    ...scrollRevealOption,
    origin:"top",
    distance:"100px",
    duration:2000,  
  })

  ScrollReveal().reveal(".div", {
    ...scrollRevealOption,
    opacity:0,
    distance:"100px",
    duration:2000,  
    
  })

  ScrollReveal().reveal(".trending-pic", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"100px",
    duration:500,  
    delay:500
  })

  ScrollReveal().reveal(".checkout-sec h3", {
    ...scrollRevealOption,
    origin:"top",
    distance:"70px",
    duration:2000,  
  })

  ScrollReveal().reveal(".flip-card", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"100px",
    duration:500,
    delay:500  
  })

  ScrollReveal().reveal(".bestoffer-img2", {
    ...scrollRevealOption,
    origin:"left",
    distance:"100px",
    duration:2000, 
    delay:1000 
  })

  ScrollReveal().reveal(".bestoffer-img1", {
    ...scrollRevealOption,
    origin:"left",
    distance:"100px",
    duration:2000,  
    delay:1500,
  })

  ScrollReveal().reveal(".bestoffer-content", {
    ...scrollRevealOption,
    origin:"right",
    distance:"100px",
    duration:2000,  
    delay:2000,
  })

  
  ScrollReveal().reveal(".about h2", {
    ...scrollRevealOption,
    origin:"top",
    distance:"100px",
    duration:2000,  
    // delay:1100,
  })

  
  ScrollReveal().reveal(".aboutus-para", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"100px",
    duration:2000,  
    delay:1000,
  })


  ScrollReveal().reveal(".aboutus-img img", {
    ...scrollRevealOption,
    origin:"right",
    distance:"100px",
    duration:2000,  
    delay:2000,
  })


  ScrollReveal().reveal(".review h2", {
    ...scrollRevealOption,
    origin:"top",
    distance:"100px",
    duration:2000,  

  })

  ScrollReveal().reveal(".comma", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"100px",
    duration:2000,
    delay:1000  

  })

  ScrollReveal().reveal(".reviews", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"100px",
    duration:500,
    delay:1500  

  })

  ScrollReveal().reveal(".contact-header", {
    ...scrollRevealOption,
    origin:"top",
    distance:"100px",
    duration:2000,
  })


  ScrollReveal().reveal(".contact form", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"100px",
    duration:2000,
   delay:1000

  })

  ScrollReveal().reveal(".social", {
    ...scrollRevealOption,
    origin:"bottom",
    distance:"100px",
    duration:2000,
    delay:1500
   

  })

  ScrollReveal().reveal(".copyright p", {
    ...scrollRevealOption,
     opacity:0,
    distance:"100px",
    duration:2000,
    delay:2000
   

  })








 
 


