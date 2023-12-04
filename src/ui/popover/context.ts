import { createContext, useContext } from 'react'

import { PopoverContext } from './types'

export const PopoverContex = createContext({} as PopoverContext)

export const usePopoverContext = () => useContext(PopoverContex)
