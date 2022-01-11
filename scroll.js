$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

iframedoc = document.getElementById("my_iframe").contentDocument;
iframedoc.getElementById("element_in_iframe").do_something();