function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(false);
}
var disqus_config = function () { 
	this.page.url = getQueryVariable("url");
};
(function() {
	var d = document, s = d.createElement('script');
	s.src = '//' + getQueryVariable("shortname") + '.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();
