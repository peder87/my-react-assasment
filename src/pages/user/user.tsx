import { useParams } from 'react-router-dom'
import { ModalContainer } from '../../components/modalContainer/modalContainer'

export const NewUser = () => {
  const { userId } = useParams<"userId">()
  
  return (<>
    <ModalContainer backHome={true} userId={userId} parentId={undefined} />
  </>)
}
