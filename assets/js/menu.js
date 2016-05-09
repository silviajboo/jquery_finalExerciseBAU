$(document).ready(function(){

	//EJERCICIO 1
	//resaltamos menú al hacer click y eliminamos el del anterior clickeado
	$('#menu-container nav > ul > li > a').click(function(e) {
		e.preventDefault();
		$('.current-menu-item').removeClass('current-menu-item');
		$(this).parent().addClass('current-menu-item');
	});

	//al hacer hover en los elementos mostramos .sub-menu
	$('#menu-container li').hover(function() {
		$(this).find('.sub-menu').fadeToggle(300);
	});


	//EJERCICIO 2
	//al hacer click en mobile-button busca el menu-container 
	//y el display lo pasa a block, para no mostrarlo
	if ($(window).width()<=990) {
		$('#mobile-button').click(function() {
			var menu = $('#menu-container');
			menu.show();
			$('#mobile-close').show();
			$('#mobile-button').hide();
		});

		$('#mobile-close').click(function() {
			var menu = $('#menu-container');
			menu.hide();
			$('#mobile-close').hide();
			$('#mobile-button').show();
		});
	}
	else
	{
		$('#mobile-button').hide();
		$('#mobile-close').hide();
		$('#menu-container').hide();
	}

	//cuando cambiemos tamaño pantalla ocultaremos botones
	$(window).resize(function() {
		if ($(window).width()>990) {
			$('#mobile-button').hide();
			$('#mobile-close').hide();
			$('#menu-container').hide();
		}
		else{
			$('#mobile-button').show();
		}

	});

});
