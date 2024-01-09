import {
	Filters,
	FilterType,
	ProjectFiltersDict,
	SelectedOptions,
} from '@src/types';
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
import { useEffect, useRef } from 'react';

export const FilterSidebar = ({
	isMobile,
	filtersTitle,
	filtersLabels,
	selectedOptions,
	handleFilterChange,
}: {
	isMobile: boolean;
	filtersTitle: string;
	filtersLabels: ProjectFiltersDict;
	selectedOptions: SelectedOptions;
	handleFilterChange: (
		filterType: keyof SelectedOptions,
		updatedSelection: string[]
	) => void;
}) => {
	const filters: Filters = {
		field: fields,
		language: languages,
		framework: frameworks,
		styling: stylingFrameworks,
		db: db,
		testingFramework: testingFrameworks,
		year: years,
	};

	// When all the filter dropdowns are closed, the content of the component is
	// not enough to make it scrollable. By adding a dummy div at the end of the
	// content's div, I can ensure that the total height of the parent div
	// exceeds the height of the viewport (by 1 extra pixel), thus making it
	// scrollable. The dummy div's minimum height should be updated whenever the
	// user toggles a filter dropdown
	const dummyDivRef = useRef(null);
	const parentDivRef = useRef(null);
	useEffect(() => {
		if (dummyDivRef.current && parentDivRef.current) {
			const { paddingTop, height } = window.getComputedStyle(
				parentDivRef.current
			);
			const parentHeight = parseInt(height) - parseInt(paddingTop);
			const distanceToParentTop = dummyDivRef.current.offsetTop;
			const EXTRA_PIXEL = 1;

			const minScrollableHeight =
				parentHeight - distanceToParentTop + EXTRA_PIXEL;

			dummyDivRef.current.style.minHeight = `${minScrollableHeight}px`;
		}
		//addDependency of when we toggle each filter
	}, []);

	const toggleAllFilters = (newValue: boolean) => {
		// setFilters(prevFilters => {
		// 	let updatedFilters = {};
		// 	for (let key in prevFilters) {
		// 		updatedFilters[key] = { ...prevFilters[key], isOpen: newValue };
		// 	}
		// 	console.log(updatedFilters);
		// 	return updatedFilters;
		// });
	};

	// Note that overscroll-contain here is key to avoid scrolling the overlaid
	// layer (in this case, the projects grid)!
	return (
		<div className="w-full h-full fixed flex z-20 bg-theme animate-fadeInFromLeft">
			<div
				ref={parentDivRef}
				className="w-full flex flex-col p-4 min-h-sidebarMobile
			max-h-sidebarMobile text-sm overflow-scroll overscroll-contain"
			>
				{isMobile ? null : (
					<h1 className="font-bold text-2xl py-3">{filtersTitle}</h1>
				)}
				<div className="flex justify-between w-[200px]">
					<button onClick={() => toggleAllFilters(true)}>
						Expand All
					</button>
					<button onClick={() => toggleAllFilters(false)}>
						Collapse All
					</button>
				</div>
				<div className="divide-y-2 w-[200px]">
					{Object.entries(filters).map(
						([filterType, filterOptions]) => {
							return (
								<FilterDropdown
									key={filterType}
									filterLabel={
										filtersLabels[filterType as FilterType]
									}
									selectedOptions={
										selectedOptions[
											filterType as FilterType
										]
									}
									{...{
										filterType,
										filterOptions,
										handleFilterChange,
									}}
								/>
							);
						}
					)}
				</div>
				<div ref={dummyDivRef}></div>
			</div>
		</div>
	);
};
