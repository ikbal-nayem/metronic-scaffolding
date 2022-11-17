import Spinner from '@components/Loader/Spinner'
import {type} from 'os'

type ContentPreloaderProps = {
  loaderText?: string
}

const ContentPreloader = ({loaderText}: ContentPreloaderProps) => {
  const styles = {
    borderRadius: '0.475rem',
    boxShadow: '0 0 50px 0 rgb(82 63 105 / 15%)',
    backgroundColor: '#fff',
    fontWeight: '700',
    margin: '0',
    width: 'auto',
    padding: '1rem 2rem',
    top: 'calc(50% - 2rem)',
    left: 'calc(50% - 4rem)',
  }

  return (
    <div className='text-primary' style={{...styles, position: 'absolute', textAlign: 'center'}}>
      <Spinner text={loaderText ? loaderText : 'Processing...'} />
    </div>
  )
}

export default ContentPreloader
