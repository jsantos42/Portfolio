'use client';
import { Filters, PageParams, SelectedOptions } from '@src/types';
import { getDictionaries } from '@src/res/dictionaries';
import { useState } from 'react';
import { FilterSidebar } from '@src/app/components/projects/FilterSidebar';
import { projects } from '@src/res/projects';
import { ProjectsGrid } from '@src/app/components/projects/ProjectsGrid';
import { useMobileState } from '@src/app/utils';
import { SortFilterButtons } from '@src/app/components/projects/SortFilterButtons';

export default function Projects({ params }: { params: PageParams }) {
	const {
		sortButton,
		sortLabels,
		filterButton,
		expandAllButton,
		collapseAllButton,
		filtersLabels,
	} = getDictionaries()[params.lang].projects.pageContent;

	// We should initialize selectedOptions with empty arrays for each filter
	// type. This way, initially, no filters will be applied, and all projects
	// will be shown. Filters should only start applying when the user selects
	// specific options.
	const [selectedOptions, setSelectedOptions] = useState(
		Object.fromEntries(
			(
				[
					'field',
					'language',
					'framework',
					'styling',
					'db',
					'testingFramework',
					'year',
				] as (keyof Filters)[]
			).map(filterType => [
				filterType,
				{
					selected: [] as Filters[typeof filterType],
					isDropdownOpen: false,
				},
			])
		) as SelectedOptions
	);

	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const isMobile = useMobileState(1100, [
		{ callback: setIsFilterModalOpen, args: false },
	]);

	const toggleFilterModal = () => {
		setIsFilterModalOpen(!isFilterModalOpen);
	};

	return (
		<>
			<SortFilterButtons
				{...{ sortButton, filterButton, sortLabels, toggleFilterModal }}
			/>
			<div className="flex">
				{!isMobile || isFilterModalOpen ? (
					<FilterSidebar
						{...{
							isMobile,
							expandAllButton,
							collapseAllButton,
							filtersLabels,
							selectedOptions,
							setSelectedOptions,
						}}
					/>
				) : null}
				<ProjectsGrid
					filteredProjects={getFilteredProjects(selectedOptions)}
					display={!isMobile || !isFilterModalOpen}
				/>
			</div>
		</>
	);
}

const getFilteredProjects = (selectedOptions: SelectedOptions) =>
	projects.filter(project => {
		const selectedOptionsArray = Object.entries(selectedOptions) as [
			keyof Filters,
			SelectedOptions[keyof Filters],
		][];

		return selectedOptionsArray.every(([filterType, { selected }]) => {
			if (!selected || selected.length === 0) {
				return true;
			}
			return project[filterType]?.some(value =>
				(selected as string[]).includes(value)
			);
		});
	});
