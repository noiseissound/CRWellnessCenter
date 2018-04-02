( function( $ ) {
	if ( $( '.site-header' ).length ) {
		stickyHeader();
	}

	function stickyHeader() {
		$( 'body' ).addClass( 'sp-header-sticky' );
		$( '.site' ).css( 'padding-top', $( '.site-header' ).outerHeight() );
	}

	$( document.body ).on( 'checkout_error', function() {
		var headerHeight = $( '.site-header' ).outerHeight();

		$( 'html, body' ).animate({
			scrollTop: ( $( '#primary' ).offset().top - headerHeight )
		}, 1000 );
	});
})( jQuery );