import {ITableHeadColumn, TableHead} from './TableHead'

type TableProps = {
  columns?: ITableHeadColumn[]
  children?: JSX.Element | JSX.Element[]
}

export const Table = ({columns, children}: TableProps) => {
  return (
    <div className='table-responsive'>
      <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
        <TableHead columns={columns} />
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
