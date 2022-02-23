import { useAppSelector } from "../../reducers"

interface ConfirmProps {
  currentId: string
  dismissAlert: () => void
}

export const Confirm = (p:ConfirmProps) => {
  const data = useAppSelector(({temp}) => temp[p.currentId])
  const hasName = data.name !== ''
  return (
    <div>
      <p></p>
      <button onClick={p.dismissAlert}>dismiss</button>
      {hasName && <button onClick={p.dismissAlert}>Salva</button>}
    </div>
  )
}