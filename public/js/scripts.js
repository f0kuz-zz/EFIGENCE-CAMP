// HAMBURGER MENU

$('.hamburger').on('click', function(){
	$('.menu').slideToggle();
});

//SLIDER

var $slider = $('.flex-slider');
var $slides = $slider.find('.slide');
var $currSlide = $slides.eq(1);

$currSlide.addClass('slide-active');

$slider.find('.nav').click(function(){
	var $th = $(this);
	var $nextSlide;

	if($th.hasClass('prev')){
		$nextSlide = $currSlide.prev('.slide');
		if($nextSlide.size() < 1){
			$nextSlide = $slides.last();
		}
	}else{
		$nextSlide = $currSlide.next('.slide');
		if($nextSlide.size() < 1){
			$nextSlide = $slides.first();
		}
	}

	$currSlide.removeClass('slide-active');
	$nextSlide.addClass('slide-active');

	$currSlide = $nextSlide;
});

// WALIDACJA FORMULARZA

var arValidationRules = {
	'#imie': {
		regExp: /[^0-9]/,
		message: 'To pole musi zawierac jedynie litery'
	},
	'#e-mail': {
		require: true
	},
	'#wiadomosc': {
		require: true
	}
};

$.fn.ymFormValidator = function(arRules){

	function showAlert($element, message){
		if($element.last().next()('.error-message').length < 1){
			if(!message){
				message = "Popraw to pole";
			}
			$('<div>')
			.attr('class', 'error-message')
			.text(message)
			.insertAfter($element.last());
		}
	}

	function removeAlert($element){
		$element
			.last()
			.next('.error-message')
			.remove();
	}


	return this.each(function(){
		$(this).submit(function(){
			var allPassed = true;
			var $thisForm = $(this);

			$.each(arRules, function(element, rules){
				var $tmpElement = $(element, $thisForm);
				var tmpPassed = true;

				if($tmpElement.attr('type') == 'checkbox' || $tmpElement.attr('type') == 'radio'){
					if(rules['require']){
						if(!$tmpElement.is(':checked')){
							tmpPassed = false;
						}
					}
				}else{
					var value = $.trim($tmpElement.val());

					if(rules['require']){
						if(value.length < 1){
							tmpPassed = false;
						}
					}

					if(rules['regExp']){
						var reg = new RegExp(rules['regExp']);
						if(reg.test(value)){
							tmpPassed = false;
						}
					}
				}

				if(!tmpPassed){
					allPassed = tmpPassed;
					showAlert($tmpElement, rules['message']);
				}else{
					removeAlert($tmpElement);
				}
			});

			return allPassed;
		});
	});
};





















































/*({
	nextPage: 1,

	parseResults: function (opts) {
		var o = {
				results: (opts && opts.results) || null,
				container: (opts && opts.container) || null
			},
			places,
			placesAmount,
			i,
			html = [];

		places = o.results.places,
		placesAmount = places.length;

		for(i = 0; i < placesAmount; i += 1) {
			html = [
				html,
				'<li>', places[i].id , ' ', places[i].name, '</li>'
			].join('');
		}

		html = ['<ul>', html, '</ul>'].join('');

		o.container.append(html);
	},

	getPlaces: function (opts) {
		var th = this,
			domain = 'http://camp.efigence.com',
			o = {
				url: (opts && opts.url) || null,
				container: (opts && opts.container) || null
			};

		if (o.url) {
			$.ajax({
				url: domain + o.url,
				data: {
					page: th.currentPage
				},
				success: function (data) {
					th.parseResults({
						results: data,
						container: o.container
					});
					if (th.nextPage < data.total_pages) {
						th.nextPage += 1;
					}
				}
			});
		}
	},

	inifiniteScroll: function () {
		$(window).scroll(function (event) {
			console.log(event);
		});
	},

	init: function () {
		this.getPlaces({
			url: '/camp/api/places',
			container: $('#places')
		});
		this.inifiniteScroll();
	}

}).init();*/