$(document).ready(function () {
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
	$('#opener').tapTarget('open');
	$('.tap-target').tapTarget('close');

	window.onscroll = function() {
		// viewport height  + # of pix scrolled   >= hight of the body
		(window.innerHeight + window.pageYOffset) >= document.body.offsetHeight ? 
		$('.fixed-action-btn').openFAB() : 
		$('.fixed-action-btn').closeFAB();
	};	
});

var options = [
	{
		selector: '#card1', offset: 200, callback: function (el) {
			Materialize.fadeInImage($(el))
		}
	},
	{
		selector: '#card2', offset: 200, callback: function (el) {
			Materialize.fadeInImage($(el))
		}
	},
	{
		selector: '#card3', offset: 200, callback: function (el) {
			Materialize.fadeInImage($(el))
		}
	},
	{
		selector: '#card4', offset: 200, callback: function (el) {
			Materialize.fadeInImage($(el))
		}
	},
	{
		selector: '#card5', offset: 200, callback: function (el) {
			Materialize.fadeInImage($(el))
		}
	},
	{
		selector: '#card6', offset: 200, callback: function (el) {
			Materialize.fadeInImage($(el))
		}
	},
	// ==========
	//   skills
	// ==========
	{selector: '#skill1', offset: 500, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill2', offset: 450, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill3', offset: 325, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill4', offset: 275, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill5', offset: 180, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill6', offset: 400, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill7', offset: 125, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill8', offset: 150, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill9', offset: 250, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill10', offset: 75, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill11', offset: 100, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill12', offset: 50, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill13', offset: 25, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill14', offset: 150, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill15', offset: 75, callback: function(el) {
		Materialize.fadeInImage($(el))
	} },
	{selector: '#skill16', offset: 100, callback: function(el) {
		Materialize.fadeInImage($(el))
	} }
];
Materialize.scrollFire(options);

// For Formspree action
var contactform =  document.getElementById('contactform');
contactform.setAttribute('action', 'https://formspree.io/' + 'rodriguez.keith' + '@' + 'gmail' + '.' + 'com');

// LINK SCROLL FIX
(function(document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 50,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function() {
      this.scrollToCurrent();
      $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
      $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function() {
      return this.OFFSET_HEIGHT_PX;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function(href, pushToHistory) {
      var match, anchorOffset;

      if(!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if(match) {
        anchorOffset = $(match).offset().top - this.getFixedOffset();
        $('html, body').animate({ scrollTop: anchorOffset});

        // Add the state to history as-per normal anchor links
        if(HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },
    
    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function(e) { 
      if(this.scrollIfAnchor(window.location.hash) && e) {
      	e.preventDefault();
      }
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function(e) {
      var elem = e.target;

      if(this.scrollIfAnchor(elem.getAttribute('href'), true)) {
        e.preventDefault();
      }
    }
  };

	$(document).ready($.proxy(anchorScrolls, 'init'));
})(window.document, window.history, window.location);
