import {ISizes} from '@interface/common.interface'

type SpinnerProps = {
  text?: string
  size?: ISizes
}

const Spinner = ({text, size = 'md'}: SpinnerProps) => {
  return (
    <span className='indicator-progress' style={{display: 'block'}}>
      {text || 'Processing...'}
      <span className={`spinner-border spinner-border-${size} align-middle ms-2`}></span>
    </span>
  )
}

export default Spinner
