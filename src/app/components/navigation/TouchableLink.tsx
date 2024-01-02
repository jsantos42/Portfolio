import Link from 'next/link';
import React from 'react';

// On mobile devices, links' hit target should be large enough for a human
// finger to touch. This adds a min-height/width. Note that it also adds flexbox
// because the default display is inline, preventing height from having effect
// cf https://developer.apple.com/design/human-interface-guidelines/accessibility#Buttons-and-controls
// cf https://medium.com/@zacdicko/size-matters-accessibility-and-touch-targets-56e942adc0cc
export const TouchableLink = ({
	children,
	href,
	onClick,
}: {
	children: React.ReactNode;
	href: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
	return (
		<Link {...{ href, onClick, className: 'touchable px-2' }}>
			{children}
		</Link>
	);
};
