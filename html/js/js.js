$(document).ready(function(){

	$('.header__nav__ul__li__a').click(function () {
		$('.content').css('display', 'none');
		$('.content'+ $(this).attr('href')).css('display', 'block');

		return false;
	});

	if($('.select').length>0){
		var params = {
			changedEl: ".select",
			visRows: 5,
			scrollArrows: true
		}
		cuSel(params);
	}



	jQuery('input[placeholder], textarea[placeholder]').placeholder();
});