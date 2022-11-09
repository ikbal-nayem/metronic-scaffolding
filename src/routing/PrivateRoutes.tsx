import {AUTH} from '@constants/internal-route.constant'
import {useAuth} from '@context/Auth'
import {IAppRoutes} from '@interface/common.interface'
import MasterLayout from '@layout/MasterLayout'
import {getCSSVariableValue} from 'assets/ts/_utils'
import {WithChildren} from 'helpers'
import Error404 from 'pages/errors/components/Error404'
import {FC, Suspense} from 'react'
import {Navigate, Outlet, Route, Routes, useNavigate} from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import {AppRouteList} from './routes/app.routes'

const PrivateRoutes = () => {
  const {isAuthenticated} = useAuth()
  const navigate = useNavigate()
  if (!isAuthenticated) navigate(AUTH)

  const routeList = (routes) => {
    return routes.map((route: IAppRoutes, index: number) => {
      if (route.childrens && route.childrens.length) {
        return (
          <Route
            path={route.link}
            element={
              route.element ? (
                <route.element />
              ) : (
                <>
                  <Outlet />
                </>
              )
            }
            key={index}
          >
            {routeList(route.childrens)}
          </Route>
        )
      }

      return (
        <Route
          path={route.link}
          element={
            route.redirect ? (
              <Navigate to={route.redirect} />
            ) : (
              <SuspensedView>
                <route.element />
              </SuspensedView>
            )
          }
          key={index}
        />
      )
    })
  }
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {routeList(AppRouteList)}
        <Route path='*' element={<Error404 />} />
      </Route>
    </Routes>
  )
}

export const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
