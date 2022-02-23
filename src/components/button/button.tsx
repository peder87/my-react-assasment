import styled from 'styled-components'

type ButtonProps = {
  text: string
  click: () => void
  disabled?:boolean
  children?: React.ReactNode
}
export function Button(props: ButtonProps) {
  return (<BtnWrapper onClick={props.click} role="button">
    <span>{ props.text }</span>
    {props.children && <div data-testid="icon">{props.children}</div>}
  </BtnWrapper>)
}

export const BtnWrapper  = styled.div`
  display: flex;
  padding: .25rem;
  background-color: #fff;
  margin-bottom: .5rem;
  align-items: center;
  border-radius: 2rem;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.2);
  margin-left: .5rem;
  cursor: pointer;
  transition: background-color .15s ease-out;
  & span {
    padding-left: .5rem;
    padding-right: .5rem;
  };
  &:first-child {
    margin-left: 0;
  }
`