import { LoaderAnimation, Wrapper } from './styles'

import { Props } from './types'

export const ApiLoader = ({ isLoading, children }: Props) => {
	if (isLoading)
		return (
			<Wrapper>
				<LoaderAnimation />
			</Wrapper>
		)

	return <>{children}</>
}
