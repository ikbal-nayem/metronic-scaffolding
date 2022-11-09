type TableRowProps = {
  children?: JSX.Element | JSX.Element[]
}

export const TableRow = ({children}: TableRowProps) => <tr>{children}</tr>
