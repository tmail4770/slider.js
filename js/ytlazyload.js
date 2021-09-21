function labnolIframe(div) {
  var iframe = document.createElement(&quot;iframe&quot;);
  iframe.setAttribute(
    &quot;src&quot;,
    &quot;https://www.youtube.com/embed/&quot; + div.dataset.id + &quot;?autoplay=1&amp;rel=0&quot;
  );
  iframe.setAttribute(&quot;frameborder&quot;, &quot;0&quot;);
  iframe.setAttribute(&quot;allowfullscreen&quot;, &quot;1&quot;);
  iframe.setAttribute(
    &quot;allow&quot;,
    &quot;accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture&quot;
  );
  div.parentNode.replaceChild(iframe, div);
}
function initYouTubeVideos() {
  var playerElements = document.getElementsByClassName(&quot;youtube-player&quot;);
  for (var n = 0; n &lt; playerElements.length; n++) {
    var videoId = playerElements[n].dataset.id;
    var div = document.createElement(&quot;div&quot;);
    div.setAttribute(&quot;data-id&quot;, videoId);
    var thumbNode = document.createElement(&quot;img&quot;);
    thumbNode.src = &quot;https://i.ytimg.com/vi/ID/hqdefault.jpg&quot;.replace(
      &quot;ID&quot;,
      videoId
    );
    div.appendChild(thumbNode);
    var playButton = document.createElement(&quot;div&quot;);
    playButton.setAttribute(&quot;class&quot;, &quot;play&quot;);
    div.appendChild(playButton);
    div.onclick = function () {
      labnolIframe(this);
    };
    playerElements[n].appendChild(div);
  }
}
document.addEventListener(&quot;DOMContentLoaded&quot;, initYouTubeVideos);
