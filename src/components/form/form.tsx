import React, { useState } from "react"
import { useDebouncedCallback } from 'use-debounce';
import { FormWrapper } from "./form.style"

interface FormProps {
  currentUsername: string
  userList: string[]
  onSubmit: () => void
  updateName: (name:string) => void
  pushNotify: (name:string) => void
} 


export const Form = (p: FormProps) => {
  const [inputValue, setInputValue] = useState(p.currentUsername)
  const updateValue = (name: string) => {
    setInputValue(name)
    debounced(name)
  }
  const debounced = useDebouncedCallback((name:string) => {
    p.updateName(name)
  }, 400)

  const handleButtonClick = (e:React.SyntheticEvent) => {
    e.preventDefault()
    // if(p.userList.includes(inputValue)) {
    //   p.pushNotify(inputValue)
    //   setInputValue('')
    //   return
    // }
    p.onSubmit()
  }

  return <FormWrapper >
    <form onSubmit={handleButtonClick} data-testid="form">
      <fieldset>
        <input  type="text" data-testid="input" onChange={e => updateValue(e.target.value)} value={inputValue} placeholder="inserisci un nome utente" />
        <button type="submit" data-testid="submit" disabled={inputValue === ''}>salva</button>
      </fieldset>
    </form>
  </FormWrapper>
}