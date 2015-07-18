
$(document).ready(function(){
	var index = 0;

	$('.change_form').click(function(e) {
		e.preventDefault();
		if(index == 0){
			$('.signin').delay(500).fadeIn(1000);
			$('.signup').fadeOut();
			index = 1
		} else {
			$('.signup').delay(500).fadeIn(1000);
			$('.signin').fadeOut();
			index = 0
		};

	});

});