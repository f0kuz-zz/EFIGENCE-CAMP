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

$.fn.myFormValidator = function(arRules){

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