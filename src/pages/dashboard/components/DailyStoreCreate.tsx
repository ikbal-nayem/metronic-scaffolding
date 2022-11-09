/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, memo} from 'react'

type Props = {
  chartSize?: number
  chartLine?: number
  chartRotate?: number
}


const DailyStoreCreate: FC<Props> = () => {
  return <div className='card mb-4 p-5 w-100'></div>
}

export default memo(DailyStoreCreate)
