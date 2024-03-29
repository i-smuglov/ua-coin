//Preloader
var 	
  images = document.images,
  images_total_count = images.length,
  images_loaded_count = 0,
  perc_display = document.getElementById('load_perc'),
  preloader = document.getElementById('page-preloader'),
  preloadProgress = $('#page-preloader-progress');
for (var i = 0; i < images_total_count; i++) {
  image_clone = new Image();
  image_clone.onload = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src = images[i].src;
}
function image_loaded() {
  images_loaded_count++;
  var calc = ( ( (100 / images_total_count) * images_loaded_count) << 0);
  perc_display.innerHTML =  calc + '%';
  preloadProgress.css('width', calc + '%');
  if( images_loaded_count >= images_total_count ) {
    setTimeout(function() {
      if( !preloader.classList.contains('hidden') ) {
        preloader.classList.add('hidden');
      }
    }, 1000);
  }
}

    // Popup button
	var popupBg = $('.popup-btn');
	var popupBgSec = $('.popup-btnSec');
    popupBg.bind("click", function (e) {
        $('.overlay').fadeIn();
        e.preventDefault();
    });

    $('.close-popup').click(function () {
        $('.overlay').fadeOut();
    });
	$(document).mouseup(function (e) {
		var popup = $('.popup');
		if (e.target != popup[0] && popup.has(e.target).length === 0) {
			$('.overlay').fadeOut();
		}
	});

	popupBgSec.bind("click", function (e) {
        $('.overlaySec').fadeIn();
        e.preventDefault();
    });

    $('.close-popup').click(function () {
        $('.overlaySec').fadeOut();
    });
	$(document).mouseup(function (es) {
		var popupS = $('.popupSec');
		if (es.target != popupS[0] && popupS.has(es.target).length === 0) {
			$('.overlaySec').fadeOut();
		}
	});


//TABS
const buttons = document.querySelectorAll(".bttn");
const sections = document.querySelectorAll(".payment__content");
buttons.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    buttons.forEach((btn)=>{
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    const id = btn.id;
    sections.forEach((section)=>{
      section.classList.remove("active");
    });
    const req = document.getElementsByClassName(`payment__content${id}`);
    req[0].classList.add("active");
  })
})

const transfer = document.querySelectorAll(".btttn");
const transferSections = document.querySelectorAll(".transfer__content");
transfer.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    transfer.forEach((btn)=>{
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    const id = btn.id;
    transferSections.forEach((section)=>{
      section.classList.remove("active");
    });
    const reqs = document.getElementsByClassName(`transfer__content${id}`);
    reqs[0].classList.add("active");
  })
})

// Anchor Slide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

                              //Header

$(document).ready(function () {	
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});	
})

                            //SLIDERS
                          //slider Team	
$(window).on('resize', function (e) {

	var init = $(".team__wrapper").data('init-slider');

	if (window.innerWidth < 5000) {
		if (init != 1) {
			$('.team__wrapper').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				adaptiveHeight: true,
								
				responsive: [
					{
						breakpoint: 1070,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 770,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
				

			}).data({ 'init-slider': 1 });
		}
	}

	else {
		if (init == 1) {
			$('.team__wrapper').slick('unslick').data({ 'init-slider': 0 });
		}
	}
}).trigger('resize');
                          //Slider partners
$(window).on('resize', function (i) {

	var init = $(".partners__wrapper").data('init-slider');

	if (window.innerWidth < 970) {
		if (init != 1) {
			$('.partners__wrapper').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				adaptiveHeight:false,
				autoplay: true,
			}).data({ 'init-slider': 1 });
		}
	}

	else {
		if (init == 1) {
			$('.partners__wrapper').slick('unslick').data({ 'init-slider': 0 });
		}
	}
}).trigger('resize');



                              //TIMER
// var deadline = '2022-09-15T12:00:00+0300'; 
// function time_remaining(endtime){
// 	var t = Date.parse(endtime) - Date.parse(new Date());
// 	var seconds = Math.floor( (t/1000) % 60 );
// 	var minutes = Math.floor( (t/1000/60) % 60 );
// 	var hours = Math.floor( (t/(1000*60*60)) % 24 );
// 	var days = Math.floor( t/(1000*60*60*24) );	
// 	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};

// }
// function run_clock(id,endtime){
// 	var clock = document.getElementById('clockdiv');	
// 	var days_span = clock.querySelector('.days');
// 	var hours_span = clock.querySelector('.hours');
// 	var minutes_span = clock.querySelector('.minutes');
// 	var seconds_span = clock.querySelector('.seconds');
// 	function update_clock(){
// 		var t = time_remaining(endtime);		
// 		days_span.innerHTML = t.days;
// 		hours_span.innerHTML = ('0' + t.hours).slice(-2);
// 		minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
// 		seconds_span.innerHTML = ('0' + t.seconds).slice(-2);		
// 		if(t.total<=0){ clearInterval(timeinterval); }
// 	}
// 	update_clock();
// 	var timeinterval = setInterval(update_clock,1000);	
// }
// run_clock('clockdiv',deadline);

// accordeon
$(document).ready(function () {
	
	if($(window).width() < 1300)
{
	
		$('.block__title').click(function (acordeon) {
			if ($('.block').hasClass('one')) {
				// $('.block__title').not($(this)).removeClass('active');
				// $('.block__text').not($(this).next()).slideUp(300);
			}
			$(this).toggleClass('active').next().slideToggle(300);
		});
	
	
} else {   
}
});



//Copy this
$(".coin__link").click(function(){
	let temp = $("<input>");
	$("body").append(temp);
	temp.val($(".coin__number").text()).select();
	document.execCommand("copy");
	temp.remove();
 })

 $(".donate__link").click(function(){
	let temp = $("<input>");
	$("body").append(temp);
	temp.val($(".donate__number").text()).select();
	document.execCommand("copy");
	temp.remove();
 })


 //progressbar
var progress = $(".progress-done");
progress.css("width", progress.attr("data-done") + "%");
progress.css("opacity", "5");

// // Dropdown social link
// $('.intro__arrow, .intro__downline-social').on ( 'click', function () {
// 	  $('.intro__downline-social, .intro__arrow').addClass('active');
// 	}
	
//  );
 

 $('.coin__link').click(function(){
	$('.coin__copy-textt').addClass('active');
 });

 $('.intro__arrow').click(function() {
  
	if( $('.intro__arrow, .intro__downline-social').hasClass('active') ) {
	  $('.intro__arrow, .intro__downline-social').removeClass('active');
	} else {
	  $('.intro__arrow , .intro__downline-social').removeClass('active');
	  $('.intro__arrow , .intro__downline-social').addClass('active');
	}
	
  });





