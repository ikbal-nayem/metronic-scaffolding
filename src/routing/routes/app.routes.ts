import {DASHBOARD} from '@constants/internal-route.constant'
import {IAppRoutes} from '@interface/common.interface'
// import {Overview} from '@modules/profile/components/Overview'
import {lazy} from 'react'

const Dashboard = lazy(() => import('pages/dashboard/DashboardWrapper'))
const StoreList = lazy(() => import('@modules/store/store-list'))
const StoreDetails = lazy(() => import('@modules/store/store-details'))
const Error404 = lazy(() => import('pages/errors/components/Error404'))

export const AppRouteList: IAppRoutes[] = [
  {
    link: 'dashboard',
    element: Dashboard,
  },
  {
    link: 'store/*',
    childrens: [
      {
        link: '',
        element: StoreList,
      },
      {
        link: ':id',
        element: StoreDetails,
      },
    ],
  },
  {
    link: 'auth/*',
    redirect: DASHBOARD,
  },
  {
    link: '*',
    element: Error404,
  },
]
