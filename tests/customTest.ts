import { Interceptor } from './interceptor'
import { LoginPage } from './loginPage'
import { test as base } from '@playwright/test'

type MyFixtures = {
	loginPage: LoginPage
	interceptor: Interceptor
}

export const test = base.extend<MyFixtures>({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page)
		await use(loginPage)
	},
	interceptor: async ({ page }, use) => {
		const interceptor = new Interceptor(page)
		await use(interceptor)
	}
})
export { expect } from '@playwright/test'
