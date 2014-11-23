/* Author:
	F.M. Bonnevier
*/
$(document).ready(function() {

	"use strict";

	function ajaxForm () {

		var $swapContainer = $('[data-swap-container]'),
				$swapButton 		= $('[data-form-button]'),

		bindButtonEvent = function () {
			$swapButton.on('click', function (e) {
				e.preventDefault();
				// $.ajax({
				// 	url: 'form.html'
				// }).done(function (){
				// 	console.log('did it');
				// 	html.appendTo(swapContainer);
				// });
			});

		};
	}

ajaxForm();

});
