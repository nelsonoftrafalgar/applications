import { LoginContainer, MasterWrapper } from './styles'

import { Button } from 'ui/button/Button'
import { Form } from 'ui/form/styles'
import { FormInput } from 'forms/fields/FormInput'
import { LoginFormData } from './types'
import { loginSchema } from 'forms/validation'
import { setCredentials } from 'store/auth/authSlice'
import { useAppDispatch } from 'store/store'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from 'store/auth/authApiSlice'
import { yupResolver } from '@hookform/resolvers/yup'

export const Login = () => {
	const dispatch = useAppDispatch()
	const [login] = useLoginMutation()
	const { control, handleSubmit } = useForm<LoginFormData>({
		resolver: yupResolver(loginSchema)
	})

	const onSubmit = async (credentials: LoginFormData) => {
		const data = await login(credentials).unwrap()
		dispatch(
			setCredentials({
				accessToken: data.access_token,
				user: data.user,
				refreshToken: data.refresh_token
			})
		)
	}

	return (
		<MasterWrapper>
			<LoginContainer>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormInput
						placeholder='email'
						label='Email'
						name='email'
						type='email'
						control={control}
					/>
					<FormInput
						placeholder='password'
						label='Password'
						name='password'
						type='password'
						control={control}
					/>
					<Button buttonStyle='green'>Login</Button>
				</Form>
			</LoginContainer>
		</MasterWrapper>
	)
}
