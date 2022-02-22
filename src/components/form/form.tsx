import { useState } from "react"
import { FormWrapper } from "./form.style"

interface FormProps {
  currentUsername: string
  userList: string[]
  onSubmit: (s:string) => void
  pushNotify: () => void
} 


// export function Form(p: FormProps) {
export const Form = (p: FormProps) => {
  const [inputValue, setInputValue] = useState(p.currentUsername)
  const handleButtonClick = () => {
    if(p.userList.includes(inputValue)) {
      p.pushNotify()
      setInputValue('')
      return
    }
    p.onSubmit(inputValue)
  }
  return <FormWrapper >
    <form onSubmit={handleButtonClick} data-testid="form">
      <fieldset>
        <input  type="text" data-testid="input" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="inserisci un nome utente" />
        <button type="button" data-testid="submit" disabled={inputValue === ''}>summit</button>
      </fieldset>
    </form>
  </FormWrapper>
}