export interface INavItemProps {
  name: string
  icon?: string
  sub_group?: INavItemSubGroup[]
  path: string
}

export interface INavItemSubGroup {
  name: string
  path: string
}

export interface INavSubItemProps extends INavItemSubGroup {
  parent: string
}

export interface INavState {
  [key: string]: boolean
}

export interface INavContext {
  activeNavState: INavState
  handleSetActiveItem: (name: string, firstChild: string | null, parent: string | null) => () => void
}

export interface IActiveNavItem {
  isActive: boolean
}
