import { createContext, useContext } from 'react'

import { IPopoverContext } from './types'

export const PopoverContext = createContext({} as IPopoverContext)

export const usePopoverContext = () => useContext(PopoverContext)
