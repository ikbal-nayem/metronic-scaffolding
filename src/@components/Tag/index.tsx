import {IColors} from '@interface/common.interface'

type ITagProps = {
  title: string
  color?: IColors
  size?: 'sm' | 'md'
}

const Tag = ({title, color = 'primary', size = 'sm'}: ITagProps) => {
  return (
    <span
      className={`badge badge-light-${color} ${size === 'md' ? 'fw-bolder px-4 py-3' : ''}`}
      style={{width: 'fit-content'}}
    >
      {title}
    </span>
  )
}

export default Tag
