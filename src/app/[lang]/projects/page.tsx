'use client';
import { useState } from 'react';
import { Filters, PageParams, Project, SelectedOptions } from '@src/types';
import { getDictionaries } from '@src/res/dictionaries';
import { FilterSidebar } from '@src/app/components/projects/FilterSidebar';
import { projects } from '@src/res/projects';
import { ProjectsGrid } from '@src/app/components/projects/ProjectsGrid';
import { useMobileState } from '@src/app/utils';
import { SortFilterButtons } from '@src/app/components/projects/SortFilterButtons';

export default function Projects({ params }: { params: PageParams }) {
	//==========================================================================
	// GET ENTRIES FROM THE DICTIONARY IN THE RIGHT LANGUAGE
	//==========================================================================
	const {
		sortLabels,
		filterButton,
		expandAllButton,
		collapseAllButton,
		filtersLabels,
	} = getDictionaries()[params.lang].projects.pageContent;

	//==========================================================================
	// TRACK THE FILTERS' SELECTED OPTIONS AND OPENING STATUS OF ITS DROPDOWNS
	//==========================================================================
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
					'date',
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

	//==========================================================================
	// TRACK THE DISPLAYING OF THE FILTER SIDEBAR AND THE OPENING OF ITS MODAL
	//==========================================================================
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const isMobile = useMobileState(1100, [
		{ callback: setIsFilterModalOpen, args: false },
	]);

	const toggleFilterModal = () => {
		setIsFilterModalOpen(!isFilterModalOpen);
	};

	//==========================================================================
	// TRACK THE SORTING CRITERIA
	//==========================================================================
	const [sortBy, setSortBy] = useState('');

	//==========================================================================
	// GET THE FILTERED AND SORTED PROJECTS
	//==========================================================================
	const getFilteredSortedProjects = (selectedOptions: SelectedOptions) => {
		const filteredProjects = projects.filter(project => {
			const selectedOptionsArray = Object.entries(selectedOptions) as [
				keyof Filters,
				SelectedOptions[keyof Filters],
			][];

			return selectedOptionsArray.every(([filterType, { selected }]) => {
				if (!selected || selected.length === 0) {
					return true;
				}
				if (filterType === 'date') {
					return project[filterType]?.some(value =>
						(selected as string[]).includes(value.substring(0, 4))
					);
				}
				return project[filterType]?.some(value =>
					(selected as string[]).includes(value)
				);
			});
		});
		if (!sortBy.length) {
			return filteredProjects;
		}
		return filteredProjects.sort((a, b) => {
			const getDate = (project: Project) =>
				new Date(project.date?.[0] || '2000-01');

			switch (sortBy) {
				case 'newest':
					return getDate(a) < getDate(b) ? 1 : -1;
				case 'oldest':
					return getDate(a) < getDate(b) ? -1 : 1;
				default:
					return 0;
			}
		});
	};

	return (
		<>
			<SortFilterButtons
				{...{
					filterButton,
					sortLabels,
					toggleFilterModal,
					setSortBy,
				}}
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
					filteredProjects={getFilteredSortedProjects(
						selectedOptions
					)}
					display={!isMobile || !isFilterModalOpen}
				/>
			</div>
		</>
	);
}
