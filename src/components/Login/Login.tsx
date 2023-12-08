import { LoginContainer, MasterWrapper } from './styles'

import { Button } from 'ui/button/Button'
import { Form } from 'ui/form/styles'
import { FormInput } from 'forms/fields/FormInput'
import { LoginFormData } from './types'
import { createClient } from '@supabase/supabase-js'
import { loginSchema } from 'forms/validation'
import { setCredentials } from 'store/auth/auth'
import { setRefreshToken } from 'auth/cookie'
import { useAppDispatch } from 'store/store'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const supabase = createClient(
	import.meta.env.VITE_API_BASE_URL,
	import.meta.env.VITE_API_KEY
)

export const Login = () => {
	const dispatch = useAppDispatch()
	const { control, handleSubmit } = useForm<LoginFormData>({
		resolver: yupResolver(loginSchema)
	})

	const onSubmit = async (credentials: LoginFormData) => {
		const { data } = await supabase.auth.signInWithPassword(credentials)
		const { session, user } = data ?? {}
		setRefreshToken(session?.refresh_token ?? '')
		dispatch(setCredentials({ token: session?.access_token, user }))
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
