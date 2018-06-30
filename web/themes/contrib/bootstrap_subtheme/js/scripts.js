(function ($) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      $('h2').css('color', 'orange');
    }
  };
})(jQuery);