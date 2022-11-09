interface IENV {
	env: string;
	ApiEndpoint: string;
	AdminURL?: string;
	HostName?: string;
	LandingPageURL?: string;
	IMAGE_BASE_URL?: string;
}

export const ENV: IENV = {
	env: process.env.REACT_APP_ENV || "",
	ApiEndpoint: process.env.REACT_APP_BASE_URL || "",
	HostName: process.env.REACT_APP_HOST_NAME || "",
	AdminURL: process.env.REACT_APP_ADMIN_URL || "",
	LandingPageURL: process.env.REACT_APP_LANDING_PAGE || "",
	IMAGE_BASE_URL: process.env.REACT_APP_IMAGE_BASE_URL || "",
};
