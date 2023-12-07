import { ButtonLoaderAnimation } from './styles'
import { Props } from './types'

export const ButtonLoader = ({ isLoading, children }: Props) => {
	if (isLoading) return <ButtonLoaderAnimation />

	return <>{children}</>
}
