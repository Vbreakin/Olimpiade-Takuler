$(function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];
  var items = [];
  $(".img-w").each(function(index) {
    $(this).wrap("<div class='img-c'></div>")
    $(this).attr('index', index);
    var imgSrc = $(this).find("img").attr("src");
    var w = $(this).find("img").get(0).naturalWidth;
    var h = $(this).find("img").get(0).naturalHeight;
    items.push({src: imgSrc, w: w, h: h});
    $(this).css('background-image', 'url(' + imgSrc + ')');
  });

  function openPhoto(index) {
    var options = {
      // optionName: 'option value'
      // for example:
      index: index || 0 // start at first slide
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  }

  $(".img-c").click(function() {
    var index = $(this).find(".img-w").attr("index");
    openPhoto(index);
  })
})