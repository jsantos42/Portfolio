import { SortLabel } from '@src/types';

export const SortFilterButtons = ({
	filterButton,
	sortLabels,
	toggleFilterModal,
	setSortBy,
}: {
	filterButton: string;
	sortLabels: { [label in SortLabel]: string };
	toggleFilterModal: () => void;
	setSortBy: (method: string) => void;
}) => {
	return (
		<div
			className="h-sortFilterBar sticky top-nav px-4 py-2 z-10 flex
				justify-between gap-x-4 text-sm bg-theme"
		>
			<button
				className="min-w-[92px] rounded-md bg-primary text-contrast font-semibold tracking-wide"
				onClick={toggleFilterModal}
			>
				{filterButton}
			</button>
			<select
				className="min-w-[140px] bg-transparent text-center border-2
					border-stone-700 rounded-md"
				defaultValue={''}
				onChange={e => setSortBy(e.target.value)}
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
