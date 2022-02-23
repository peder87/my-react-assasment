
import styled from 'styled-components'
import {PersonAdd} from '@styled-icons/fluentui-system-filled/PersonAdd'
import {Person} from '@styled-icons/fluentui-system-filled/Person'

export const WrapperCenter = styled.div`
  width: 100%;
  & > div {
    display: flex;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    & > div {
      margin-bottom: 0;
    }
  }
`

export const ListWrapper = styled.div`
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: ${p => p.theme.palette.primary.main};
  padding: 1rem;
  border-radius: .8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
`

export const AddPerson = styled(PersonAdd)`
  width: 2rem;
  color: ${p => p.theme.palette.primary.main};
  padding-right: .2rem;
`
export const UserIcon = styled(Person)`
  width: 1.5rem;
  color: ${p => p.theme.palette.primary?.dark};
  padding-right: .2rem;
`