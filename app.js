var options = {
    $menu: $('header .menu')
};

$('.panel_container').panelSnap(options);

$('.tester').on('click', function() {
  var $target = $('.panel_container').panelSnap('getPanel', '.panel2');
  console.log($target);
  $('.panel_container').panelSnap('snapToPanel', $target);
});