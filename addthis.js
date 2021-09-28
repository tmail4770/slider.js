
 var bLazy = new Blazy({ 
        offset: 10,
		selector: '.lazy_load',
		container: '.container'		
    });
(function () {
	var dload = false;

	function dyload() {
		if (dload === false) {
			dload = true;
			document.removeEventListener('scroll', dyload);
			document.removeEventListener('mousemove', dyload);
			document.removeEventListener('mousedown', dyload);
			document.removeEventListener('touchstart', dyload);
			jsload('//s7.addthis.com/js/300/addthis_widget.js#pubid=apupuu');
						 var bLazy = new Blazy({ 
				offset: 10,
				selector: '.lazy_screen',
				container: '.container'		
			});
	
		}
	}
	document.addEventListener("scroll", dyload),
	document.addEventListener("mousemove", dyload),
	document.addEventListener("mousedown", dyload), 
	document.addEventListener("touchstart", dyload),
	document.addEventListener("load", function () {
	document.body.clientHeight != document.documentElement.clientHeight && 0 == document.documentElement.scrollTop && 0 == document.body.scrollTop || dyload()
	});
})();	
