interface ITabBlock {
  children?: JSX.Element | JSX.Element[] | string | any
  activeIndex: number
  index: number
}

const TabBlock = ({children, activeIndex, index}: ITabBlock) => {
  if (activeIndex !== index) return null
  return children
}

export default TabBlock
