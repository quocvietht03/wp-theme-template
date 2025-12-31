!(function ($) {
	"use strict";

	/* Toggle submenu align */
	function __THEME_SLUG__SubmenuAuto() {
		if ($('.bt-site-header .bt-container').length > 0) {
			var container = $('.bt-site-header .bt-container'),
				containerInfo = { left: container.offset().left, width: container.innerWidth() },
				contLeftPos = containerInfo.left,
				contRightPos = containerInfo.left + containerInfo.width;

			$('.children, .sub-menu').each(function () {
				var submenuInfo = { left: $(this).offset().left, width: $(this).innerWidth() },
					smLeftPos = submenuInfo.left,
					smRightPos = submenuInfo.left + submenuInfo.width;

				if (smLeftPos <= contLeftPos) {
					$(this).addClass('bt-align-left');
				}

				if (smRightPos >= contRightPos) {
					$(this).addClass('bt-align-right');
				}

			});
		}
	}

	/* Toggle menu mobile */
	function __THEME_SLUG__ToggleMenuMobile() {
		$('.bt-site-header .bt-menu-toggle').on('click', function (e) {
			e.preventDefault();

			if ($(this).hasClass('bt-menu-open')) {
				$(this).addClass('bt-is-hidden');
				$('.bt-site-header .bt-primary-menu').addClass('bt-is-active');
			} else {
				$('.bt-menu-open').removeClass('bt-is-hidden');
				$('.bt-site-header .bt-primary-menu').removeClass('bt-is-active');
			}
		});
	}

	/* Toggle sub menu mobile */
	function __THEME_SLUG__ToggleSubMenuMobile() {
		var hasChildren = $('.bt-site-header .page_item_has_children, .bt-site-header .menu-item-has-children');

		hasChildren.each(function () {
			var $btnToggle = $('<div class="bt-toggle-icon"></div>');

			$(this).append($btnToggle);

			$btnToggle.on('click', function (e) {
				e.preventDefault();
				$(this).toggleClass('bt-is-active');
				$(this).parent().children('ul').toggle();
			});
		});
	}

	/* Validation form comment */
	function __THEME_SLUG__CommentValidation() {
		if ($('#bt_comment_form').length) {
			jQuery('#bt_comment_form').validate({
				rules: {
					author: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					comment: {
						required: true,
						minlength: 20
					}
				},
				errorElement: "div",
				errorPlacement: function (error, element) {
					element.after(error);
				}
			});
		}
		// Check if the form reviews product
		if ($('#commentform').length) {
			jQuery('#commentform').validate({
				rules: {
					author: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					comment: {
						required: true,
						minlength: 20
					}
				},
				errorElement: "div",
				errorPlacement: function (error, element) {
					element.after(error);
				}
			});
		}
	}

	/* Copyright Current Year */
	function __THEME_SLUG__CopyrightCurrentYear() {
		var searchTerm = '{Year}',
			replaceWith = new Date().getFullYear();

		$('.bt-elwg-site-copyright').each(function () {
			this.innerHTML = this.innerHTML.replace(searchTerm, replaceWith);
		});
	}
	/* share button wishlist page and compare page */
	function __THEME_SLUG__ShareLocalStorage(datashare = []) {
		if (!datashare) {
			const url = new URL(window.location.href);
			url.searchParams.delete('datashare');
			window.history.pushState(null, '', url.toString());
			return;
		}
		const url = new URL(window.location.href);
		url.searchParams.set('datashare', datashare);
		window.history.pushState(null, '', url.toString());
		$('.bt-post-share a').each(function () {
			var currentHref = $(this).attr('href');
			// Handle both Facebook and Pinterest share links
			if (currentHref.includes('facebook.com/sharer')) {
				var newHref = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
			} else if (currentHref.includes('pinterest.com/pin')) {
				var newHref = 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href);
			} else {
				var newHref = currentHref.replace(/url=[^&]+/, 'url=' + encodeURIComponent(window.location.href));
			}
			$(this).attr('href', newHref);
		});
	}
	/* backtotop */
	function __THEME_SLUG__BackToTop() {
		const $backToTop = $('.bt-back-to-top');
		if ($backToTop.length > 0) {
			$(window).on('scroll', function () {
				if ($(this).scrollTop() > 300) {
					$backToTop.addClass('show');
				} else {
					$backToTop.removeClass('show');
				}
			});

			$backToTop.on('click', function (e) {
				e.preventDefault();
				$('html, body').animate({ scrollTop: 0 }, 500);
			});
		}
	}

	jQuery(document).ready(function ($) {
		__THEME_SLUG__SubmenuAuto();
		__THEME_SLUG__ToggleMenuMobile();
		__THEME_SLUG__ToggleSubMenuMobile();
		__THEME_SLUG__CommentValidation();
		__THEME_SLUG__CopyrightCurrentYear();
		__THEME_SLUG__BackToTop();

	});
	
	jQuery(window).on('resize', function () {
		__THEME_SLUG__SubmenuAuto();
		__THEME_SLUG__UpdateBodyWidthVariable();
		__THEME_SLUG__HandleGridViewResize();
	});
	
	jQuery(window).on('scroll', function () {

	});



})(jQuery);
