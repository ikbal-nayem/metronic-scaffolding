import {AbilityProvider} from '@context/Can'
import {AuthProvider} from '@modules/auth'
import 'assets/sass/plugins.scss'
import 'assets/sass/style.react.scss'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import 'assets/sass/style.scss'
import 'react-toastify/dist/ReactToastify.css'
// Axios
// import axios from 'axios'
import {createRoot} from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ToastContainer} from 'react-toastify'
import {AppRoutes} from 'routing/AppRoutes'
// Apps
import {WebxI18nProvider} from './@context/Webxi18n'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
// setupAxios(axios)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <WebxI18nProvider>
        <AuthProvider>
          <AbilityProvider>
            <AppRoutes />
          </AbilityProvider>
        </AuthProvider>
      </WebxI18nProvider>
      <ToastContainer
        position='bottom-right'
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme='colored'
      />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}
