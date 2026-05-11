'use client';

import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('@src/app/components/navigation'), {
	ssr: false,
	loading: () => <div className="h-nav"></div>,
});

export default Navigation;
