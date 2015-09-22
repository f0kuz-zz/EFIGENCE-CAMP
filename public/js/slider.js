var $sliderWrap = $('.flex-slider');
var $slider = $('.flex-content-slider');
var $slide = $slider.find('.slide');
var $firstSlide = $slide.first();
var $currSlide = $firstSlide.next();
var $lastSlide = $slide.last();

$currSlide.addClass('slide-active');

$sliderWrap.find('.nav').click(function(){
	var $th = $(this);

	if($th.hasClass('prev')){
		$slider.append($firstSlide);
		$slider.prepend($currSlide);

		$currSlide.removeClass('slide-active');
		$('.slide').eq(1).addClass('slide-active');
	}else{
		slider.prepend($lastSlide);
		$slider.append($currSlide);

		$currSlide.removeClass('slide-active');
		$('.slide').eq(1).addClass('slide-active');
	}

});

