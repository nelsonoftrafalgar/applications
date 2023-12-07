import { toast } from 'react-toastify'

const successMessageMap: Record<string, string> = {
	editApplication: 'Successfully edited application',
	createApplication: 'Successfully created application',
	deleteApplication: 'Successfully deleted application',
	editBadCompany: 'Successfully edited bad company',
	createBadCompany: 'Successfully created bad company',
	deleteBadCompany: 'Successfully deleted bad company'
}

const errorMessageMap: Record<string, string> = {
	editApplication: 'Error editing application',
	createApplication: 'Error creating application',
	deleteApplication: 'Error deleting application',
	editBadCompany: 'Error editing bad company',
	createBadCompany: 'Error creating bad company',
	deleteBadCompany: 'Error deleting bad company'
}

export const renderSuccessMessage = (endpointName: string) => {
	toast(successMessageMap[endpointName], {
		position: 'bottom-right',
		className: 'success-message'
	})
}

export const renderErrorMessage = (endpointName: string) => {
	toast(errorMessageMap[endpointName], {
		position: 'bottom-right',
		className: 'error-message'
	})
}
