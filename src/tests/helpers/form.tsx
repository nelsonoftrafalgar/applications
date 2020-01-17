import React, { useReducer } from 'react'

import { MainContext } from '../../client/context/context'
import { initialMainState } from '../../client/containers/Main'
import { masterReducer } from '../../client/state/reducers'
import produce from 'immer'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

export const formSetup = (form: JSX.Element) => {
  const {result} = renderHook(() => useReducer(produce(masterReducer), initialMainState))
  const mockContextValue = {
    state: result.current[0],
    dispatch: result.current[1]
  }
  const {getByTestId} = render(
    <MainContext.Provider
      value={mockContextValue}
    >
      {form}
    </MainContext.Provider>
  )

  return {result, getByTestId}
}
