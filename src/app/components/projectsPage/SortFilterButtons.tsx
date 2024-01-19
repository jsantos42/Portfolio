import { SortCriteria } from '@src/types';

export const SortFilterButtons = ({
	isMobile,
	isFilterModalOpen,
	projectsCount,
	filterButton,
	filterResultsLabel,
	applyFiltersButton,
	sortLabels,
	toggleFilterModal,
	setSortBy,
}: {
	isMobile: boolean;
	isFilterModalOpen: boolean;
	projectsCount: number;
	filterResultsLabel: string;
	filterButton: string;
	applyFiltersButton: string;
	sortLabels: { [label in SortCriteria]: string };
	toggleFilterModal: () => void;
	setSortBy: (method: SortCriteria) => void;
}) => {
	return (
		<div
			className="h-sortFilterBar sticky top-nav px-4 py-2 z-10 flex
			gap-x-4 text-sm bg-theme justify-between antialiased"
		>
			{isMobile ? (
				<button
					className="min-w-[92px] rounded-md bg-primary text-contrast
					font-semibold tracking-wide"
					onClick={toggleFilterModal}
				>
					{isFilterModalOpen ? applyFiltersButton : filterButton}
				</button>
			) : (
				<div
					className="w-sidebar flex justify-center items-end
				text-base font-semibold tracking-wide"
				>
					{filterResultsLabel}: {projectsCount}
				</div>
			)}
			<select
				className="min-w-[140px] bg-transparent text-center border-2
					border-stone-700 rounded-md"
				defaultValue={''}
				onChange={e => setSortBy(e.target.value as SortCriteria)}
			>
				{Object.entries(sortLabels).map(([key, value]) => (
					<option key={key} value={key}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
};
