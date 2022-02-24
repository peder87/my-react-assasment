import { useParams } from 'react-router-dom'
import { ModalContainer } from '../../components/modalContainer/modalContainer'

export const NewUser = () => {
  const { userId } = useParams<"userId">()
  const fake = () => {}
  return (<>
    {userId && <ModalContainer backHome={true} userId={userId} parentId={undefined} closeDialog={fake} />}
  </>)
}
