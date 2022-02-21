import { fireEvent, render,screen } from "@testing-library/react";
import { ReactElement } from "react";
import { withTheme } from "../../utils/themeProviderHoc";
import { Button } from "./button";

describe('testing button', () => {
  const Btn = withTheme(Button)
  const fn = jest.fn()
  const setup = (ui:ReactElement) => {
    render(ui)
    return  screen.getByRole('button')
  }

  it('should render the button in the dom', () => {
    const button = setup(<Btn text="click me please" click={fn} />)
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("click me please")
    expect(button).not.toBeDisabled()
  });
  
  it('should render trigger click props on click', () => {
    const button = setup(<Btn text="click me please" click={fn} disabled={false} />)
    fireEvent.click(button)
    expect(fn).toHaveBeenCalled()
  });
  
  it('should render a disabled component when disabled is passed', () => {
    render(<Btn text="click me please" click={fn} disabled={true} />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

});