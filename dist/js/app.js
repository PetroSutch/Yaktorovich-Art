$(window).on('load', function(){
  $('body').addClass('show')
});
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
function scrollToAnchor(aid){
    var aTag = $("#"+ aid);
    console.log(aTag)
    $('html,body').animate({scrollTop: aTag.offset().top-50},'slow');
}

$(window).scroll(function(){
	var scroll = $(window).scrollTop()
	if(scroll > 5){
		$('header').addClass('fixed')
	}else{
		$('header').removeClass('fixed')
	}
})