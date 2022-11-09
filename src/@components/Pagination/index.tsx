import Select from '@components/Select'
import {IMeta} from '@interface/common.interface'
import {memo, useEffect, useState} from 'react'

interface IPaginationProps {
  meta: IMeta
  pageNeighbours?: number
  onPageChanged?: (metaData: IMeta) => void
  isLimitChangeable?: boolean
}

const limitOption = [{value: 10}, {value: 20}, {value: 30}, {value: 40}, {value: 50}]

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (from, to, step = 1) => {
  let i = from
  const range = []
  while (i <= to) {
    range.push(i)
    i += step
  }
  return range
}

const Pagination = ({
  meta,
  pageNeighbours = 1,
  isLimitChangeable = true,
  onPageChanged,
}: IPaginationProps) => {
  // const [totalPages, setTotalPages] = useState(Math.ceil(totalRecords / pageLimit))
  const [currentPage, setCurrentPage] = useState<number>(meta?.offset || 0)
  const [limit, setLimit] = useState<number>(meta?.limit || 10)
  const totalPages: number = meta?.totalPageCount
  const pageLimit: number = meta?.limit
  const totalRecords: number = meta?.totalRecords

  useEffect(() => {
    setCurrentPage(meta?.offset + 1)
  }, [meta?.offset])

  const gotoPage = (page) => {
    const currentPage = Math.max(0, Math.min(page, totalPages))
    setCurrentPage(currentPage)
    onPageChanged && onPageChanged({...meta, offset: currentPage - 1})
  }

  const onLimitChange = (e) => {
    setLimit(e.target.value)
    onPageChanged &&
      onPageChanged({
        ...meta,
        offset: 0,
        limit: +e.target.value,
      })
  }

  const handleClick = (page, evt) => {
    evt.preventDefault()
    gotoPage(page)
  }

  const handleMoveLeft = (evt) => {
    evt.preventDefault()
    gotoPage(currentPage - pageNeighbours * 2 - 1)
  }

  const handleMoveRight = (evt) => {
    evt.preventDefault()
    gotoPage(currentPage + pageNeighbours * 2 + 1)
  }

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      let pages = []

      const leftBound = currentPage - pageNeighbours
      const rightBound = currentPage + pageNeighbours
      const beforeLastPage = totalPages - 1

      const startPage = leftBound > 2 ? leftBound : 2
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage

      pages = range(startPage, endPage)

      const pagesCount = pages.length
      const singleSpillOffset = totalNumbers - pagesCount - 1

      const leftSpill = startPage > 2
      const rightSpill = endPage < beforeLastPage

      const leftSpillPage = LEFT_PAGE
      const rightSpillPage = RIGHT_PAGE

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1)
        pages = [leftSpillPage, ...extraPages, ...pages]
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset)
        pages = [...pages, ...extraPages, rightSpillPage]
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage]
      }

      return [1, ...pages, totalPages]
    }
    return range(1, totalPages)
  }

  if (!totalRecords) return null
  if (totalPages === 1) return null
  const pages = fetchPageNumbers()

  return (
    <div className='row'>
      <div className='col-md-6 d-flex align-items-center gap-3'>
        {isLimitChangeable && (
          <Select
            options={limitOption}
            textKey='value'
            valueKey='value'
            value={limit}
            acceptNull={false}
            noMargin
            onChange={onLimitChange}
          />
        )}
        <span>
          Showing {currentPage * pageLimit + 1 - pageLimit} to {currentPage * pageLimit} of{' '}
          {totalRecords} entries
        </span>
      </div>
      <nav className='col-md-6 d-flex align-items-center justify-content-end'>
        <ul className='pagination'>
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <li key={index} className='page-item'>
                  <a className='page-link' href='#' aria-label='Previous' onClick={handleMoveLeft}>
                    <span aria-hidden='true'>&laquo;</span>
                    <span className='sr-only'>Previous</span>
                  </a>
                </li>
              )

            if (page === RIGHT_PAGE)
              return (
                <li key={index} className='page-item'>
                  <a className='page-link' href='#' aria-label='Next' onClick={handleMoveRight}>
                    <span aria-hidden='true'>&raquo;</span>
                    <span className='sr-only'>Next</span>
                  </a>
                </li>
              )

            return (
              <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                <a className='page-link' href='#' onClick={(e) => handleClick(page, e)}>
                  {page}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default memo(Pagination)
