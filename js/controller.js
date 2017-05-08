//Init the fullPage plugin.
$(document).ready(function() {
  $('#fullpage').fullpage({
    controlArrows: true,
    keyboardScrolling: false,
    scrollOverflow: true,
    anchors: ['welcome', 'selection', 'atari-5200', 'nes', 'gameboy', 'ps1', 'gamecube'],
  });

  //Disable Scrolling on Fullpage.js
  $.fn.fullpage.setMouseWheelScrolling(true);
  $.fn.fullpage.setAllowScrolling(true);

  //SLIDE
  //CONTROLS

  //Next Slide button
  $( ".btn-next-slide" ).on("click", function(event){
    event.preventDefault();
    $.fn.fullpage.moveSlideRight();
    //console.log("Next pressed");
  });

  //Prev Slide button
  $( ".btn-prev-slide" ).on("click", function(event){
    event.preventDefault();
    $.fn.fullpage.moveSlideLeft();
  });

  //Next Section button
  $( ".btn-next-section" ).on("click", function(event){
    event.preventDefault();
    $.fn.fullpage.moveSectionDown();
  });

  //Prev Section Button
  $( ".btn-prev-section" ).on("click", function(event){
    event.preventDefault();
    $.fn.fullpage.moveSectionUp();
  });

  $('.button-back').on("click", function(event) {
    event.preventDefault();
    $.fn.fullpage.moveTo('selection');
  });


  ////////////////////////
  //SEARCH FUNCTIONALITY//
  ////////////////////////

  //When the search field is typed into or pasted into.
  $("#input-search").on('keyup paste', function() {
    //If it's not empty
    if ($("#input-search").val()) {
      $("#btn-search").removeAttr("disabled");
      $("#btn-search-wrap").addClass("anim-pop btn-anim-left");
    }
    // if it is empty
    else {
      $("#btn-search").prop("disabled", true);
      $("#btn-search-wrap").removeClass("anim-pop btn-anim-left");
    }
  });


  ///////////////////
  // BACK BUTTON  //
  //////////////////
  // $('.btn-back').click(function(){
	// 	parent.history.back();
	// 	return false;
	// });

});
