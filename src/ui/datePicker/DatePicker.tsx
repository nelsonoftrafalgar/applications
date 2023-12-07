import 'react-datepicker/dist/react-datepicker.css'

import { DatePickerWrapper, ErrorMessage, StyledLabel } from './styles'

import DatePicker from 'react-datepicker'
import { DatePickerProps } from './types'
import { FC } from 'react'
import { formatDate } from './utils'

const DatePickerComponent: FC<DatePickerProps> = ({
	errorMessage,
	onChange,
	value
}) => {
	const selected = value ? new Date(value) : null

	const handleDateChange = (date: Date) => {
		onChange(formatDate(date))
	}

	return (
		<div>
			<StyledLabel>Applied</StyledLabel>
			<DatePickerWrapper $error={!!errorMessage}>
				<DatePicker
					selected={selected}
					onChange={handleDateChange}
					dateFormat={'dd-MM-yyyy'}
					placeholderText='Date of application'
					maxDate={new Date()}
				/>
			</DatePickerWrapper>
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</div>
	)
}

export { DatePickerComponent as DatePicker }
