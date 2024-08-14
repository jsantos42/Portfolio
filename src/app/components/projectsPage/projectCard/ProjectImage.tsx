import { Project } from '@src/types';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ScreenTypeContext } from '..';

const imageClasses = 'w-full aspect-16/10 row-start-2 row-end-6';

export const ProjectImage = ({
	project,
	index,
}: {
	project: Project;
	index: number;
}) => {
	const [isHovering, setIsHovering] = useState(false);
	const isMobile = useContext(ScreenTypeContext);

	function getSrc() {
		if (shouldRenderStaticImg()) {
			return project.staticImg;
		}
		return project.gif;
	}

	function shouldRenderStaticImg() {
		return !isMobile && !isHovering;
	}

	function isFirstRow() {
		if (isMobile) {
			return index === 0;
		}
		return [0, 1, 2].includes(index);
	}

	return (
		<Image
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			src={getSrc()}
			alt={project.title}
			placeholder="empty"
			className={imageClasses}
			priority={isFirstRow() || shouldRenderStaticImg()}
			unoptimized={!shouldRenderStaticImg()}
		/>
	);
};
