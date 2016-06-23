(function () {
	$.fn.elegantTransition = function (options) {

		// default settings
		var settings = $.extend({
			speed: 500, // sets the transition speed
			effect: 'blinds', // choose between "blinds", "incblinds" or "sweep"
			slices: 5 // sets the number of slices (max 10)
		}, options);
		
		var $wrap = this,
				$box1 = $('.box1'),
				$box2 = $('.box2');

		/*** INITIALS ***/
		//set CSS necessary for graceful degrade
		$wrap.css({
			'overflow': 'hidden'
		}).addClass('trimmings');
		$('.box').css({
			'position': 'absolute'
		});
		$('#dash').css({
			'display': 'block'
		});
		$('.slices').css({
			'display': 'block'
		});

		$box2.toggleClass('back');
		$box1.toggleClass('front');
		
		$('#slices').val(settings.slices);
		$("input[name=effect][value=" + settings.effect + "]").attr('checked', 'checked');
		
		
		/*** FUNCTIONS ***/

		//this does the actual slicing of the top box
		function blinds() {
			var slices = parseInt($('#slices').val()),
				left = 0,
				fw = $('.box').outerWidth(),
				front = $('.front'),
				speed = settings.speed,
				effect = settings.effect;

			if (slices > 10) {
				slices = 10;
			}
			for (var i = 0; i < slices; i++) {
				var newWidth = fw / slices; //new width for individual slices
				front
					.toggleClass('old')
					.clone()
					.css({
						'left': left + 'px',
						'width': fw / slices,
						'z-index': '9' + i
					})
					.appendTo($wrap)
					.removeClass('front')
					.removeClass('old')
					.addClass('new new' + i)
					.find('.inner')
					.css({
						'left': '-' + left + 'px',
						'width': fw,
						'position': 'absolute'
					});

				left = left + newWidth;

				var effect = $('input[name="effect"]:checked').val();

				switch (effect) {
					case 'blinds':
						$('.new').animate({
							width: "0px"
						}, 1000, function () {
							$(this).remove();
						});
					case 'incblinds':
						$('.new').animate({
							width: "0px"
						}, speed, function () {
							$(this).remove();
						});
						speed = speed + 100;
					case 'sweep':
						$('.new').animate({
							height: "0px"
						}, speed, function () {
							$(this).remove();
						});
						speed = speed + 200;
				}
			}
			
			//swaps back and front boxes
			front.addClass('front2').removeClass('front');
			$('.back').addClass('back2').removeClass('back');
			$('.front2').addClass('back').removeClass('front2');
			$('.back2').addClass('front').removeClass('back2');
			$('.old').toggleClass('old');
		}

		/*** EVENTS ***/

		//this happens when the trigger is clicked:
		$('.trigger').click(function () {
			if (!$(this).hasClass('once')) {
				$(this).append(' again').addClass('once');
			}
			blinds();
		});
		
	}

})();