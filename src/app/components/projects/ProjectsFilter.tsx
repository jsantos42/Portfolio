import { Content } from '@src/types';
import {
	db,
	fields,
	frameworks,
	languages,
	stylingFrameworks,
	testingFrameworks,
	years,
} from '@src/res/projects';
import { CheckBoxGroup } from '@src/app/components/projects/CheckBoxGroup';
import { useState } from 'react';

export const ProjectsFilter = ({ content }: { content: Content }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAllCheckboxes = (value: boolean) => setIsOpen(value);

	return (
		<div className="w-1/4 border-2 p-3">
			{/*<div className="w-1/4 min-h-sidebar max-h-sidebar border-2 p-3 overflow-scroll">*/}
			<h1 className="font-bold text-2xl py-3">{content.filters}</h1>
			<div className="flex justify-between">
				<button onClick={() => toggleAllCheckboxes(true)}>
					Expand All
				</button>
				<button onClick={() => toggleAllCheckboxes(false)}>
					Collapse All
				</button>
			</div>
			<div className="divide-y-2">
				<CheckBoxGroup
					isOpen={isOpen}
					items={fields}
					groupName={content.field}
				/>
				<CheckBoxGroup
					isOpen={isOpen}
					items={languages}
					groupName={content.language}
				/>
				<CheckBoxGroup
					isOpen={isOpen}
					items={frameworks}
					groupName={content.framework}
				/>
				<CheckBoxGroup
					isOpen={isOpen}
					items={stylingFrameworks}
					groupName={content.styling}
				/>
				<CheckBoxGroup
					isOpen={isOpen}
					items={db}
					groupName={content.db}
				/>
				<CheckBoxGroup
					isOpen={isOpen}
					items={testingFrameworks}
					groupName={content.testingFramework}
				/>
				<CheckBoxGroup
					isOpen={isOpen}
					items={years}
					groupName={content.year}
				/>
			</div>
		</div>
	);
};
