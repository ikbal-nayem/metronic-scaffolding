import Button from '@components/Button'
import Drawer from '@components/Drawer'
import DrawerBody from '@components/Drawer/DrawerBody'
import DrawerFooter from '@components/Drawer/DrawerFooter'
import Input from '@components/Input'
import Label from '@components/Label'
import RadioButton from '@components/RadioButton'
import Select from '@components/Select'
import {useFormik} from 'formik'
import {useState} from 'react'
import {useSearchParams} from 'react-router-dom'


export interface IStoreListFilter {
  searchKey?: string
  createdFrom?: string
  createdTo?: string
  pricingPlanId?: string
  billingCycleId?: string
  storeTypesId?: string
  pricingPlanAutoRenewable?: boolean | null
  isOwnerPhoneVerified?: boolean | null
  isOwnerEmailVerified?: boolean | null
  nextRenewalFrom?: string
  nextRenewalTo?: string
  lastActivityDateFrom?: string
  lastActivityDateTo?: string
  noActivitySince?: string
  referredBy?: string
}

type FilterDrawerProps = {
  onFilter?: (filterData: IStoreListFilter) => void
}

const FilterDrawer = ({onFilter}: FilterDrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  const [pricingPlans, setPricingPlan] = useState()
  const [billingCycle, setBillingCycle] = useState()
  const [storeTypes, setStoreTypes] = useState()
  const [searchParams] = useSearchParams()

  const formik = useFormik({
    initialValues: {
      storeCreateDateFrom: searchParams.get('storeCreateDateFrom') || '',
      storeCreateDateTo: searchParams.get('storeCreateDateTo') || '',
      pricingPlanId: searchParams.get('pricingPlanId') || '',
      billingCycleId: searchParams.get('billingCycleId') || '',
      storeTypesId: searchParams.get('storeTypesId') || '',
      pricingPlanAutoRenewable: JSON.parse(searchParams.get('pricingPlanAutoRenewable')),
      isOwnerEmailVerified: JSON.parse(searchParams.get('isOwnerEmailVerified')),
      isOwnerPhoneVerified: JSON.parse(searchParams.get('isOwnerPhoneVerified')),
      nextRenewalDateFrom: searchParams.get('nextRenewalDateFrom') || '',
      nextRenewalDateTo: searchParams.get('nextRenewalDateTo') || '',
      lastActivityDateFrom: searchParams.get('lastActivityDateFrom') || '',
      lastActivityDateTo: searchParams.get('lastActivityDateTo') || '',
      noActivitySince: searchParams.get('noActivitySince') || '',
      referredBy: searchParams.get('referredBy') || '',
    },
    onSubmit: (values) => {
      const filterValue = {}
      Object.keys(values).map((field) => {
        values?.[field] !== '' && values?.[field] !== null && (filterValue[field] = values[field])
      })
      onFilter(filterValue)
      setIsDrawerOpen(false)
    },
    onReset: () => {
      formik.setFieldValue('pricingPlanAutoRenewable', null)
      formik.setFieldValue('isOwnerEmailVerified', null)
      formik.setFieldValue('isOwnerPhoneVerified', null)
      onFilter({})
      setIsDrawerOpen(false)
    },
  })

  return (
    <>
      <Button size='sm' color='secondary' onClick={() => setIsDrawerOpen(true)}>
        <i className='fa-solid fa-filter fs-2'></i>
      </Button>
      <Drawer title='Store filter' isOpen={isDrawerOpen} handleClose={() => setIsDrawerOpen(false)}>
        <form onSubmit={formik.handleSubmit}>
          <DrawerBody>
            <div>
              <Label>Create date</Label>
              <div className='row'>
                <div className='col'>
                  <Input
                    label='From'
                    type='date'
                    registerProperty={{...formik.getFieldProps('storeCreateDateFrom')}}
                  />
                </div>
                <div className='col'>
                  <Input
                    label='To'
                    type='date'
                    registerProperty={{...formik.getFieldProps('storeCreateDateTo')}}
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <Select
                  label='Store category'
                  options={storeTypes}
                  textKey='name'
                  valueKey='id'
                  palceholder='Choose category'
                  registerProperty={{...formik.getFieldProps('storeTypesId')}}
                />
              </div>
              <div className='col'>
                <Input
                  label='Referred/Campaign code'
                  registerProperty={{...formik.getFieldProps('referredBy')}}
                />
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <Select
                  label='Pricing plan'
                  options={pricingPlans}
                  textKey='title'
                  valueKey='id'
                  palceholder='Choose plan'
                  registerProperty={{...formik.getFieldProps('pricingPlanId')}}
                />
              </div>
              <div className='col'>
                <Select
                  label='Billing cycle'
                  options={billingCycle}
                  textKey='cycleName'
                  valueKey='id'
                  palceholder='Choose cycle'
                  registerProperty={{...formik.getFieldProps('billingCycleId')}}
                />
              </div>
            </div>

            <div>
              <Label>Auto renewal</Label>
              <div className='row'>
                <div className='col'>
                  <RadioButton
                    size='sm'
                    label='All'
                    checked={formik.values.pricingPlanAutoRenewable === null}
                    onChange={() => formik.setFieldValue('pricingPlanAutoRenewable', null)}
                  />
                </div>
                <div className='col'>
                  <RadioButton
                    size='sm'
                    label='Enabled'
                    checked={formik.values.pricingPlanAutoRenewable === true}
                    onChange={() => formik.setFieldValue('pricingPlanAutoRenewable', true)}
                  />
                </div>
                <div className='col'>
                  <RadioButton
                    size='sm'
                    label='Disabled'
                    checked={formik.values.pricingPlanAutoRenewable === false}
                    onChange={() => formik.setFieldValue('pricingPlanAutoRenewable', false)}
                  />
                </div>
              </div>
            </div>

            <div>
              <Label>Next renewal date</Label>
              <div className='row'>
                <div className='col'>
                  <Input
                    label='From'
                    type='date'
                    registerProperty={{...formik.getFieldProps('nextRenewalDateFrom')}}
                  />
                </div>
                <div className='col'>
                  <Input
                    label='To'
                    type='date'
                    registerProperty={{...formik.getFieldProps('nextRenewalDateTo')}}
                  />
                </div>
              </div>
            </div>

            <div>
              <Label>Phone verified owner</Label>
              <div className='row'>
                <div className='col'>
                  <RadioButton
                    size='sm'
                    label='All'
                    checked={formik.values.isOwnerPhoneVerified === null}
                    onChange={() => formik.setFieldValue('isOwnerPhoneVerified', null)}
                  />
                </div>
                <div className='col'>
                  <RadioButton
                    size='sm'
                    label='Verified'
                    checked={formik.values.isOwnerPhoneVerified === true}
                    onChange={() => formik.setFieldValue('isOwnerPhoneVerified', true)}
                  />
                </div>
                <div className='col'>
                  <RadioButton
                    size='sm'
                    label='Unverified'
                    checked={formik.values.isOwnerPhoneVerified === false}
                    onChange={() => formik.setFieldValue('isOwnerPhoneVerified', false)}
                  />
                </div>
              </div>
            </div>

            <div>
              <Label>Email verified owner</Label>
              <div className='row'>
                <div className='col'>
                  <RadioButton
                    size='sm'
                    label='All'
                    checked={formik.values.isOwnerEmailVerified === null}
                    onChange={() => formik.setFieldValue('isOwnerEmailVerified', null)}
                  />
                </div>
                <div className='col'>
                  <RadioButton
                    size='sm'
                    label='Verified'
                    checked={formik.values.isOwnerEmailVerified === true}
                    onChange={() => formik.setFieldValue('isOwnerEmailVerified', true)}
                  />
                </div>
                <div className='col'>
                  <RadioButton
                    size='sm'
                    label='Unverified'
                    checked={formik.values.isOwnerEmailVerified === false}
                    onChange={() => formik.setFieldValue('isOwnerEmailVerified', false)}
                  />
                </div>
              </div>
            </div>

            <div>
              <Label>Last activity</Label>
              <div className='row'>
                <div className='col-md-6'>
                  <Input
                    label='From'
                    type='date'
                    registerProperty={{...formik.getFieldProps('lastActivityDateFrom')}}
                  />
                </div>
                <div className='col-md-6'>
                  <Input
                    label='To'
                    type='date'
                    registerProperty={{...formik.getFieldProps('lastActivityDateTo')}}
                  />
                </div>
                <div className='col-md-6'>
                  <Input
                    label='No activity since'
                    type='date'
                    registerProperty={{...formik.getFieldProps('noActivitySince')}}
                  />
                </div>
              </div>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <div className='d-flex gap-3 justify-content-end'>
              <Button size='sm' color='light' type='reset' onClick={() => formik.resetForm()}>
                Clear filter
              </Button>
              <Button size='sm' color='primary' type='submit'>
                Apply filter
              </Button>
            </div>
          </DrawerFooter>
        </form>
      </Drawer>
    </>
  )
}

export default FilterDrawer
