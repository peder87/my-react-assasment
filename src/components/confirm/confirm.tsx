import { TempUser } from "../../actions/temp"
import { useAppSelector } from "../../reducers"
import { WrapperCenter } from "../../style/common"
import Button from "../button"

interface ConfirmProps {
  currentId: string
  dismissAlert: () => void
  abort: () => void
  save: (user: TempUser) => void
}

export const Confirm = (p:ConfirmProps) => {
  const data = useAppSelector(({temp}) => temp[p.currentId])
  const hasName = data.name !== ''
  return (
    <div>
      <WrapperCenter>
        {!hasName && <div>
          <p>per salvare devi almeno inserire il nome</p>
        </div>}
        <div>
        <Button text="cancella" click={p.dismissAlert} />
        {hasName && <Button text="salva" click={p.dismissAlert} />}
        <Button text="continua a modificare" click={p.dismissAlert} />
        </div>
      </WrapperCenter>
    </div>
  )
}