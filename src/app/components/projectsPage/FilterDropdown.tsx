import { ChangeEvent } from 'react';
import { Filters, SelectedOptions } from '@src/types';

export const FilterDropdown = ({
	filterLabel,
	filterType,
	filterOptions,
	filterSelectedOptions,
	handleFilterChange,
}: {
	filterLabel: string;
	filterType: keyof Filters;
	filterOptions: Filters[keyof Filters];
	filterSelectedOptions: SelectedOptions[keyof Filters];
	handleFilterChange: (
		filterType: keyof Filters,
		updatedSelection: SelectedOptions[keyof Filters]
	) => void;
}) => {
	const handleDropdownToggle = ({
		target,
	}: ChangeEvent<HTMLDetailsElement>) => {
		const updatedSelectedOptions = {
			...filterSelectedOptions,
			isDropdownOpen: target.open,
		};
		handleFilterChange(filterType, updatedSelectedOptions);
	};

	const handleCheckboxChange = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		let updatedSelected;
		if (target.checked) {
			updatedSelected = [...filterSelectedOptions.selected, target.value];
		} else {
			updatedSelected = filterSelectedOptions.selected.filter(
				i => i !== target.value
			);
		}
		const updatedSelectedOptions = {
			...filterSelectedOptions,
			selected: updatedSelected,
		};
		handleFilterChange(filterType, updatedSelectedOptions);
	};

	return (
		<details
			className="py-3 group"
			onToggle={handleDropdownToggle}
			open={filterSelectedOptions.isDropdownOpen}
		>
			<summary
				className="flex justify-between items-center
			group-open:after:content-['−'] after:content-['+'] after:text-2xl
			after:-translate-y-0.5"
			>
				{filterLabel} ({filterSelectedOptions.selected.length}/
				{filterOptions.length})
			</summary>
			<div className="pt-1 flex flex-col gap-y-1 leading-relaxed">
				{filterOptions.map(option => (
					<div key={option} className="flex px-2 gap-x-2">
						<input
							type={'checkbox'}
							name={filterLabel}
							id={option}
							value={option}
							checked={(
								filterSelectedOptions.selected as string[]
							).includes(option)}
							onChange={handleCheckboxChange}
						/>
						<label htmlFor={option}>{option}</label>
					</div>
				))}
			</div>
		</details>
	);
};
