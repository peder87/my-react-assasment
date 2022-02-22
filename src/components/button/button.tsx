import styled from 'styled-components'

type ButtonProps = {
  text: string
  click: () => void
  disabled?:boolean
}

const defaultProps = {
  disabled: false
}

export function Button(props: ButtonProps) {
  return (<StyledButton
    disabled={props.disabled}
    onClick={props.click}>{props.text}</StyledButton>)
}

Button.defaultProps = defaultProps

interface StyledButtonProps {
}

const StyledButton = styled.button<StyledButtonProps>`
  border: solid .2rem;
  box-sizing: border-box;
  border-color: ${props => props.theme.palette.primary.main};
  padding: .5rem;
  border-radius: .2rem;
  color: ${props => props.theme.palette.common.white};
  font-size: 1rem;
  letter-spacing: .15rem;
  background: ${props => props.theme.palette.primary.main};
  transition: border-color .1s ease-out;
  transition: background-color .3s ease-out;
  &:hover {
    cursor: 'pointer';
  }
`