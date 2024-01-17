import { Filters, ProjectFiltersDict, SelectedOptions } from '@src/types';
import { FilterDropdown } from '@src/app/components/projects/FilterDropdown';
import {
	db,
	fields,
	frameworks,
	languages,
	stylingFrameworks,
	testingFrameworks,
	years,
} from '@src/res/projects';
import { useEffect } from 'react';
import { preventScroll } from '@src/app/utils';

export const FilterSidebar = ({
	isMobile,
	expandAllButton,
	collapseAllButton,
	filtersLabels,
	selectedOptions,
	setSelectedOptions,
}: {
	isMobile: boolean;
	expandAllButton: string;
	collapseAllButton: string;
	filtersLabels: ProjectFiltersDict;
	selectedOptions: SelectedOptions;
	setSelectedOptions: (updatedSelectedOptions: SelectedOptions) => void;
}) => {
	const filters: Filters = {
		field: fields,
		language: languages,
		framework: frameworks,
		styling: stylingFrameworks,
		db: db,
		testingFramework: testingFrameworks,
		date: years,
	};

	useEffect(() => {
		if (isMobile) {
			return preventScroll();
		}
	});

	const toggleAllFilters = (openingState: boolean) => {
		const updatedSelectedOptions = (
			Object.keys(selectedOptions) as (keyof Filters)[]
		).reduce((acc, key) => {
			// @ts-ignore
			acc[key] = {
				...selectedOptions[key],
				isDropdownOpen: openingState,
			};
			return acc;
		}, {} as SelectedOptions);

		setSelectedOptions(updatedSelectedOptions);
	};

	const handleFilterChange = (
		filterType: keyof Filters,
		updatedSelection: SelectedOptions[keyof Filters]
	) => {
		setSelectedOptions({
			...selectedOptions,
			[filterType]: updatedSelection,
		});
	};

	// Note that overscroll-contain here is key to avoid scrolling the overlaid
	// layer (in this case, the projects grid)!
	return (
		<div
			className={`${
				isMobile
					? 'w-full h-full fixed flex z-20 bg-theme animate-fadeInFromLeft'
					: ''
			}`}
		>
			<div
				className="sticky top-sortFilterBar w-full max-h-sidebar p-4
				flex flex-col text-sm antialiased overflow-scroll
				overscroll-contain hideScrollBars"
			>
				<div
					className="w-sidebar flex justify-between gap-x-2
					font-semibold tracking-wide"
				>
					{[true, false].map(willBeOpen => (
						<button
							key={willBeOpen.toString()}
							className="w-full h-8 text-primary"
							onClick={() => toggleAllFilters(willBeOpen)}
						>
							{willBeOpen ? expandAllButton : collapseAllButton}
						</button>
					))}
				</div>
				<div className="w-sidebar divide-y divide-theme">
					{(
						Object.entries(filters) as [
							keyof Filters,
							Filters[keyof Filters],
						][]
					).map(([filterType, filterOptions]) => {
						return (
							<FilterDropdown
								key={filterType}
								filterLabel={filtersLabels[filterType]}
								filterSelectedOptions={
									selectedOptions[filterType]
								}
								{...{
									filterType,
									filterOptions,
									handleFilterChange,
								}}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
