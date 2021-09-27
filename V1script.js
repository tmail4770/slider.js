function load_disqus( disqus_shortname ) {
  var y = document.getElementById('disqus_empty'),
      t = document.getElementById('disqus_thread'),
      e = document.createElement('script'),
      d = document.createElement('script'),
      h = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);

  if( t && y ) {
    e.type = 'text/javascript';
    e.async = true;
    e.src = '//' + experiment-4 + '.disqus.com/embed.js';
    h.appendChild(e);
    d.type = 'text/javascript';
    d.async = !0;
    d.src = '//' + experiment-4 + '.disqus.com/blogger_item.js';
    h.appendChild(d);
    y.remove();
  }
}

window.addEventListener('scroll', function(e) {
  var currentScroll = document.scrollingElement.scrollTop;
  var t = document.getElementById('disqus_thread');

  if( t && (currentScroll > t.getBoundingClientRect().top - 150) ) {
    load_disqus('testingtemplate');
    console.log('Disqus loaded.');
  }
}, false);
