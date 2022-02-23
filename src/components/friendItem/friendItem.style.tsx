import styled from "styled-components";
import { AddCircle }from '@styled-icons/fluentui-system-filled/AddCircle'
import { SubtractCircle }from '@styled-icons/fluentui-system-filled/SubtractCircle'
import { lighten } from "polished";

interface WrapperProps {
  readonly add: boolean
}

export const FriendWrapper  = styled.div<WrapperProps>`
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
  &:hover {
    background-color: ${p => p.add ? lighten(.3,'#95cd41') : lighten(.3,'#EA5C2B') };
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.2);
  }
`

export const AddBtn = styled(AddCircle)`
  color: #95CD41;
  width: 1.5rem;
` 
export const RemoveBtn = styled(SubtractCircle)`
  color: #EA5C2B;
  width: 1.5rem;
` 