export const preventScroll = () => {
	const handleEvent = (e: Event) => {
		e.preventDefault();
	};
	// If a passive listener calls preventDefault(), the user agent will
	// do nothing other than generate a console warning. Since in this
	// case we do want it to preventDefault(), we need to pass that option
	window.addEventListener('touchmove', handleEvent, {
		passive: false,
	});
	window.addEventListener('wheel', handleEvent, { passive: false });

	return () => {
		// The scroll event is not cancelable, so we use the two ones below
		// to prevent scrolling (both with touch and with wheel/trackpad)
		window.removeEventListener('touchmove', handleEvent);
		window.removeEventListener('wheel', handleEvent);
	};
};
