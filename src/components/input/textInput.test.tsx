import {TextInput} from './textInput'
import { cleanup, render, screen } from '@testing-library/react'
import { ReactElement } from 'react'

describe('testing TextInput', () => {
  
  afterEach(() => {
    cleanup()
  })
  const fn = jest.fn()
  
  const setup = (ui:ReactElement) => {
    render(ui)
    return screen.getByTestId('input')
  }

  it('should render in the Document', () => {   
    const input = setup(<TextInput onInputChange={fn} value={""} />)
    expect(input).toBeInTheDocument()
  });

  
  it('should be initialize by value param', () => {
    const input = setup(<TextInput onInputChange={fn} value={"good save the queen"} />)
    expect(input).toHaveValue('good save the queen')
  })

})