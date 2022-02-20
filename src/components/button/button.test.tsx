import { fireEvent, render,screen } from "@testing-library/react";
import { ReactElement } from "react";
import { Button } from "./button";

describe('testing button', () => {
  
  const fn = jest.fn()
  const setup = (ui:ReactElement) => {
    render(ui)
    return  screen.getByRole('button')
  }

  it('should render the button in the dom', () => {
    const button = setup(<Button text="click me please" click={fn}/>)
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("click me please")
    expect(button).not.toBeDisabled()
  });
  
  it('should render trigger click props on click', () => {
    const button = setup(<Button text="click me please" click={fn}/>)
    fireEvent.click(button)
    expect(fn).toHaveBeenCalled()
  });
  
  it('should render a disabled component when disabled is passed', () => {
    const button = setup(<Button text="click me please" click={fn} disabled/>)
    expect(button).toBeDisabled()
  })

});