import styled from 'styled-components'
import { HomePerson } from '@styled-icons/fluentui-system-filled/HomePerson'
import { ArrowClockwise } from '@styled-icons/fluentui-system-filled/ArrowClockwise'

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const BackIcon = styled(HomePerson)`
  width: 1.6rem;
  padding-right: .2rem;
  color: ${p => p.theme.palette.primary.main};
`

export const RetryIcon = styled(ArrowClockwise)`
  width: 1.6rem;
  padding-right: .2rem;
  color: ${p => p.theme.palette.primary.main};
`

export const UserWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`