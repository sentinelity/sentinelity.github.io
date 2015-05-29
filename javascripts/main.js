$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'about', 'work', 'contact'],
    sectionsColor: ['#FAFAFA', '#E6E7E8', '#FAFAFA', '#E6E7E8'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['HOME', 'ABOUT', 'WORK', 'CONTACT'],
    loopBottom: true,
    easingcss3: 'ease',
    scrollingSpeed: 500,
    fixedElements: '#animatedModal',
    responsive: 400,
    onLeave: function(index, nextIndex, direction){
          
            var leavingSection = $(this);

            if(index == 1 && direction =='down'){
                $('.animateOne').addClass('animated fadeInDown');
            }
            else if(index == 2 && direction == 'down'){
                $('.animateTwo').addClass('animated fadeInDown');
            }
          },
  });
    
  $('.scene').parallax();
    
  $('#particles').particleground({
    dotColor: '#fccccc',
    lineColor: '#e6e6e6',
    particleRadius: 3,
    density: 9000,
    parallaxMultiplier: 7
  });
    
//_____NAVIGATION
    
  var isLateralNavAnimating = false;
  //open/close lateral navigation
  $('.cd-nav-trigger').on('click', function(event) {
    event.preventDefault();
    //stop if nav animation is running 
    if (!isLateralNavAnimating) {
      if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true;
      $('body').toggleClass('navigation-is-open');
      $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        //animation is over
        isLateralNavAnimating = false;
      });
    }
  });
    
$('.nav-temper li a').on('click', function(){
if( !isLateralNavAnimating ) {
if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			$('body').removeClass('navigation-is-open');

			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
});
    
//_____SLIDE-IN PANEL
            
    	$('.cd-btn').on('click', function(event){
        var galNum = $(this).data('type');
        event.preventDefault();
        $('.cd-panel.'+galNum).addClass('is-visible');
	});

	    $('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});

});