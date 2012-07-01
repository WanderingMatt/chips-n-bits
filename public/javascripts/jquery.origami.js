(function($) {

  var methods = {
    init: function(options) {
      return this.each(function() {
        console.log(this);
        var options = $.extend({ele: $(this)}, options);
        $(window).on('scroll.origami', null, options, methods.fold);
      });
    },
    fold: function(event) {
      var screen_position = $(document).scrollTop(),
      origami_image = event.data['ele'],
      offset_top = origami_image.offset().top,
      offset_bottom = offset_top + origami_image.height();


      // is it on screen? No? Collapsed.d
      // is it onscreen? Yes. Determine position. Collapse accordingly
    }
  };

  $.fn.origami = function(method){
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.origami');
    }
  };
})(jQuery);