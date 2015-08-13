
/* CCP Functions */

var CCP = CCP || {};

/* Utility function to get a method from a different window / frame */
CCP.getPUC = function ( methodName, frame ) {

	if ( frame === undefined ) {
		return undefined; 
	}

	// if this frame has the method then assume this is the PUC frame
	if ( frame[methodName] !== undefined ) {
		return frame[methodName];
	}

	// if reached topmost frame and did not find method
	if ( frame.parent === frame ) {
		return undefined;
	}
	// else search ancestors
	else {
		return CCP.getPUC( methodName, frame.parent );
	}
};

/* Open live chat */
CCP.liveChat = function(){

	var pucOpenTab = CCP.getPUC( 'mantle_openTab', window );

	var url = "https://kiwiirc.com/client?settings=d038ed25d27020ab982716d52f43fa29";

	//Verify if we are inside PUC
	if ( pucOpenTab ) {
		var name = "Pentaho Live Chat",
		title = "Pentaho Live Chat";
		pucOpenTab( name, title, url );
	}
	else {
		window.open( url );
	}

}

/* Forum Feed - Se more info in https://github.com/sdepold/jquery-rss */
CCP.getForumFeed = function(divId){

	var _url = "http://forums.pentaho.com/external.php?type=rss2";

	$(divId).rss(_url,{
			limit: 5,
			layoutTemplate: "<div class='feed-container'>{entries}</div>",
			entryTemplate: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>',
			effect: "show",
			dateFormat: 'ddd, HH:mm',
			error: function() { throw new Error("jQuery RSS: url don't link to RSS-Feed") }
		});
}



$(document).ready(function() {
		$('#scrollDownBtn, #scrollDownBtnMobile').click(function(event) {
				$("body, html").animate({
						scrollTop: $("#ccp-02").position().top
					});
			});
		addShare();


		$('#tech-info a').click(function (e) {
				e.preventDefault()
				$(this).tab('show')
			})

		var isMobile = (/iphone|ipad|ipod|android|ie|blackberry|fennec/).test(navigator.userAgent.toLowerCase());
		if (isMobile == true){
			$('body').addClass("mobile");

		} else {
			$('body').addClass("desktop");
		}


		$(window).scroll(function() {
				var y_scroll_pos = window.pageYOffset;
				var scroll_pos_test = $('#ccp-03').offset().top - 20;

				if(y_scroll_pos > scroll_pos_test) {
					// activate the all mighty sticky footer
					$('body').addClass("sticky-footer");
					if ($('body').hasClass("desktop")) {
						$('header').css("display","block");
					} else {
						$('header').css("display","none");
					}
				}
				else
				{
					// de-activate the all mighty sticky footer
					$('body').removeClass("sticky-footer");
					$('header').css("display","block");

				}
			});

		// Set the feeder

		CCP.getForumFeed("#forumQuestions");


	});
