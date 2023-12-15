import { expect, test } from './customTest'

test.describe('Bad companies can be', () => {
	test.beforeEach(async ({ loginPage, interceptor }) => {
		await interceptor.interceptGetBadCompanies()
		await loginPage.login()
	})

	test('searched', async ({ page }) => {
		await expect(page.getByText('test bad company 2')).toBeInViewport()

		await page
			.locator('div')
			.filter({ hasText: /^New Company$/ })
			.getByPlaceholder('Search')
			.fill('test bad company 1')

		await expect(page.getByText('test bad company 2')).not.toBeInViewport()
	})

	test('created', async ({ page, interceptor }) => {
		await page.getByRole('button', { name: 'New Company' }).click()
		await page.getByPlaceholder('Bad company').fill('new bad company')

		await interceptor.interceptAll()

		await page.getByRole('button', { name: 'Add' }).click()
		await expect(
			page.getByText('Successfully created bad company')
		).toBeInViewport()
	})

	test('edited', async ({ page, interceptor }) => {
		await page
			.getByRole('row', { name: 'test bad company 0' })
			.getByRole('img')
			.first()
			.click()
		await page.getByPlaceholder('Bad company').fill('edited bad company')

		await interceptor.interceptAll()

		await page.getByRole('button', { name: 'Save' }).click()
		await expect(
			page.getByText('Successfully edited bad company')
		).toBeInViewport()
	})

	test('deleted', async ({ page, interceptor }) => {
		await page
			.getByRole('row', { name: 'test bad company 0' })
			.getByRole('img')
			.nth(1)
			.click()

		await interceptor.interceptAll()

		await page.getByRole('button', { name: 'Delete' }).click()
		await expect(
			page.getByText('Successfully deleted bad company')
		).toBeInViewport()
	})
})
