import { useParams } from "react-router-dom"

export function UserDetail() {
  const {userId} = useParams<"userId">()
  // controlla se esiste questo id nella lista 
  return (
    <div>User Detail: {userId}</div>
  )
}