import styled from 'styled-components'

type ButtonProps = {
  text: string
  click: () => void
  disabled?: boolean
} & typeof defaultProps

const defaultProps = {
  disabled: false
}

export function Button(props: ButtonProps) {
  return (<StyledButton disabled={props.disabled} isActive={!props.disabled} onClick={props.click}>{props.text}</StyledButton>)
}

Button.defaultProps = defaultProps

interface StyledButtonProps {
  readonly isActive: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  border: solid .2rem;
  box-sizing: border-box;
  border-color: ${props => props.isActive ? props.theme.palette.primary.main: props.theme.palette.primary.disabled};
  padding: .5rem;
  border-radius: .2rem;
  color: ${props => props.isActive ? props.theme.palette.secondary?.light : props.theme.palette.common.disabled};
  font-size: 1rem;
  letter-spacing: .15rem;
  background: ${props => props.isActive ? props.theme.palette.primary.main : props.theme.palette.primary.disabled};
  transition: border-color .1s ease-out;
  &:hover {
    cursor: ${props => props.isActive ? 'pointer' : 'default'};
    border-color: ${props => props.theme.palette.primary.dark};
  }
`