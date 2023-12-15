import type { Locator, Page } from '@playwright/test'

export class LoginPage {
	private readonly emailInput: Locator
	private readonly passwordInput: Locator
	private readonly loginButton: Locator

	constructor(public readonly page: Page) {
		this.emailInput = this.page.getByPlaceholder('email')
		this.passwordInput = this.page.getByPlaceholder('password')
		this.loginButton = this.page.getByRole('button', { name: 'Login' })
	}

	async login() {
		await this.page.goto('/')

		await this.emailInput.fill(process.env.PLAYWRIGHT_EMAIL!)
		await this.passwordInput.fill(process.env.PLAYWRIGHT_PASSWORD!)
		await this.loginButton.click()
		await this.page.waitForTimeout(1000)
	}
}
