import { InfoType } from '@src/types';
import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import { data, getInfoLink, getInfoSvg } from '@src/data';

export const Footer = () => {
	const infoEntries = Object.entries(data.info) as [InfoType, string][];
	return (
		<footer className="flex flex-col justify-center items-center bg-[#0b387d] h-footer text-theme text-center">
			<div className="flex justify-center items-end w-full">
				{infoEntries
					.filter(
						([key, value]) =>
							key === 'emailAddress' ||
							key === 'linkedInUser' ||
							key === 'gitHubUser'
					)
					.sort(([keyA, valueA], [keyB, valueB]) => keyA < keyB ? 1 : -1)
					.map(([key, value]) => (
						<TouchableLink
							key={key}
							href={getInfoLink(key, value)}
							inNewWindow={true}
						>
							{getInfoSvg(key)}
						</TouchableLink>
					))}
			</div>
			<p className="py-2 font-bold">
				© {new Date().getFullYear()} {data.name}
			</p>
		</footer>
	);
};
