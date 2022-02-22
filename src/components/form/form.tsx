import React, { useState } from "react"
import { FormWrapper } from "./form.style"

interface FormProps {
  currentUsername: string
  userList: string[]
  onSubmit: (name:string) => void
  pushNotify: (name:string) => void
} 


export const Form = (p: FormProps) => {
  const [inputValue, setInputValue] = useState(p.currentUsername)
  const handleButtonClick = (e:React.SyntheticEvent) => {
    e.preventDefault()
    if(p.userList.includes(inputValue)) {
      p.pushNotify(inputValue)
      setInputValue('')
      return
    }
    p.onSubmit(inputValue)
  }
  return <FormWrapper >
    <form onSubmit={handleButtonClick} data-testid="form">
      <fieldset>
        <input  type="text" data-testid="input" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="inserisci un nome utente" />
        <button type="submit" data-testid="submit" disabled={inputValue === ''}>salva</button>
      </fieldset>
    </form>
  </FormWrapper>
}