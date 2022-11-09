import {TableCell} from './TableCell'

export interface ITableHeadColumn {
  title?: string | number
  renderItem?: Function
  width?: number
  minWidth?: number
  align?: 'left' | 'center' | 'right'
}

type TableHeadProps = {
  columns: ITableHeadColumn[]
}

export const TableHead = ({columns}: TableHeadProps) => {
  return (
    <thead>
      <tr className='fw-bold text-muted'>
        {columns?.map((col, i) => (
          <TableCell
            width={col?.width}
            minWidth={col?.minWidth}
            textEnd={col?.align === 'right'}
            textCenter={col?.align === 'center'}
            head
            key={i}
          >
            {col?.renderItem ? col.renderItem() : col?.title}
          </TableCell>
        ))}
      </tr>
    </thead>
  )
}
