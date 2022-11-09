import {memo} from 'react'

type IThumbProps = {
  lable: string
  imgSrc?: string
  size?: number
  variant?: 'circle' | 'square'
  onErrorImage?: string
}

const Thumb = ({lable, imgSrc, size = 50, variant = 'square', onErrorImage}: IThumbProps) => (
  <div className={`symbol ${variant === 'circle' ? 'symbol-circle' : ''} symbol-${size}px`}>
    {imgSrc ? (
      <img
        src={imgSrc}
        alt={lable}
        onError={(ev: any) =>
          (ev.target.src = onErrorImage || 'https://static.thenounproject.com/png/4074782-200.png')
        }
      />
    ) : (
      <div className='symbol-label fs-3 bg-light-dark text-gray'>
        {lable?.[0]?.toLocaleUpperCase()}
      </div>
    )}
  </div>
)

export default memo(Thumb)
