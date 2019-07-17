//var a1 = document.querySelector(".a1");
//var a2 = document.querySelector(".a2");

//a1.addEventListener('keyup', function(e){
//	a2.innerHTML = a1.innerHTML;	
//	if(e.keyCode == 13) console.log(a1.innerHTML);
//});

$('.type').click(function(){
	$('.type-box').toggle();
	console.log('pop');
});

$(document).click(function(e){
	if(e.target.className != 'type'){
		$('.type-box').hide();
	}
});

$('.layout1, .layout2').height(screen.height * 8/10);

$('.layout1 textarea').on('keypress',function(){
	$('.layout2').html( $('.layout1 textarea').val() )
});