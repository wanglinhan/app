$(function() {
	$('.header-1>ul>li').hover(function() {
		var i = $(this).index();
		$(this).find('div').stop().animate({
			'height': '39px'
		}, 100, 'linear', function() {
			$('.header-1>ul>li').eq(i).find('div').animate({
				'height': '44px'
			}, 100);
		});
	}, function() {
		$(this).find('div').stop().animate({
			'height': '0px'
		}, 50, 'linear');
	});
	$('.item').hover(function() {
		$('.item>ul').stop().slideDown(200);
	}, function() {
		$('.item>ul').stop().slideUp(50);
	});
	$('.item-1').hover(function() {
		$('.item-1>a').css('color', 'yellow');
		$('.item-1>.item1').stop().slideDown(200);
	}, function() {
		$('.item-1>.item1').stop().slideUp(50);
		$('.item-1>a').css('color', '#000');
	});
	$('.item-2').hover(function() {
		$('.item-2>a').css('color', 'yellow');
		$('.item-2>.item2').stop().slideDown(200);
	}, function() {
		$('.item-2>.item2').stop().slideUp(50);
		$('.item-2>a').css('color', '#000');
	});
	$('.box-one').hover(function() {
		$(this).find('img').css('transform', 'scale(1.2,1.2)');
	}, function() {
		$('.box-one>img').css('transform', 'scale(1,1)');
	});
	var i, j, k;
	$('.box-33 .box-one').bind('click', function() {
		k = $(this).index();
		i = $(this);
		$('.shadow-1').css({
			'top': $('body').scrollTop() + 100,
			'marginLeft': -$(this).find('img').width() ,
			'display': 'block'
		});
		$('.shadow-1').stop().animate({
			'opacity': '1'
		}, 800);
		$('.shadow').fadeIn(800);
		$('.shadow-1 img').attr('src', $(this).find('img').attr('src'));
	});
	$('.shadow').bind('click', function() {
		$('.shadow-1').css({
			'display': 'none'
		});
		$('.shadow-1').animate({
			'opacity': '0'
		}, 200);
		$(this).fadeOut(200);
	});
	$('.next').bind('click', function() {
		k++;
		if(k < 3) {
			i = i.next();
			$('.shadow-1 img').attr('src', i.find('img').attr('src'));
		} else {
			k = 0;
			i = i.parent().next().children().eq(k);
			$('.shadow-1 img').attr('src', i.find('img').attr('src'));
		}

	});
	$('.prev').bind('click', function() {
		k--;
		console.log(k);
		if(k > -1) {
			i = i.prev();
			$('.shadow-1 img').attr('src', i.find('img').attr('src'));
		} else {
			k = 2;
			i = i.parent().prev().children().eq(k);
			$('.shadow-1 img').attr('src', i.find('img').attr('src'));
		}
	});
	$('.shadow').css({
		'width': $(document).width(),
		'height': $(document).height()
	});
	/*console.log($(window).height());*/
});