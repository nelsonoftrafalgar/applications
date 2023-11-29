import { Application } from '../../store/applications/types'
import { ApplicationMenuStyled } from './styles'
import { DeleteApplicationModal } from '../../modals/DeleteApplicationModal'
import { EditApplicationModal } from '../../modals/EditApplicationModal'

export const ApplicationMenu = (props: Application) => {
	return (
		<ApplicationMenuStyled>
			<EditApplicationModal {...props} />
			<DeleteApplicationModal id={props.id} />
		</ApplicationMenuStyled>
	)
}
