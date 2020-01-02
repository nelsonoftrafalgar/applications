import { IMainContext } from '../models/main'
import { INavContext } from '../models/nav'
import React from 'react'

export const NavContext = React.createContext({} as INavContext)
export const MainContext = React.createContext({} as IMainContext)
