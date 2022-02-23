import { fireEvent, render,screen } from "@testing-library/react";
import { ReactElement } from "react";
import { Button } from "./button";
import { AddCircle }from '@styled-icons/fluentui-system-filled/AddCircle'
import styled from "styled-components";

describe('testing button', () => {
  const FakeIcon = styled(AddCircle)``
  const fn = jest.fn()
  const setup = (ui:ReactElement) => {
    const {debug} = render(ui)
    return {btn: screen.getByRole('button'), icon: screen.queryByTestId('icon'), debug}
  }
  
  it('should render the button in the dom', () => {
    const {btn, icon} = setup(<Button text="click me please" click={fn} />)
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent("click me please")
    expect(icon).toBeNull()
    expect(btn).not.toBeDisabled()
  });
  
  it('should render the icon in the dom', () => {
    const { icon} = setup(<Button text="click me please" click={fn}><FakeIcon /></Button>)
    expect(icon).toBeInTheDocument()
  });
  
  
  it('should trigger click props', () => {
    const { btn} = setup(<Button text="click me please" click={fn}><FakeIcon /></Button>)
    fireEvent.click(btn)
    expect(fn).toHaveBeenCalled()
  });

});