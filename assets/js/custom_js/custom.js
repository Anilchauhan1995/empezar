gsap.registerPlugin(ScrollTrigger);

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
    scrub: true,
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
  
