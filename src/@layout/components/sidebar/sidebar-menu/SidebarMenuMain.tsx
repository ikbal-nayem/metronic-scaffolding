/* eslint-disable react/jsx-no-target-blank */
import {DASHBOARD, STORE} from '@constants/internal-route.constant'
import {useIntl} from 'react-intl'
import {SidebarMenuItem} from './SidebarMenuItem'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to={DASHBOARD}
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='dashboard'
      />

      <SidebarMenuItemWithSub to='' title='Store' fontIcon='store'>
        <SidebarMenuItem to={STORE} title='Store list' hasBullet />
      </SidebarMenuItemWithSub>

    </>
  )
}

export {SidebarMenuMain}

