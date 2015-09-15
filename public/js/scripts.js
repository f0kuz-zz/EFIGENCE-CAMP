$('.hamburger').on('click', function(){
	$('.menu').slideToggle();
});

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