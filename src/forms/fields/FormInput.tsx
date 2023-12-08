import { FieldValues, useController } from 'react-hook-form'

import { FormInputProps } from './types'
import { Input } from 'ui/input/Input'

export function FormInput<T extends FieldValues>({
	name,
	placeholder,
	label,
	control,
	type
}: FormInputProps<T>) {
	const {
		field: { onChange, value },
		fieldState: { error }
	} = useController({
		name,
		control
	})
	return (
		<Input
			placeholder={placeholder}
			label={label}
			value={value}
			onChange={onChange}
			errorMessage={error?.message}
			type={type}
		/>
	)
}
