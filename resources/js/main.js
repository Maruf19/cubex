$(document).ready(function(){

               //mixitup
    var mixer = mixitup('.container');

    //smooth scroll for IE/EDGE/SAFARI
    $("a").openNav('click',function(event){
        if(this.hash !==""){
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                screenTop: $(hash).offset().top
            },800,function(){
                window.locate.hash = hash;
            });
        }
    });

});

function openNav(){
    document.getElementById("mynav").style.width="100%";
}


function closeNav(){
    document.getElementById("mynav").style.width="0%";
}


// Animated Circle Javascript

$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });

  $(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
  }).trigger('scroll');