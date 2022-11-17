export const isBrowser = typeof window !== "undefined";
export const isServer = typeof window == "undefined";

export const SessionStorageService = {
	set: (key: string, value: any): void =>
		sessionStorage.setItem(key, JSON.stringify(value)),
	get: (key: string): any | null =>
		JSON.parse(sessionStorage.getItem(key) || "null"),
	delete: (key: string): void => sessionStorage.removeItem(key),
	clear: (): void => sessionStorage.clear(),
};
