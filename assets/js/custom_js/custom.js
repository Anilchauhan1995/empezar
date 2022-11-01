gsap.registerPlugin(ScrollTrigger);


gsap.fromTo('.viewer',
{opacity:1
},
{
  opacity:0,
  duration:2,
  delay:3.5
}
  );

gsap.fromTo('.loading_page',
{opacity:1},
{
  opacity:0,
  duration:1,
  delay:2
}
  );


  gsap.fromTo('.logo_name',{
    y:50,
    opacity:0
  },
  {
    y:0,
    opacity:1,
    duration:2,
    delay:0.5
  }
  
  )
// loder animation end

// horizontal scrolling

var sections = gsap.utils.toArray(".section");
let maxWidth = 0;

const getMaxWidth = () => {
  maxWidth = 0;
  sections.forEach((section) => {
    maxWidth += section.offsetWidth;
  });
};
getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

gsap.to(sections, {
  x: () => `-${maxWidth - window.innerWidth}`,
  ease: "none",
  scrollTrigger: {
    trigger: ".main_wrapper",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () => `+=${maxWidth}`,
    invalidateOnRefresh: true
  }
});

sections.forEach((sct, i) => {
  ScrollTrigger.create({
    trigger: sct,
    start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
    end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
    toggleClass: {targets: sct, className: "active"}
  });
})
// .to(sections, { xPercent: -100 * (sections.length), duration:1, ease: "none"})


// banner text animate
gsap.to(".section", {
  scrollTrigger: {
    scrub: true
  }, 
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none"
})



var tl =gsap.timeline();
tl
  .from(".banner_wrapper h5",{
    onStart:function(){
      $('.banner_wrapper h5').textillate({ 
        in: { effect: 'fadeInUp',
        // callback: function(){
        //   $('.banner_wrapper h5').textillate('out')
        // }
      
      },
        // out:  {effect: 'fadeOutUp' }
      
      });
    }
  })


  .from(".banner_wrapper h1",{
    opacity:0,
    delay:1,
    onStart:function(){
      $('.banner_wrapper h1').textillate({ 
        in: { effect: 'fadeInUp',
        // callback: function(){
        //   $('.banner_wrapper h1').textillate('out')
        // }
      
      },
        // out:  {effect: 'fadeOutUp' }
      
      });
    }
  })
  .from(".more_content_text h3",{
   
    delay:1,
    onStart:function(){
      $('.more_content_text h3').textillate({ 
        in: { effect: 'rollIN',
        // callback: function(){
        //   $('.banner_wrapper h1').textillate('out')
        // }
      
      },
        // out:  {effect: 'fadeOutUp' }
      
      });
    }
  })


let tlMain = gsap.timeline({
  scrollTiggler:{
    trigger: ".section",
    start:"top top",
    end:"bottom bottom",
    scrub:1
  }
})

gsap.timeline({
  scrollTrigger:{
    trigger:".banner_section",
    start:"left left",
    end:"right left",
    scrub:true,
    sectionAnimation:tlMain
  }
}).
from("img",{scale:1.2})

gsap.timeline({
  scrollTrigger:{
    trigger:".bg_global_title",
    start:"left left",
    end:"right right",
    scrub:true,
    sectionAnimation:tlMain
  }
}).
from("img",{scale:1.2})



  
  window.addEventListener("scroll", function(event) {
  
    var top = this.scrollY;

      if(top>1800){
       
        document.querySelector("header").classList.add("active")
   }

    else if(top<1000){
      document.querySelector("header").classList.remove("active")
       
    }

    if(top>2000){
       
      document.querySelector("header").classList.add("active_add")
     
 }
  
else if(top<2000){
  
  document.querySelector("header").classList.remove("active_add")
  
 }
   
});

