import {PageTitle} from '@context/PageData'
import {FC} from 'react'
import {useIntl} from 'react-intl'
import DailyStoreCreate from './components/DailyStoreCreate'
import StoreCount from './components/StoreCount'

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <div className='row'>
        <div className='col-xxl-4 col-md-6 col-12 d-flex align-items-stretch'>
          <StoreCount />
        </div>
        <div className='col-xxl-8 col-md-6 col-12 d-flex align-items-stretch'>
          <DailyStoreCreate />
        </div>
      </div>
    </>
  )
}

export default DashboardWrapper
