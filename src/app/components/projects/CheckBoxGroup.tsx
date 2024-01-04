import { useState } from 'react';

export const CheckBoxGroup = ({
	items,
	groupName,
	isOpen,
}: {
	items: string[];
	groupName: string;
	isOpen: boolean;
}) => {
	const [checked, setChecked] = useState([]);

	return (
		<details open={isOpen} className="py-3 group">
			<summary className="flex justify-between items-center group-open:after:content-['−'] after:content-['+'] after:text-3xl after:-translate-y-0.5">
				{groupName} ({checked.length}/{items.length})
			</summary>
			<div className="flex flex-col gap-y-1 pt-1">
				{items.map(item => (
					<div key={item} className="flex px-2 gap-x-2">
						<input
							type={'checkbox'}
							name={groupName}
							value={item}
						/>
						<label htmlFor={item}>{item}</label>
					</div>
				))}
			</div>
		</details>
	);
};
