import { fireEvent, render,screen } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../style/theme";
import { Button } from "./button";

describe('testing button', () => {
  
  const fn = jest.fn()
  const setup = () => {
    render(<ThemeProvider theme={theme}><Button text="click me please" click={fn}/></ThemeProvider>)
    return  screen.getByRole('button')
  }

  it('should render the button in the dom', () => {
    const button = setup()
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("click me please")
    expect(button).not.toBeDisabled()
  });
  
  it('should render trigger click props on click', () => {
    const button = setup()
    fireEvent.click(button)
    expect(fn).toHaveBeenCalled()
  });
  
  it('should render a disabled component when disabled is passed', () => {
    render(<ThemeProvider theme={theme}><Button text="click me please" click={fn} disabled={true}/></ThemeProvider>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

});