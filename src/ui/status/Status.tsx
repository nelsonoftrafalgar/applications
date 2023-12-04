import {
	CheckCircledIcon,
	CircleBackslashIcon,
	ClockIcon,
	CrossCircledIcon,
	ExclamationTriangleIcon,
	StarIcon
} from '@radix-ui/react-icons'

import { Props } from './types'
import { StatusStyled } from './styles'

const Status = ({ status }: Props) => {
	return (
		<StatusStyled $status={status}>
			{status === 'not interested' && <CircleBackslashIcon />}
			{status === 'failed interview' && <CrossCircledIcon />}
			{status === 'no answer' && <ClockIcon />}
			{status === 'successful interview' && <CheckCircledIcon />}
			{status === 'bad agreement' && <ExclamationTriangleIcon />}
			{status === 'hire' && <StarIcon />}
			{status}
		</StatusStyled>
	)
}

export default Status
