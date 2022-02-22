import { useParams } from "react-router-dom"

export function UserDetail() {
  const {userId} = useParams<"userId">()
  return (
    <div>User Detail: {userId}</div>
  )
}