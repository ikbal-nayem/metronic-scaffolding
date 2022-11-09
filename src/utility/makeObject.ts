export const searchParamsToObject = (searchParams) => {
	let params = {};
	searchParams.forEach(
    (item: string, key: string) =>
      item !== '' && item !== 'null' && item !== 'undefined' && (params[key] = item)
  )
	return params;
};
