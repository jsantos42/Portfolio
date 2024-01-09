import { SortLabel } from '@src/types';

export const SortFilterButtons = ({
	sortTitle,
	filterButton,
	sortLabels,
	toggleFilterModal,
}: {
	sortTitle: string;
	filterButton: string;
	sortLabels: { [label in SortLabel]: string };
	toggleFilterModal: () => void;
}) => {
	return (
		<div className="flex gap-x-4 px-4 py-2 sticky top-nav text-sm h-sortFilterHeight z-10 bg-theme">
			<button
				className="bg-teal-800 rounded-md w-2/5"
				onClick={toggleFilterModal}
			>
				{filterButton}
			</button>
			<select
				className="bg-transparent w-3/5 text-center border-2 border-stone-700 rounded-md"
				defaultValue={''}
			>
				<option disabled={true} value="">
					{sortTitle}
				</option>
				{Object.entries(sortLabels).map(([key, value]) => (
					<option key={key} value={key}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
};
