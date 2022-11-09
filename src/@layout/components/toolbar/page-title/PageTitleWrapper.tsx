import {useLayout} from '../../../core'
import {PageTitle} from './PageTitle'

const PageTitleWrapper = () => {
  const {config} = useLayout()
  if (!config.app?.pageTitle?.display) {
    return null
  }

  return (
    <div className='mb-8'>
      <PageTitle />
    </div>
  )
}

export {PageTitleWrapper}
