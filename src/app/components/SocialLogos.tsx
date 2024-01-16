import { TouchableLink } from '@src/app/components/navigation/TouchableLink';
import { data, getInfoLink, getInfoSvg } from '@src/res/data';
import { InfoType } from '@src/types';

export const SocialLogos = ({ classes }: { classes: string }) => {
	const infoEntries = Object.entries(data.info) as [InfoType, string][];

	return (
		<div className={classes}>
			{infoEntries
				.filter(
					([key, value]) =>
						key === 'emailAddress' ||
						key === 'linkedInUser' ||
						key === 'gitHubUser'
				)
				.sort(([keyA, valueA], [keyB, valueB]) =>
					keyA < keyB ? 1 : -1
				)
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
	);
};
