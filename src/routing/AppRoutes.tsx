import {DASHBOARD, LOGIN} from '@constants/internal-route.constant'
import {useAuth} from '@modules/auth'
import {AuthLayout} from '@modules/auth/AuthLayout'
import {ErrorsPage} from 'pages/errors/ErrorsPage'
import {FC} from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {App} from '../App'
import {PrivateRoutes} from './PrivateRoutes'
import {AuthRoutes} from './routes/auth.routes'

const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  const {isAuthenticated} = useAuth()
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          {/* <Route path='logout' element={<Logout />} /> */}
          {isAuthenticated ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to={DASHBOARD} />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthLayout />}>
                {AuthRoutes.map((r) => (
                  <Route
                    key={r.link}
                    path={r.link}
                    element={r.redirect ? <Navigate to={r.redirect} /> : <r.element />}
                  />
                ))}
                <Route index element={<Navigate to={LOGIN} />} />
              </Route>
              <Route path='*' element={<Navigate to={LOGIN} />} />
            </>
          )}
          <Route path='*' element={<ErrorsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
