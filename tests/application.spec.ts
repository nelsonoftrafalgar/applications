import { expect, test } from './customTest'

test.describe('Applications can be', () => {
	test.beforeEach(async ({ loginPage, interceptor }) => {
		await interceptor.interceptGetApplications()
		await loginPage.login()
	})

	test('searched', async ({ page }) => {
		await expect(page.getByText('test company 2')).toBeInViewport()

		await page
			.locator('div')
			.filter({ hasText: /^Applications3New Application$/ })
			.getByPlaceholder('Search')
			.fill('test company 1')

		await expect(page.getByText('test company 2')).not.toBeInViewport()
	})

	test('created', async ({ page, interceptor }) => {
		await page.getByRole('button', { name: 'New Application' }).click()

		await page.getByPlaceholder('Company').fill('new company')
		await page.locator('button').filter({ hasText: 'Min salary' }).click()
		await page.getByLabel('12 k', { exact: true }).click()
		await page.locator('button').filter({ hasText: 'Max salary' }).click()
		await page.getByLabel('20 k', { exact: true }).click()
		await page.locator('button').filter({ hasText: 'Status' }).click()
		await page.getByLabel('hire', { exact: true }).click()
		await page.getByPlaceholder('Date of application').click()
		await page.getByPlaceholder('Date of application').fill('11-11-2020')

		await interceptor.interceptAll()

		await page.getByRole('button', { name: 'Add' }).click()
		await expect(
			page.getByText('Successfully created application')
		).toBeInViewport()
	})

	test('edited', async ({ page, interceptor }) => {
		await page.locator('td:nth-child(6)').first().click()
		await page.getByText('Edit').click()
		await page.getByPlaceholder('Company').fill('edited company')

		await interceptor.interceptAll()

		await page.getByRole('button', { name: 'Save' }).click()
		await expect(
			page.getByText('Successfully edited application')
		).toBeInViewport()
	})

	test('deleted', async ({ page, interceptor }) => {
		await page.locator('td:nth-child(6)').first().click()
		await page.getByText('Delete').click()

		await interceptor.interceptAll()

		await page.getByRole('button', { name: 'Delete' }).click()
		await expect(
			page.getByText('Successfully deleted application')
		).toBeInViewport()
	})
})
