/* social share script */
addShare = function() {
  var shareContainer = $('.shareButtonsContainer'),
      shareUrl = location.href,
      shareUrlEncoded = encodeURIComponent(shareUrl),
      shareTitle = "BioMe",
      shareTitleEncoded = encodeURIComponent(shareTitle);


  /* email */
  var emailShareUrl = "mailto:%20"
                    + "?subject=" + shareTitle
                    + "&body=" + shareUrlEncoded;

  var emailButton = $('<a href="' + emailShareUrl + '"><button class="shareOnEmail"></button></a>').appendTo(shareContainer);
  /* email */


  /* facebook */
  var facebookButton = $('<button class="shareOnFacebook"></button>').appendTo(shareContainer);

  facebookButton.click(function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u='+shareUrlEncoded, 'facebook-share-dialog', 'width=560,height=436');
    return false;
  });
  /* facebook */


  /* twitter */
  var twitterShareText = shareTitleEncoded 
                       + " - " 
                       + shareUrlEncoded;

  var twitterButton = $('<a href="https://twitter.com/intent/tweet?text=' + twitterShareText + '"><button class="shareOnTwitter"></button></a>').appendTo(shareContainer);
  var twitterScript = $("<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>").appendTo(shareContainer);
  /* twitter */


  /* linkedin */
  var linkedinShareUrl = "http://www.linkedin.com/shareArticle?mini=true&url=" 
                       + shareUrlEncoded;

  var linkedinButton = $('<button class="shareOnLinkedin"></button>').appendTo(shareContainer);
  linkedinButton.click(function() {
    window.open(linkedinShareUrl, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
  });
  /* linkedin */


  /* google */
  var googleShareUrl = "https://plus.google.com/share?url=" 
                     + shareUrlEncoded;

  var googleButton = $('<button class="shareOnGoogle"></button>').appendTo(shareContainer);
  googleButton.click(function() {
    window.open(googleShareUrl, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
  });
  /* google */
}

/* social share script */