$(function(){
	var atual_fs, next_fs, prev_fs;

	$('.next').click(function(){
		atual_fs = $(this).parent();
		next_fs  = $(this).parent().next();

		$('#progress li').eq($('fieldset').index(next_fs)).addClass('ativo');
		atual_fs.hide();
		next_fs.show();
	});

	$('.prev').click(function(){
		atual_fs = $(this).parent();
		prev_fs  = $(this).parent().prev();

		$('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo');
		atual_fs.hide();
		prev_fs.show();
	});	

	$('.formularioEtapas input[type=submit]').click(function(){
		return false;
	});

});