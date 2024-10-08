import { InfoType } from '@src/types';

export const phoneSvg = (info: InfoType) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.031 290.031">
			<path
				d="M45.395 271.896c11.846 11.847 28.588 18.115 48.402 18.115
			39.641 0 89.543-25.276 130.232-65.964 29.127-29.126 50.531-62.819
			60.27-94.872 10.721-35.286 6.307-65.038-12.433-83.775L230.878
			4.413c-5.857-5.858-15.355-5.858-21.213 0l-61.366 61.363a15.001
			15.001 0 0 0 0 21.213l30.445 30.445-61.354
			61.353-30.445-30.445c-5.858-5.857-15.355-5.857-21.213.001l-61.34
			61.339c-5.857 5.858-5.857 15.355 0 21.213l41.003 41.001z"
			/>
			<title>{info + 'Icon'}</title>
		</svg>
	);
};

export const emailSvg = (info: InfoType) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={30}
			height={30}
		>
			<path
				fill="rgba(var(--foreground-rgb))"
				d="M12.69 12.06a1 1 0 0 1-1.34 0L2.87 4.35A2 2 0 0 1 4 4h16a2 2
				0 0 1 1.13.35Z"
			/>
			<path
				fill="rgba(var(--foreground-rgb))"
				d="M22 6.26V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6.26l8.68 7.92a2 2
				0 0 0 1.32.49 2 2 0 0 0 1.33-.51Z"
			/>
			<title>{info + 'Icon'}</title>
		</svg>
	);
};

export const linkedInSvg = (info: InfoType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={30}
		height={30}
		viewBox="0 0 54 54"
	>
		<path
			d="M49.265 4.667H7.145c-2.016 0-3.651 1.596-3.651 3.563v42.613c0
			1.966 1.635 3.562 3.651 3.562h42.12c2.019 0 3.654-1.597
			3.654-3.562V8.23c0-1.968-1.636-3.563-3.654-3.563zm-30.79
			41.637H11.01V23.845h7.465v22.459zm-3.732-25.527h-.05c-2.504
			0-4.124-1.725-4.124-3.88 0-2.203 1.67-3.88 4.223-3.88 2.554 0 4.125
			1.677 4.175 3.88 0 2.155-1.622 3.88-4.224 3.88zm30.651
			25.527h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078-2.062 0-3.29
			1.389-3.831 2.731-.197.479-.245 1.149-.245
			1.821v12.543h-7.465s.098-20.354 0-22.459h7.465v3.179c.992-1.53
			2.766-3.709 6.729-3.709 4.911 0 8.594 3.211 8.594 10.11v12.88z"
			fill="rgba(var(--foreground-rgb))"
		/>
		<title>{info + 'Icon'}</title>
	</svg>
);

export const gitHubSvg = (info: InfoType) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={30}
		height={30}
		viewBox="-1163 1657.697 56.693 56.693"
	>
		<path
			d="M-1134.66 1662.916c-13.6 0-24.63 11.027-24.63 24.63 0 10.882
			7.057 20.115 16.844 23.371 1.23.228 1.683-.534 1.683-1.184
			0-.587-.023-2.528-.034-4.586-6.852
			1.49-8.298-2.906-8.298-2.906-1.12-2.847-2.734-3.604-2.734-3.604-2.235-1.529.168-1.497.168-1.497
			2.473.173 3.776 2.538 3.776 2.538 2.196 3.765 5.761 2.677 7.167
			2.047.221-1.591.86-2.678
			1.564-3.293-5.47-.623-11.222-2.735-11.222-12.172 0-2.69.962-4.886
			2.538-6.611-.256-.62-1.099-3.126.239-6.519 0 0 2.068-.661 6.774
			2.525 1.965-.545 4.072-.82 6.165-.829 2.093.01 4.202.284 6.17.83
			4.701-3.187 6.767-2.526 6.767-2.526 1.34 3.393.497 5.898.241 6.519
			1.58 1.725 2.535 3.922 2.535 6.61 0 9.46-5.762 11.544-11.246
			12.153.883.765 1.67 2.264 1.67 4.561 0 3.296-.028 5.948-.028 6.76 0
			.655.443 1.423 1.691 1.181 9.782-3.26 16.83-12.49 16.83-23.368
			0-13.603-11.027-24.63-24.63-24.63z"
			fill="rgba(var(--foreground-rgb))"
		/>
		<title>{info + 'Icon'}</title>
	</svg>
);
