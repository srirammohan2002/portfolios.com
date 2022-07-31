$(document).ready(function() {
	$(window).scroll(function(){
        if(this.scrolly > 20){
            $('.navbar').addclass("sticky");           
        }eles{
        	 $('.navbar').removeclass("sticky"); 
        }
	});
	//toggle menu/navbar script
	$('.menu-btn').click(function(){
        $('.navbar .menu').toggleclass("active");

	});
});