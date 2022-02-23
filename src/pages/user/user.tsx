import { useParams } from 'react-router-dom'
import { ModalContainer } from '../../components/modalContainer/modalContainer'

export const NewUser = () => {
  const { userId } = useParams<"userId">()
  
  return (<>
    {userId && <ModalContainer backHome={true} userId={userId} parentId={undefined} />}
  </>)
}
