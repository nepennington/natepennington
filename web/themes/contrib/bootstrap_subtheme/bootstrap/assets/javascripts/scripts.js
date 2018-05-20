(function ($) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
      $('h1').css('color', 'red');
    }
  };
})(jQuery);