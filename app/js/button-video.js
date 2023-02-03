

$(".video-button").click(function () {
  var video = $("#video").get(0);
   if (video.paused) {
    video.play();
     $('.video__preview').hide()
     $(this).hide()
  } 
  
    return false;
  });
  





