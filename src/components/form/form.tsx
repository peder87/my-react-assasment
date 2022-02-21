import { useState } from "react"
import styled from "styled-components"
import { Button } from "../button/button"
import { TextInput } from "../input/textInput"


type FormProps = {
  currentUsername?: string
  userList: string[]
  onSubmit: (s:string) => void
  pushNotify: () => void
} & typeof dProps 

const dProps = {
  currentUsername: ''
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
  return <FormWrapper data-testid="form">
      <TextInput onInputChange={text => setInputValue(text)} value={inputValue} />
      <Button text="salva" click={handleButtonClick} disabled={inputValue === ''} />
  </FormWrapper>
}

Form.defaultProps = dProps

const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  & input:first-child {
    flex-grow: 1;
  }
`