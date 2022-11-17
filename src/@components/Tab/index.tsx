type ITabProps = {
  tabs: {[key: string]: JSX.Element | string | number | boolean}[]
  tabLabelKey: string
  activeIndex: number
  onChange: (idx: number) => void
}

const Tab = ({tabs, tabLabelKey, activeIndex, onChange}: ITabProps) => {
  return (
    <div className='d-flex overflow-auto h-55px'>
      <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
        {tabs?.map((t, i) => (
          <li className='nav-item' key={i} onClick={() => onChange(i)}>
            <span
              className={
                `nav-link text-active-primary cursor-pointer me-6 ` +
                (activeIndex === i && 'active')
              }
            >
              {t?.[tabLabelKey]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tab
