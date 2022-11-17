import Thumb from '@components/Thumb'
import {Link} from 'react-router-dom'

type ITableCellProps = {
  children?: JSX.Element | JSX.Element[] | string | number
  imgSrc?: string
  text?: string
  navigateTo?: string
  subText?: string
  textEnd?: boolean
  textCenter?: boolean
  head?: boolean
  minWidth?: number
  width?: number
}

export const TableCell = ({
  children,
  imgSrc,
  text,
  navigateTo,
  subText,
  textEnd,
  textCenter,
  head,
  minWidth,
  width,
}: ITableCellProps) => {
  const TTag = ({children}) =>
    head ? (
      <th
        className={`${width ? `w-${width}px` : ''} ${minWidth ? `min-w-${minWidth}px` : ''} ${
          textEnd ? 'text-end' : textCenter ? 'text-center' : ''
        }`}
      >
        {children}
      </th>
    ) : (
      <td>{children}</td>
    )
  return (
    <TTag>
      {children ? (
        children
      ) : (
        <div
          className={`d-flex align-items-center ${
            textEnd
              ? 'justify-content-end text-end'
              : textCenter
              ? 'justify-content-center text-center'
              : ''
          }`}
        >
          {imgSrc ? (
            <div className='symbol symbol-45px me-5'>
              <Thumb imgSrc={imgSrc} lable={text} />
            </div>
          ) : null}
          <div className='d-flex justify-content-start flex-column'>
            {navigateTo ? (
              <Link to={navigateTo} className='text-dark fw-bold text-hover-primary fs-6'>
                {text}
              </Link>
            ) : (
              <div className='text-dark fs-6'>{text}</div>
            )}
            {subText ? (
              <span className='text-muted fw-semibold text-muted d-block fs-7'>{subText}</span>
            ) : null}
          </div>
        </div>
      )}
    </TTag>
  )
}
