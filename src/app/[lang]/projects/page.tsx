'use client';
import { Filter, FilterType, PageParams } from '@src/types';
import { getDictionaries } from '@src/res/dictionaries';
import { useEffect, useState } from 'react';
import { FilterSidebar } from '@src/app/components/projects/FilterSidebar';
import { projects } from '@src/res/projects';
import { ProjectsGrid } from '@src/app/components/projects/ProjectsGrid';

export default function Projects({ params }: { params: PageParams }) {
	const { filtersTitle, filtersLabels } =
		getDictionaries()[params.lang].projects.pageContent;

	// We should initialize selectedOptions with empty arrays for each filter
	// type. This way, initially, no filters will be applied, and all projects
	// will be shown. Filters should only start applying when the user selects
	// specific options.
	const [selectedOptions, setSelectedOptions] = useState({
		field: [],
		language: [],
		framework: [],
		styling: [],
		db: [],
		testingFramework: [],
		year: [],
	});

	const MOBILE_THRESHOLD = 768; // CHANGE THIS
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < MOBILE_THRESHOLD
	);
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

	const toggleFilterModal = () => {
		setIsFilterModalOpen(!isFilterModalOpen);
	};

	// consider extract duplicated code from Navigation.tsx
	useEffect(() => {
		const handleResizing = (e: UIEvent) => {
			const width = (e.target as Window).innerWidth;
			const shouldBeMobile = width < MOBILE_THRESHOLD;
			if (shouldBeMobile !== isMobile) {
				setIsMobile(shouldBeMobile);
				setIsFilterModalOpen(false);
			}
		};

		window.addEventListener('resize', handleResizing);

		// Cleanup function of useEffect(). In this case, it removes the event
		// listener when the component unmounts, to prevent memory leaks
		return () => {
			window.removeEventListener('resize', handleResizing);
		};
	});

	const handleFilterChange = (
		filterType: FilterType,
		updatedSelection: string[]
	) => {
		setSelectedOptions(prevState => ({
			...prevState,
			[filterType]: updatedSelection,
		}));
	};

	return (
		<>
			{isMobile ? (
				<button onClick={toggleFilterModal}>Toggle</button>
			) : null}
			<div className="flex">
				{!isMobile || isFilterModalOpen ? (
					<FilterSidebar
						{...{
							filtersTitle,
							filtersLabels,
							selectedOptions,
							handleFilterChange,
						}}
					/>
				) : null}
				<ProjectsGrid
					filteredProjects={getFilteredProjects(selectedOptions)}
				/>
			</div>
		</>
	);
}

const getFilteredProjects = (selectedOptions: Filter) =>
	projects.filter(project =>
		Object.entries(selectedOptions).every(
			([filterType, filterSelectedOptions]) => {
				if (
					!filterSelectedOptions ||
					filterSelectedOptions.length === 0
				) {
					return true;
				}
				return project[filterType as FilterType]?.some(
					value => filterSelectedOptions?.includes(value)
				);
			}
		)
	);
