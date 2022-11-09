import {FC} from 'react'

export type IColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | 'link'

export type ISizes = 'lg' | 'md' | 'sm'

export interface IMeta {
  offset?: number
  prevOffset?: number
  nextOffset?: number
  limit?: number
  totalRecords?: number
  resultCount?: number
  totalPageCount?: number
}

export interface IAppRoutes {
  link: string
  element?: FC
  icon?: string
  params?: {[key: string]: string | number}
  childrens?: IAppRoutes[]
  redirect?: string
  isPrivate?: boolean
}
