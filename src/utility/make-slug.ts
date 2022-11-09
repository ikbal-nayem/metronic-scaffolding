const makeSlug = (str: string = '') => {
  str = str?.trim()
  str = str?.toLowerCase()
  str = str
    // eslint-disable-next-line
    ?.replace(/[_!`'"#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]/g, '')
    ?.replace(/\s+/g, '-') // collapse whitespace and replace by -
    ?.replace(/-+/g, '-') // collapse dashes

  if (str.charAt(0) === '-') str = str.slice(1)
  if (str?.charAt(str?.length - 1) === '-') str = str?.slice(0, -1)
  return str
}

export const makeEnSlug = (str: string = '') => {
  str = str?.replace(/^\s+|\s+$/g, '') // trim
  str = str?.toLowerCase()
  str = str
    ?.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    ?.replace(/\s+/g, '-') // collapse whitespace and replace by -
    ?.replace(/-+/g, '-') // collapse dashes
  if (str.charAt(0) === '-') str = str.slice(1)
  if (str?.charAt(str?.length - 1) === '-') str = str?.slice(0, -1)
  return str
}

export default makeSlug
