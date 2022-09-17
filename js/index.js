let userComments = $('.client-texts');
let brandBox = $('.brand-box');

$(document).ready(function(){
    new WOW().init();

    $('.screen-slides')
    .owlCarousel({
        items:5,
        loop:true,
        margin:0,
        responsiveClass:true,
        margin:30,
        responsive:{
            0:{
                items:2,
                loop:true,
                nav:true
            },
            600:{
                items:3,
                loop:true,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        },
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed: 800,
        center:true,
        slideBy:5,
        slideTransition:'ease-out'
    });

    
    brandBox
    .owlCarousel({
        items:5,
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed: 800,
        center:true,
        slideBy:5,
        slideTransition:'ease-out',
        dots: true,


    });


    userComments
    .owlCarousel({
        items:1,
        loop:true,
        margin:0,
        // responsiveClass:true,
        autoplay:true,
        autoplayTimeout:5000,
        slideTransition:'ease-out',
        nav:true,
        callbacks:true,
       
    });

    userComments.on('changed.owl.carousel',function(event){
        // document.querySelector('#client-name').classList.remove('client-name');

        // let clientIcons =  $('.clients-icon'); 
        // for(icons of clientIcons){
        //     icons.classList.remove('client-active');
        // }


        // clientIcons[event.page.index].classList.add('client-active');
        // document.querySelector('#client-name').textContent = clientIcons[event.page.index].dataset.name;

        // console.dir(clientIcons[event.page.index])
        
      
     });


     $(function() {
        $("#accordion").accordion();
      } );


    this.onscroll = function(){
        if(window.scrollY > 1000){
            document.querySelector('header').classList.add('header__bg');
            document.querySelector('.btn--outlined').classList.add('btn--outlined-dark')
        }else{
            document.querySelector('header').classList.remove('header__bg');
            document.querySelector('.btn--outlined').classList.remove('btn--outlined-dark');

        }
    }

});



    // setInterval(()=>{
    //     let clientIcons =  $('.clients-icon'); 
    //     for(icon of clientIcons){
    //         if(icon == clientIcons[clientIcons.length - 1]){
    //             icon.classList.remove('client-active');
                
    //             clientIcons[0].classList.add('client-active');
    //         }


    //         // check current icon
    //        if(icon.classList.contains('client-active')){
    //            icon.classList.remove('client-active');


    //            icon.nextElementSibling.classList.add('client-active');


    //        }       
    // }
    // console.log('ran after 2 seconds')

    // },5000)

    

          
           

    
    
         
     
