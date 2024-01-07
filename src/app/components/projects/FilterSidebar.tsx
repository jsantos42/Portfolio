import { Filter, FilterType, ProjectFiltersDict } from '@src/types';
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

export const FilterSidebar = ({
	filtersTitle,
	filtersLabels,
	selectedOptions,
	handleFilterChange,
}: {
	filtersTitle: string;
	filtersLabels: ProjectFiltersDict;
	selectedOptions: Filter;
	handleFilterChange: (
		filterType: keyof Filter,
		updatedSelection: string[]
	) => void;
}) => {
	const filters: Filter = {
		field: fields,
		language: languages,
		framework: frameworks,
		styling: stylingFrameworks,
		db: db,
		testingFramework: testingFrameworks,
		year: years,
	};
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

	const updateIsOpen = () => {
		// isOpen = !isOpen;
	};

	return (
		<div className="w-1/4 border-2 p-3">
			{/*<div className="w-1/4 min-h-sidebar max-h-sidebar border-2 p-3 overflow-scroll">*/}
			<h1 className="font-bold text-2xl py-3">{filtersTitle}</h1>
			<div className="flex justify-between">
				<button onClick={() => toggleAllFilters(true)}>
					Expand All
				</button>
				<button onClick={() => toggleAllFilters(false)}>
					Collapse All
				</button>
			</div>
			<div className="divide-y-2">
				{Object.entries(filters).map(([filterType, filterOptions]) => {
					return (
						<FilterDropdown
							key={filterType}
							filterLabel={
								filtersLabels[filterType as FilterType]
							}
							selectedOptions={
								selectedOptions[filterType as FilterType]
							}
							{...{
								filterType,
								filterOptions,
								updateIsOpen,
								handleFilterChange,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};
