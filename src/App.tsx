import {LayoutProvider, LayoutSplashScreen} from '@layout/core'
import 'material-icons/iconfont/material-icons.css'
import {MasterInit} from '@layout/MasterInit'
import {I18nProvider} from 'i18n/i18nProvider'
import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <Outlet />
          <MasterInit />
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
