import { ChangeEvent } from 'react';
import { FilterType } from '@src/types';

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
	selectedOptions: string[];
	updateIsOpen: () => void;
	handleFilterChange: (
		filterType: FilterType,
		updatedSelection: string[]
	) => void;
}) => {
	{
		/* open={filter.isDropdownOpen} */
	}

	const handleCheckboxChange = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		let updatedFilterValues;
		if (target.checked) {
			updatedFilterValues = [...selectedOptions, target.value];
		} else {
			updatedFilterValues = selectedOptions.filter(
				i => i !== target.value
			);
		}
		handleFilterChange(filterType, updatedFilterValues);
	};

	return (
		<details className="py-3 group" onChange={updateIsOpen}>
			<summary
				className="flex justify-between items-center
			group-open:after:content-['−'] after:content-['+'] after:text-2xl
			after:-translate-y-0.5"
			>
				{filterLabel} ({selectedOptions.length}/{filterOptions.length})
			</summary>
			<div className="flex flex-col gap-y-1 pt-1">
				{filterOptions.map(option => (
					<div key={option} className="flex px-2 gap-x-2">
						<input
							type={'checkbox'}
							name={filterLabel}
							value={option}
							checked={selectedOptions.includes(option)}
							onChange={handleCheckboxChange}
						/>
						<label htmlFor={filterLabel}>{option}</label>
					</div>
				))}
			</div>
		</details>
	);
};
