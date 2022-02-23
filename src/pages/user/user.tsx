import { useNavigate, useParams } from 'react-router-dom'
import { AddContainer } from '../../components/addUser/container'

export const NewUser = () => {
  const { userId } = useParams<"userId">()
  
  return (<>
    <AddContainer 
      showBackHome={true}
      userId={userId}
      parentId={undefined}
    />
  </>)
}
