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
})


//slider Team	
$(window).on('resize', function (e) {

	var init = $(".team__wrapper").data('init-slider');

	if (window.innerWidth < 1400) {
		if (init != 1) {
			$('.team__wrapper').slick({
				slidesToShow: 3,
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

//marque
let el = document.getElementById('marquee');
let text = el.innerHTML;
setInterval(function ()
	{text = text[text.length - 1] + text.substring(0, text.length - 1);
		el.innerHTML = text;
	}, 200);


//TIMER

var deadline = '2022-08-30T12:00:00+0300'; 
function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	console.log(Date.parse(endtime) + ' date');
	console.log(Date.parse(new Date()) + ' new date');
	console.log(endtime);
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};

}
function run_clock(id,endtime){
	var clock = document.getElementById('clockdiv');	
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

// accordeon
$(document).ready(function () {
	
	if($(window).width() < 767)
{
   $(' .start__box-wrapper').click(function (accord) {
		if ($('.start__map').hasClass('one')) {
			$('.start__box-wrapper').not($(this)).removeClass('active');
			// $('.start__circle').not($(this).next()).slideUp(300);
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

//Dropdown social link
$('.intro__arrow, .intro__downline-social').hover(
	function () {
	  $('.intro__downline-social, .intro__arrow').addClass('active');
	},
	function () {
	  $('.intro__downline-social, .intro__arrow').removeClass('active');
	}
 );

 $('.coin__link').click(function(){
	$('.coin__copy-textt').addClass('active');
 });

 $('.start__box-wrapper').hover(
	function () {
	  $('.start__arrow').addClass('active');
	},
	function () {
	  $('.start__arrow').removeClass('active');
	}
 );