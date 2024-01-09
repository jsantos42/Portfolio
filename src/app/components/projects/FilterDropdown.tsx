import { ChangeEvent } from 'react';
import { FilterType, SelectedOptions } from '@src/types';

export const FilterDropdown = ({
	filterLabel,
	filterType,
	filterOptions,
	selectedOptions,
	updateIsOpen,
	handleFilterChange,
}: {
	filterLabel: string;
	filterType: FilterType;
	filterOptions: string[];
	selectedOptions: SelectedOptions[FilterType];
	updateIsOpen: () => void;
	handleFilterChange: (
		filterType: FilterType,
		updatedSelection: SelectedOptions[FilterType]
	) => void;
}) => {
	{
		/* open={filter.isDropdownOpen} */
	}

	const handleCheckboxChange = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		let updatedSelected;
		if (target.checked) {
			updatedSelected = [...selectedOptions.selected, target.value];
		} else {
			updatedSelected = selectedOptions.selected.filter(
				i => i !== target.value
			);
		}
		const updatedSelectedOptions = {
			...selectedOptions,
			selected: updatedSelected,
		};
		handleFilterChange(filterType, updatedSelectedOptions);
	};

	return (
		<details className="py-3 group" onChange={updateIsOpen}>
			<summary
				className="flex justify-between items-center
			group-open:after:content-['−'] after:content-['+'] after:text-2xl
			after:-translate-y-0.5"
			>
				{filterLabel} ({selectedOptions.selected.length}/
				{filterOptions.length})
			</summary>
			<div className="flex flex-col gap-y-1 pt-1">
				{filterOptions.map(option => (
					<div key={option} className="flex px-2 gap-x-2">
						<input
							type={'checkbox'}
							name={filterLabel}
							value={option}
							checked={selectedOptions.selected.includes(option)}
							onChange={handleCheckboxChange}
						/>
						<label htmlFor={filterLabel}>{option}</label>
					</div>
				))}
			</div>
		</details>
	);
};
