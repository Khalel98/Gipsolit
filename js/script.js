$(document).ready(function(){
   $('.popup-btn').on('click',function(event){
   event.preventDefault();
   $('.popup').fadeIn();
});

$('.popup-close').on('click',function(event){
   event.preventDefault();
   $('.popup').fadeOut();
});

$('.popup-btn2').on('click',function(event){
   event.preventDefault();
   $('.popup-2').fadeIn();
});
$('.popup-2-close2').on('click',function(event){
   event.preventDefault();
   $('.popup-2').fadeOut();
});


//слайдер с отзывами
$('.feedback-slider').slick({
   prevArrow:'<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/leftArrow.svg" alt=""></button>',
   nextArrow:'<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/rightArrow.svg" alt=""></button>'
   
});
//слайдер с преимуществами    
$('.features-slider').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   responsive: [{
           breakpoint: 991,
           settings: {
            slidesToShow: 2,
            prevArrow: '<button class="prev arrow"></button>',
            nextArrow: '<button class="next arrow"></button>',
            slidesToScroll: 2
            }
           },
        {
           breakpoint: 767,
           settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           prevArrow: '<button class="prev arrow"></button>',
            nextArrow: '<button class="next arrow"></button>'
       }
   }

]
});

});


function multiply()
{
    a = Number(document.getElementById('QTY').value);
    b = Number(document.getElementById('PPRICE').value);
    c = a * b;

    document.getElementById('TOTAL').value = c;
}
function multiply2()
{
    a = Number(document.getElementById('QTY2').value);
    b = Number(document.getElementById('PPRICE2').value);
    c = a * b;

    document.getElementById('TOTAL2').value = c;
}
function multiply3()
{
    a = Number(document.getElementById('QTY3').value);
    b = Number(document.getElementById('PPRICE3').value);
    c = a * b;

    document.getElementById('TOTAL3').value = c;
}
