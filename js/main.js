//-----------------Burger-------------------------------------------
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
   $('main').toggleClass('none');
  });

//-----------------SLIDER-------------------------------------------

  var currentImg=0
  var lastImg=$('.project-title').length-1
  var delay = true;

  $(function(){
  	$(window).on('mousewheel', handleScroll)
      $('.control').each(function(){
          $(this).click(function(){
              var id = $(this).attr('data-targetId');
              $('.wrapper').css('transform','translateY(-' + id + '00%)')

          })
      })
  })

  function handleScroll(e) {
  	if (delay == true) {
  		var scrollUp ;
  		if (e.originalEvent.wheelDelta>0)
  			scrollUp=true
  		else
  			scrollUp=false

  		if (scrollUp==true){
  			if (currentImg>0) {
  				currentImg=currentImg-1
  			}
  			else
  				return
  		}

  		if (scrollUp==false){
  			if (currentImg<lastImg) {
  				currentImg=currentImg+1
  			}
  			else
  				return
  		}

  		$('.wrapper').css('transform','translateY(-' + currentImg + '00%)')
  		delay = false;
  		setTimeout(function(){
  			delay = true;
  		}, 2000);
  	}
  }
