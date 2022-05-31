//header
$(document).ready(function () {

	//Header BURGER
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});

	
	//Adaptive SlickSlider 
	$(window).on('resize', function (e) {

		var init = $(".news__wrapper").data('init-slider');

		if (window.innerWidth < 769) {
			if (init != 1) {
				$('.news__wrapper').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					adaptiveHeight: true,


				}).data({ 'init-slider': 1 });
			}
		}

		else {
			if (init == 1) {
				$('.news__wrapper').slick('unslick').data({ 'init-slider': 0 });
			}
		}
	}).trigger('resize');
})


//slider
$(window).on('resize', function (e) {

	var init = $(".team__wrapper").data('init-slider');

	if (window.innerWidth < 769) {
		if (init != 1) {
			$('.team__wrapper').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				adaptiveHeight: true,


			}).data({ 'init-slider': 1 });
		}
	}

	else {
		if (init == 1) {
			$('.team__wrapper').slick('unslick').data({ 'init-slider': 0 });
		}
	}
}).trigger('resize');

//marque
let el = document.getElementById('marquee');
let text = el.innerHTML;
setInterval(function ()
	{text = text[text.length - 1] + text.substring(0, text.length - 1);
		el.innerHTML = text;
	}, 200);


//TIMER

var deadline = '06 30 2022 12:00:00 GMT+0300';
function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	
	
	var days_span = clock.querySelector('.days');
	var hours_span = clock.querySelector('.hours');
	var minutes_span = clock.querySelector('.minutes');
	var seconds_span = clock.querySelector('.seconds');

	function update_clock(){
		var t = time_remaining(endtime);
		
		
		days_span.innerHTML = t.days;
		hours_span.innerHTML = ('0' + t.hours).slice(-2);
		minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
		seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
		
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock();
	var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);