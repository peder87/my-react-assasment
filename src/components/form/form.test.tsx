import { ReactElement } from "react";
import { cleanup, fireEvent, render,screen } from "@testing-library/react";
import { withTheme } from "../../utils/withTheme";
import { Form } from "./form";
import userEvent from "@testing-library/user-event";

describe('testing form', () => {
  afterEach(() => {
    cleanup()
  })

  const MyForm = withTheme(Form)
  const props = {
    currentUsername: '',
    onSubmit: jest.fn(),
    pushNotify: jest.fn(),
    updateName: jest.fn(),
    userList: []
  }

  const setup = (ui:ReactElement) => {
    render(ui)
    return  {
      btn: screen.getByTestId('submit'),
      input: screen.getByTestId('input'),
      form: screen.getByTestId('form')
    }
  }

  it('should render form in the dom', () => {
    const {form, btn, input} = setup(<MyForm {...props} />)
    expect(form).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
  
  it('should input has the typed value', () => {
    const { input } = setup(<MyForm {...props} />)
    expect(input).toHaveValue('') 
    userEvent.type(input,'righi nicolò');
    expect(input).toHaveValue('righi nicolò') 
  })
  
  it('submit should disabled if input value is empty', () => {
    const { btn, input } = setup(<MyForm {...props} />)
    expect(btn).toBeDisabled()
    userEvent.type(input,'birillo')
    expect(btn).not.toBeDisabled()
  })

  it('submit should not disabled if has value', () => {
    const { btn } = setup(<MyForm {...props} currentUsername="necchi" />)
    expect(btn).not.toBeDisabled()
  })

  it('should input render the initalized value', () => {
    const { input } = setup(<MyForm {...props} currentUsername="i marsigliesi" />)
    expect(input).toHaveValue('i marsigliesi') 
  })
  
  it('should submit the form if input value is unique', () => {
    const { input, form } = setup(<MyForm {...props} currentUsername="" />)
    userEvent.type(input,'birillo')
    fireEvent.submit(form)
    expect(props.onSubmit).toHaveBeenCalledWith('birillo')
  })
  
  it('should trigger notify event if inputvalue is not unique and reset input field', () => {
    const { input, form } = setup(<MyForm {...props} currentUsername="" userList={['birillo']} />)
    userEvent.type(input,'birillo')
    fireEvent.submit(form)
    expect(props.pushNotify).toHaveBeenCalledWith('birillo')
    expect(input).toHaveValue('')
  })

});