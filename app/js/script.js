$(document).ready(function() {

	// CAROUSELES

	$('.js-index-banner').owlCarousel({
		items:1,
		margin:0,
		nav:true,
		dots:false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			1040 : {
				dots:true
			}
		}
	});

	$('.js-items-carousel').owlCarousel({
		items: 1,
		margin:0,
		nav:false,
		dots:false,
		responsive: {
			800 : {
				items:2,
				margin:20
			},
			1040 : {
				slideBy: 3,
				items:4,
				margin: 20
			}
		}
	});

	$('.js-season-items-carousel').owlCarousel({
		items:1,
		margin:0,
		nav:false,
		dots:false,
		responsive: {
			800 : {
				items:2,
				margin:20
			},
			1040 : {
				items:2,
				margin: 20
			}
		}
	});

	$('.js-carousel-nav').on('click', '.carousel-nav_btn.__prev', function(e) {
		e.preventDefault();
		$(this).closest('.index-section_header').siblings('.owl-carousel').trigger('prev.owl.carousel');
	});

	$('.js-carousel-nav').on('click', '.carousel-nav_btn.__next', function(e) {
		e.preventDefault();
		$(this).closest('.index-section_header').siblings('.owl-carousel').trigger('next.owl.carousel');
	});

	// SITE NAV DROPDOWN OPEN

	if( $(window).width() > 1040 ) {

		// OPEN/CLOSE 1 LEVEL DROPDOWN

		$('.js-sn-dropdown-open').on('click', function(e) {
			e.preventDefault();
			$(this).siblings('.site-nav_dropdown').toggleClass('__is-show');
		});

		$(document).mouseup(function (e){
			var popup = $('.js-sn-dropdown-open').siblings('.site-nav_dropdown');
			if(!popup.is(e.target) && popup.has(e.target).length === 0) {
				popup.removeClass('__is-show')
			};
		});

		// OPEN/CLOSE 2 LEVEL DROPDOWN

		$('.js-site-submenu').children('.site-nav_dropdown-item').hover(
			function() {
				$(this).find('.site-nav_catalog-dropdown').addClass('__is-show');
				$(this).closest('.site-header').find('.site-header_overlay').addClass('__is-show');
			},
			function(){
				$(this).find('.site-nav_catalog-dropdown').removeClass('__is-show');
				$(this).closest('.site-header').find('.site-header_overlay').removeClass('__is-show');
			}
		);

	} else {

		// MOBILE MENU OPEN

		$('.js-m-menu-open').on('click', function(e) {
			e.preventDefault();
			$(document).find('.js-m-menu').toggleClass('__is-show')
			$(document).find('.site-header_overlay').toggleClass('__is-show')
		});

		// OPEN/CLOSE 1 LEVEL DROPDOWN

		$('.js-sn-dropdown-open').on('click', function(e) {
			e.preventDefault();
			$(this).siblings('.site-nav_dropdown').addClass('__is-show');
		});

		$('.js-site-submenu').on('click', '.site-nav_dropdown-link.__back', function(e) {
			e.preventDefault();
			$(this).closest('.site-nav_dropdown').removeClass('__is-show');
		});

		// OPEN/CLOSE 2 LEVEL DROPDOWN

		$('.js-site-submenu').on('click', '.site-nav_dropdown-link', function(e) {
			e.preventDefault()
			$(this).siblings('.site-nav_catalog-dropdown').addClass('__is-show');
		});

		$('.site-nav_catalog-dropdown').on('click', '.site-nav_catalog-back', function(e) {
			e.preventDefault()
			$(this).closest('.site-nav_catalog-dropdown').removeClass('__is-show');
		});

	};
	

	// SPINNER

    (function spinner() {
    	var input = $('.js-spinner').children('.spinner_vp'),
            minVal = 1,
            maxVal = 99;

        input.val(1);

        if ( input.val() <= minVal ) {
           input.siblings('.spinner_btn.__dec').addClass('__is-disabled');
        } else {
            input.siblings('.spinner_btn.__dec').removeClass('__is-disabled');
        };

    	input.on('change', function() {
    		if ( $(this).val() <= minVal ) {
    			$(this).siblings('.spinner_btn.__dec').addClass('__is-disabled');
    		} else {
    			$(this).siblings('.spinner_btn.__dec').removeClass('__is-disabled');
    		};

    		if ( $(this).val() >= maxVal ) {
    			$(this).siblings('.spinner_btn.__inc').addClass('__is-disabled');
    		} else {
    			$(this).siblings('.spinner_btn.__inc').removeClass('__is-disabled');
    		};

            // ADD PRICE PER PIECE LABEL

            if ( $(this).val() > minVal ) {
                $(this).closest('.cart-card_spinner').siblings('.cart-card_totals').find('.cart-card_price-per-piece').addClass('__is-show');
            } else {
                $(this).closest('.cart-card_spinner').siblings('.cart-card_totals').find('.cart-card_price-per-piece').removeClass('__is-show');
            };
    	});

		input.siblings('.spinner_btn.__dec').on('click', function(e) {
			e.preventDefault();
			var count = $(this).siblings('.spinner_vp').val();
			var piecePrice = $(this).closest('.cart-card_spinner').siblings('.cart-card_totals').find('.cart-card_price-per-piece');
			var totalPrice = $(this).closest('.cart-card_spinner').siblings('.cart-card_totals').find('.cart-card_price-num');
			var sum = parseInt(totalPrice.text(), 10) - parseInt(piecePrice.text(), 10);

            $(this).siblings('.spinner_vp').val(--count).trigger('change');
            totalPrice.text(sum);
        });

		input.siblings('.spinner_btn.__inc').on('click', function(e) {
			e.preventDefault();
			var count = $(this).siblings('.spinner_vp').val();
			var piecePrice = $(this).closest('.cart-card_spinner').siblings('.cart-card_totals').find('.cart-card_price-per-piece');
			var totalPrice = $(this).closest('.cart-card_spinner').siblings('.cart-card_totals').find('.cart-card_price-num');
			var sum = parseInt(totalPrice.text(), 10) + parseInt(piecePrice.text(), 10);

            $(this).siblings('.spinner_vp').val(++count).trigger('change');
            totalPrice.text(sum);
        });

    })();

    // PRODUCT IMAGES SLIDER

    if( $(window).width() > 1040 ) {
    	$('.js-product-imgs').fotorama({
			width: '100%',
			height: '400px',
			nav: 'thumbs'
		});
    } else {
    	$('.js-product-imgs').fotorama({
			width: '100%',
			nav: 'dots'
		});
    };

	// CHANGE CATALOG VIEW

	$('.js-catalog-view').on('click', '.catalog-view_item', function(e) {
		e.preventDefault();
		$(this).addClass('__is-active').siblings().removeClass('__is-active');

		if( $(this).hasClass('__row') ) {
			$(document).find('.js-catalog-items')
			.addClass('__row')
			.find('.card')
			.addClass('__cat-row');
		} else {
			$(document).find('.js-catalog-items')
			.removeClass('__row')
			.find('.card')
			.removeClass('__cat-row');
		};
	});

	// CATALOG SORTING BLOCK

	var sorting = $('.js-catalog-sorting');
	var sortList = sorting.find('.page-header_sort-list');

	sorting.on('click', '.page-header_sort-select', function(e) {
		e.preventDefault();
		$(this).siblings('.page-header_sort-list').toggleClass('__is-show');
	});

	sortList.find('.page-header_sort-item').on('click', '.page-header_sort-link', function(e) {
		e.preventDefault();

		$(this).addClass('__is-active')
		.closest('.page-header_sort-item')
		.siblings().children().removeClass('__is-active');

		$(this).closest('.page-header_sort-list')
		.removeClass('__is-show');

		$(this).closest('.js-catalog-sorting')
		.find('.page-header_sort-select-text')
		.text( $(this).text() );
	});

	// TAGS TOGGLE

	$('.js-tags').on('click', '.tags_link', function(e) {
		e.preventDefault();
		$(this).addClass('__is-active')
		.siblings().removeClass('__is-active');
	})

	// FOOTER NAV MOBILE

	if( $(window).width() < 1040 ) {
		$('.site-foo_nav-list').on('click', '.site-foo_nav-title', function(e) {
			e.preventDefault();
			$(this).parent().toggleClass('__is-open');
		});
	};

	// MOBILE CATALOG FILTER

	$('.js-m-open-filter').on('click', function(e) {
		e.preventDefault();
		$(document).find('.js-m-filter').addClass('__is-show');
	});

	$('.js-m-filter').on('click', '.filter_close-btn', function(e) {
		e.preventDefault();
		$(this).closest('.js-m-filter').removeClass('__is-show');
	});

	// MODALS

	$('.mopen').wmodal();

});
