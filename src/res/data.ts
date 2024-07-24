import { Data, InfoType } from '@src/types';
import { emailSvg, gitHubSvg, linkedInSvg, phoneSvg } from '@src/res/svg';

export const data: Data = {
	name: process.env.NEXT_PUBLIC_MY_NAME || '',
	info: {
		phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '',
		emailAddress: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || '',
		linkedInUser: process.env.NEXT_PUBLIC_LINKEDIN_USER || '',
		gitHubUser: process.env.NEXT_PUBLIC_GITHUB_USER || '',
		website: process.env.NEXT_PUBLIC_WEBSITE || '',
	},
};

export const getInfoSvg = (info: InfoType) => {
	switch (info) {
		case 'phoneNumber':
			return phoneSvg(info);
		case 'emailAddress':
			return emailSvg(info);
		case 'linkedInUser':
			return linkedInSvg(info);
		case 'gitHubUser':
			return gitHubSvg(info);
		// case 'website':
		// 	return websiteSvg(info);
		default:
			return null;
	}
};

export const getInfoLink = (info: InfoType, data: string) => {
	switch (info) {
		case 'phoneNumber':
			return 'tel:' + data;
		case 'emailAddress':
			return 'mailTo:' + data;
		case 'linkedInUser':
			return `https://www.linkedin.com/in/${data}/`;
		case 'gitHubUser':
			return `https://github.com/${data}`;
		case 'website':
			return `https://${data}`;
	}
};
