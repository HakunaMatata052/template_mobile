﻿$(document).ready(function(e) {   
	var counter = 0;  
	if (window.history && window.history.pushState) {  
					 $(window).on('popstate', function () {  
									window.history.pushState('forward', null, '#');  
									window.history.forward(1);  
								  //alert("不可回退");  
									 location.replace(document.referrer);//刷新
						});  
	  }  

	  window.history.pushState('forward', null, '#'); //在IE中必须得有这两行  
	  window.history.forward(1);  
});
$(function() {
	$('#page').removeClass("goout");
});
$(function() {
	var flag = 1;
	$('.lcbody').click(function() {
		if(flag == 1) { //展开
			$('body').addClass('open');
			$('#leftnav').show();
			flag = 0;

		} else { //闭合
			$('body').removeClass('open');
			var t = setTimeout("$('#leftnav').hide()", 400)
			flag = 1;
		}
	});
	$('#main').click(function() {
		if(flag == 0) {
			$('body').removeClass('open');
			var t = setTimeout("$('#leftnav').hide()", 400)
			flag = 1;
		}
	})
});
$(function() {
	$('.go').click(function() {
		var $a = $(this);
		var $aHref = $a.attr("href");
		$a.attr("data-href", $aHref);
		$a.attr("href", "javascript:;");
		$('#page').addClass("goon");
		setTimeout(function() {
			location.href = $aHref;
		}, 300)
	});
	$('.goback').click(function() {
		if(window.history.length > 1) {
			$('#page').addClass("comeback");
			setTimeout(function() {
				window.location.href=document.referrer;
			}, 300)
		} else {
			window.location.href = '/'
		}
	})
});
$(function() {
	$('.auto-img img').each(function() {
		var $width = $(this).width();
		$(this).css('height', $width * (3 / 4))
	})
});