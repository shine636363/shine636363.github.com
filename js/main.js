;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var getHeight = function() {
		var extraHeight = 0;

		if ( isMobile.any() ) extraHeight = 50;
		
		setTimeout(function(){
			$('#fh5co-main').stop().animate({
				'height': $('.fh5co-tab-content.active').height() + extraHeight
			});
		}, 50);//调整下拉速度
	};
	var getHeight2=function(){
		var extraHeight = 0;

		if ( isMobile.any() ) extraHeight = 50;
		
		setTimeout(function(){
			$('#fh5co-main').stop().animate({
				'height': $('.hei.active').height() + extraHeight + 200
			});
		}, 50);//调整下拉速度
	}
	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 10,
			lineCap: 'butt',
			barColor: '#17e7a4',
			trackColor:	"#000000",
			size: 160,
			animate: 1000
		});
	};

	var tabContainer = function() {
		getHeight();
		$(window).resize(function(){
			getHeight();
		})
	};

	var tabClickTrigger = function() {
		$('.fh5co-tab-menu a').on('click', function(event) {
			event.preventDefault();
			var $this = $(this),
				data = $this.data('tab'),
				pie = $this.data('pie');

			// add/remove active class
			if(data < 5){
				$('.fh5co-tab-menu li').removeClass('active');
				$this.closest('li').addClass('active');
				$('.fh5co-tab-content.active').addClass('animated fadeOutDown');
			}

			setTimeout(function(){
				if( data > 4){
					$this.closest('.col-md-12').find('.fh5co-tab-content').removeClass('active animated fadeOutDown fadeInUp');	
					$this.closest('.col-md-12').find('.fh5co-tab-content[data-content="'+data+'"]').addClass('animated fadeInUp active');
				}else{
					$('.fh5co-tab-content.active').removeClass('active animated fadeOutDown fadeInUp');
					$('.fh5co-tab-content[data-content="'+data+'"]').addClass('animated fadeInUp active');
				}
				
				
				if(data === 3){
					$('.fh5co-tab-content[data-content="'+data+'"]').find(".fh5co-tab-content:first").addClass('animated fadeInUp active');
				}
				if(data==3||data==5||data==6){
					getHeight2();
				}else{
					getHeight()
				}
			}, 500);

			if ( pie === 'yes' ) {
				setTimeout(function(){
					pieChart();
				}, 800);
			}
			
		})
	};

	// Document on load.
	$(function(){
		tabContainer();
		tabClickTrigger();
//		$(".auto-height-btn").click(function(){
//			autoHeight();
//		})
	});

	function autoHeight(){
//		$("#auto-height").height($(".fh5co-tab-wrap .fh5co-tab-content.active").height());
	}
}());