/*
* @Author: 62599
* @Date:   2017-08-08 14:17:16
* @Last Modified by:   62599
* @Last Modified time: 2017-08-12 11:17:23
*/

'use strict';
$(function(){
	var a=0;
	var timer;
	function aa(){
		timer=setInterval(function(){
			a=a+1;
			if(a>2){a=0};
			$('.banner ul').css('left', a*-1366+'px');

		},2000)
	}
	aa();



	//文字隐藏和显示
	$('.c-new ul li').hover(function() {
		$(this).children('p').stop().slideDown(500)
	}, function() {		
		$(this).children('p').stop().slideUp(500)
		
	});



	//about_us/news/produce
	$('.c-nav ul li').click(function(event) {
		var x=$(this).index();
		$(this).css('color', 'red').siblings('li').css('color', 'white');;
		$('.c-title').children('ul').children('li').eq(x).removeClass('nodisplay').siblings('li').addClass('nodisplay');
		$('.c-detail').children('ul').children('li').eq(x).removeClass('nodisplay').siblings('li').addClass('nodisplay');
	});
	//news
	$('.c-detail ul li ul li').hover(function() {
		$(this).children('a').children('p').stop().slideDown(500);
		$(this).children('a').children('img').stop().fadeOut(300).fadeIn(300);
		
	}, function() {
		$(this).children('a').children('p').stop().slideUp(500);
		
	});

	$('.c-new>ul li').click(function(event) {
	     $('.c-top div p').text($(this).children('p').text())
	    var t=$(this).index('.c-new>ul li');
	    $('.c-warning ul li').eq(t).removeClass('nodisplay').siblings('li').addClass('nodisplay');
	});














})
