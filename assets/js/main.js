/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

		// JavaScript interactions

document.addEventListener("DOMContentLoaded", function () {

    const eventButtons = document.querySelectorAll(".event-btn");

    eventButtons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            const eventCard = button.closest(".spotlight");
            const eventTitle = eventCard.querySelector("h2").innerText;
            const eventDate = eventCard.querySelector("strong").innerText;

            let message = "";

if (eventTitle.includes("LIVE MUSIC")) {
    message =
        "Live Music Night\n\n" +
        "Enjoy student band performances and solo artists in a relaxed live music atmosphere.\n\n" +
        "Perfect for music lovers and first-time visitors.";
} else if (eventTitle.includes("THEATRE")) {
    message =
        "Theatre Showcase\n\n" +
        "Experience creative student theatre performances featuring drama and storytelling.\n\n" +
        "Arrive early for the best seating.";
} else if (eventTitle.includes("OPEN WORKSHOP")) {
    message =
        "Open Workshop\n\n" +
        "Join interactive music and theatre activities designed for beginners and performers.\n\n" +
        "A great opportunity to learn new skills and meet other students.";
}

alert(message);

            eventCard.classList.add("selected-event");

            setTimeout(function () {
                eventCard.classList.remove("selected-event");
            }, 1800);
        });
    });

const searchInput = document.querySelector(".nav-search input");
const eventCards = document.querySelectorAll("#two .spotlight");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const keyword = searchInput.value.toLowerCase();

        eventCards.forEach(function (card) {

            const eventText = card.innerText.toLowerCase();

            if (eventText.includes(keyword)) {

                card.classList.add("event-match");
                card.classList.remove("event-dim");

            } else {

                card.classList.remove("event-match");
                card.classList.add("event-dim");

            }

        });

    });

}

    const joinButton = document.querySelector("#cta .button.primary");

    if (joinButton) {
        joinButton.addEventListener("click", function (e) {
            e.preventDefault();

            alert("Thank you for your interest! Please contact info@nosham.org.au to join Nosham Music & Theatre Society.");
        });
    }

});

})(jQuery);
