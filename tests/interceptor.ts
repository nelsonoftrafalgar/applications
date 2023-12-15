import { generateMockApplications, generateMockBadCompanies } from './mocks'

import { Page } from '@playwright/test'

export class Interceptor {
	private readonly page: Page

	constructor(page: Page) {
		this.page = page
	}

	async interceptAll() {
		await this.page.route('**/rest/v1/*', (route) => {
			route.fulfill({
				body: JSON.stringify([])
			})
		})
	}

	async interceptGetApplications() {
		await this.page.route(
			'**/rest/v1/applications?select=*&order=applied.desc',
			(route) => {
				route.fulfill({
					body: JSON.stringify(generateMockApplications(3))
				})
			}
		)
	}

	async interceptGetBadCompanies() {
		await this.page.route(
			'**/rest/v1/bad_companies?select=*&order=bad_company.asc',
			(route) => {
				route.fulfill({
					body: JSON.stringify(generateMockBadCompanies(3))
				})
			}
		)
	}
}
