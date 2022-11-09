/* eslint-disable jsx-a11y/anchor-is-valid */
import Alert from '@components/Alert'
import Button from '@components/Button'
import Input from '@components/Input'
import {DASHBOARD} from '@constants/internal-route.constant'
import {AuthService} from '@services/api/Auth.service'
import {useFormik} from 'formik'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import {useAuth} from '@context/Auth'

const loginSchema = Yup.object().shape({
  userName: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  userName: '',
  password: '',
}

const Login = () => {
  const [loading, setLoading] = useState(false)
  const {saveAuth} = useAuth()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      AuthService.login(values)
        .then((res) => {
          saveAuth(res?.header, res?.body)
          navigate(DASHBOARD)
          // const permission = [
          //   {action: 'auth', subject: 'read'},
          //   {action: 'user', subject: 'read'},
          // ]
          // LocalStorageService.set('ability', permission)
          // ability.update(permission)
        })
        .catch((err) => {
          saveAuth(undefined, undefined)
          setStatus(err?.message)
        })
        .finally(() => {
          setSubmitting(false)
          setLoading(false)
        })
    },
  })

  return (
    <form className='form w-100' onSubmit={formik.handleSubmit} noValidate id='webx-admin-login'>
      <div className='text-center mb-11'>
        <h1 className='text-dark fw-bolder mb-3'>Login</h1>
        <div className='text-gray-500 fw-semibold fs-6'>Webx admin panel</div>
      </div>

      {!!formik.status && <Alert type='danger'>{formik.status}</Alert>}

      <div className='fv-row mb-8'>
        <Input
          label='Email'
          autoFocus
          placeholder='Email'
          type='email'
          size='md'
          isError={formik.touched.userName && !!formik.errors.userName}
          errorMessage={formik.errors.userName}
          registerProperty={{...formik.getFieldProps('userName')}}
        />
      </div>

      <div className='fv-row mb-3'>
        <Input
          label='Password'
          placeholder='Password'
          type='password'
          size='md'
          isError={formik.touched.password && !!formik.errors.password}
          errorMessage={formik.errors.password}
          registerProperty={{...formik.getFieldProps('password')}}
        />
      </div>

      {/* <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />
        <Link to='/auth/forgot-password' className='link-primary'>
          Forgot Password ?
        </Link>
      </div> */}

      <div className='d-grid mb-10'>
        <Button type='submit' color='primary' isDisabled={formik.isSubmitting || !formik.isValid}>
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </Button>
      </div>

      {/* <div className='text-gray-500 text-center fw-semibold fs-6'>
        Not a Member yet?{' '}
        <Link to='/auth/registration' className='link-primary'>
          Sign up
        </Link>
      </div> */}
    </form>
  )
}
export default Login
