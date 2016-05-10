//Muestra clase sub-menu al hacer hover en el li q lo contiene
function addHoverDesktop(){
	$('#menu-container li').hover(function() {
		$(this).find('.sub-menu').fadeToggle(300);
	});
}

//Muestra o no los diferentes botones/contenedor que participan en versión 
//mobile según si le pasamos true o false
function showMenuMobile(boolOpen){
	if (boolOpen){
		$('#menu-container').show();
		$('#mobile-close').show();
		$('#mobile-button').hide();
	}
	else{
		$('#menu-container').hide();
		$('#mobile-close').hide();
		$('#mobile-button').show();
	}
}

$(document).ready(function(){

	//EJERCICIO 1
	//resaltamos menú al hacer click y eliminamos el del anterior clickeado
	$('#menu-container nav > ul > li > a').click(function(e) {
		e.preventDefault();
		//EJERCICIO 3
		//en versión mobile, al hacer click en una de las opciones 
		//del menú, mostrará su submenu con display block
		if ($(window).width()<=990) $('.current-menu-item').find($('.sub-menu')).hide();
		$('.current-menu-item').removeClass('current-menu-item');
		$(this).parent().addClass('current-menu-item');
		if ($(window).width()<=990) $('.current-menu-item').find($('.sub-menu')).fadeToggle(300);
	});

	//EJERCICIO 1 (solo en versión desktop)
	//al hacer hover en los elementos mostramos .sub-menu
	if ($(window).width()>990) {
		addHoverDesktop();
	}

	//EJERCICIO 2
	//al hacer click en mobile-button busca el menu-container 
	//y el display lo pasa a block, para no mostrarlo
	if ($(window).width()<=990) {
		$('#mobile-button').click(function() {
			showMenuMobile(true);
		});

		$('#mobile-close').click(function() {
			showMenuMobile(false);
		});
	}
	else{
		$('#mobile-button').hide();
		$('#mobile-close').hide();
		$('#menu-container').hide();
	}

	//cuando cambia tamaño pantalla recargamos página para inicializar
	//btn-mobile & close y menu-container, junto sus hovers y/o clicks en desktop/mobile
	$(window).resize(function() {
		location.reload();

	});

});
