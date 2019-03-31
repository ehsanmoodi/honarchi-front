$(document).ready(function() {
  $(".header .owl-carousel").owlCarousel({
    'items': 5,
    'rtl': true,
    'autoplay' : true,
    'autoplayTimeout':7000 ,
    'autoplayHoverPause': true,
    'dots' : false,
    'margin':10,
    responsive:{
        0:{
            items:2
        },
        545:{
            items:3
        },
        722:{
            items:4
        },
        850:{
            items:5
        }
    }
  });
  $(".row-slider .owl-carousel").owlCarousel({
    'items': 1,
    'rtl': true,
    'autoHeight': false,
    'autoplay' : true,
    'autoplayTimeout':7000 ,
    'autoplayHoverPause': true,
    'animateOut': 'fadeOut',
    'loop' : true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  $(".row-product .owl-carousel").owlCarousel({
    'rtl': true,
    'autoplay' : false,
    'autoplayTimeout':7000 ,
    'autoplayHoverPause': true,
    'animateOut': 'fadeOut',
    'margin':30,
    'loop' : true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
  $(".row-comment .owl-carousel").owlCarousel({
    'rtl': true,
    'autoplay' : false,
    'autoplayTimeout':7000 ,
    'autoplayHoverPause': true,
    'animateOut': 'fadeOut',
    'margin':30,
    'loop' : true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
  setInterval(function(){
    if ($('.column-chanse .tabnav li .active').parent().next('.tabnav li').length>0) {
      $('.column-chanse .tabnav li .active').parent().next('.tabnav li').find('a').addClass('active')
      $('.column-chanse .tabnav li .active').first().removeClass('active')
    }
    else{
      $('.column-chanse .tabnav').find('li').first().find('a').addClass('active')
      $('.column-chanse .tabnav li').last().find('a').removeClass('active')
    }
  },10000);
  setInterval(function(){
    if ($('.column-chanse .tab-pane.active').next('div').length>0) {
      $('.column-chanse .tab-pane.active').next('div').addClass('active')
      $('.column-chanse .tab-pane.active').first().removeClass('active')
    }
    else{
      $('.column-chanse .tab-content').find('div').first().addClass('active')
      $('.column-chanse .tab-pane.active').last().removeClass('active')
    }
  },10000);
  $('.count').prop('disabled', true);
   			$(document).on('click','.plus',function(){
				$('.count').val(parseInt($('.count').val()) + 1 );
    		});
        	$(document).on('click','.minus',function(){
    			$('.count').val(parseInt($('.count').val()) - 1 );
    				if ($('.count').val() == 0) {
						$('.count').val(1);
					}
    	    	});
// range price
    var slider2 = document.getElementById('sliderDouble');
    noUiSlider.create(slider2, {
    	start: [ 20, 60 ],
    	connect: true,
    	range: {
    		min:  0,
    		max:  100
    	}
  });
});
