const tl = gsap.timeline();



tl.from('.nav h1 ,h3',{
    y:-100,
    duration:0.5,
    
    stagger:0.3
    
})

tl.from('.left h1',{
    x:-100,
    opacity:0,
    duration:0.5,
    
    
    

})

tl.from('.right img',{
    scale:0.5,
    duration:0.8,
    opacity:0
})

gsap.from('#page2 .card',{
    scale:0.5,
    duration:0.8,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:'body',
        

    }



})

